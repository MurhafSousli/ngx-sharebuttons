import {
  Directive,
  Input,
  Output,
  HostListener,
  EventEmitter,
  ElementRef,
  Renderer2,
  ChangeDetectorRef,
  Inject
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ShareButtonsService } from '../services/share-buttons.service';
import { IShareButton } from '../models/share-buttons.models';
import { CopyButton } from '../classes/copy.class';

/** Track with google analytics */
declare const ga: Function;

@Directive({
  selector: '[shareButton]'
})
export class ShareButtonDirective {

  /** Element ref */
  el: HTMLElement;

  /** Share button type */
  shareButton: IShareButton;

  /** Validated share URL */
  url: string;

  /** Share meta tags */
  @Input() sbTitle: string;
  @Input() sbDescription: string;
  @Input() sbImage: string;
  @Input() sbTags: string;

  /** Set button class, e.g. 'sb-facebook' */
  buttonClass: string;

  /** Create a new button of type <buttonName> */
  @Input('shareButton')
  set createButton(buttonName: string) {

    const button = this.share.createShareButton(buttonName);

    if (button) {
      this.shareButton = button;

      /** Remove old button class in case user changed button */
      this.renderer.removeClass(this.el, 'sb-' + this.buttonClass);

      /** Add new button class e.g.: sb-facebook, sb-twitter ...etc */
      this.renderer.addClass(this.el, 'sb-' + button.prop.type);

      /** Keep ref of current class */
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

  /** Google analytics tracking*/
  @Input() gaTracking = true;

  /** Share count event */
  @Output() sbCount = new EventEmitter<number>();

  /** Share dialog opened event */
  @Output() sbOpened = new EventEmitter<string>();

  /** Share dialog closed event */
  @Output() sbClosed = new EventEmitter<string>();

  constructor(private share: ShareButtonsService,
              public renderer: Renderer2,
              public cd: ChangeDetectorRef,
              el: ElementRef,
              @Inject(DOCUMENT) public doc: Document) {
    this.el = el.nativeElement;
  }

  /** Open share dialog */
  @HostListener('click')
  onClick() {

    /** Get the proper link for sharing */
    const shareUrl = this.shareButton.link(this.url || encodeURIComponent(this.doc.URL), {
      title: this.sbTitle || this.share.title,
      description: this.sbDescription || this.share.description,
      image: this.sbImage || this.share.image,
      tags: this.sbTags || this.share.tags,
      mobile: this.share.getMobileOS(),
      via: this.share.twitterAccount
    });

    /** GA tracking */
    if (this.gaTracking && typeof ga !== 'undefined') {
      ga('send', 'social', this.shareButton.prop.type, 'click', this.url);
    }

    let popUp;
    switch (shareUrl) {
      case this.share.meta.copy.type:
        (<CopyButton>this.shareButton).copyURLToClipboard(this, this.url);
        break;
      case this.share.meta.print.type:
        popUp = this.doc.execCommand('print');
        break;
      default:
        /** Open share dialog */
        popUp = this.doc.open(shareUrl, 'newwindow', this.share.dialogSize);

        /** Emit opened dialog type */
        this.sbOpened.emit(this.shareButton.prop.type);
    }

    /** If dialog closed event has subscribers, emit closed dialog type */
    if (this.sbClosed.observers.length && popUp) {
      const pollTimer = window.setInterval(() => {
        if (popUp.closed) {
          window.clearInterval(pollTimer);
          this.sbClosed.emit(this.shareButton.prop.type);
        }
      }, 200);
    }

  }

  getCount() {
    /** Only if share count has observers & the button has support for share count */
    if (this.url && this.sbCount.observers.length && this.shareButton.prop.supportCount) {

      /** Emits share count to sbCount Output */
      this.shareButton.count(this.url).subscribe((count: number) => this.sbCount.emit(count));
    }
  }

  validateUrl(url: string) {
    /** Use encodeURIComponent to let URLs with the hash location strategy to work in tweets */

    if (url) {
      const r = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

      if (r.test(url)) {
        return encodeURIComponent(url);
      }
      console.warn(`[ShareButtons]: The share URL "${url}" is invalid!`);
    }
    /** fallback to current page URL */
    return encodeURIComponent(this.doc.URL);
  }

}


