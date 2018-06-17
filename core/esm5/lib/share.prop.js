/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { metaTagsOperators, printOperators, copyOperators, urlInMessageOperators, FacebookCountOperators, PinterestCountOperators, TumblrCountOperators, RedditCountOperators } from './share.operators';
export var /** @type {?} */ shareButtonsProp = {
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
            args: { responseType: 'text' },
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
        },
        count: {
            request: 'http',
            url: 'https://buttons.reddit.com/button_info.json?url=',
            operators: RedditCountOperators
        },
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
            operators: tslib_1.__spread(urlInMessageOperators, metaTagsOperators),
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
            ios: 'sms:?',
            metaTags: {
                description: 'body'
            },
            operators: tslib_1.__spread(urlInMessageOperators, metaTagsOperators)
        }
    },
    email: {
        type: 'email',
        text: 'Email',
        icon: 'envelope',
        color: '#FF961C',
        share: {
            desktop: 'mailto:?',
            android: 'mailto:?',
            ios: 'mailto:?',
            operators: tslib_1.__spread(urlInMessageOperators, metaTagsOperators),
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUucHJvcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZS5wcm9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixjQUFjLEVBQ2QsYUFBYSxFQUNiLHFCQUFxQixFQUNyQixzQkFBc0IsRUFDdEIsdUJBQXVCLEVBQ3ZCLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDckIsTUFBTSxtQkFBbUIsQ0FBQztBQUczQixNQUFNLENBQUMscUJBQU0sZ0JBQWdCLEdBQWtCO0lBQzdDLFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxVQUFVO1FBQ2hCLElBQUksRUFBRSxVQUFVO1FBQ2hCLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUM7UUFDM0IsS0FBSyxFQUFFLFNBQVM7UUFDaEIsS0FBSyxFQUFFO1lBQ0wsT0FBTyxFQUFFLDZDQUE2QztZQUN0RCxPQUFPLEVBQUUsNkNBQTZDO1lBQ3RELEdBQUcsRUFBRSw2Q0FBNkM7WUFDbEQsU0FBUyxFQUFFLGlCQUFpQjtZQUM1QixRQUFRLEVBQUU7Z0JBQ1IsR0FBRyxFQUFFLEdBQUc7YUFDVDtTQUNGO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsT0FBTyxFQUFFLE1BQU07WUFDZixHQUFHLEVBQUUsZ0NBQWdDO1lBQ3JDLFNBQVMsRUFBRSxzQkFBc0I7U0FDbEM7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsSUFBSSxFQUFFLFNBQVM7UUFDZixJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDO1FBQ3hCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLEtBQUssRUFBRTtZQUNMLE9BQU8sRUFBRSxtQ0FBbUM7WUFDNUMsT0FBTyxFQUFFLG1DQUFtQztZQUM1QyxHQUFHLEVBQUUsbUNBQW1DO1lBQ3hDLFNBQVMsRUFBRSxpQkFBaUI7WUFDNUIsUUFBUSxFQUFF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QUssRUFBRTtZQUNMLFNBQVMsRUFBRSxjQUFjO1NBQzFCO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBtZXRhVGFnc09wZXJhdG9ycyxcclxuICBwcmludE9wZXJhdG9ycyxcclxuICBjb3B5T3BlcmF0b3JzLFxyXG4gIHVybEluTWVzc2FnZU9wZXJhdG9ycyxcclxuICBGYWNlYm9va0NvdW50T3BlcmF0b3JzLFxyXG4gIFBpbnRlcmVzdENvdW50T3BlcmF0b3JzLFxyXG4gIFR1bWJsckNvdW50T3BlcmF0b3JzLFxyXG4gIFJlZGRpdENvdW50T3BlcmF0b3JzXHJcbn0gZnJvbSAnLi9zaGFyZS5vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBJU2hhcmVCdXR0b25zIH0gZnJvbSAnLi9zaGFyZS5tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNoYXJlQnV0dG9uc1Byb3A6IElTaGFyZUJ1dHRvbnMgPSB7XHJcbiAgZmFjZWJvb2s6IHtcclxuICAgIHR5cGU6ICdmYWNlYm9vaycsXHJcbiAgICB0ZXh0OiAnRmFjZWJvb2snLFxyXG4gICAgaWNvbjogWydmYWInLCAnZmFjZWJvb2stZiddLFxyXG4gICAgY29sb3I6ICcjNDI2N0IyJyxcclxuICAgIHNoYXJlOiB7XHJcbiAgICAgIGRlc2t0b3A6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/JyxcclxuICAgICAgYW5kcm9pZDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD8nLFxyXG4gICAgICBpb3M6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/JyxcclxuICAgICAgb3BlcmF0b3JzOiBtZXRhVGFnc09wZXJhdG9ycyxcclxuICAgICAgbWV0YVRhZ3M6IHtcclxuICAgICAgICB1cmw6ICd1J1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY291bnQ6IHtcclxuICAgICAgcmVxdWVzdDogJ2h0dHAnLFxyXG4gICAgICB1cmw6ICdodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbT9pZD0nLFxyXG4gICAgICBvcGVyYXRvcnM6IEZhY2Vib29rQ291bnRPcGVyYXRvcnNcclxuICAgIH1cclxuICB9LFxyXG4gIHR3aXR0ZXI6IHtcclxuICAgIHR5cGU6ICd0d2l0dGVyJyxcclxuICAgIHRleHQ6ICdUd2l0dGVyJyxcclxuICAgIGljb246IFsnZmFiJywgJ3R3aXR0ZXInXSxcclxuICAgIGNvbG9yOiAnIzAwYWNlZScsXHJcbiAgICBzaGFyZToge1xyXG4gICAgICBkZXNrdG9wOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/JyxcclxuICAgICAgYW5kcm9pZDogJ2h0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0PycsXHJcbiAgICAgIGlvczogJ2h0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0PycsXHJcbiAgICAgIG9wZXJhdG9yczogbWV0YVRhZ3NPcGVyYXRvcnMsXHJcbiAgICAgIG1ldGFUYWdzOiB7XHJcbiAgICAgICAgdXJsOiAndXJsJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ3RleHQnLFxyXG4gICAgICAgIHRhZ3M6ICdoYXNodGFncycsXHJcbiAgICAgICAgdmlhOiAndmlhJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBnb29nbGU6IHtcclxuICAgIHR5cGU6ICdnb29nbGUnLFxyXG4gICAgdGV4dDogJ0dvb2dsZSsnLFxyXG4gICAgaWNvbjogWydmYWInLCAnZ29vZ2xlLXBsdXMtZyddLFxyXG4gICAgY29sb3I6ICcjREI0NDM3JyxcclxuICAgIHNoYXJlOiB7XHJcbiAgICAgIGRlc2t0b3A6ICdodHRwczovL3BsdXMuZ29vZ2xlLmNvbS9zaGFyZT8nLFxyXG4gICAgICBhbmRyb2lkOiAnaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vc2hhcmU/JyxcclxuICAgICAgaW9zOiAnaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vc2hhcmU/JyxcclxuICAgICAgbWV0YVRhZ3M6IHtcclxuICAgICAgICB1cmw6ICd1cmwnLFxyXG4gICAgICB9LFxyXG4gICAgICBvcGVyYXRvcnM6IG1ldGFUYWdzT3BlcmF0b3JzXHJcbiAgICB9XHJcbiAgfSxcclxuICBsaW5rZWRpbjoge1xyXG4gICAgdHlwZTogJ2xpbmtlZGluJyxcclxuICAgIHRleHQ6ICdMaW5rZWRJbicsXHJcbiAgICBpY29uOiBbJ2ZhYicsICdsaW5rZWRpbi1pbiddLFxyXG4gICAgY29sb3I6ICcjMDA2ZmE2JyxcclxuICAgIHNoYXJlOiB7XHJcbiAgICAgIGRlc2t0b3A6ICdodHRwOi8vd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/JyxcclxuICAgICAgYW5kcm9pZDogJ2h0dHA6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT8nLFxyXG4gICAgICBpb3M6ICdodHRwOi8vd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/JyxcclxuICAgICAgb3BlcmF0b3JzOiBtZXRhVGFnc09wZXJhdG9ycyxcclxuICAgICAgbWV0YVRhZ3M6IHtcclxuICAgICAgICB1cmw6ICd1cmwnLFxyXG4gICAgICAgIHRpdGxlOiAndGl0bGUnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnc3VtbWFyeSdcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9LFxyXG4gIHBpbnRlcmVzdDoge1xyXG4gICAgdHlwZTogJ3BpbnRlcmVzdCcsXHJcbiAgICB0ZXh0OiAnUGludGVyZXN0JyxcclxuICAgIGljb246IFsnZmFiJywgJ3BpbnRlcmVzdC1wJ10sXHJcbiAgICBjb2xvcjogJyNCRDA5MUQnLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgZGVza3RvcDogJ2h0dHBzOi8vaW4ucGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2J1dHRvbi8/JyxcclxuICAgICAgYW5kcm9pZDogJ2h0dHBzOi8vaW4ucGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2J1dHRvbi8/JyxcclxuICAgICAgaW9zOiAnaHR0cHM6Ly9pbi5waW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYnV0dG9uLz8nLFxyXG4gICAgICBvcGVyYXRvcnM6IG1ldGFUYWdzT3BlcmF0b3JzLFxyXG4gICAgICBtZXRhVGFnczoge1xyXG4gICAgICAgIHVybDogJ3VybCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdkZXNjcmlwdGlvbicsXHJcbiAgICAgICAgaW1hZ2U6ICdtZWRpYSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvdW50OiB7XHJcbiAgICAgIHJlcXVlc3Q6ICdodHRwJyxcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkucGludGVyZXN0LmNvbS92MS91cmxzL2NvdW50Lmpzb24/dXJsPScsXHJcbiAgICAgIGFyZ3M6IHtyZXNwb25zZVR5cGU6ICd0ZXh0J30sXHJcbiAgICAgIG9wZXJhdG9yczogUGludGVyZXN0Q291bnRPcGVyYXRvcnNcclxuICAgIH1cclxuICB9LFxyXG4gIHJlZGRpdDoge1xyXG4gICAgdHlwZTogJ3JlZGRpdCcsXHJcbiAgICB0ZXh0OiAnUmVkZGl0JyxcclxuICAgIGljb246IFsnZmFiJywgJ3JlZGRpdC1hbGllbiddLFxyXG4gICAgY29sb3I6ICcjRkY0MDA2JyxcclxuICAgIHNoYXJlOiB7XHJcbiAgICAgIGRlc2t0b3A6ICdodHRwOi8vd3d3LnJlZGRpdC5jb20vc3VibWl0PycsXHJcbiAgICAgIGFuZHJvaWQ6ICdodHRwOi8vd3d3LnJlZGRpdC5jb20vc3VibWl0PycsXHJcbiAgICAgIGlvczogJ2h0dHA6Ly93d3cucmVkZGl0LmNvbS9zdWJtaXQ/JyxcclxuICAgICAgb3BlcmF0b3JzOiBtZXRhVGFnc09wZXJhdG9ycyxcclxuICAgICAgbWV0YVRhZ3M6IHtcclxuICAgICAgICB1cmw6ICd1cmwnLFxyXG4gICAgICAgIHRpdGxlOiAndGl0bGUnXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY291bnQ6IHtcclxuICAgICAgcmVxdWVzdDogJ2h0dHAnLFxyXG4gICAgICB1cmw6ICdodHRwczovL2J1dHRvbnMucmVkZGl0LmNvbS9idXR0b25faW5mby5qc29uP3VybD0nLFxyXG4gICAgICBvcGVyYXRvcnM6IFJlZGRpdENvdW50T3BlcmF0b3JzXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdHVtYmxyOiB7XHJcbiAgICB0eXBlOiAndHVtYmxyJyxcclxuICAgIHRleHQ6ICdUdW1ibHInLFxyXG4gICAgaWNvbjogWydmYWInLCAndHVtYmxyJ10sXHJcbiAgICBjb2xvcjogJyMzNjQ2NUQnLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgZGVza3RvcDogJ2h0dHA6Ly90dW1ibHIuY29tL3dpZGdldHMvc2hhcmUvdG9vbD8nLFxyXG4gICAgICBhbmRyb2lkOiAnaHR0cDovL3R1bWJsci5jb20vd2lkZ2V0cy9zaGFyZS90b29sPycsXHJcbiAgICAgIGlvczogJ2h0dHA6Ly90dW1ibHIuY29tL3dpZGdldHMvc2hhcmUvdG9vbD8nLFxyXG4gICAgICBvcGVyYXRvcnM6IG1ldGFUYWdzT3BlcmF0b3JzLFxyXG4gICAgICBtZXRhVGFnczoge1xyXG4gICAgICAgIHVybDogJ2Nhbm9uaWNhbFVybCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdjYXB0aW9uJyxcclxuICAgICAgICB0YWdzOiAndGFncydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvdW50OiB7XHJcbiAgICAgIHJlcXVlc3Q6ICdqc29ucCcsXHJcbiAgICAgIHVybDogJ2h0dHBzOi8vYXBpLnR1bWJsci5jb20vdjIvc2hhcmUvc3RhdHM/dXJsPScsXHJcbiAgICAgIG9wZXJhdG9yczogVHVtYmxyQ291bnRPcGVyYXRvcnNcclxuICAgIH1cclxuICB9LFxyXG4gIHdoYXRzYXBwOiB7XHJcbiAgICB0eXBlOiAnd2hhdHNhcHAnLFxyXG4gICAgdGV4dDogJ1doYXRzQXBwJyxcclxuICAgIGljb246IFsnZmFiJywgJ3doYXRzYXBwJ10sXHJcbiAgICBjb2xvcjogJyMyNUQzNjYnLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgZGVza3RvcDogJ2h0dHBzOi8vd2ViLndoYXRzYXBwLmNvbS9zZW5kPycsXHJcbiAgICAgIGFuZHJvaWQ6ICd3aGF0c2FwcDovL3NlbmQ/JyxcclxuICAgICAgaW9zOiAnd2hhdHNhcHA6Ly9zZW5kPycsXHJcbiAgICAgIG9wZXJhdG9yczogW1xyXG4gICAgICAgIC4uLnVybEluTWVzc2FnZU9wZXJhdG9ycyxcclxuICAgICAgICAuLi5tZXRhVGFnc09wZXJhdG9yc1xyXG4gICAgICBdLFxyXG4gICAgICBtZXRhVGFnczoge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAndGV4dCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWVzc2VuZ2VyOiB7XHJcbiAgICB0eXBlOiAnbWVzc2VuZ2VyJyxcclxuICAgIHRleHQ6ICdNZXNzZW5nZXInLFxyXG4gICAgaWNvbjogWydmYWInLCAnZmFjZWJvb2stbWVzc2VuZ2VyJ10sXHJcbiAgICBjb2xvcjogJyMwMDgwRkYnLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgYW5kcm9pZDogJ2ZiLW1lc3NlbmdlcjovL3NoYXJlLz8nLFxyXG4gICAgICBpb3M6ICdmYi1tZXNzZW5nZXI6Ly9zaGFyZS8/JyxcclxuICAgICAgb3BlcmF0b3JzOiBtZXRhVGFnc09wZXJhdG9ycyxcclxuICAgICAgbWV0YVRhZ3M6IHtcclxuICAgICAgICB1cmw6ICdsaW5rJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB0ZWxlZ3JhbToge1xyXG4gICAgdHlwZTogJ3RlbGVncmFtJyxcclxuICAgIHRleHQ6ICdUZWxlZ3JhbScsXHJcbiAgICBpY29uOiBbJ2ZhYicsICd0ZWxlZ3JhbS1wbGFuZSddLFxyXG4gICAgY29sb3I6ICcjMDA4OGNjJyxcclxuICAgIHNoYXJlOiB7XHJcbiAgICAgIGRlc2t0b3A6ICdodHRwczovL3QubWUvc2hhcmUvdXJsPycsXHJcbiAgICAgIGFuZHJvaWQ6ICdodHRwczovL3QubWUvc2hhcmUvdXJsPycsXHJcbiAgICAgIGlvczogJ2h0dHBzOi8vdC5tZS9zaGFyZS91cmw/JyxcclxuICAgICAgb3BlcmF0b3JzOiBtZXRhVGFnc09wZXJhdG9ycyxcclxuICAgICAgbWV0YVRhZ3M6IHtcclxuICAgICAgICB1cmw6ICd1cmwnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAndGV4dCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdms6IHtcclxuICAgIHR5cGU6ICd2aycsXHJcbiAgICB0ZXh0OiAnVktvbnRha3RlJyxcclxuICAgIGljb246IFsnZmFiJywgJ3ZrJ10sXHJcbiAgICBjb2xvcjogJyM0Qzc1QTMnLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgZGVza3RvcDogJ2h0dHA6Ly92ay5jb20vc2hhcmUucGhwPycsXHJcbiAgICAgIGFuZHJvaWQ6ICdodHRwOi8vdmsuY29tL3NoYXJlLnBocD8nLFxyXG4gICAgICBpb3M6ICdodHRwOi8vdmsuY29tL3NoYXJlLnBocD8nLFxyXG4gICAgICBvcGVyYXRvcnM6IG1ldGFUYWdzT3BlcmF0b3JzLFxyXG4gICAgICBtZXRhVGFnczoge1xyXG4gICAgICAgIHVybDogJ3VybCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3R1bWJsZToge1xyXG4gICAgdHlwZTogJ3N0dW1ibGUnLFxyXG4gICAgdGV4dDogJ1N0dW1ibGUnLFxyXG4gICAgaWNvbjogWydmYWInLCAnc3R1bWJsZXVwb24nXSxcclxuICAgIGNvbG9yOiAnI2ViNDkyNCcsXHJcbiAgICBzaGFyZToge1xyXG4gICAgICBkZXNrdG9wOiAnaHR0cDovL3d3dy5zdHVtYmxldXBvbi5jb20vc3VibWl0PycsXHJcbiAgICAgIGFuZHJvaWQ6ICdodHRwOi8vd3d3LnN0dW1ibGV1cG9uLmNvbS9zdWJtaXQ/JyxcclxuICAgICAgaW9zOiAnaHR0cDovL3d3dy5zdHVtYmxldXBvbi5jb20vc3VibWl0PycsXHJcbiAgICAgIG9wZXJhdG9yczogbWV0YVRhZ3NPcGVyYXRvcnMsXHJcbiAgICAgIG1ldGFUYWdzOiB7XHJcbiAgICAgICAgdXJsOiAndXJsJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB4aW5nOiB7XHJcbiAgICB0eXBlOiAneGluZycsXHJcbiAgICB0ZXh0OiAnWGluZycsXHJcbiAgICBpY29uOiBbJ2ZhYicsICd4aW5nJ10sXHJcbiAgICBjb2xvcjogJyMwMDY1NjcnLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgZGVza3RvcDogJ2h0dHBzOi8vd3d3LnhpbmcuY29tL2FwcC91c2VyP29wPXNoYXJlJicsXHJcbiAgICAgIGFuZHJvaWQ6ICdodHRwczovL3d3dy54aW5nLmNvbS9hcHAvdXNlcj9vcD1zaGFyZSYnLFxyXG4gICAgICBpb3M6ICdodHRwczovL3d3dy54aW5nLmNvbS9hcHAvdXNlcj9vcD1zaGFyZSYnLFxyXG4gICAgICBvcGVyYXRvcnM6IG1ldGFUYWdzT3BlcmF0b3JzLFxyXG4gICAgICBtZXRhVGFnczoge1xyXG4gICAgICAgIHVybDogJ3VybCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc21zOiB7XHJcbiAgICB0eXBlOiAnc21zJyxcclxuICAgIHRleHQ6ICdTTVMnLFxyXG4gICAgaWNvbjogJ2NvbW1lbnQtYWx0JyxcclxuICAgIGNvbG9yOiAnIzIwYzE2YycsXHJcbiAgICBzaGFyZToge1xyXG4gICAgICBkZXNrdG9wOiAnc21zOj8nLFxyXG4gICAgICBhbmRyb2lkOiAnc21zOj8nLFxyXG4gICAgICBpb3M6ICdzbXM6PycsXHJcbiAgICAgIG1ldGFUYWdzOiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdib2R5J1xyXG4gICAgICB9LFxyXG4gICAgICBvcGVyYXRvcnM6IFtcclxuICAgICAgICAuLi51cmxJbk1lc3NhZ2VPcGVyYXRvcnMsXHJcbiAgICAgICAgLi4ubWV0YVRhZ3NPcGVyYXRvcnNcclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZW1haWw6IHtcclxuICAgIHR5cGU6ICdlbWFpbCcsXHJcbiAgICB0ZXh0OiAnRW1haWwnLFxyXG4gICAgaWNvbjogICdlbnZlbG9wZScsXHJcbiAgICBjb2xvcjogJyNGRjk2MUMnLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgZGVza3RvcDogJ21haWx0bzo/JyxcclxuICAgICAgYW5kcm9pZDogJ21haWx0bzo/JyxcclxuICAgICAgaW9zOiAnbWFpbHRvOj8nLFxyXG4gICAgICBvcGVyYXRvcnM6IFtcclxuICAgICAgICAuLi51cmxJbk1lc3NhZ2VPcGVyYXRvcnMsXHJcbiAgICAgICAgLi4ubWV0YVRhZ3NPcGVyYXRvcnNcclxuICAgICAgXSxcclxuICAgICAgbWV0YVRhZ3M6IHtcclxuICAgICAgICB0aXRsZTogJ3N1YmplY3QnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnYm9keSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29weToge1xyXG4gICAgdHlwZTogJ2NvcHknLFxyXG4gICAgdGV4dDogJ0NvcHkgbGluaycsXHJcbiAgICBzdWNjZXNzVGV4dDogJ0NvcGllZCcsXHJcbiAgICBzdWNjZXNzSWNvbjogJ2NoZWNrJyxcclxuICAgIGZhaWxUZXh0OiAnRXJyb3InLFxyXG4gICAgZmFpbEljb246ICdleGNsYW1hdGlvbicsXHJcbiAgICBpY29uOiAnbGluaycsXHJcbiAgICBjb2xvcjogJyM2MDdEOEInLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgb3BlcmF0b3JzOiBjb3B5T3BlcmF0b3JzXHJcbiAgICB9XHJcbiAgfSxcclxuICBwcmludDoge1xyXG4gICAgdHlwZTogJ3ByaW50JyxcclxuICAgIHRleHQ6ICdQcmludCcsXHJcbiAgICBpY29uOiAncHJpbnQnLFxyXG4gICAgY29sb3I6ICcjNzY1QUEyJyxcclxuICAgIHNoYXJlOiB7XHJcbiAgICAgIG9wZXJhdG9yczogcHJpbnRPcGVyYXRvcnNcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiJdfQ==