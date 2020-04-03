import { Component, Input, Output, ViewChild, HostBinding, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

// import { ShareService, ShareDirective } from 'ngx-sharebuttons';
// Uncomment the following line in development mode
import { ShareService, ShareDirective } from '../../src/public-api';

@Component({
  selector: 'share-button',
  templateUrl: './share-button.html',
  styleUrls: ['./share-button.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareButton {

  /** The sharing link */
  url: string;

  /** Share count value */
  shareCount: number;

  /** Button name */
  button: string;

  @Input('button') set createButton(button: string) {
    this.shareCount = 0;
    this.button = button;
  }

  /** Set the sharing link */
  @Input('url') set setUrl(url: string) {
    this.shareCount = 0;
    this.url = url;
  }

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

  /** Show button icon */
  @Input() showIcon = true;

  /** Show button text */
  @Input() showText = false;

  /** Show sharing count */
  @Input() showCount = false;

  /** Button custom text */
  @Input() text: string;

  /** Button custom icon */
  @Input() icon: string;

  /** Button size */
  @Input() size: number = this._share.config.size;

  /** Button theme */
  @Input() theme: string = this._share.config.theme;

  /** Stream that emits when share count is fetched */
  @Output() count = new EventEmitter<number>();

  /** Stream that emits when share dialog is opened */
  @Output() opened = new EventEmitter<string>();

  /** Stream that emits when share dialog is closed */
  @Output() closed = new EventEmitter<string>();

  /** Set theme as button class */
  @HostBinding('class') get buttonClass() {
    return `sb-button sb-${this.theme}`;
  }

  @ViewChild(ShareDirective, { static: true }) ref: ShareDirective;

  constructor(private _share: ShareService) {
  }

  onCount(count: number) {
    this.shareCount = count;
    this.count.emit(count);
  }

}
