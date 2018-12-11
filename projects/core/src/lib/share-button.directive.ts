import {
  Directive,
  Input,
  Output,
  HostBinding,
  HostListener,
  Inject,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  SimpleChange,
  EventEmitter,
  ElementRef,
  Renderer2,
  ChangeDetectorRef
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Meta } from '@angular/platform-browser';
import { Platform } from '@angular/cdk/platform';
import { Subscription } from 'rxjs';

import { ShareService } from './share.service';
import { IShareButton, ShareMetaTags } from './share.models';
import { getValidUrl } from './utils';
import { ShareButtonBase } from './buttons';

@Directive({
  selector: '[shareButton], [share-button]'
})
export class ShareDirective implements OnChanges, OnDestroy {

  /** A ref to button class - used to remove previous class when the button type is changed */
  private _buttonClass: string;

  /** Share window closed event subscription */
  private _shareWindowClosed = Subscription.EMPTY;

  /** Button properties */
  shareButton: ShareButtonBase;

  /** Share button type */
  @Input('shareButton') shareButtonName: string;

  /** Get share count */
  @Input() getCount = false;

  /** Set meta tags from document head, useful when SEO is supported */
  @Input() autoSetMeta: boolean = this._share.config.autoSetMeta;

  /** Sharing link */
  @Input() url: string;

  /** Sets the title parameter */
  @Input() title: string = this._share.config.title;

  /** Sets the description parameter */
  @Input() description: string = this._share.config.description;

  /** Sets the image parameter for sharing on Pinterest */
  @Input() image: string = this._share.config.image;

  /** Sets the tags parameter for sharing on Twitter and Tumblr */
  @Input() tags: string = this._share.config.tags;

  /** Stream that emits when share count is fetched */
  @Output() count = new EventEmitter<number>();

  /** Stream that emits when share dialog is opened */
  @Output() opened = new EventEmitter<string>();

  /** Stream that emits when share dialog is closed */
  @Output() closed = new EventEmitter<string>();

  constructor(private _meta: Meta,
              private _el: ElementRef,
              private _http: HttpClient,
              private _platform: Platform,
              private _renderer: Renderer2,
              private _cd: ChangeDetectorRef,
              private _share: ShareService,
              @Inject(DOCUMENT) private _document: any) {
  }

  @HostBinding('style.pointerEvents') pointerEvents: string;

  /** Share the link */
  @HostListener('click')
  share() {
    const metaTags: ShareMetaTags = this.autoSetMeta ? {
      title: this.title || this._getMetaTagContent('og:title'),
      description: this.description || this._getMetaTagContent('og:description'),
      image: this.image || this._getMetaTagContent('og:image'),
      via: this._share.config.twitterAccount,
      tags: this.tags,
    } : {
      title: this.title,
      description: this.description,
      image: this.image,
      tags: this.tags,
      via: this._share.config.twitterAccount,
    };

    // Share the link
    this.shareButton.click(metaTags);
  }

  ngOnChanges(changes: SimpleChanges) {
    // Avoid SSR error
    if (this._platform.isBrowser) {

      if (this._shareButtonChanged(changes['shareButtonName'])) {
        this._createShareButton();
      }

      if (this._urlChanged(changes['url'])) {
        this.url = getValidUrl(
          this.autoSetMeta
            ? this.url || this._getMetaTagContent('og:url')
            : this.url,
          this._document.defaultView.location.href
        );

        if (this.getCount && this.shareButton.supportShareCount) {
          this.shareButton.shareCount(this.url).subscribe((count: number) => this.count.emit(count));
        }
      }
    }
  }

  ngOnDestroy() {
    this._shareWindowClosed.unsubscribe();
  }

  private _createShareButton() {
    const shareButtonFactory: IShareButton = this._share.config.prop[this.shareButtonName];
    const button: ShareButtonBase = shareButtonFactory.create(
      shareButtonFactory,
      // Pass the url property as a function, so the button class always gets the recent url value.
      () => this.url,
      this._http,
      this._platform,
      this._document,
      this._share.windowSize,
      // This function is meant for the copy button
      (disabled: boolean) => {
        this.pointerEvents = disabled ? 'none' : 'auto';
        this._cd.markForCheck();
      }
    );
    if (button) {
      // Set share button properties
      this.shareButton = button;

      // Remove previous button class
      this._renderer.removeClass(this._el.nativeElement, `sb-${this._buttonClass}`);

      // Add new button class
      this._renderer.addClass(this._el.nativeElement, `sb-${this.shareButtonName}`);

      // Set button css color variable
      this._el.nativeElement.style.setProperty('--button-color', this.shareButton.color);

      // Keep a copy of the class for future replacement
      this._buttonClass = this.shareButtonName;

      // Set aria-label attribute
      this._renderer.setAttribute(this._el.nativeElement, 'aria-label', button.ariaLabel);
    } else {
      console.error(`[ShareButtons]: The share button '${this.shareButtonName}' does not exist!`);
    }
  }

  /** Get meta tag content */
  private _getMetaTagContent(key: string): string {
    const metaUsingProperty: HTMLMetaElement = this._meta.getTag(`property="${key}"`);
    if (metaUsingProperty) return metaUsingProperty.getAttribute('content');
    const metaUsingName: HTMLMetaElement = this._meta.getTag(`name="${key}"`);
    if (metaUsingName) return metaUsingName.getAttribute('content');
  }

  private _shareButtonChanged(change: SimpleChange): boolean {
    return change && (change.firstChange || change.previousValue !== change.currentValue);
  }

  private _urlChanged(change: SimpleChange): boolean {
    return !this.url || (change && change.previousValue !== change.currentValue);
  }

}
