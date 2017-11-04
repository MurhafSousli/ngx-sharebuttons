export * from './facebook.class';
export * from './twitter.class';
export * from './linkedin.class';
export * from './tumblr.class';
export * from './whatsapp.class';
export * from './pinterest.class';
export * from './reddit.class';
export * from './google.class';
export * from './stumble.class';
export * from './telegram.class';
export * from './email.class';
export * from './copy.class';
export * from './print.class';
export * from './vk.class';

export const Buttons = {
  facebook: {
    type: 'facebook',
    text: 'Facebook',
    icon: 'fa fa-facebook',
    color: '#3b5998',
    supportCount: true,
    shareUrl: 'https://www.facebook.com/sharer/sharer.php?u=',
    androidUrl: 'com.facebook.katana',
    iosUrl: 'fb://',
    countUrl: 'https://graph.facebook.com?id='
  },
  twitter: {
    type: 'twitter',
    text: 'Twitter',
    icon: 'fa fa-twitter',
    color: '#00acee',
    supportCount: false,
    shareUrl: 'https://twitter.com/intent/tweet?url=',
    androidUrl: 'com.twitter.package',
    iosUrl: 'twitter://tweet?url='
  },
  google: {
    type: 'google',
    text: 'Google+',
    icon: 'fa fa-google-plus',
    color: '#DB4437',
    supportCount: false,
    shareUrl: 'https://plus.google.com/share?url=',
    androidUrl: '',
    iosUrl: '',
  },
  linkedin: {
    type: 'linkedin',
    text: 'LinkedIn',
    icon: 'fa fa-linkedin',
    color: '#006fa6',
    supportCount: true,
    shareUrl: 'http://www.linkedin.com/shareArticle?url=',
    androidUrl: 'com.linkedin.android',
    iosUrl: 'linkedin://',
    countUrl: 'https://www.linkedin.com/countserv/count/share?url='
  },
  pinterest: {
    type: 'pinterest',
    text: 'Pinterest',
    icon: 'fa fa-pinterest-p',
    color: '#BD091D',
    supportCount: true,
    shareUrl: 'https://in.pinterest.com/pin/create/button/?url=',
    androidUrl: '',
    iosUrl: '',
    countUrl: 'https://api.pinterest.com/v1/urls/count.json?callback=receiveCount&url='
  },
  reddit: {
    type: 'reddit',
    text: 'Reddit',
    icon: 'fa fa-reddit-alien',
    color: '#FF4006',
    supportCount: true,
    shareUrl: 'http://www.reddit.com/submit?url=',
    androidUrl: '',
    iosUrl: '',
    countUrl: 'https://buttons.reddit.com/button_info.json?url='
  },
  tumblr: {
    type: 'tumblr',
    text: 'Tumblr',
    icon: 'fa fa-tumblr',
    color: '#36465D',
    supportCount: true,
    shareUrl: 'http://tumblr.com/widgets/share/tool?canonicalUrl=',
    androidUrl: '',
    iosUrl: '',
    countUrl: 'https://api.tumblr.com/v2/share/stats?url='
  },
  print: {
    type: 'print',
    text: 'Print',
    icon: 'fa fa-print',
    color: 'brown',
    supportCount: false
  },
  stumble: {
    type: 'stumble',
    text: 'Stumble',
    icon: 'fa fa-stumbleupon',
    color: '#eb4924',
    supportCount: false,
    shareUrl: 'http://www.stumbleupon.com/submit?url=',
    androidUrl: '',
    iosUrl: ''
  },
  telegram: {
    type: 'telegram',
    text: 'Telegram',
    icon: 'fa fa-send',
    color: '#0088cc',
    supportCount: false,
    shareUrl: 'https://t.me/share/url?url=',
    androidUrl: '',
    iosUrl: ''
  },
  vk: {
    type: 'vk',
    text: 'VKontakte',
    icon: 'fa fa-vk',
    color: '#4C75A3',
    supportCount: false,
    shareUrl: 'http://vk.com/share.php?url=',
    androidUrl: '',
    iosUrl: ''
  },
  copy: {
    type: 'copy',
    text: 'Copy link',
    successText: 'Copied',
    successIcon: 'fa fa-check',
    failText: 'Error',
    failIcon: 'fa fa-exclamation',
    icon: 'fa fa-link',
    color: '#607D8B',
    supportCount: false
  },
  whatsapp: {
    type: 'whatsapp',
    text: 'WhatsApp',
    icon: 'fa fa-whatsapp',
    color: '#25D366',
    supportCount: false,
    shareUrl: 'https://web.whatsapp.com/send?text=',
    androidUrl: 'com.whatsapp.package',
    iosUrl: 'whatsapp://?text='
  },
  email: {
    type: 'email',
    text: 'Email',
    icon: 'fa fa-envelope',
    color: '#32A1A3',
    supportCount: false,
    shareUrl: 'mailto:?'
  }
};
