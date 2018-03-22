import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewChild,
  HostBinding
} from '@angular/core';

import { ShareButtons, ShareButtonDirective } from '@ngx-share/core';

@Component({
  selector: 'share-button',
  templateUrl: './share-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class ShareButtonComponent {

  /** Share URL */
  url: string;

  /** Share count value */
  shareCount: number;

  /** Button name */
  button: string;

  @Input('button')
  set createButton(button: string) {
    this.shareCount = 0;
    this.button = button;
  }

  /** Share URL */
  @Input('url')
  set setUrl(url: string) {
    this.shareCount = 0;
    this.url = url;
  }

  /** Share meta tags */
  @Input() title: string;
  @Input() description: string;
  @Input() image: string;
  @Input() tags: string;

  /** Show button icon */
  @Input() showIcon = true;

  /** Show button text */
  @Input() showText = false;

  /** Button share count */
  @Input() showCount = false;

  /** Button custom text */
  @Input() text: string;

  /** Button size */
  @Input() size = this.share.size;

  /** Button theme */
  @Input() theme: string = this.share.theme;

  /** Share count event */
  @Output() count = new EventEmitter<number>();

  /** Share dialog opened event */
  @Output() opened = new EventEmitter<string>();

  /** Share dialog closed event */
  @Output() closed = new EventEmitter<string>();

  /** Set theme as button class */
  @HostBinding('class') get buttonClass() {
    return `sb-button sb-${this.theme}`;
  }

  /** Get button prop from ShareDirective */
  @ViewChild(ShareButtonDirective) ref: ShareButtonDirective;

  constructor(private share: ShareButtons) {
  }

  onCount(count) {
    this.shareCount = count;
    this.count.emit(count);
  }

}
