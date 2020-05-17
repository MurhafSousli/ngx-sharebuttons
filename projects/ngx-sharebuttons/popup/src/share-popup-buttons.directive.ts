import { Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, Output } from '@angular/core';
import { SharePopupService } from './share-popup.service';
import { ShareService } from '../../src/lib/share.service';
import { SHARE_BUTTONS } from '../../src/lib/share.defaults';

// import { ShareService } from 'ngx-sharebuttons';

@Directive({
  selector: '[shareButtonsPopup]'
})
export class SharePopupButtonsDirective implements OnDestroy {

  @Input() theme: string = this._share.config.theme;

  @Input() include: string[] = Object.keys(SHARE_BUTTONS);

  @Input() exclude!: string[];

  @Input() closeIcon: string | string[] = ['fas', 'times-circle'];

  /** The sharing link */
  @Input() url: string;

  /** The title parameter */
  @Input() title: string;

  /** The description parameter */
  @Input() description: string;

  /** The image parameter for sharing on Pinterest */
  @Input() image: string;

  /** The tags parameter for sharing on Twitter and Tumblr */
  @Input() tags: string;

  /** Sets meta tags from document head, useful when SEO is available */
  @Input() autoSetMeta: boolean;

  @Input() show: number;

  /** Show buttons icons */
  @Input() showIcon = true;

  /** Show buttons text */
  @Input() showText = false;

  /** Buttons size */
  @Input() size = 0;

  /** A flag that indicates if the button's click is disabled */
  @Input() disabled: boolean;

  @Input() hasBackdrop = true;

  @Input() backdropClass: string;

  /** Share dialog opened event */
  @Output() opened = new EventEmitter<string>();

  /** Share dialog closed event */
  @Output() closed = new EventEmitter<string>();

  // Stream that emits when the share popup is closed
  @Output() popupClosed = new EventEmitter<void>();

  private _popupClosed = this.popupClosed.subscribe(() => this.close());

  constructor(private _sharePopup: SharePopupService, private _share: ShareService, private _el: ElementRef) {
  }

  @HostListener('click', ['$event']) onClick(e) {
    this._sharePopup.open({
      theme: this.theme,
      include: this.include,
      exclude: this.exclude,
      url: this.url,
      title: this.title,
      description: this.description,
      image: this.image,
      tags: this.tags,
      autoSetMeta: this.autoSetMeta,
      show: this.show,
      showIcon: this.showIcon,
      showText: this.showText,
      size: this.size,
      disabled: this.disabled,
      opened: this.opened,
      closed: this.closed,
      closeIcon: this.closeIcon,
      closeClick: this.popupClosed,
      hasBackdrop: this.hasBackdrop,
      backdropClass: this.backdropClass
    }, this._el.nativeElement);
  }

  ngOnDestroy() {
    this._popupClosed.unsubscribe();
  }

  close() {
    this._sharePopup.close();
  }
}
