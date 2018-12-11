import {
  CopyButton,
  EmailButton,
  FacebookButton,
  GooglePlusButton,
  LinkedinButton,
  MessengerButton,
  MixButton,
  PinterestButton,
  PrintButton,
  RedditButton,
  SmsButton,
  TelegramButton,
  TumblrButton,
  TwitterButton,
  VkButton,
  WhatsappButton,
  XingButton
} from './buttons';
import { IShareButtons } from './share.models';


/**
 * Default share buttons properties
 */
export const SHARE_BUTTONS: IShareButtons = {
  facebook: {
    create: (a, b, c, d, e, f, g) => new FacebookButton(a, b, c, d, e, f, g),
    text: 'Facebook',
    icon: ['fab', 'facebook-f'],
    color: '#4267B2',
    ariaLabel: 'Share on Facebook'
  },
  twitter: {
    create: (a, b, c, d, e, f, g) => new TwitterButton(a, b, c, d, e, f, g),
    text: 'Twitter',
    icon: ['fab', 'twitter'],
    color: '#00acee',
    ariaLabel: 'Share on Twitter'
  },
  linkedin: {
    create: (a, b, c, d, e, f, g) => new LinkedinButton(a, b, c, d, e, f, g),
    text: 'LinkedIn',
    icon: ['fab', 'linkedin-in'],
    color: '#006fa6',
    ariaLabel: 'Share on LinkedIn'
  },
  google: {
    create: (a, b, c, d, e, f, g) => new GooglePlusButton(a, b, c, d, e, f, g),
    text: 'Google+',
    icon: ['fab', 'google-plus-g'],
    color: '#DB4437',
    ariaLabel: 'Share on Google plus'
  },
  pinterest: {
    create: (a, b, c, d, e, f, g) => new PinterestButton(a, b, c, d, e, f, g),
    text: 'Pinterest',
    icon: ['fab', 'pinterest-p'],
    color: '#BD091D',
    ariaLabel: 'Share on Pinterest'
  },
  reddit: {
    create: (a, b, c, d, e, f, g) => new RedditButton(a, b, c, d, e, f, g),
    text: 'Reddit',
    icon: ['fab', 'reddit-alien'],
    color: '#FF4006',
    ariaLabel: 'Share on Reddit'
  },
  tumblr: {
    create: (a, b, c, d, e, f, g) => new TumblrButton(a, b, c, d, e, f, g),
    text: 'Tumblr',
    icon: ['fab', 'tumblr'],
    color: '#36465D',
    ariaLabel: 'Share on Tumblr'
  },
  mix: {
    create: (a, b, c, d, e, f, g) => new MixButton(a, b, c, d, e, f, g),
    text: 'Mix',
    icon: ['fab', 'mix'],
    color: '#ff8226',
    ariaLabel: 'Share on Mix'
  },
  vk: {
    create: (a, b, c, d, e, f, g) => new VkButton(a, b, c, d, e, f, g),
    text: 'VKontakte',
    icon: ['fab', 'vk'],
    color: '#4C75A3',
    ariaLabel: 'Share on VKontakte'
  },
  telegram: {
    create: (a, b, c, d, e, f, g) => new TelegramButton(a, b, c, d, e, f, g),
    text: 'Telegram',
    icon: ['fab', 'telegram-plane'],
    color: '#0088cc',
    ariaLabel: 'Share on Telegram'
  },
  messenger: {
    create: (a, b, c, d, e, f, g) => new MessengerButton(a, b, c, d, e, f, g),
    text: 'Messenger',
    icon: ['fab', 'facebook-messenger'],
    color: '#0080FF',
    ariaLabel: 'Share on Messenger'
  },
  whatsapp: {
    create: (a, b, c, d, e, f, g) => new WhatsappButton(a, b, c, d, e, f, g),
    text: 'WhatsApp',
    icon: ['fab', 'whatsapp'],
    color: '#25D366',
    ariaLabel: 'Share on WhatsApp'
  },
  xing: {
    create: (a, b, c, d, e, f, g) => new XingButton(a, b, c, d, e, f, g),
    text: 'Xing',
    icon: ['fab', 'xing'],
    color: '#006567',
    ariaLabel: 'Share on Xing'
  },
  sms: {
    create: (a, b, c, d, e, f, g) => new SmsButton(a, b, c, d, e, f, g),
    text: 'SMS',
    icon: 'comment-alt',
    color: '#20c16c',
    ariaLabel: 'Share link via SMS'
  },
  email: {
    create: (a, b, c, d, e, f, g) => new EmailButton(a, b, c, d, e, f, g),
    text: 'Email',
    icon: 'envelope',
    color: '#FF961C',
    ariaLabel: 'Share link via email'
  },
  print: {
    create: (a, b, c, d, e, f, g) => new PrintButton(a, b, c, d, e, f, g),
    text: 'Print',
    icon: 'print',
    color: '#765AA2',
    ariaLabel: 'Print page'
  },
  copy: {
    create: (a, b, c, d, e, f, g) => new CopyButton(a, b, c, d, e, f, g),
    text: 'Copy link',
    icon: 'link',
    color: '#607D8B',
    ariaLabel: 'Copy link',
    extra: {
      successLabel: 'Copied',
      successIcon: 'check'
    }
  },
};
