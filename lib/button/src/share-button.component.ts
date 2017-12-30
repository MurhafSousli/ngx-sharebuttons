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
  changeDetection: ChangeDetectionStrategy.OnPush
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

  /** on set share URL */
  @Input('url')
  set setUrl(newUrl: string) {
    /** Reset share count when url changes */
    this.shareCount = 0;
    this.url = newUrl;
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
  @Input('theme')
  set setTheme(theme: string) {
    this.buttonClass = 'sb-button sb-' + theme;
  }

  /** Share count event */
  @Output() count = new EventEmitter<number>();

  /** Share dialog opened event */
  @Output() opened = new EventEmitter<string>();

  /** Share dialog closed event */
  @Output() closed = new EventEmitter<string>();

  /** Set theme as button class */
  @HostBinding('class') buttonClass = 'sb-button sb-' + this.share.theme;

  /** Share directive reference to display button icon and text */
  @ViewChild(ShareButtonDirective) ref: ShareButtonDirective;

  constructor(private share: ShareButtons) {
  }

  onCount(count) {
    this.shareCount = count;
    this.count.emit(count);
  }

}
