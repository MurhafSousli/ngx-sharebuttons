import {
  CopyButton,
  EmailButton,
  FacebookButton,
  GooglePlusButton,
  LineButton,
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
    create: (a, b, c, d, e, f, g, h) => new FacebookButton(a, b, c, d, e, f, g, h),
    text: 'Facebook',
    icon: ['fab', 'facebook-f'],
    color: '#4267B2',
    ariaLabel: 'Share on Facebook'
  },
  twitter: {
    create: (a, b, c, d, e, f, g, h) => new TwitterButton(a, b, c, d, e, f, g, h),
    text: 'Twitter',
    icon: ['fab', 'twitter'],
    color: '#00acee',
    ariaLabel: 'Share on Twitter'
  },
  linkedin: {
    create: (a, b, c, d, e, f, g, h) => new LinkedinButton(a, b, c, d, e, f, g, h),
    text: 'LinkedIn',
    icon: ['fab', 'linkedin-in'],
    color: '#006fa6',
    ariaLabel: 'Share on LinkedIn'
  },
  google: {
    create: (a, b, c, d, e, f, g, h) => new GooglePlusButton(a, b, c, d, e, f, g, h),
    text: 'Google+',
    icon: ['fab', 'google-plus-g'],
    color: '#DB4437',
    ariaLabel: 'Share on Google plus'
  },
  pinterest: {
    create: (a, b, c, d, e, f, g, h) => new PinterestButton(a, b, c, d, e, f, g, h),
    text: 'Pinterest',
    icon: ['fab', 'pinterest-p'],
    color: '#BD091D',
    ariaLabel: 'Share on Pinterest'
  },
  reddit: {
    create: (a, b, c, d, e, f, g, h) => new RedditButton(a, b, c, d, e, f, g, h),
    text: 'Reddit',
    icon: ['fab', 'reddit-alien'],
    color: '#FF4006',
    ariaLabel: 'Share on Reddit'
  },
  tumblr: {
    create: (a, b, c, d, e, f, g, h) => new TumblrButton(a, b, c, d, e, f, g, h),
    text: 'Tumblr',
    icon: ['fab', 'tumblr'],
    color: '#36465D',
    ariaLabel: 'Share on Tumblr'
  },
  mix: {
    create: (a, b, c, d, e, f, g, h) => new MixButton(a, b, c, d, e, f, g, h),
    text: 'Mix',
    icon: ['fab', 'mix'],
    color: '#ff8226',
    ariaLabel: 'Share on Mix'
  },
  vk: {
    create: (a, b, c, d, e, f, g, h) => new VkButton(a, b, c, d, e, f, g, h),
    text: 'VKontakte',
    icon: ['fab', 'vk'],
    color: '#4C75A3',
    ariaLabel: 'Share on VKontakte'
  },
  telegram: {
    create: (a, b, c, d, e, f, g, h) => new TelegramButton(a, b, c, d, e, f, g, h),
    text: 'Telegram',
    icon: ['fab', 'telegram-plane'],
    color: '#0088cc',
    ariaLabel: 'Share on Telegram'
  },
  messenger: {
    create: (a, b, c, d, e, f, g, h) => new MessengerButton(a, b, c, d, e, f, g, h),
    text: 'Messenger',
    icon: ['fab', 'facebook-messenger'],
    color: '#0080FF',
    ariaLabel: 'Share on Messenger'
  },
  whatsapp: {
    create: (a, b, c, d, e, f, g, h) => new WhatsappButton(a, b, c, d, e, f, g, h),
    text: 'WhatsApp',
    icon: ['fab', 'whatsapp'],
    color: '#25D366',
    ariaLabel: 'Share on WhatsApp'
  },
  xing: {
    create: (a, b, c, d, e, f, g, h) => new XingButton(a, b, c, d, e, f, g, h),
    text: 'Xing',
    icon: ['fab', 'xing'],
    color: '#006567',
    ariaLabel: 'Share on Xing'
  },
  line: {
    create: (a, b, c, d, e, f, g, h) => new LineButton(a, b, c, d, e, f, g, h),
    text: 'Line',
    icon: ['fab', 'line'],
    color: '#00b900',
    ariaLabel: 'Share on Line'
  },
  sms: {
    create: (a, b, c, d, e, f, g, h) => new SmsButton(a, b, c, d, e, f, g, h),
    text: 'SMS',
    icon: 'comment-alt',
    color: '#20c16c',
    ariaLabel: 'Share link via SMS'
  },
  email: {
    create: (a, b, c, d, e, f, g, h) => new EmailButton(a, b, c, d, e, f, g, h),
    text: 'Email',
    icon: 'envelope',
    color: '#FF961C',
    ariaLabel: 'Share link via email'
  },
  print: {
    create: (a, b, c, d, e, f, g, h) => new PrintButton(a, b, c, d, e, f, g, h),
    text: 'Print',
    icon: 'print',
    color: '#765AA2',
    ariaLabel: 'Print page'
  },
  copy: {
    create: (a, b, c, d, e, f, g, h) => new CopyButton(a, b, c, d, e, f, g, h),
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
