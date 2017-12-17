import { map } from 'rxjs/operators';
import { noneOperator, metaTagsOperator, printOperator, pinterestOperator, copyOperators } from './share.operators';
import { IShareButtons } from './share.models';

export const shareButtonsProp: IShareButtons = {
  facebook: {
    type: 'facebook',
    text: 'Facebook',
    icon: 'fa fa-facebook',
    color: '#3b5998',
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
    icon: 'fa fa-twitter',
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
    icon: 'fa fa-google-plus',
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
    icon: 'fa fa-linkedin',
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
    },
    count: {
      request: 'jsonp',
      url: 'https://www.linkedin.com/countserv/count/share?url=',
      operators: [
        map((res: any) => +res.count)
      ]
    }
  },
  pinterest: {
    type: 'pinterest',
    text: 'Pinterest',
    icon: 'fa fa-pinterest-p',
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
    icon: 'fa fa-reddit-alien',
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
    icon: 'fa fa-tumblr',
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
    icon: 'fa fa-whatsapp',
    color: '#25D366',
    share: {
      desktop: 'https://web.whatsapp.com/send?',
      android: 'https://web.whatsapp.com/send?',
      ios: 'https://web.whatsapp.com/send?',
      operators: [metaTagsOperator],
      metaTags: {
        description: 'text'
      }
    }
  },
  telegram: {
    type: 'telegram',
    text: 'Telegram',
    icon: 'fa fa-send',
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
    icon: 'fa fa-vk',
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
    icon: 'fa fa-stumbleupon',
    color: '#eb4924',
    share: {
      desktop: 'http://www.stumbleupon.com/submit?url=',
      android: 'http://www.stumbleupon.com/submit?url=',
      ios: 'http://www.stumbleupon.com/submit?url=',
      operators: [noneOperator],
    }
  },
  email: {
    type: 'email',
    text: 'Email',
    icon: 'fa fa-envelope',
    color: '#32A1A3',
    share: {
      desktop: 'mailto:?',
      android: 'mailto:?',
      ios: 'mailto:?',
      operators: [metaTagsOperator],
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
    icon: 'fa fa-link',
    color: '#607D8B',
    share: {
      operators: copyOperators
    }
  },
  print: {
    type: 'print',
    text: 'Print',
    icon: 'fa fa-print',
    color: 'brown',
    share: {
      operators: [printOperator]
    }
  }
};
