import {
  Directive,
  Input,
  Output,
  HostListener,
  inject,
  signal,
  effect,
  computed,
  input,
  EventEmitter,
  ElementRef,
  Signal,
  InputSignal,
  WritableSignal
} from '@angular/core';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

import { ShareService } from './share.service';
import {
  IShareButton,
  IShareButtons,
  ShareButtonsConfig,
  ShareDirectiveUpdater,
  SHARE_BUTTONS_CONFIG,
} from './share.models';
import { DEFAULT_OPTIONS, SHARE_BUTTONS, ShareButtonProp } from './share.defaults';
import { SHARE_BUTTONS_PROP } from './custom-share-button-provider';

@Directive({
  standalone: true,
  selector: '[shareButton]',
  exportAs: 'shareButton',
  host: {
    '[style.--button-color]': 'color()',
    '[attr.aria-label]': 'shareButtonInstance().ariaLabel',
  }
})
export class ShareButtonDirective {

  private readonly injectedProps: IShareButtons = inject(SHARE_BUTTONS_PROP, { optional: true });

  /** Injected options */
  private readonly injectedOptions: ShareButtonsConfig = inject(SHARE_BUTTONS_CONFIG, { optional: true }) || {};

  /** Share directive element ref */
  private readonly shareService: ShareService = inject(ShareService);

  private nativeElement: HTMLElement = inject(ElementRef).nativeElement;

  /** Share button UI state */
  uiState: WritableSignal<ShareDirectiveUpdater> = signal({});

  /** Share button color */
  color: Signal<string> = computed(() => this.shareButtonInstance().color);

  /** Share button text */
  text: Signal<string> = computed(() => this.uiState().text);

  /** Share button icon */
  icon: Signal<IconProp> = computed(() => this.uiState().icon);

  /** Share button disabled */
  disabled: Signal<boolean> = computed(() => this.uiState().disabled);

  /** Share button type */
  shareButton: InputSignal<ShareButtonProp> = input.required<ShareButtonProp>();

  shareButtonInstance: Signal<IShareButton> = computed<IShareButton>(() => {
    /** Combine injected option with default options */
    const key: string = this.shareButton();
    const button: IShareButton = this.injectedProps ? { ...SHARE_BUTTONS[key], ...this.injectedProps[key] } : SHARE_BUTTONS[key];

    if (button) {
      return button;
    }
    throw new Error(`[ShareButtons]: The share button '${ button }' does not exist!`);
  });

  /** Sets the title parameter */
  @Input() title: string;

  /** Sets the description parameter */
  @Input() description: string;

  /** Sets the image parameter for sharing on Pinterest */
  @Input() image: string;

  /** Sets the tags parameter for sharing on X and Tumblr */
  @Input() tags: string;

  /** Sets the fb messenger redirect url to enable sharing on Messenger desktop */
  @Input() redirectUrl: string;

  /** Sharing link */
  @Input() url: string;

  /** Stream that emits when share dialog is opened */
  @Output() opened: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    effect(() => {
      const button: IShareButton = this.shareButtonInstance();
      // Set share button properties
      this.uiState.set({
        icon: button.icon,
        text: button.text,
        disabled: false
      });
    }, { allowSignalWrites: true });

    effect(() => {
      // Set disabled attribute only when disabled state is true, because disabled="false" will also disable the button
      this.nativeElement.toggleAttribute('disabled', this.uiState().disabled);
    });
  }

  /**
   * Share the link
   */
  @HostListener('click')
  share(): void {
    this.shareService.openInstance({
      params: {
        url: this.url,
        title: this.title,
        description: this.description,
        image: this.image,
        tags: this.tags,
        redirectUrl: this.redirectUrl
      },
      target: this.injectedOptions.sharerTarget || DEFAULT_OPTIONS.sharerTarget,
      debug: this.injectedOptions.debug || DEFAULT_OPTIONS.debug,
      method: this.injectedOptions.sharerMethod || DEFAULT_OPTIONS.sharerMethod,
      uiState: this.uiState,
    }, this.shareButtonInstance());

    // Emit after share action is done
    this.opened.emit(this.shareButton());
  }
}
