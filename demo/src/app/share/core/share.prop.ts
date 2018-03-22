import { map } from 'rxjs/operators/map';
import { noneOperator, metaTagsOperator, printOperator, pinterestOperator, copyOperators, emailOperator } from './share.operators';
import { IShareButtons } from './share.models';

export const shareButtonsProp: IShareButtons = {
  facebook: {
    type: 'facebook',
    text: 'Facebook',
    icon: 'fab fa-facebook-f',
    color: '#4267B2',
    share: {
      desktop: 'https://www.facebook.com/sharer/sharer.php?u=',
      android: 'https://www.facebook.com/sharer/sharer.php?u=',
      ios: 'https://www.facebook.com/sharer/sharer.php?u=',
      operators: [noneOperator]
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
      desktop: 'https://twitter.com/intent/tweet?url=',
      android: 'https://twitter.com/intent/tweet?url=',
      ios: 'https://twitter.com/intent/tweet?url=',
      operators: [
        metaTagsOperator
      ],
      metaTags: {
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
      desktop: 'https://plus.google.com/share?url=',
      android: 'https://plus.google.com/share?url=',
      ios: 'https://plus.google.com/share?url=',
      operators: [noneOperator],
    }
  },
  linkedin: {
    type: 'linkedin',
    text: 'LinkedIn',
    icon: 'fab fa-linkedin-in',
    color: '#006fa6',
    share: {
      desktop: 'http://www.linkedin.com/shareArticle?url=',
      android: 'http://www.linkedin.com/shareArticle?url=',
      ios: 'http://www.linkedin.com/shareArticle?url=',
      operators: [metaTagsOperator],
      metaTags: {
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
      desktop: 'https://in.pinterest.com/pin/create/button/?url=',
      android: 'https://in.pinterest.com/pin/create/button/?url=',
      ios: 'https://in.pinterest.com/pin/create/button/?url=',
      operators: [
        metaTagsOperator,
        pinterestOperator
      ],
      metaTags: {
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
      desktop: 'http://www.reddit.com/submit?url=',
      android: 'http://www.reddit.com/submit?url=',
      ios: 'http://www.reddit.com/submit?url=',
      operators: [
        metaTagsOperator
      ],
      metaTags: {
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
      desktop: 'http://tumblr.com/widgets/share/tool?canonicalUrl=',
      android: 'http://tumblr.com/widgets/share/tool?canonicalUrl=',
      ios: 'http://tumblr.com/widgets/share/tool?canonicalUrl=',
      operators: [
        metaTagsOperator
      ],
      metaTags: {
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
      operators: [metaTagsOperator],
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
      android: 'fb-messenger://share/?link=',
      ios: 'fb-messenger://share/?link=',
      operators: [noneOperator]
    }
  },
  telegram: {
    type: 'telegram',
    text: 'Telegram',
    icon: 'fab fa-telegram-plane',
    color: '#0088cc',
    share: {
      desktop: 'https://t.me/share/url?url=',
      android: 'https://t.me/share/url?url=',
      ios: 'https://t.me/share/url?url=',
      operators: [metaTagsOperator],
      metaTags: {
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
      desktop: 'http://vk.com/share.php?url=',
      android: 'http://vk.com/share.php?url=',
      ios: 'http://vk.com/share.php?url=',
      operators: [noneOperator]
    }
  },
  stumble: {
    type: 'stumble',
    text: 'Stumble',
    icon: 'fab fa-stumbleupon',
    color: '#eb4924',
    share: {
      desktop: 'http://www.stumbleupon.com/submit?url=',
      android: 'http://www.stumbleupon.com/submit?url=',
      ios: 'http://www.stumbleupon.com/submit?url=',
      operators: [noneOperator]
    }
  },
  xing: {
    type: 'xing',
    text: 'Xing',
    icon: 'fab fa-xing',
    color: '#006567',
    share: {
      desktop: 'https://www.xing.com/app/user?op=share&url=',
      android: 'https://www.xing.com/app/user?op=share&url=',
      ios: 'https://www.xing.com/app/user?op=share&url=',
      operators: [noneOperator]
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
      operators: [emailOperator, metaTagsOperator],
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
    color: '#32a1a3',
    share: {
      operators: [printOperator]
    }
  }
};
