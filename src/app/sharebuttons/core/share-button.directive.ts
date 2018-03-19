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
  Inject
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/operators/catchError';
import { take } from 'rxjs/operators/take';
import { tap } from 'rxjs/operators/tap';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { ShareButtons } from './share.service';
import { IShareButton, ShareButtonRef } from './share.models';

/** Google analytics ref */
declare const ga: Function;
declare const window: any;

@Directive({
  selector: '[shareButton]'
})
export class ShareButtonDirective {

  /** A ref for window object that works on SSR */
  window: any;

  /** A ref for navigator object that works on SSR */
  navigator: Navigator;

  /** Button properties */
  prop: IShareButton;

  /** The validated share URL */
  url: string;

  /** Button class - used to remove previous class when the button type is changed */
  buttonClass: string;

  /** Meta tags inputs - initialized from the global options */
  @Input() sbTitle = this.shareService.title;
  @Input() sbDescription = this.shareService.description;
  @Input() sbImage = this.shareService.image;
  @Input() sbTags = this.shareService.tags;

  /** Create share button  */
  @Input('shareButton')
  set setButton(buttonName: string) {

    /** Create a new button of type <buttonName> */
    const button = {...this.shareService.prop[buttonName]};

    if (button) {

      /** Set share button */
      this.prop = button;

      /** Remove previous button class */
      this.renderer.removeClass(this.el.nativeElement, 'sb-' + this.buttonClass);

      /** Add new button class */
      this.renderer.addClass(this.el.nativeElement, 'sb-' + button.type);

      /** Keep a copy of the class for future replacement */
      this.buttonClass = button.type;

      /** Get link's shared count */
      this.emitCount();
    } else {
      throw new Error(`[ShareButtons]: The share button '${buttonName}' does not exist!`);
    }
  }

  /** Set share URL */
  @Input()
  set sbUrl(newUrl: string) {

    /** Check if new URL is equal the current URL */
    if (newUrl !== this.url) {
      this.url = this.getValidURL(newUrl);
      this.emitCount();
    }
  }

  /** Share count event */
  @Output() sbCount = new EventEmitter<number>();

  /** Share dialog opened event */
  @Output() sbOpened = new EventEmitter<string>();

  /** Share dialog closed event */
  @Output() sbClosed = new EventEmitter<string>();

  constructor(private shareService: ShareButtons,
              private http: HttpClient,
              public renderer: Renderer2,
              public cd: ChangeDetectorRef,
              private el: ElementRef,
              @Inject(PLATFORM_ID) private platform: Object) {
    if (isPlatformBrowser(this.platform)) {
      this.window = window;
      this.navigator = navigator;
    }
  }

  /**
   * Share link on element click
   */
  @HostListener('click')
  onClick() {
    /** Set user did not set the url using [sbUrl], use window URL */
    if (!this.url) {
      this.url = encodeURIComponent(this.window.location.href);
    }

    /** Emit opened share button type */
    this.sbOpened.emit(this.prop.type);

    const ref: ShareButtonRef = {
      url: this.url,
      cd: this.cd,
      renderer: this.renderer,
      window: this.window,
      prop: this.prop,
      el: this.el.nativeElement,
      os: this.getOS(),
      metaTags: {
        title: this.sbTitle,
        description: this.sbDescription,
        image: this.sbImage,
        tags: this.sbTags,
        via: this.shareService.twitterAccount,
      }
    };

    /** Share the link */
    of(ref).pipe(
      ...this.prop.share.operators,
      tap((sharerURL: string) => this.share(sharerURL)),
      take(1)
    ).subscribe();
  }

  /**
   * Emit share count
   */
  emitCount() {
    /** Only if share count has observers & the button has support for share count */
    if (this.url && this.sbCount.observers.length && this.prop.count) {

      /** Emit share count to (sbCount) Output */
      this.count(this.url).subscribe((count: number) => this.sbCount.emit(count));
    }
  }

  /**
   * Open sharing window
   * @param url - Share URL
   */
  share(url: string) {
    let popUp;
    if (url) {

      /** GA tracking */
      if (this.shareService.gaTracking && typeof ga !== 'undefined') {
        ga('send', 'social', this.prop.type, 'click', this.url);
      }

      popUp = this.window.open(url, 'newwindow', this.shareService.windowSize);
    }

    /** If dialog closed event has subscribers, emit closed dialog type */
    if (this.sbClosed.observers.length && popUp) {
      const pollTimer = this.window.setInterval(() => {
        if (popUp.closed) {
          this.window.clearInterval(pollTimer);
          this.sbClosed.emit(this.prop.type);
        }
      }, 200);
    }
  }

  /**
   * Get link share count
   * @param url - Share URL
   * @returns Share count
   */
  count(url: string): Observable<any> {

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

  /**
   * Get a valid URL for sharing
   * @param url - URL to validate
   * @returns Sharable URL
   */
  private getValidURL(url: string) {

    if (url) {
      const r = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

      if (r.test(url)) {
        return encodeURIComponent(url);
      }
      console.warn(`[ShareButtons]: Sharing link '${url}' is invalid!`);
    }
    /** fallback to page current URL */
    return encodeURIComponent(this.window.location.href);
  }

  /**
   * Detect operating system.
   * returns 'ios', 'android', or 'desktop'.
   */
  private getOS() {
    const userAgent = this.navigator.userAgent || this.navigator.vendor || this.window.opera;

    if (/android/i.test(userAgent)) {
      return 'android';
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !this.window.MSStream) {
      return 'ios';
    }
    return 'desktop';
  }

}
