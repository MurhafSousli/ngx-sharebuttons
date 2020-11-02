import { InjectionToken } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { Observable, Subject } from 'rxjs';

export const SHARE_BUTTONS_CONFIG = new InjectionToken<ShareButtonsConfig>('shareButtonsConfig');

/**
 * Share buttons config
 */
export interface ShareButtonsConfig {
  sharerMethod?: SharerMethod;
  sharerTarget?: string;
  windowObj?: any;
  windowFuncName?: string;
  prop?: IShareButtons;
  theme?: string;
  include?: string[];
  exclude?: string[];
  size?: number;
  url?: string;
  title?: string;
  description?: string;
  image?: string;
  tags?: string;
  redirectUrl?: string;
  appId?: string;
  twitterAccount?: string;
  autoSetMeta?: boolean;
  gaTracking?: boolean;
  windowWidth?: number;
  windowHeight?: number;
  moreButtonIcon?: any;
  lessButtonIcon?: any;
  debug?: boolean;
}

/**
 * Share buttons collection
 */
export interface IShareButtons {
  facebook?: IShareButton;
  twitter?: IShareButton;
  linkedin?: IShareButton;
  google?: IShareButton;
  tumblr?: IShareButton;
  mix?: IShareButton;
  pinterest?: IShareButton;
  reddit?: IShareButton;
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
  /** Sharer target used in opening the share window */
  target?: string;
  /** Sharer method */
  method?: SharerMethod;
  /** Sharer base URL */
  share?: {
    desktop?: string;
    android?: string;
    ios?: string;
  };
  /** Sharer URL params */
  params?: ShareParams;
  /**
   * Params function: A function that resolves the param value (Advanced use)
   *  Use case: To define a custom template for share buttons like Email, whatsapp, telegram, sms ...etc
   */
  paramsFunc?: ShareParamsFuncMetaData;
  /**
   * Object used to attach additional data in a custom template for 'paramsFunc'
   */
  data?: any;
  /**
   * Some button do not open a share window, instead they execute a function like Print and Copy buttons.
   */
  func?: (args: { data: any; params: ShareParams; platform: Platform; updater: Subject<ShareDirectiveUpdater> }) => Observable<any>;
}

/**
 * Share params
 */
export interface ShareParams {
  url?: string;
  title?: string;
  description?: string;
  image?: string;
  tags?: string;
  via?: string;
  redirectUrl?: string;
  appId?: string;
}

/**
 * Share param function (Used to define message body template)
 */
export type ShareParamsFunc = (p: ShareParams) => string;

/**
 * Share params available functions
 */
interface ShareParamsFuncMetaData {
  url?: ShareParamsFunc;
  title?: ShareParamsFunc;
  description?: ShareParamsFunc;
  image?: ShareParamsFunc;
  tags?: ShareParamsFunc;
  via?: ShareParamsFunc;
  redirectUrl?: ShareParamsFunc;
  appId?: ShareParamsFunc;
}

/**
 * Share button function arguments (used in copyToClipboard as function arguments)
 */
export interface ShareButtonFuncArgs<T> {
  platform?: Platform;
  params?: ShareParams;
  data?: T;
  updater?: Subject<ShareDirectiveUpdater>;
}

/**
 * Share directive updater arguments (used in copyToClipboard to update button text and icon)
 */
export interface ShareDirectiveUpdater {
  icon: string | string[];
  text: string;
  disabled?: boolean;
}

export enum SharerMethod {
  Anchor = 'anchor',
  Window = 'window'
}
