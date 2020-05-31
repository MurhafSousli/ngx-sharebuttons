import { Component, Input, Output, HostBinding, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { ShareService, ShareDirective } from 'ngx-sharebuttons';
// Uncomment the following line in development mode
// import { ShareService, ShareDirective } from '../../src/public-api';

@Component({
  selector: 'share-button',
  templateUrl: './share-button.html',
  styleUrls: ['./share-button.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareButton {

  /** Share button type */
  @Input() button: string;

  /** The page URL */
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

  /** Show button icon */
  @Input() showIcon = true;

  /** Show button text */
  @Input() showText = false;

  /** Button custom text */
  @Input() text: string;

  /** Button custom icon */
  @Input() icon: string;

  /** Button size */
  @Input() size: number = this._share.config.size;

  /** Button theme */
  @Input() theme: string = this._share.config.theme;

  /** A flag that indicates if the button's click is disabled */
  @Input() disabled: boolean;

  /** Stream that emits when share dialog is opened */
  @Output() opened = new EventEmitter<string>();

  /** Stream that emits when share dialog is closed */
  @Output() closed = new EventEmitter<string>();

  /** Set theme as button class */
  @HostBinding('class') get buttonClass() {
    return `sb-button sb-${ this.theme }`;
  }

  constructor(private _share: ShareService) {
  }
}
