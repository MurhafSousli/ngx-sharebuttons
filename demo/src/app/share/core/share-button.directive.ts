import {
  Directive,
  Input,
  Output,
  HostListener,
  EventEmitter,
  ElementRef,
  Renderer2,
  ChangeDetectorRef,
  PLATFORM_ID,
  Inject,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/operators/catchError';
import { take } from 'rxjs/operators/take';
import { map } from 'rxjs/operators/map';
import { switchMap } from 'rxjs/operators/switchMap';
import { tap } from 'rxjs/operators/tap';
import { filter } from 'rxjs/operators/filter';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { ShareButtons } from './share.service';
import { IShareButton, ShareButtonRef } from './share.models';
import { getMetaContent, getOS, getValidUrl } from './utils';

/** Google analytics ref */
declare const ga: Function;

@Directive({
  selector: '[shareButton]'
})
export class ShareButtonDirective implements OnChanges {

  /** Button properties */
  prop: IShareButton;

  /** A ref to button class - used to remove previous class when the button type is changed */
  buttonClass: string;

  /** Share button type */
  @Input() shareButton: string;

  /** Auto get share count */
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
              @Inject(PLATFORM_ID) private platform: Object) {
  }

  /** Share link on element click */
  @HostListener('click')
  onClick() {
    if (isPlatformBrowser(this.platform)) {
      const metaTags = this.autoSetMeta ? {
        url: this.url,
        title: this.title || getMetaContent('og:title'),
        description: this.description || getMetaContent('og:description'),
        image: this.image || getMetaContent('og:image'),
        via: this.shareService.twitterAccount || getMetaContent('twitter:site'),
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
        os: getOS(),
        metaTags
      };

      // Share the link
      of(ref).pipe(
        ...this.prop.share.operators,
        tap((sharerURL: string) => this.share(sharerURL)),
        take(1)
      ).subscribe();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (isPlatformBrowser(this.platform)) {

      if (changes['shareButton'] && (changes['shareButton'].firstChange || changes['shareButton'].previousValue !== this.shareButton)) {
        this.createShareButton(this.shareButton);
      }

      if (!this.url || (changes['url'] && changes['url'].previousValue !== this.url)) {
        of(null).pipe(
          map(() => {
            this.url = getValidUrl(this.autoSetMeta ? this.url || getMetaContent('og:url') : this.url, window.location.href);
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

      const popUp = window.open(url, 'newwindow', this.shareService.windowSize);

      // Emit when share dialog is closed
      if (popUp) {
        const pollTimer = window.setInterval(() => {
          if (popUp.closed) {
            window.clearInterval(pollTimer);
            this.closed.emit(this.prop.type);
          }
        }, 200);
      }
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
        catchError(() => empty()),
      );
    } else {

      return this.http.get<any>(this.prop.count.url + url, this.prop.count.args).pipe(
        ...this.prop.count.operators,
        catchError(() => empty())
      );
    }
  }


  private createShareButton(buttonsName: string) {

    const button = {...this.shareService.prop[buttonsName]};

    if (button) {
      // Set share button properties
      this.prop = button;

      // Remove previous button class
      this.renderer.removeClass(this.el.nativeElement, `sb-${this.buttonClass}`);

      // Add new button class
      this.renderer.addClass(this.el.nativeElement, `sb-${button.type}`);

      // Set button css color variable
      this.el.nativeElement.style.setProperty('--button-color', this.prop.color);

      // Keep a copy of the class for future replacement
      this.buttonClass = button.type;
    } else {
      throw new Error(`[ShareButtons]: The share button '${buttonsName}' does not exist!`);
    }
  }

}
