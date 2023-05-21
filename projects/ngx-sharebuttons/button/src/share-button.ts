import { Component, Input, Output, HostBinding, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { shareButtonName, ShareService } from 'ngx-sharebuttons';

@Component({
  selector: 'share-button',
  templateUrl: './share-button.html',
  styleUrls: ['./share-button.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareButton {

  /** Share button type */
  @Input() button: shareButtonName;

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

  /** Sets the fb messenger redirect url to enable sharing on Messenger desktop */
  @Input() redirectUrl: string = this._share.config.redirectUrl;

  /** Sets meta tags from document head, useful when SEO is available */
  @Input() autoSetMeta: boolean;

  /** Show button icon */
  @Input() showIcon = true;

  /** Show button text */
  @Input() showText = false;

  /** Button custom text */
  @Input() text: string;

  /** Button custom icon */
  @Input() icon: IconProp;

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
