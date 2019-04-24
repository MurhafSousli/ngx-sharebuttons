import { InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@angular/cdk/platform';
import { ShareButtonBase } from './buttons';

export const SHARE_BUTTONS_CONFIG = new InjectionToken<ShareButtonsConfig>('shareButtonsConfig');

/**
 * Share buttons config
 */
export interface ShareButtonsConfig {
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
  twitterAccount?: string;
  fbAccessToken?: string;
  autoSetMeta?: boolean;
  gaTracking?: boolean;
  windowWidth?: number;
  windowHeight?: number;
  moreButtonIcon?: any;
  lessButtonIcon?: any;
  debug?: boolean;
}

/**
 * OG meta tags
 */
export interface ShareMetaTags {
  url?: string;
  title?: string;
  description?: string;
  image?: string;
  tags?: string;
  via?: string;
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

/**
 * Share button properties
 */
export interface IShareButton {
  /** A function that returns a new share button object  */
  create?: (
    prop: IShareButton,
    url: () => string,
    http: HttpClient,
    platform: Platform,
    document: Document,
    windowSize: string,
    disableButton: (disable: boolean) => void,
    logger: (text: string) => void
  ) => ShareButtonBase;
  /** Share button text */
  text?: string;
  /** Share button icon (FontAwesome) */
  icon?: any;
  /** Share button color */
  color?: string;
  /** Share button aria label attribute */
  ariaLabel?: string;
  /** Used to attach more properties for certain buttons */
  extra?: any;
}

/**
 * Additional parameters when call for share API
 */
export interface ShareApiOption {
  fbAccessToken?: string;
}
