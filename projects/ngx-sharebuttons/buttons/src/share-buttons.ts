import {
  Component,
  Input,
  Output,
  inject,
  computed,
  numberAttribute,
  booleanAttribute,
  input,
  model,
  EventEmitter,
  Signal,
  InputSignal,
  ModelSignal,
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
  standalone: true,
  selector: 'share-buttons',
  templateUrl: './share-buttons.html',
  styleUrls: ['./share-buttons.scss'],
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

  @Input() theme: string = this.options.theme;

  /** The sharing link */
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

  /** Show buttons icons */
  @Input({ transform: booleanAttribute }) showIcon: boolean = true;

  /** Show buttons text */
  @Input({ transform: booleanAttribute }) showText: boolean = false;

  /** A flag that indicates if the button's click is disabled */
  @Input({ transform: booleanAttribute }) disabled: boolean;

  /** Share dialog opened event */
  @Output() opened: EventEmitter<string> = new EventEmitter<string>();

}

/**
 * Explanation of the above code:
 * ------------------------------
 Include buttons: includes only wanted buttons and excludes the rest
 Exclude buttons: excludes only the unwanted buttons
 User buttons = Include buttons - exclude buttons
 Selected Buttons = User buttons [shown number]
 */
