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
import { tap } from 'rxjs/operators/tap';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { ShareButtons } from './share.service';
import { IShareButton, ShareButtonRef } from './share.models';
import { getOS, getValidUrl } from './utils';

/** Google analytics ref */
declare const ga: Function;
declare const window: any;

@Directive({
  selector: '[shareButton]'
})
export class ShareButtonDirective implements OnChanges {

  /** A ref for window object that works on SSR */
  window: Window;

  /** A ref for navigator object that works on SSR */
  navigator: Navigator;

  /** Button properties */
  prop: IShareButton;

  /** A ref to button class - used to remove previous class when the button type is changed */
  buttonClass: string;

  /** Share button type */
  @Input() shareButton: string;

  /** Meta tags inputs - initialized from the global options */
  @Input() sbUrl: string;
  @Input() sbTitle: string;
  @Input() sbDescription: string;
  @Input() sbImage: string;
  @Input() sbTags: string;

  /** Stream that emits when share count is fetched */
  @Output() sbCount = new EventEmitter<number>();

  /** Stream that emits when share dialog is opened */
  @Output() sbOpened = new EventEmitter<string>();

  /** Stream that emits when share dialog is closed */
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

  /** Share link on element click */
  @HostListener('click')
  onClick() {

    const ref: ShareButtonRef = {
      cd: this.cd,
      renderer: this.renderer,
      window: this.window,
      prop: this.prop,
      el: this.el.nativeElement,
      os: getOS(this.window, this.navigator),
      metaTags: {
        url: this.sbUrl,
        title: this.sbTitle || this.shareService.title,
        description: this.sbDescription || this.shareService.description,
        image: this.sbImage || this.shareService.image,
        tags: this.sbTags,
        via: this.shareService.twitterAccount,
      }
    };

    // Share the link
    of(ref).pipe(
      ...this.prop.share.operators,
      tap((sharerURL: string) => this.share(sharerURL)),
      take(1)
    ).subscribe();
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['shareButton'].firstChange || changes['shareButton'].previousValue !== this.shareButton) {
      this.createShareButton(this.shareButton);
    }

    if (changes['sbUrl'] && (changes['sbUrl'].firstChange || changes['url'].previousValue !== this.sbUrl)) {
      this.sbUrl = getValidUrl(this.sbUrl || this.shareService.url, this.window.location.href);
      this.getShareCount(this.sbUrl);
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
        ga('send', 'social', this.prop.type, 'click', this.sbUrl);
      }

      // Emit when share dialog is opened
      this.sbOpened.emit(this.prop.type);

      const popUp = this.window.open(url, 'newwindow', this.shareService.windowSize);

      // Emit when share dialog is closed
      if (popUp) {
        const pollTimer = this.window.setInterval(() => {
          if (popUp.closed) {
            this.window.clearInterval(pollTimer);
            this.sbClosed.emit(this.prop.type);
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
      this.el.nativeElement.style.setProperty(`--${this.prop.type}-color`, this.prop.color);

      // Keep a copy of the class for future replacement
      this.buttonClass = button.type;

      this.getShareCount(this.sbUrl);
    } else {
      throw new Error(`[ShareButtons]: The share button '${buttonsName}' does not exist!`);
    }
  }

  private getShareCount(url: string) {
    // if url is valid and button supports share count
    if (url && this.prop.count && this.sbCount.observers.length) {
      this.count(url).subscribe((count: number) => this.sbCount.emit(count));
    }
  }

}
