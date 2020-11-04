import {
  Directive,
  Input,
  Output,
  HostListener,
  Inject,
  OnInit,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  SimpleChange,
  EventEmitter,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { Platform } from '@angular/cdk/platform';
import { Clipboard } from '@angular/cdk/clipboard';
import { EMPTY, Observable, Subject, Subscriber } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { ShareService } from './share.service';
import { IShareButton, ShareDirectiveUpdater, ShareParams, ShareParamsFunc, SharerMethod } from './share.models';
import { getValidUrl } from './utils';

@Directive({
  selector: '[shareButton]',
  exportAs: 'shareButton'
})
export class ShareDirective implements OnInit, OnChanges, OnDestroy {

  /** Share directive element ref */
  private readonly _el: HTMLButtonElement;

  /** A ref to button class - used to remove previous class when the button type is changed */
  private _buttonClass: string;

  /** Stream that emits when button is destroyed */
  private readonly _destroyed = new Subject<void>();

  /** Stream that emit when share button need to be updated */
  private readonly _updater = new Subject<ShareDirectiveUpdater>();

  /** Share button properties */
  shareButton: IShareButton;

  /** Share button color */
  color: string;

  /** Share button text */
  text: string;

  /** Share button icon */
  icon: string | string[];

  /** Share button type */
  @Input('shareButton') shareButtonName: string;

  /** Set meta tags from document head, useful when SEO is supported */
  @Input() autoSetMeta: boolean = this._share.config.autoSetMeta;

  /** Sharing link */
  @Input() url: string = this._share.config.url;

  /** Sets the title parameter */
  @Input() title: string = this._share.config.title;

  /** Sets the description parameter */
  @Input() description: string = this._share.config.description;

  /** Sets the image parameter for sharing on Pinterest */
  @Input() image: string = this._share.config.image;

  /** Sets the tags parameter for sharing on Twitter and Tumblr */
  @Input() tags: string = this._share.config.tags;

  /** Stream that emits when share dialog is opened */
  @Output() opened = new EventEmitter<string>();

  /** Stream that emits when share dialog is closed */
  @Output() closed = new EventEmitter<string>();

  constructor(_el: ElementRef,
              private _meta: Meta,
              private _platform: Platform,
              private _clipboard: Clipboard,
              private _share: ShareService,
              private _cd: ChangeDetectorRef,
              @Inject(DOCUMENT) private _document: any) {
    this._el = _el.nativeElement;
  }

  /**
   * Share the link
   */
  @HostListener('click')
  share() {
    // Avoid SSR error
    if (this._platform.isBrowser && this.shareButton) {
      // Prepare sharer url params
      const params: ShareParams = this.autoSetMeta ? this.getParamsFromMetaTags() : this.getParamsFromInputs();

      // Prepare share button click
      const click = this.shareButton.share ? this.open(params) : this.shareButton.func({
        params,
        data: this.shareButton.data,
        clipboard: this._clipboard,
        updater: this._updater
      });

      click.pipe(takeUntil(this._destroyed)).subscribe();
    } else {
      console.warn(`${ this.text } button is not compatible on this Platform`);
    }
  }

  ngOnInit() {
    // This stream is mainly used to update the copy button text and icon when it is being clicked
    this._updater.pipe(
      tap((data: any) => {
        this.icon = data.icon;
        this.text = data.text;
        this._el.style.pointerEvents = data.disabled ? 'none' : 'auto';
        this._cd.markForCheck();
      }),
      takeUntil(this._destroyed)
    ).subscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    // Avoid SSR error
    if (this._platform.isBrowser) {

      // Create share button
      if (this._shareButtonChanged(changes.shareButtonName)) {
        this._createShareButton();
      }
      // Prepare share url
      if (this._urlChanged(changes.url)) {
        this.url = getValidUrl(
          this.autoSetMeta
            ? this.url || this._getMetaTagContent('og:url')
            : this.url,
          this._document.defaultView.location.href
        );
      }
    }
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  private _createShareButton() {
    const button: IShareButton = this._share.config.prop[this.shareButtonName];
    if (button) {
      // Set share button properties
      this.shareButton = button;

      // Remove previous button class
      this._el.classList.remove(`sb-${ this._buttonClass }`);

      // Add new button class
      this._el.classList.add(`sb-${ this.shareButtonName }`);

      // Set button css color variable
      this._el.style.setProperty('--button-color', this.shareButton.color);

      // Keep a copy of the class for future replacement
      this._buttonClass = this.shareButtonName;

      this.color = this.shareButton.color;
      this.text = this.shareButton.text;
      this.icon = this.shareButton.icon;

      // Set aria-label attribute
      this._el.setAttribute('aria-label', button.ariaLabel);
    } else {
      console.error(`[ShareButtons]: The share button '${ this.shareButtonName }' does not exist!`);
    }
  }

  /**
   * Get meta tag content
   */
  private _getMetaTagContent(key: string): string {
    const metaUsingProperty: HTMLMetaElement = this._meta.getTag(`property="${ key }"`);
    if (metaUsingProperty) {
      return metaUsingProperty.getAttribute('content');
    }
    const metaUsingName: HTMLMetaElement = this._meta.getTag(`name="${ key }"`);
    if (metaUsingName) {
      return metaUsingName.getAttribute('content');
    }
  }

  private _shareButtonChanged(change: SimpleChange): boolean {
    return change && (change.firstChange || change.previousValue !== change.currentValue);
  }

  private _urlChanged(change: SimpleChange): boolean {
    return !this.url || (change && change.previousValue !== change.currentValue);
  }

  /**
   * Get share params from meta tags first and fallback to user inputs
   */
  private getParamsFromMetaTags(): ShareParams {
    return {
      url: this.url,
      title: this.title || this._getMetaTagContent('og:title'),
      description: this.description || this._getMetaTagContent('og:description'),
      image: this.image || this._getMetaTagContent('og:image'),
      via: this._share.config.twitterAccount,
      tags: this.tags
    };
  }

  /**
   * Get share params from user inputs
   */
  private getParamsFromInputs(): ShareParams {
    return {
      url: this.url,
      title: this.title,
      description: this.description,
      image: this.image,
      tags: this.tags,
      via: this._share.config.twitterAccount,
    };
  }

  private open(params: ShareParams): Observable<void> {
    // Set sharer link based on user's device
    let sharerLink: string;
    if (this._platform.IOS && this.shareButton.share.ios) {
      sharerLink = this.shareButton.share.ios;
    } else if (this._platform.ANDROID && this.shareButton.share.android) {
      sharerLink = this.shareButton.share.android;
    } else {
      sharerLink = this.shareButton.share.desktop;
    }

    if (sharerLink) {
      // Set sharer link params
      const finalUrl = sharerLink + this._serializeParams(params);

      // Log the sharer link in debug mode
      if (this._share.config.debug) {
        console.log('[DEBUG SHARE BUTTON]: ', finalUrl);
      }

      // Open the share window
      // There are two methods available for opening the share window:
      // 1. Using a real anchor
      // 2. Using window.open
      const sharerMethod = this.shareButton.method || this._share.config.sharerMethod;
      const sharerTarget = this.shareButton.target || this._share.config.sharerTarget;

      switch (sharerMethod) {

        case SharerMethod.Anchor:
          const linkElement: HTMLLinkElement = this._document.createElement('a');
          // Make it open in a new tab/window (depends on user's browser configuration)
          linkElement.setAttribute('target', sharerTarget);

          // Prevent security vulnerability https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c
          linkElement.setAttribute('rel', 'noopener noreferrer');
          linkElement.href = finalUrl;
          linkElement.click();
          linkElement.remove();
          break;

        case SharerMethod.Window:
          // Open link using Window object
          const openWindow = this._share.config.windowObj[this._share.config.windowFuncName];
          const popUpWindow = openWindow(finalUrl, sharerTarget, this._share.windowSize);

          // Prevent security vulnerability https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c
          this._share.config.windowObj.opener = null;

          // Resolve when share dialog is closed
          if (popUpWindow) {
            return new Observable<void>((sub: Subscriber<void>) => {
              const pollTimer = this._document.defaultView.setInterval(() => {
                if (popUpWindow.closed) {
                  this._document.defaultView.clearInterval(pollTimer);

                  // Emit when share windows is closed
                  this.closed.emit(this.shareButtonName);
                  sub.next();
                  sub.complete();
                }
              }, 200);
            });
          }
          break;
      }

      // Emit when share window is opened
      this.opened.emit(this.shareButtonName);
    }
    return EMPTY;
  }

  private _serializeParams(params: ShareParams): string {
    return Object.entries(this.shareButton.params)
    .map(([key, value]) => {
      // Check if share button param has a map function
      const paramFunc: ShareParamsFunc = this.shareButton.paramsFunc ? this.shareButton.paramsFunc[key] : null;

      if (params[key] || paramFunc) {
        const paramValue = paramFunc ? paramFunc(params) : params[key];
        return `${ value }=${ encodeURIComponent(paramValue) }`;
      }
      return '';
    })
    .filter(urlParam => urlParam !== '')
    .join('&');
  }
}
