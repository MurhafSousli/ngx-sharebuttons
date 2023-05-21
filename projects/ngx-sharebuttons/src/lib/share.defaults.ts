import { IShareButtons, ShareParams } from './share.models';
import { copyToClipboard, printPage } from './utils';

// Create message body that includes the sharing link used for Email, SMS and WhatsApp buttons
const linkInDescription = {
  description: (p: ShareParams) => {
    return p.description ? `${ p.description }\r\n${ p.url }` : p.url;
  }
};

export const SHARE_BUTTONS: IShareButtons = {
  facebook: {
    type: 'facebook',
    text: 'Facebook',
    ariaLabel: 'Share on Facebook',
    icon: ['fab', 'facebook-f'],
    color: '#4267B2',
    share: {
      desktop: 'https://www.facebook.com/sharer/sharer.php?'
    },
    params: {
      url: 'u'
    }
  },
  twitter: {
    type: 'twitter',
    text: 'Twitter',
    ariaLabel: 'Share on Twitter',
    icon: ['fab', 'twitter'],
    color: '#00acee',
    share: {
      desktop: 'https://twitter.com/intent/tweet?'
    },
    params: {
      url: 'url',
      description: 'text',
      tags: 'hashtags',
      via: 'via'
    }
  },
  linkedin: {
    type: 'linkedin',
    text: 'LinkedIn',
    ariaLabel: 'Share on LinkedIn',
    icon: ['fab', 'linkedin-in'],
    color: '#006fa6',
    share: {
      desktop: 'https://www.linkedin.com/shareArticle?'
    },
    params: {
      url: 'url',
      title: 'title',
      description: 'summary'
    }
  },
  pinterest: {
    type: 'pinterest',
    text: 'Pinterest',
    ariaLabel: 'Share on Pinterest',
    icon: ['fab', 'pinterest-p'],
    color: '#BD091D',
    share: {
      desktop: 'https://pinterest.com/pin/create/button/?'
    },
    params: {
      url: 'url',
      description: 'description',
      image: 'media'
    }
  },
  reddit: {
    type: 'reddit',
    text: 'Reddit',
    ariaLabel: 'Share on Reddit',
    icon: ['fab', 'reddit-alien'],
    color: '#FF4006',
    share: {
      desktop: 'https://www.reddit.com/submit?'
    },
    params: {
      url: 'url',
      title: 'title'
    }
  },
  tumblr: {
    type: 'tumblr',
    text: 'Tumblr',
    ariaLabel: 'Share on Tumblr',
    icon: ['fab', 'tumblr'],
    color: '#36465D',
    share: {
      desktop: 'https://tumblr.com/widgets/share/tool?'
    },
    params: {
      url: 'canonicalUrl',
      description: 'caption',
      tags: 'tags'
    }
  },
  mix: {
    type: 'mix',
    text: 'Mix',
    ariaLabel: 'Share on Mix',
    icon: ['fab', 'mix'],
    color: '#eb4924',
    share: {
      desktop: 'https://mix.com/add?'
    },
    params: {
      url: 'url'
    }
  },
  viber: {
    type: 'viber',
    text: 'Viber',
    ariaLabel: 'Share on Viber',
    icon: ['fab', 'viber'],
    color: '#665ca7',
    share: {
      android: 'viber://forward?',
      ios: 'viber://forward?'
    },
    params: {
      description: 'text'
    },
    paramsFunc: linkInDescription
  },
  vk: {
    type: 'vk',
    text: 'VKontakte',
    ariaLabel: 'Share on VKontakte',
    icon: ['fab', 'vk'],
    color: '#4C75A3',
    share: {
      desktop: 'https://vk.com/share.php?'
    },
    params: {
      url: 'url'
    }
  },
  telegram: {
    type: 'telegram',
    text: 'Telegram',
    ariaLabel: 'Share on Telegram',
    icon: ['fab', 'telegram-plane'],
    color: '#0088cc',
    share: {
      desktop: 'https://t.me/share/url?'
    },
    params: {
      url: 'url',
      description: 'text'
    }
  },
  messenger: {
    type: 'messenger',
    text: 'Messenger',
    ariaLabel: 'Share on Messenger',
    icon: ['fab', 'facebook-messenger'],
    color: '#0080FF',
    share: {
      desktop: 'https://www.facebook.com/dialog/send?',
      android: 'fb-messenger://share/?',
      ios: 'fb-messenger://share/?'
    },
    params: {
      url: 'link',
      appId: 'app_id',
      redirectUrl: 'redirect_uri'
    }
  },
  whatsapp: {
    type: 'whatsapp',
    text: 'WhatsApp',
    ariaLabel: 'Share on WhatsApp',
    icon: ['fab', 'whatsapp'],
    color: '#25D366',
    share: {
      desktop: 'https://api.whatsapp.com/send?',
      android: 'whatsapp://send?',
      ios: 'https://api.whatsapp.com/send?'
    },
    params: {
      url: 'link',
      description: 'text'
    },
    paramsFunc: linkInDescription
  },
  xing: {
    type: 'xing',
    text: 'Xing',
    ariaLabel: 'Share on Xing',
    icon: ['fab', 'xing'],
    color: '#006567',
    share: {
      desktop: 'https://www.xing.com/spi/shares/new?'
    },
    params: {
      url: 'url'
    }
  },
  line: {
    type: 'line',
    text: 'Line',
    ariaLabel: 'Share on Line',
    icon: ['fab', 'line'],
    color: '#00b900',
    share: {
      desktop: 'https://social-plugins.line.me/lineit/share?'
    },
    params: {
      url: 'url'
    }
  },
  sms: {
    type: 'sms',
    text: 'SMS',
    ariaLabel: 'Share link via SMS',
    icon: ['fas', 'sms'],
    color: '#20c16c',
    share: {
      desktop: 'sms:?',
      ios: 'sms:&'
    },
    params: {
      description: 'body'
    },
    paramsFunc: linkInDescription
  },
  email: {
    type: 'email',
    text: 'Email',
    ariaLabel: 'Share link via email',
    icon: ['fas', 'envelope'],
    color: '#FF961C',
    share: {
      desktop: 'mailto:?'
    },
    params: {
      title: 'subject',
      description: 'body'
    },
    paramsFunc: linkInDescription
  },
  print: {
    type: 'print',
    text: 'Print',
    ariaLabel: 'Print page',
    icon: ['fas', 'print'],
    color: '#765AA2',
    func: printPage
  },
  copy: {
    type: 'copy',
    text: 'Copy link',
    ariaLabel: 'Copy link',
    icon: ['fas', 'link'],
    color: '#607D8B',
    data: {
      text: 'Copy link',
      icon: ['fas', 'link'],
      successText: 'Copied',
      successIcon: ['fas', 'check'],
      delay: 2000
    },
    func: copyToClipboard
  }
};

export type shareButtonName = string | 'facebook' | 'twitter' | 'pinterest' | 'linkedin' | 'email' | 'print' | 'reddit' | 'copy' | 'xing' | 'line' | 'sms' | 'tumblr' | 'whatsapp' | 'messenger' | 'telegram' | 'vk' | 'viber' | 'mix';
