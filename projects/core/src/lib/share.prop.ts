import {
  metaTagsOperators,
  printOperators,
  copyOperators,
  urlInMessageOperators,
  FacebookCountOperators,
  PinterestCountOperators,
  TumblrCountOperators
} from './share.operators';
import { IShareButtons } from './share.models';

export const shareButtonsProp: IShareButtons = {
  facebook: {
    type: 'facebook',
    text: 'Facebook',
    icon: ['fab', 'facebook-f'],
    color: '#4267B2',
    share: {
      desktop: 'https://www.facebook.com/sharer/sharer.php?',
      android: 'https://www.facebook.com/sharer/sharer.php?',
      ios: 'https://www.facebook.com/sharer/sharer.php?',
      operators: metaTagsOperators,
      metaTags: {
        url: 'u'
      }
    },
    count: {
      request: 'http',
      url: 'https://graph.facebook.com?id=',
      operators: FacebookCountOperators
    }
  },
  twitter: {
    type: 'twitter',
    text: 'Twitter',
    icon: ['fab', 'twitter'],
    color: '#00acee',
    share: {
      desktop: 'https://twitter.com/intent/tweet?',
      android: 'https://twitter.com/intent/tweet?',
      ios: 'https://twitter.com/intent/tweet?',
      operators: metaTagsOperators,
      metaTags: {
        url: 'url',
        description: 'text',
        tags: 'hashtags',
        via: 'via'
      }
    }
  },
  google: {
    type: 'google',
    text: 'Google+',
    icon: ['fab', 'google-plus-g'],
    color: '#DB4437',
    share: {
      desktop: 'https://plus.google.com/share?',
      android: 'https://plus.google.com/share?',
      ios: 'https://plus.google.com/share?',
      metaTags: {
        url: 'url',
      },
      operators: metaTagsOperators
    }
  },
  linkedin: {
    type: 'linkedin',
    text: 'LinkedIn',
    icon: ['fab', 'linkedin-in'],
    color: '#006fa6',
    share: {
      desktop: 'http://www.linkedin.com/shareArticle?',
      android: 'http://www.linkedin.com/shareArticle?',
      ios: 'http://www.linkedin.com/shareArticle?',
      operators: metaTagsOperators,
      metaTags: {
        url: 'url',
        title: 'title',
        description: 'summary'
      },
    }
  },
  pinterest: {
    type: 'pinterest',
    text: 'Pinterest',
    icon: ['fab', 'pinterest-p'],
    color: '#BD091D',
    share: {
      desktop: 'https://in.pinterest.com/pin/create/button/?',
      android: 'https://in.pinterest.com/pin/create/button/?',
      ios: 'https://in.pinterest.com/pin/create/button/?',
      operators: metaTagsOperators,
      metaTags: {
        url: 'url',
        description: 'description',
        image: 'media'
      }
    },
    count: {
      request: 'http',
      url: 'https://api.pinterest.com/v1/urls/count.json?url=',
      args: {responseType: 'text'},
      operators: PinterestCountOperators
    }
  },
  reddit: {
    type: 'reddit',
    text: 'Reddit',
    icon: ['fab', 'reddit-alien'],
    color: '#FF4006',
    share: {
      desktop: 'http://www.reddit.com/submit?',
      android: 'http://www.reddit.com/submit?',
      ios: 'http://www.reddit.com/submit?',
      operators: metaTagsOperators,
      metaTags: {
        url: 'url',
        title: 'title'
      },
    }
  },
  tumblr: {
    type: 'tumblr',
    text: 'Tumblr',
    icon: ['fab', 'tumblr'],
    color: '#36465D',
    share: {
      desktop: 'http://tumblr.com/widgets/share/tool?',
      android: 'http://tumblr.com/widgets/share/tool?',
      ios: 'http://tumblr.com/widgets/share/tool?',
      operators: metaTagsOperators,
      metaTags: {
        url: 'canonicalUrl',
        description: 'caption',
        tags: 'tags'
      }
    },
    count: {
      request: 'jsonp',
      url: 'https://api.tumblr.com/v2/share/stats?url=',
      operators: TumblrCountOperators
    }
  },
  whatsapp: {
    type: 'whatsapp',
    text: 'WhatsApp',
    icon: ['fab', 'whatsapp'],
    color: '#25D366',
    share: {
      desktop: 'https://web.whatsapp.com/send?',
      android: 'whatsapp://send?',
      ios: 'whatsapp://send?',
      operators: [
        ...urlInMessageOperators,
        ...metaTagsOperators
      ],
      metaTags: {
        description: 'text'
      }
    }
  },
  messenger: {
    type: 'messenger',
    text: 'Messenger',
    icon: ['fab', 'facebook-messenger'],
    color: '#0080FF',
    share: {
      android: 'fb-messenger://share/?',
      ios: 'fb-messenger://share/?',
      operators: metaTagsOperators,
      metaTags: {
        url: 'link'
      }
    }
  },
  telegram: {
    type: 'telegram',
    text: 'Telegram',
    icon: ['fab', 'telegram-plane'],
    color: '#0088cc',
    share: {
      desktop: 'https://t.me/share/url?',
      android: 'https://t.me/share/url?',
      ios: 'https://t.me/share/url?',
      operators: metaTagsOperators,
      metaTags: {
        url: 'url',
        description: 'text'
      }
    }
  },
  vk: {
    type: 'vk',
    text: 'VKontakte',
    icon: ['fab', 'vk'],
    color: '#4C75A3',
    share: {
      desktop: 'http://vk.com/share.php?',
      android: 'http://vk.com/share.php?',
      ios: 'http://vk.com/share.php?',
      operators: metaTagsOperators,
      metaTags: {
        url: 'url'
      }
    }
  },
  stumble: {
    type: 'stumble',
    text: 'Stumble',
    icon: ['fab', 'stumbleupon'],
    color: '#eb4924',
    share: {
      desktop: 'http://www.stumbleupon.com/submit?',
      android: 'http://www.stumbleupon.com/submit?',
      ios: 'http://www.stumbleupon.com/submit?',
      operators: metaTagsOperators,
      metaTags: {
        url: 'url'
      }
    }
  },
  xing: {
    type: 'xing',
    text: 'Xing',
    icon: ['fab', 'xing'],
    color: '#006567',
    share: {
      desktop: 'https://www.xing.com/app/user?op=share&',
      android: 'https://www.xing.com/app/user?op=share&',
      ios: 'https://www.xing.com/app/user?op=share&',
      operators: metaTagsOperators,
      metaTags: {
        url: 'url'
      }
    }
  },
  sms: {
    type: 'sms',
    text: 'SMS',
    icon: 'comment-alt',
    color: '#20c16c',
    share: {
      desktop: 'sms:?',
      android: 'sms:?',
      ios: 'sms:&',
      metaTags: {
        description: 'body'
      },
      operators: [
        ...urlInMessageOperators,
        ...metaTagsOperators
      ]
    }
  },
  email: {
    type: 'email',
    text: 'Email',
    icon:  'envelope',
    color: '#FF961C',
    share: {
      desktop: 'mailto:?',
      android: 'mailto:?',
      ios: 'mailto:?',
      operators: [
        ...urlInMessageOperators,
        ...metaTagsOperators
      ],
      metaTags: {
        title: 'subject',
        description: 'body'
      }
    }
  },
  copy: {
    type: 'copy',
    text: 'Copy link',
    successText: 'Copied',
    successIcon: 'check',
    failText: 'Error',
    failIcon: 'exclamation',
    icon: 'link',
    color: '#607D8B',
    share: {
      operators: copyOperators
    }
  },
  print: {
    type: 'print',
    text: 'Print',
    icon: 'print',
    color: '#765AA2',
    share: {
      operators: printOperators
    }
  }
};
