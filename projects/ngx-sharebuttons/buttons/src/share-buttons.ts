import {
  Component,
  inject,
  output,
  computed,
  numberAttribute,
  booleanAttribute,
  input,
  model,
  Signal,
  InputSignal,
  ModelSignal,
  OutputEmitterRef,
  InputSignalWithTransform,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  ShareButtonsConfig,
  ShareButtonProp,
  SHARE_BUTTONS,
  SHARE_BUTTONS_CONFIG
} from 'ngx-sharebuttons';
import { ShareButton } from 'ngx-sharebuttons/button';
import { ExpandButton } from './expand-button';

@Component({
  selector: 'share-buttons',
  templateUrl: './share-buttons.html',
  styleUrl: './share-buttons.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ShareButton, ExpandButton]
})
export class ShareButtons {

  /** Global default options */
  readonly options: ShareButtonsConfig = inject(SHARE_BUTTONS_CONFIG);

  /** Numbers of buttons to show */
  show: InputSignalWithTransform<number, number | string> = input<number, number | string>(Object.values(SHARE_BUTTONS).length, { transform: numberAttribute });

  /** Array of included buttons */
  include: InputSignal<ShareButtonProp[]> = input<ShareButtonProp[]>(this.options.include || []);

  /** Array of excluded buttons */
  exclude: InputSignal<ShareButtonProp[]> = input<ShareButtonProp[]>(this.options.exclude || []);

  expanded: ModelSignal<boolean> = model<boolean>(false);

  selectedButtons: Signal<ShareButtonProp[]> = computed(() => {
    const includedButtons: ShareButtonProp[] = this.include().length ? this.include() : Object.keys(SHARE_BUTTONS);
    return includedButtons.filter((btn: ShareButtonProp) => this.exclude().indexOf(btn) < 0);
  });

  displayButtons: Signal<ShareButtonProp[]> = computed(() => {
    const selectedButtons: ShareButtonProp[] = this.selectedButtons()
    return selectedButtons.slice(0, this.expanded() ? selectedButtons.length : this.show());
  });

  theme: InputSignal<string> = input<string>(this.options.theme);

  /** The sharing link */
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

  /** Show buttons icons */
  showIcon: InputSignalWithTransform<boolean, boolean | string> = input<boolean, boolean | string>(true, {
    transform: booleanAttribute
  });

  /** Show buttons text */
  showText: InputSignalWithTransform<boolean, boolean | string> = input<boolean, boolean | string>(false, {
    transform: booleanAttribute
  });

  /** A flag that indicates if the button's click is disabled */
  disabled: InputSignalWithTransform<boolean, boolean | string> = input<boolean, boolean | string>(false, {
    transform: booleanAttribute
  });

  /** Share dialog opened event */
  opened: OutputEmitterRef<string> = output<string>();

}

/**
 * Explanation of the above code:
 * ------------------------------
 Include buttons: includes only wanted buttons and excludes the rest
 Exclude buttons: excludes only the unwanted buttons
 User buttons = Include buttons - exclude buttons
 Selected Buttons = User buttons [shown number]
 */
