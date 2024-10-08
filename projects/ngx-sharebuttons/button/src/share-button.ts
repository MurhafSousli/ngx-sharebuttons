import {
  Component,
  Input,
  Output,
  HostBinding,
  inject,
  booleanAttribute,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  SHARE_BUTTONS_CONFIG,
  ShareButtonProp,
  ShareButtonsConfig,
  ShareButtonDirective
} from 'ngx-sharebuttons';

@Component({
  standalone: true,
  selector: 'share-button',
  templateUrl: './share-button.html',
  styleUrls: ['./share-button.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ShareButtonDirective, FaIconComponent]
})
export class ShareButton {

  /** Injected options */
  private readonly options: ShareButtonsConfig = inject(SHARE_BUTTONS_CONFIG);

  /** Share button type */
  @Input() button: ShareButtonProp;

  /** The page URL */
  @Input() url: string;

  /** The title parameter */
  @Input() title: string;

  /** The description parameter */
  @Input() description: string;

  /** The image parameter for sharing on Pinterest */
  @Input() image: string;

  /** The tags parameter for sharing on X and Tumblr */
  @Input() tags: string;

  /** Sets the fb messenger redirect url to enable sharing on Messenger desktop */
  @Input() redirectUrl: string;

  /** Show button icon */
  @Input({ transform: booleanAttribute }) showIcon: boolean = true;

  /** Show button text */
  @Input({ transform: booleanAttribute }) showText: boolean = false;

  /** Button custom text */
  @Input() text: string;

  /** Button custom icon */
  @Input() icon: IconProp;

  /** Button theme */
  @Input() theme: string = this.options.theme;

  /** A flag that indicates if the button's click is disabled */
  @Input({ transform: booleanAttribute }) disabled: boolean;

  /** Stream that emits when share dialog is opened */
  @Output() opened: EventEmitter<string> = new EventEmitter<string>();

  /** Set theme as button class */
  @HostBinding('class') get buttonClass(): string {
    return `sb-button sb-${ this.theme }`;
  }
}
