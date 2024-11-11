import {
  Component,
  inject,
  output,
  computed,
  booleanAttribute,
  input,
  Signal,
  InputSignal,
  OutputEmitterRef,
  ChangeDetectionStrategy,
  InputSignalWithTransform
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
  host: { '[class]': 'classes()' },
  selector: 'share-button',
  templateUrl: './share-button.html',
  styleUrl: './share-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ShareButtonDirective, FaIconComponent]
})
export class ShareButton {

  /** Injected options */
  private readonly options: ShareButtonsConfig = inject(SHARE_BUTTONS_CONFIG);

  /** Share button type */
  button: InputSignal<ShareButtonProp> = input<ShareButtonProp>();

  /** The page URL */
  url: InputSignal<string> = input<string>();

  /** The title parameter */
  title: InputSignal<string> = input<string>();

  /** The description parameter */
  description: InputSignal<string> = input<string>();

  /** The image parameter for sharing on Pinterest */
  image: InputSignal<string> = input<string>();

  /** The tags parameter for sharing on X and Tumblr */
  tags: InputSignal<string> = input<string>();

  /** Sets the fb messenger redirect url to enable sharing on Messenger desktop */
  redirectUrl: InputSignal<string> = input<string>();

  /** Show button icon */
  showIcon: InputSignalWithTransform<boolean, boolean | string> = input<boolean, boolean | string>(true, {
    transform: booleanAttribute
  });

  /** Show button text */
  showText: InputSignalWithTransform<boolean, boolean | string> = input<boolean, boolean | string>(false, {
    transform: booleanAttribute
  });

  /** Button custom text */
  text: InputSignal<string> = input<string>();

  /** Button custom icon */
  icon: InputSignal<IconProp> = input<IconProp>();

  /** Button theme */
  theme: InputSignal<string> = input<string>(this.options.theme);

  /** A flag that indicates if the button's click is disabled */
  disabled: InputSignalWithTransform<boolean, boolean | string> = input<boolean, boolean | string>(false, {
    transform: booleanAttribute
  });

  /** Set theme as button class */
  classes: Signal<string> = computed(() => `sb-button sb-${ this.theme() }`);

  /** Stream that emits when share dialog is opened */
  opened: OutputEmitterRef<string> = output<string>();

}
