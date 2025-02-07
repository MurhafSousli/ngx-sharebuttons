import { InjectionToken, WritableSignal, EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { defaultOptions, ShareButtonProp } from './share.defaults';

export const SHARE_BUTTONS_CONFIG: InjectionToken<ShareButtonsConfig> = new InjectionToken<ShareButtonsConfig>('SHARE_BUTTONS_CONFIG', {
  providedIn: 'root',
  factory: () => defaultOptions
});

export const SHARE_ICONS: InjectionToken<unknown> = new InjectionToken('SHARE_ICONS');

export function provideShareButtonsOptions(...providers: EnvironmentProviders[]): EnvironmentProviders {
  return makeEnvironmentProviders(providers);
}

export function withConfig(options: ShareButtonsConfig): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: SHARE_BUTTONS_CONFIG,
      useValue: { ...defaultOptions, ...options }
    }
  ])
}

/**
 * Share buttons config
 */
export interface ShareButtonsConfig {
  sharerMethod?: SharerMethod;
  sharerTarget?: string;
  windowObj?: any;
  windowFuncName?: string;
  theme?: string;
  include?: ShareButtonProp[];
  exclude?: ShareButtonProp[];
  messengerAppId?: string;
  xAccount?: string;
  windowWidth?: number;
  windowHeight?: number;
  moreButtonIcon?: any;
  lessButtonIcon?: any;
  moreButtonAriaLabel?: string;
  lessButtonAriaLabel?: string;
  debug?: boolean;
}

/**
 * Share buttons collection
 */
export interface IShareButtons {
  facebook?: IShareButton;
  x?: IShareButton;
  linkedin?: IShareButton;
  google?: IShareButton;
  tumblr?: IShareButton;
  mix?: IShareButton;
  pinterest?: IShareButton;
  reddit?: IShareButton;
  viber?: IShareButton;
  vk?: IShareButton;
  telegram?: IShareButton;
  messenger?: IShareButton;
  whatsapp?: IShareButton;
  xing?: IShareButton;
  line?: IShareButton;
  sms?: IShareButton;
  email?: IShareButton;
  print?: IShareButton;
  copy?: IShareButton;
}

export class IShareButton {
  /** Share button type */
  type?: string;
  /** Share button text */
  text?: string;
  /** Share button aria label attribute */
  ariaLabel?: string;
  /** Share button icon (FontAwesome) */
  icon?: string | string[] | any;
  /** Share button color */
  color?: string;
  /** Sharer base URL */
  share?: {
    desktop?: string;
    android?: string;
    ios?: string;
  };
  /** Sharer URL params */
  params?: ShareParams;
  requiredParams?: ShareParams<boolean>;
  /**
   * Params function: A function that resolves the param value (Advanced use)
   *  Use case: To define a custom template for share buttons like Email, whatsapp, telegram, sms ...etc
   */
  paramsFunc?: ShareParams<ShareParamsFunc>;
  /**
   * Object used to attach additional data in a custom template for 'paramsFunc'
   */
  data?: any;
  /**
   * Some button do not open a share window, instead they execute a function like Print and Copy buttons.
   */
  func?: (args: ShareButtonFuncArgs<any>) => void;
}

/**
 * Share params
 */
export interface ShareParams<T = string> {
  url?: T;
  title?: T;
  description?: T;
  image?: T;
  tags?: T;
  via?: T;
  appId?: T;
  redirectUrl?: T;
}

/**
 * Share param function (Used to define message body template)
 */
export type ShareParamsFunc = (p: ShareParams) => string;

/**
 * Share button function arguments (used in copyToClipboard as function arguments)
 */
export interface ShareButtonFuncArgs<T> {
  clipboard?: Clipboard;
  params?: ShareParams;
  data?: T;
  uiState?: WritableSignal<ShareDirectiveUpdater>;
}

/**
 * Share directive updater arguments (used in copyToClipboard to update button text and icon)
 */
export interface ShareDirectiveUpdater {
  icon?: any;
  text?: string;
  disabled?: boolean;
}

export enum SharerMethods {
  Anchor = 'anchor',
  Window = 'window'
}

export type SharerMethod = SharerMethods | string;

