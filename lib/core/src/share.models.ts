import { ChangeDetectorRef, Renderer2 } from '@angular/core';

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
  gaTracking?: boolean;
  windowWidth?: number;
  windowHeight?: number;
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
  icon?: string;
  type?: string;
  color?: string;
  successText?: string;
  successIcon?: string;
  failText?: string;
  failIcon?: string;
  share?: {
    desktop?: string;
    android?: string;
    ios?: string;
    operators?: any;
    metaTags?: any;
  };
  count?: {
    request?: string;
    url?: string;
    args?: any;
    operators?: any;
  };
}

/**
 * Share button directive ref interface
 * This ref to be used in the share operators
 */
export interface ShareButtonRef {
  prop?: IShareButton;
  renderer?: Renderer2;
  window?: Window;
  cd?: ChangeDetectorRef;
  el?: HTMLElement;
  os?: string;
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
