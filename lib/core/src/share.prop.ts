import { map } from 'rxjs/operators/map';
import { metaTagsOperator, printOperator, copyOperators, urlInMessageOperator } from './share.operators';
import { IShareButtons } from './share.models';

export const shareButtonsProp: IShareButtons = {
  facebook: {
    type: 'facebook',
    text: 'Facebook',
    icon: 'fab fa-facebook-f',
    color: '#4267B2',
    share: {
      desktop: 'https://www.facebook.com/sharer/sharer.php?',
      android: 'https://www.facebook.com/sharer/sharer.php?',
      ios: 'https://www.facebook.com/sharer/sharer.php?',
      metaTags: {
        url: 'u'
      },
      operators: [
        metaTagsOperator
      ]
    },
    count: {
      request: 'http',
      url: 'https://graph.facebook.com?id=',
      operators: [
        map((res: any) => +res.share.share_count)
      ]
    }
  },
  twitter: {
    type: 'twitter',
    text: 'Twitter',
    icon: 'fab fa-twitter',
    color: '#00acee',
    share: {
      desktop: 'https://twitter.com/intent/tweet?',
      android: 'https://twitter.com/intent/tweet?',
      ios: 'https://twitter.com/intent/tweet?',
      operators: [
        metaTagsOperator
      ],
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
    icon: 'fab fa-google-plus-g',
    color: '#DB4437',
    share: {
      desktop: 'https://plus.google.com/share?',
      android: 'https://plus.google.com/share?',
      ios: 'https://plus.google.com/share?',
      metaTags: {
        url: 'url',
      },
      operators: [
        metaTagsOperator
      ]
    }
  },
  linkedin: {
    type: 'linkedin',
    text: 'LinkedIn',
    icon: 'fab fa-linkedin-in',
    color: '#006fa6',
    share: {
      desktop: 'http://www.linkedin.com/shareArticle?',
      android: 'http://www.linkedin.com/shareArticle?',
      ios: 'http://www.linkedin.com/shareArticle?',
      operators: [
        metaTagsOperator
      ],
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
    icon: 'fab fa-pinterest-p',
    color: '#BD091D',
    share: {
      desktop: 'https://in.pinterest.com/pin/create/button/?',
      android: 'https://in.pinterest.com/pin/create/button/?',
      ios: 'https://in.pinterest.com/pin/create/button/?',
      operators: [
        metaTagsOperator
      ],
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
      operators: [
        map((text: string) => JSON.parse(text.replace(/^receiveCount\((.*)\)/, '$1'))),
        map((res: any) => +res.count)
      ]
    }
  },
  reddit: {
    type: 'reddit',
    text: 'Reddit',
    icon: 'fab fa-reddit-alien',
    color: '#FF4006',
    share: {
      desktop: 'http://www.reddit.com/submit?',
      android: 'http://www.reddit.com/submit?',
      ios: 'http://www.reddit.com/submit?',
      operators: [
        metaTagsOperator
      ],
      metaTags: {
        url: 'url',
        title: 'title'
      },
    },
    count: {
      request: 'http',
      url: 'https://buttons.reddit.com/button_info.json?url=',
      operators: [
        map((res: any) => +res.data.children[0].data.score)
      ]
    },
  },
  tumblr: {
    type: 'tumblr',
    text: 'Tumblr',
    icon: 'fab fa-tumblr',
    color: '#36465D',
    share: {
      desktop: 'http://tumblr.com/widgets/share/tool?',
      android: 'http://tumblr.com/widgets/share/tool?',
      ios: 'http://tumblr.com/widgets/share/tool?',
      operators: [
        metaTagsOperator
      ],
      metaTags: {
        url: 'canonicalUrl',
        description: 'caption',
        tags: 'tags'
      }
    },
    count: {
      request: 'jsonp',
      url: 'https://api.tumblr.com/v2/share/stats?url=',
      operators: [
        map((res: any) => +res.response.note_count)
      ]
    }
  },
  whatsapp: {
    type: 'whatsapp',
    text: 'WhatsApp',
    icon: 'fab fa-whatsapp',
    color: '#25D366',
    share: {
      desktop: 'https://web.whatsapp.com/send?',
      android: 'whatsapp://send?',
      ios: 'whatsapp://send?',
      operators: [
        urlInMessageOperator,
        metaTagsOperator
      ],
      metaTags: {
        description: 'text'
      }
    }
  },
  messenger: {
    type: 'messenger',
    text: 'Messenger',
    icon: 'fab fa-facebook-messenger',
    color: '#0080FF',
    share: {
      android: 'fb-messenger://share/?',
      ios: 'fb-messenger://share/?',
      metaTags: {
        url: 'link'
      },
      operators: [
        metaTagsOperator
      ]
    }
  },
  telegram: {
    type: 'telegram',
    text: 'Telegram',
    icon: 'fab fa-telegram-plane',
    color: '#0088cc',
    share: {
      desktop: 'https://t.me/share/url?',
      android: 'https://t.me/share/url?',
      ios: 'https://t.me/share/url?',
      operators: [
        metaTagsOperator
      ],
      metaTags: {
        url: 'url',
        description: 'text'
      }
    }
  },
  vk: {
    type: 'vk',
    text: 'VKontakte',
    icon: 'fab fa-vk',
    color: '#4C75A3',
    share: {
      desktop: 'http://vk.com/share.php?',
      android: 'http://vk.com/share.php?',
      ios: 'http://vk.com/share.php?',
      metaTags: {
        url: 'url'
      },
      operators: [
        metaTagsOperator
      ]
    }
  },
  stumble: {
    type: 'stumble',
    text: 'Stumble',
    icon: 'fab fa-stumbleupon',
    color: '#eb4924',
    share: {
      desktop: 'http://www.stumbleupon.com/submit?',
      android: 'http://www.stumbleupon.com/submit?',
      ios: 'http://www.stumbleupon.com/submit?',
      metaTags: {
        url: 'url'
      },
      operators: [
        metaTagsOperator
      ]
    }
  },
  xing: {
    type: 'xing',
    text: 'Xing',
    icon: 'fab fa-xing',
    color: '#006567',
    share: {
      desktop: 'https://www.xing.com/app/user?op=share&',
      android: 'https://www.xing.com/app/user?op=share&',
      ios: 'https://www.xing.com/app/user?op=share&',
      metaTags: {
        url: 'url'
      },
      operators: [
        metaTagsOperator
      ]
    }
  },
  sms: {
    type: 'sms',
    text: 'SMS',
    icon: 'fas fa-comment-alt',
    color: '#20c16c',
    share: {
      desktop: 'sms:?',
      android: 'sms:?',
      ios: 'sms:?',
      metaTags: {
        description: 'body'
      },
      operators: [
        urlInMessageOperator,
        metaTagsOperator
      ]
    }
  },
  email: {
    type: 'email',
    text: 'Email',
    icon: 'fas fa-envelope',
    color: '#FF961C',
    share: {
      desktop: 'mailto:?',
      android: 'mailto:?',
      ios: 'mailto:?',
      operators: [
        urlInMessageOperator,
        metaTagsOperator
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
    successIcon: 'fa fa-check',
    failText: 'Error',
    failIcon: 'fa fa-exclamation',
    icon: 'fas fa-link',
    color: '#607D8B',
    share: {
      operators: copyOperators
    }
  },
  print: {
    type: 'print',
    text: 'Print',
    icon: 'fas fa-print',
    color: '#765AA2',
    share: {
      operators: [
        printOperator
      ]
    }
  }
};
