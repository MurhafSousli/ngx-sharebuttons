import { Observable } from 'rxjs/Observable';
import { ShareButtonDirective } from '../directives/share-button.directive';

export interface ShareButtonsOptions {
  theme?: string;
  include?: string[];
  exclude?: string[];
  size?: number;
  title?: string;
  description?: string;
  image?: string;
  tags?: string;
  twitterAccount?: string;
  dialogWidth?: number;
  dialogHeight?: number;
  gaTracking?: boolean;
}

export interface ShareButtonsMeta {
  facebook?: ShareButtonProp;
  twitter?: ShareButtonProp;
  linkedin?: ShareButtonProp;
  google?: ShareButtonProp;
  tumblr?: ShareButtonProp;
  stumble?: ShareButtonProp;
  pinterest?: ShareButtonProp;
  reddit?: ShareButtonProp;
  vk?: ShareButtonProp;
  telegram?: ShareButtonProp;
  whatsapp?: ShareButtonProp;
  email?: ShareButtonProp;
  print?: ShareButtonProp;
  copy?: ShareButtonProp;
}

export interface ShareButtonProp {
  text?: string;
  icon?: string;
  supportCount?: boolean;
  type?: string;
  color?: string;
  shareUrl?: string;
  androidUrl?: string;
  iosUrl?: string;
  countUrl?: string;
  successText?: string;
  successIcon?: string;
  failText?: string;
  failIcon?: string;
}

export interface IShareButton {
  prop: ShareButtonProp;
  link(url: string, args?: ShareButtonArgs): string;
  count(url: string): Observable<any>;
}

export interface ShareButtonArgs {
  title?: string;
  description?: string;
  image?: string;
  via?: string;
  tags?: string;
  email?: string;
  mobile?: string;
  directive?: ShareButtonDirective;
}
