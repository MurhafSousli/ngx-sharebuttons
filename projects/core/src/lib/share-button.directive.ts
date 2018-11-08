import {
  Directive,
  Input,
  Output,
  HostListener,
  Inject,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  EventEmitter,
  ElementRef,
  Renderer2,
  ChangeDetectorRef
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Meta } from '@angular/platform-browser';
import { Platform } from '@angular/cdk/platform';

import { of, interval, Observable, Subscription, SubscriptionLike, EMPTY } from 'rxjs';
import { tap, take, switchMap, takeWhile, finalize, catchError } from 'rxjs/operators';

import { ShareService } from './share.service';
import { IShareButton, IShareCount, ShareButtonRef } from './share.models';
import { getValidUrl } from './utils';

@Directive({
  selector: '[shareButton], [share-button]'
})
export class ShareDirective implements OnChanges, OnDestroy {

  /** A ref to button class - used to remove previous class when the button type is changed */
  private _buttonClass: string;

  /** share window closed subscription (to unsubscribe if the button is destroyed before the share window closes) */
  private _shareWindowClosed: SubscriptionLike = Subscription.EMPTY;

  /** Button properties */
  prop: IShareButton;

  /** Share button type */
  @Input() shareButton: string;

  /** Get share count */
  @Input() getCount = false;

  /** Set meta tags from document head, useful when SEO is supported */
  @Input() autoSetMeta: boolean = this.shareService.autoSetMeta;

  /** Meta tags inputs - initialized from the global options */
  @Input() url: string = this.shareService.url;
  @Input() title: string = this.shareService.title;
  @Input() description: string = this.shareService.description;
  @Input() image: string = this.shareService.image;
  @Input() tags: string = this.shareService.tags;

  /** Stream that emits when share count is fetched */
  @Output() count = new EventEmitter<number>();

  /** Stream that emits when share dialog is opened */
  @Output() opened = new EventEmitter<string>();

  /** Stream that emits when share dialog is closed */
  @Output() closed = new EventEmitter<string>();

  constructor(private meta: Meta,
              private el: ElementRef,
              private http: HttpClient,
              private platform: Platform,
              private renderer: Renderer2,
              private cd: ChangeDetectorRef,
              private shareService: ShareService,
              @Inject(DOCUMENT) private document: any) {
  }

  /** Share link on element click */
  @HostListener('click')
  onClick() {
    if (this.platform.isBrowser) {
      const metaTags = this.autoSetMeta ? {
        url: this.url,
        title: this.title || this.getMetaTagContent('og:title'),
        description: this.description || this.getMetaTagContent('og:description'),
        image: this.image || this.getMetaTagContent('og:image'),
        via: this.shareService.twitterAccount,
        tags: this.tags,
      } : {
        url: this.url,
        title: this.title,
        description: this.description,
        image: this.image,
        tags: this.tags,
        via: this.shareService.twitterAccount,
      };

      // Share the link
      // @ts-ignore
      of<ShareButtonRef>({
        el: this.el.nativeElement,
        renderer: this.renderer,
        prop: this.prop,
        cd: this.cd,
        document: this.document,
        platform: this.getPlatform(),
        metaTags
      }).pipe(
        ...this.prop.share.operators,
        tap((sharerURL: any) => this.share(sharerURL)),
        take(1)
      ).subscribe();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.platform.isBrowser) {

      if (changes['shareButton'] && (changes['shareButton'].firstChange || changes['shareButton'].previousValue !== this.shareButton)) {
        this.createShareButton(this.shareButton);
      }

      if (!this.url || (changes['url'] && changes['url'].previousValue !== this.url)) {
        this.url = getValidUrl(
          this.autoSetMeta
            ? this.url || this.getMetaTagContent('og:url')
            : this.url,
          this.document.defaultView.location.href
        );
        if (this.getCount && this.prop.count) {
          this.shareCount(this.url).subscribe((count: number) => this.count.emit(count));
        }
      }
    }
  }

  ngOnDestroy() {
    this._shareWindowClosed.unsubscribe();
  }

  /**
   * Open sharing dialog
   * @param url - Share URL
   */
  share(url: string) {
    if (url) {

      // GA Tracking
      if (this.shareService.gaTracking && (<any>this.document.defaultView).ga) {
        (<any>this.document.defaultView).ga('send', 'social', this.prop.type, 'click', this.url);
      }

      // Open share pop up and activate its opened and closed events
      this._shareWindowClosed = of(this.document.defaultView.open(url, 'newwindow', this.shareService.windowSize)).pipe(
        tap(() => this.opened.emit(this.prop.type)),
        switchMap((popUp: any) => interval(200).pipe(takeWhile(() => !popUp.closed))),
        finalize(() => this.closed.emit(this.prop.type))
      ).subscribe();
    }
  }

  shareCount(shareUrl: string): Observable<number> {
    const options: IShareCount = this.prop.count;
    return options.request === 'jsonp'
      ?
      // @ts-ignore
      this.http.jsonp<any>(options.url + shareUrl, 'callback').pipe(
        ...options.operators,
        catchError(() => EMPTY),
      )
      :
      // @ts-ignore
      this.http.get<any>(options.url + shareUrl, options.args).pipe(
        ...options.operators,
        catchError(() => EMPTY)
      );
  }

  private createShareButton(buttonsName: string) {

    const button: IShareButton = {...this.shareService.prop[buttonsName]};

    if (button) {
      // Set share button properties
      this.prop = button;

      // Remove previous button class
      this.renderer.removeClass(this.el.nativeElement, `sb-${this._buttonClass}`);

      // Add new button class
      this.renderer.addClass(this.el.nativeElement, `sb-${button.type}`);

      // Set button css color variable
      this.el.nativeElement.style.setProperty('--button-color', this.prop.color);

      // Keep a copy of the class for future replacement
      this._buttonClass = button.type;

      // Set aria-label attribute
      this.renderer.setAttribute(this.el.nativeElement, 'aria-label', button.ariaLabel || button.text);
    } else {
      throw new Error(`[ShareButtons]: The share button '${buttonsName}' does not exist!`);
    }
  }

  /** Get meta tag content */
  private getMetaTagContent(key: string): string {
    const metaUsingProperty: HTMLMetaElement = this.meta.getTag(`property="${key}"`);
    if (metaUsingProperty) return metaUsingProperty.getAttribute('content');
    const metaUsingName: HTMLMetaElement = this.meta.getTag(`name="${key}"`);
    if (metaUsingName) return metaUsingName.getAttribute('content');
  }

  private getPlatform() {
    if (this.platform.IOS) return 'ois';
    if (this.platform.ANDROID) return 'android';
    return 'desktop';
  }
}
