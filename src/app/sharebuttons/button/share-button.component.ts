import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewChild,
  HostBinding
} from '@angular/core';

import { ShareButtons, ShareButtonDirective } from '../core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

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

  /** Set meta tags from document head, useful when SEO is supported */
  @Input() autoSetMeta: boolean;

  /** Show button icon */
  @Input() showIcon = true;

  /** Show button text */
  @Input() showText = false;

  /** Button share count */
  @Input() showCount = false;

  /** Button custom text */
  @Input() text: string;

  /** Button custom icon */
  @Input() icon: IconProp;

  /** Button size */
  @Input() size: number = this.share.size;

  /** Button theme */
  @Input() theme: string = this.share.theme;

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

  /** Get button prop from ShareDirective */
  @ViewChild(ShareButtonDirective) ref: ShareButtonDirective;

  constructor(private share: ShareButtons) {
  }

  onCount(count) {
    this.shareCount = count;
    this.count.emit(count);
  }

}
