import {
  Directive,
  inject,
  signal,
  effect,
  output,
  computed,
  untracked,
  input,
  Signal,
  ElementRef,
  InputSignal,
  WritableSignal,
  OutputEmitterRef,
} from '@angular/core';

import { ShareService } from './share.service';
import {
  IShareButton,
  IShareButtons,
  ShareButtonsConfig,
  ShareDirectiveUpdater,
  SHARE_BUTTONS_CONFIG,
} from './share.models';
import { ShareButtonProp } from './share.defaults';
import { SHARE_BUTTONS_PROP } from './custom-share-button-provider';

@Directive({
  selector: '[shareButton]',
  exportAs: 'shareButton',
  host: {
    '[style.--button-color]': 'color()',
    '[attr.aria-label]': 'shareButtonInstance().ariaLabel',
    '(click)': 'share()'
  }
})
export class ShareButtonDirective {

  private readonly shareButtonsProps: IShareButtons = inject(SHARE_BUTTONS_PROP);

  /** Injected options */
  private readonly options: ShareButtonsConfig = inject(SHARE_BUTTONS_CONFIG);

  /** Share directive element ref */
  private readonly shareService: ShareService = inject(ShareService);

  private readonly nativeElement: HTMLElement = inject(ElementRef<HTMLElement>).nativeElement;

  /** Share button UI state */
  uiState: WritableSignal<ShareDirectiveUpdater> = signal({});

  /** Share button color */
  color: Signal<string> = computed(() => this.shareButtonInstance().color);

  /** Share button text */
  text: Signal<string> = computed(() => this.uiState().text);

  /** Share button icon */
  icon: Signal<any> = computed(() => this.uiState().icon);

  /** Share button disabled */
  disabled: Signal<boolean> = computed(() => this.uiState().disabled);

  /** Share button type */
  shareButton: InputSignal<ShareButtonProp> = input.required<ShareButtonProp>();

  shareButtonInstance: Signal<IShareButton> = computed<IShareButton>(() => {
    return this.shareButtonsProps[this.shareButton()];
  });

  /** Sets the title parameter */
  title: InputSignal<string> = input<string>();

  /** Sets the description parameter */
  description: InputSignal<string> = input<string>();

  /** Sets the image parameter for sharing on Pinterest */
  image: InputSignal<string> = input<string>();

  /** Sets the tags parameter for sharing on X and Tumblr */
  tags: InputSignal<string> = input<string>();

  /** Sets the fb messenger redirect url to enable sharing on Messenger desktop */
  redirectUrl: InputSignal<string> = input<string>();

  /** Sharing link */
  url: InputSignal<string> = input<string>();

  /** Stream that emits when share dialog is opened */
  opened: OutputEmitterRef<string> = output<string>();

  constructor() {
    effect(() => {
      const button: IShareButton = this.shareButtonInstance();

      if (!button) {
        throw new Error(`[ShareButtons]: The share button '${ this.shareButton() }' does not exist!`);
      }
      untracked(() => {
        // Set share button properties
        this.uiState.set({
          icon: button.icon,
          text: button.text,
          disabled: false
        });
      });
    });

    effect(() => {
      // Set disabled attribute only when disabled state is true, because disabled="false" will also disable the button
      this.nativeElement.toggleAttribute('disabled', this.uiState().disabled);
    });
  }

  /**
   * Share the link
   */
  share(): void {
    this.shareService.openInstance({
      params: {
        url: this.url(),
        title: this.title(),
        description: this.description(),
        image: this.image(),
        tags: this.tags(),
        redirectUrl: this.redirectUrl()
      },
      target: this.options.sharerTarget,
      debug: this.options.debug,
      method: this.options.sharerMethod,
      uiState: this.uiState,
    }, this.shareButtonInstance());

    // Emit after share action is done
    this.opened.emit(this.shareButton());
  }
}
