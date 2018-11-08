import {
  Directive,
  Input,
  Output,
  HostListener,
  Inject,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  ElementRef,
  Renderer2,
  ChangeDetectorRef
} from '@angular/core';
import { DOCUMENT, Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { Platform } from '@angular/cdk/platform';

import { interval, of, Subject } from 'rxjs';
import { tap, take, switchMap, takeWhile, finalize } from 'rxjs/operators';

import { ShareButtons } from './share.service';
import { IShareButton, ShareButtonRef } from './share.models';
import { getOS, getValidUrl } from './utils';

/** Google analytics ref */
declare const ga: Function;

@Directive({
  selector: '[shareButton], [share-button]'
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
})
export class ShareButtonDirective implements OnChanges {

  /** A ref to button class - used to remove previous class when the button type is changed */
  private _buttonClass: string;

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

  constructor(private shareService: ShareButtons,
              private http: HttpClient,
              public renderer: Renderer2,
              public cd: ChangeDetectorRef,
              private el: ElementRef,
              private location: Location,
              private meta: Meta,
              private platform: Platform,
  }

  /** Share link on element click */
  @HostListener('click')
  onClick() {
    if (isPlatformBrowser(this.platform)) {
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

      const ref: ShareButtonRef = {
        cd: this.cd,
        renderer: this.renderer,
        prop: this.prop,
        el: this.el.nativeElement,
        platform: this.getPlatform(),
        metaTags
      };

      // Share the link
      of(ref).pipe(
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
        of(null).pipe(
          map(() => {
            this.url = getValidUrl(this.autoSetMeta ? this.url || getMetaContent('og:url') : this.url, this.location.path());
            return this.url;
          }),
          filter(() => this.prop.count && this.getCount),
          switchMap((url: string) => this.shareCount(url)),
          tap((shareCount: number) => this.count.emit(shareCount)),
          take(1)
        ).subscribe();
      }
    }
  }

  /**
   * Open sharing dialog
   * @param url - Share URL
   */
  share(url: string) {
    if (url) {

      // GA Tracking
      if (this.shareService.gaTracking && typeof ga !== 'undefined') {
        ga('send', 'social', this.prop.type, 'click', this.url);
      }

      // Emit when share dialog is opened
      this.opened.emit(this.prop.type);

      of(window.open(url, 'newwindow', this.shareService.windowSize)).pipe(
        switchMap((popUp: any) => interval(200).pipe(
          takeWhile(() => popUp.closed),
          finalize(() => this.closed.emit(this.prop.type))
          )
        )
      ).subscribe();
    }
  }

  /**
   * Get link share count
   * @param url - Share URL
   * @returns Share count
   */
  shareCount(url: string): Observable<any> {

    if (this.prop.count.request === 'jsonp') {

      return this.http.jsonp<any>(this.prop.count.url + url, 'callback').pipe(
        ...this.prop.count.operators,
        catchError(() => EMPTY),
      );
    } else {

      return this.http.get<any>(this.prop.count.url + url, this.prop.count.args).pipe(
        ...this.prop.count.operators,
        catchError(() => EMPTY)
      );
    }
  }


  private createShareButton(buttonsName: string) {

    const button = {...this.shareService.prop[buttonsName]};

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
