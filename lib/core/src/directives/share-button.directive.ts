import {
  Directive,
  Input,
  Output,
  HostListener,
  EventEmitter,
  ElementRef,
  Renderer2,
  ChangeDetectorRef
} from '@angular/core';
import { ShareButtons } from '../services/share.service';
import { IShareButton } from '../models/share.models';
import { UniversalSupportService } from '../services/universal-support.service';

/** Google analytics ref */
declare const ga: Function;

@Directive({
  selector: '[shareButton]'
})
export class ShareButtonDirective {

  window: Window;
  el: HTMLElement;
  shareButton: IShareButton;
  url: string;

  /** Share meta tags */
  @Input() sbTitle = this.share.title;
  @Input() sbDescription = this.share.description;
  @Input() sbImage = this.share.image;
  @Input() sbTags = this.share.tags;

  /** Set button class, e.g. 'sb-facebook' */
  buttonClass: string;

  /** Set share button e.g facebook, twitter...etc  */
  @Input('shareButton')
  set setButton(buttonName: string) {

    /** Create a new button of type <buttonName> */
    const button = this.share.createShareButton(buttonName);

    if (button) {

      /** Set share button */
      this.shareButton = button;

      /** Remove old button class in case user changed the button */
      this.renderer.removeClass(this.el, 'sb-' + this.buttonClass);

      /** Add new button class e.g.: sb-facebook, sb-twitter ...etc */
      this.renderer.addClass(this.el, 'sb-' + button.prop.type);

      /** Keep a copy of current class */
      this.buttonClass = button.prop.type;

      /** Get link's shared count */
      this.getCount();
    } else {
      throw new Error(`[ShareButtons]: The share button "${buttonName}" does not exist. Make sure the button name is correct!`);
    }
  }

  /** Set share URL */
  @Input()
  set sbUrl(url: string) {

    /** Check if current URL equals previous URL */
    if (url !== this.url) {
      this.url = this.validateUrl(url);
      this.getCount();
    }
  }

  /** Google analytics tracking */
  @Input() gaTracking = this.share.gaTracking;

  /** Share count event */
  @Output() sbCount = new EventEmitter<number>();

  /** Share dialog opened event */
  @Output() sbOpened = new EventEmitter<string>();

  /** Share dialog closed event */
  @Output() sbClosed = new EventEmitter<string>();

  constructor(private share: ShareButtons,
              public renderer: Renderer2,
              public cd: ChangeDetectorRef,
              el: ElementRef,
              universal: UniversalSupportService) {
    this.el = el.nativeElement;
    this.window = universal.nativeWindow;
  }

  /** Open share dialog */
  @HostListener('click')
  onClick() {
    /** Set user did not set the url using [sbUrl], use window URL */
    if (!this.url) {
      this.url = encodeURIComponent(this.window.location.href);
    }

    /** Get sharing link */
    const shareUrl = this.shareButton.link(this.url, {
      title: this.sbTitle,
      description: this.sbDescription,
      image: this.sbImage,
      tags: this.sbTags,
      mobile: this.share.getMobileOS(),
      via: this.share.twitterAccount,
      directive: this
    });

    /** GA tracking */
    if (this.gaTracking && typeof ga !== 'undefined') {
      ga('send', 'social', this.shareButton.prop.type, 'click', this.url);
    }

    let popUp;
    if (shareUrl) {
      /** Open share dialog */
      popUp = this.window.open(shareUrl, 'newwindow');
    }

    /** Emit opened dialog type */
    this.sbOpened.emit(this.shareButton.prop.type);

    /** If dialog closed event has subscribers, emit closed dialog type */
    if (this.sbClosed.observers.length && popUp) {
      const pollTimer = this.window.setInterval(() => {
        if (popUp.closed) {
          this.window.clearInterval(pollTimer);
          this.sbClosed.emit(this.shareButton.prop.type);
        }
      }, 200);
    }

  }

  getCount() {
    /** Only if share count has observers & the button has support for share count */
    if (this.url && this.sbCount.observers.length && this.shareButton.prop.supportCount) {

      /** Emit share count to (sbCount) Output */
      this.shareButton.count(this.url).subscribe((count: number) => this.sbCount.emit(count));
    }
  }

  private validateUrl(url: string) {
    /** Use encodeURIComponent to let URLs with the hash location strategy to work in tweets */

    if (url) {
      const r = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

      if (r.test(url)) {
        return encodeURIComponent(url);
      }
      console.warn(`[ShareButtons]: The share URL "${url}" is invalid!`);
    }
    /** fallback to current page URL */
    return encodeURIComponent(this.window.location.href);
  }

}


