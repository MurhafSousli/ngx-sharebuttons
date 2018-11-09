import { InjectionToken, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { OperatorFunction } from 'rxjs';

export const CONFIG = new InjectionToken<ShareButtonsConfig>('SHARE_BUTTONS_CONFIG');
/**
 * Share buttons global config
 */
export interface ShareButtonsConfig {
  options?: ShareButtonsOptions;
  prop?: IShareButtons | any;
}

/**
 * Share buttons global options
 */
export interface ShareButtonsOptions {
  theme?: string;
  include?: string[];
  exclude?: string[];
  size?: number;
  url?: string;
  title?: string;
  description?: string;
  image?: string;
  tags?: string;
  twitterAccount?: string;
  autoSetMeta?: boolean;
  gaTracking?: boolean;
  windowWidth?: number;
  windowHeight?: number;
  moreButtonIcon?: any;
  lessButtonIcon?: any;
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
  stumble?: IShareButton;
  pinterest?: IShareButton;
  reddit?: IShareButton;
  vk?: IShareButton;
  telegram?: IShareButton;
  messenger?: IShareButton;
  whatsapp?: IShareButton;
  xing?: IShareButton;
  sms?: IShareButton;
  email?: IShareButton;
  print?: IShareButton;
  copy?: IShareButton;
}

/**
 * Share button properties
 */
export interface IShareButton {
  text?: string;
  icon?: any;
  type?: string;
  color?: string;
  ariaLabel?: string;
  successText?: string;
  successIcon?: any;
  failText?: string;
  failIcon?: any;
  share?: {
    desktop?: string;
    android?: string;
    ios?: string;
    operators?: OperatorFunction<any, any>[];
    metaTags?: any;
  };
  count?: IShareCount;
}

export interface IShareCount {
  request?: string;
  url?: string;
  args?: any;
  operators?: OperatorFunction<any, any>[];
}

/**
 * Share button directive ref interface
 * This ref to be used in the share operators
 */
export interface ShareButtonRef {
  prop?: IShareButton;
  renderer?: Renderer2;
  cd?: ChangeDetectorRef;
  el?: HTMLElement;
  document?: any;
  platform?: string;
  temp?: any;
  metaTags: {
    url?: string;
    title?: string;
    description?: string;
    image?: string;
    tags?: string;
    via?: string;
  };
}
