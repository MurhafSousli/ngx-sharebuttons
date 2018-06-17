/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { metaTagsOperators, printOperators, copyOperators, urlInMessageOperators, FacebookCountOperators, PinterestCountOperators, TumblrCountOperators, RedditCountOperators } from './share.operators';
export const /** @type {?} */ shareButtonsProp = {
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
            ios: 'sms:?',
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
        icon: 'envelope',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUucHJvcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZS5wcm9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxhQUFhLEVBQ2IscUJBQXFCLEVBQ3JCLHNCQUFzQixFQUN0Qix1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUNyQixNQUFNLG1CQUFtQixDQUFDO0FBRzNCLE1BQU0sQ0FBQyx1QkFBTSxnQkFBZ0IsR0FBa0I7SUFDN0MsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLFVBQVU7UUFDaEIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQztRQUMzQixLQUFLLEVBQUUsU0FBUztRQUNoQixLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsNkNBQTZDO1lBQ3RELE9BQU8sRUFBRSw2Q0FBNkM7WUFDdEQsR0FBRyxFQUFFLDZDQUE2QztZQUNsRCxTQUFTLEVBQUUsaUJBQWlCO1lBQzVCLFFBQVEsRUFBRTtnQkFDUixHQUFHLEVBQUUsR0FBRzthQUNUO1NBQ0Y7UUFDRCxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsTUFBTTtZQUNmLEdBQUcsRUFBRSxnQ0FBZ0M7WUFDckMsU0FBUyxFQUFFLHNCQUFzQjtTQUNsQztLQUNGO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixJQUFJLEVBQUUsU0FBUztRQUNmLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUM7UUFDeEIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsS0FBSyxFQUFFO1lBQ0wsT0FBTyxFQUFFLG1DQUFtQztZQUM1QyxPQUFPLEVBQUUsbUNBQW1DO1lBQzVDLEdBQUcsRUFBRSxtQ0FBbUM7WUFDeEMsU0FBUyxFQUFFLGlCQUFpQjtZQUM1QixRQUFRLEVBQUU7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QUNiLElBQUksRUFBRSxPQUFPO1FBQ2IsS0FBSyxFQUFFLFNBQVM7UUFDaEIsS0FBSyxFQUFFO1lBQ0wsU0FBUyxFQUFFLGNBQWM7U0FDMUI7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIG1ldGFUYWdzT3BlcmF0b3JzLFxyXG4gIHByaW50T3BlcmF0b3JzLFxyXG4gIGNvcHlPcGVyYXRvcnMsXHJcbiAgdXJsSW5NZXNzYWdlT3BlcmF0b3JzLFxyXG4gIEZhY2Vib29rQ291bnRPcGVyYXRvcnMsXHJcbiAgUGludGVyZXN0Q291bnRPcGVyYXRvcnMsXHJcbiAgVHVtYmxyQ291bnRPcGVyYXRvcnMsXHJcbiAgUmVkZGl0Q291bnRPcGVyYXRvcnNcclxufSBmcm9tICcuL3NoYXJlLm9wZXJhdG9ycyc7XHJcbmltcG9ydCB7IElTaGFyZUJ1dHRvbnMgfSBmcm9tICcuL3NoYXJlLm1vZGVscyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2hhcmVCdXR0b25zUHJvcDogSVNoYXJlQnV0dG9ucyA9IHtcclxuICBmYWNlYm9vazoge1xyXG4gICAgdHlwZTogJ2ZhY2Vib29rJyxcclxuICAgIHRleHQ6ICdGYWNlYm9vaycsXHJcbiAgICBpY29uOiBbJ2ZhYicsICdmYWNlYm9vay1mJ10sXHJcbiAgICBjb2xvcjogJyM0MjY3QjInLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgZGVza3RvcDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD8nLFxyXG4gICAgICBhbmRyb2lkOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwPycsXHJcbiAgICAgIGlvczogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD8nLFxyXG4gICAgICBvcGVyYXRvcnM6IG1ldGFUYWdzT3BlcmF0b3JzLFxyXG4gICAgICBtZXRhVGFnczoge1xyXG4gICAgICAgIHVybDogJ3UnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb3VudDoge1xyXG4gICAgICByZXF1ZXN0OiAnaHR0cCcsXHJcbiAgICAgIHVybDogJ2h0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tP2lkPScsXHJcbiAgICAgIG9wZXJhdG9yczogRmFjZWJvb2tDb3VudE9wZXJhdG9yc1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdHdpdHRlcjoge1xyXG4gICAgdHlwZTogJ3R3aXR0ZXInLFxyXG4gICAgdGV4dDogJ1R3aXR0ZXInLFxyXG4gICAgaWNvbjogWydmYWInLCAndHdpdHRlciddLFxyXG4gICAgY29sb3I6ICcjMDBhY2VlJyxcclxuICAgIHNoYXJlOiB7XHJcbiAgICAgIGRlc2t0b3A6ICdodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD8nLFxyXG4gICAgICBhbmRyb2lkOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/JyxcclxuICAgICAgaW9zOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/JyxcclxuICAgICAgb3BlcmF0b3JzOiBtZXRhVGFnc09wZXJhdG9ycyxcclxuICAgICAgbWV0YVRhZ3M6IHtcclxuICAgICAgICB1cmw6ICd1cmwnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAndGV4dCcsXHJcbiAgICAgICAgdGFnczogJ2hhc2h0YWdzJyxcclxuICAgICAgICB2aWE6ICd2aWEnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGdvb2dsZToge1xyXG4gICAgdHlwZTogJ2dvb2dsZScsXHJcbiAgICB0ZXh0OiAnR29vZ2xlKycsXHJcbiAgICBpY29uOiBbJ2ZhYicsICdnb29nbGUtcGx1cy1nJ10sXHJcbiAgICBjb2xvcjogJyNEQjQ0MzcnLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgZGVza3RvcDogJ2h0dHBzOi8vcGx1cy5nb29nbGUuY29tL3NoYXJlPycsXHJcbiAgICAgIGFuZHJvaWQ6ICdodHRwczovL3BsdXMuZ29vZ2xlLmNvbS9zaGFyZT8nLFxyXG4gICAgICBpb3M6ICdodHRwczovL3BsdXMuZ29vZ2xlLmNvbS9zaGFyZT8nLFxyXG4gICAgICBtZXRhVGFnczoge1xyXG4gICAgICAgIHVybDogJ3VybCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wZXJhdG9yczogbWV0YVRhZ3NPcGVyYXRvcnNcclxuICAgIH1cclxuICB9LFxyXG4gIGxpbmtlZGluOiB7XHJcbiAgICB0eXBlOiAnbGlua2VkaW4nLFxyXG4gICAgdGV4dDogJ0xpbmtlZEluJyxcclxuICAgIGljb246IFsnZmFiJywgJ2xpbmtlZGluLWluJ10sXHJcbiAgICBjb2xvcjogJyMwMDZmYTYnLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgZGVza3RvcDogJ2h0dHA6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT8nLFxyXG4gICAgICBhbmRyb2lkOiAnaHR0cDovL3d3dy5saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlPycsXHJcbiAgICAgIGlvczogJ2h0dHA6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT8nLFxyXG4gICAgICBvcGVyYXRvcnM6IG1ldGFUYWdzT3BlcmF0b3JzLFxyXG4gICAgICBtZXRhVGFnczoge1xyXG4gICAgICAgIHVybDogJ3VybCcsXHJcbiAgICAgICAgdGl0bGU6ICd0aXRsZScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdzdW1tYXJ5J1xyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGludGVyZXN0OiB7XHJcbiAgICB0eXBlOiAncGludGVyZXN0JyxcclxuICAgIHRleHQ6ICdQaW50ZXJlc3QnLFxyXG4gICAgaWNvbjogWydmYWInLCAncGludGVyZXN0LXAnXSxcclxuICAgIGNvbG9yOiAnI0JEMDkxRCcsXHJcbiAgICBzaGFyZToge1xyXG4gICAgICBkZXNrdG9wOiAnaHR0cHM6Ly9pbi5waW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYnV0dG9uLz8nLFxyXG4gICAgICBhbmRyb2lkOiAnaHR0cHM6Ly9pbi5waW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYnV0dG9uLz8nLFxyXG4gICAgICBpb3M6ICdodHRwczovL2luLnBpbnRlcmVzdC5jb20vcGluL2NyZWF0ZS9idXR0b24vPycsXHJcbiAgICAgIG9wZXJhdG9yczogbWV0YVRhZ3NPcGVyYXRvcnMsXHJcbiAgICAgIG1ldGFUYWdzOiB7XHJcbiAgICAgICAgdXJsOiAndXJsJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ2Rlc2NyaXB0aW9uJyxcclxuICAgICAgICBpbWFnZTogJ21lZGlhJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY291bnQ6IHtcclxuICAgICAgcmVxdWVzdDogJ2h0dHAnLFxyXG4gICAgICB1cmw6ICdodHRwczovL2FwaS5waW50ZXJlc3QuY29tL3YxL3VybHMvY291bnQuanNvbj91cmw9JyxcclxuICAgICAgYXJnczoge3Jlc3BvbnNlVHlwZTogJ3RleHQnfSxcclxuICAgICAgb3BlcmF0b3JzOiBQaW50ZXJlc3RDb3VudE9wZXJhdG9yc1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVkZGl0OiB7XHJcbiAgICB0eXBlOiAncmVkZGl0JyxcclxuICAgIHRleHQ6ICdSZWRkaXQnLFxyXG4gICAgaWNvbjogWydmYWInLCAncmVkZGl0LWFsaWVuJ10sXHJcbiAgICBjb2xvcjogJyNGRjQwMDYnLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgZGVza3RvcDogJ2h0dHA6Ly93d3cucmVkZGl0LmNvbS9zdWJtaXQ/JyxcclxuICAgICAgYW5kcm9pZDogJ2h0dHA6Ly93d3cucmVkZGl0LmNvbS9zdWJtaXQ/JyxcclxuICAgICAgaW9zOiAnaHR0cDovL3d3dy5yZWRkaXQuY29tL3N1Ym1pdD8nLFxyXG4gICAgICBvcGVyYXRvcnM6IG1ldGFUYWdzT3BlcmF0b3JzLFxyXG4gICAgICBtZXRhVGFnczoge1xyXG4gICAgICAgIHVybDogJ3VybCcsXHJcbiAgICAgICAgdGl0bGU6ICd0aXRsZSdcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjb3VudDoge1xyXG4gICAgICByZXF1ZXN0OiAnaHR0cCcsXHJcbiAgICAgIHVybDogJ2h0dHBzOi8vYnV0dG9ucy5yZWRkaXQuY29tL2J1dHRvbl9pbmZvLmpzb24/dXJsPScsXHJcbiAgICAgIG9wZXJhdG9yczogUmVkZGl0Q291bnRPcGVyYXRvcnNcclxuICAgIH0sXHJcbiAgfSxcclxuICB0dW1ibHI6IHtcclxuICAgIHR5cGU6ICd0dW1ibHInLFxyXG4gICAgdGV4dDogJ1R1bWJscicsXHJcbiAgICBpY29uOiBbJ2ZhYicsICd0dW1ibHInXSxcclxuICAgIGNvbG9yOiAnIzM2NDY1RCcsXHJcbiAgICBzaGFyZToge1xyXG4gICAgICBkZXNrdG9wOiAnaHR0cDovL3R1bWJsci5jb20vd2lkZ2V0cy9zaGFyZS90b29sPycsXHJcbiAgICAgIGFuZHJvaWQ6ICdodHRwOi8vdHVtYmxyLmNvbS93aWRnZXRzL3NoYXJlL3Rvb2w/JyxcclxuICAgICAgaW9zOiAnaHR0cDovL3R1bWJsci5jb20vd2lkZ2V0cy9zaGFyZS90b29sPycsXHJcbiAgICAgIG9wZXJhdG9yczogbWV0YVRhZ3NPcGVyYXRvcnMsXHJcbiAgICAgIG1ldGFUYWdzOiB7XHJcbiAgICAgICAgdXJsOiAnY2Fub25pY2FsVXJsJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ2NhcHRpb24nLFxyXG4gICAgICAgIHRhZ3M6ICd0YWdzJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY291bnQ6IHtcclxuICAgICAgcmVxdWVzdDogJ2pzb25wJyxcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkudHVtYmxyLmNvbS92Mi9zaGFyZS9zdGF0cz91cmw9JyxcclxuICAgICAgb3BlcmF0b3JzOiBUdW1ibHJDb3VudE9wZXJhdG9yc1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgd2hhdHNhcHA6IHtcclxuICAgIHR5cGU6ICd3aGF0c2FwcCcsXHJcbiAgICB0ZXh0OiAnV2hhdHNBcHAnLFxyXG4gICAgaWNvbjogWydmYWInLCAnd2hhdHNhcHAnXSxcclxuICAgIGNvbG9yOiAnIzI1RDM2NicsXHJcbiAgICBzaGFyZToge1xyXG4gICAgICBkZXNrdG9wOiAnaHR0cHM6Ly93ZWIud2hhdHNhcHAuY29tL3NlbmQ/JyxcclxuICAgICAgYW5kcm9pZDogJ3doYXRzYXBwOi8vc2VuZD8nLFxyXG4gICAgICBpb3M6ICd3aGF0c2FwcDovL3NlbmQ/JyxcclxuICAgICAgb3BlcmF0b3JzOiBbXHJcbiAgICAgICAgLi4udXJsSW5NZXNzYWdlT3BlcmF0b3JzLFxyXG4gICAgICAgIC4uLm1ldGFUYWdzT3BlcmF0b3JzXHJcbiAgICAgIF0sXHJcbiAgICAgIG1ldGFUYWdzOiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246ICd0ZXh0J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXNzZW5nZXI6IHtcclxuICAgIHR5cGU6ICdtZXNzZW5nZXInLFxyXG4gICAgdGV4dDogJ01lc3NlbmdlcicsXHJcbiAgICBpY29uOiBbJ2ZhYicsICdmYWNlYm9vay1tZXNzZW5nZXInXSxcclxuICAgIGNvbG9yOiAnIzAwODBGRicsXHJcbiAgICBzaGFyZToge1xyXG4gICAgICBhbmRyb2lkOiAnZmItbWVzc2VuZ2VyOi8vc2hhcmUvPycsXHJcbiAgICAgIGlvczogJ2ZiLW1lc3NlbmdlcjovL3NoYXJlLz8nLFxyXG4gICAgICBvcGVyYXRvcnM6IG1ldGFUYWdzT3BlcmF0b3JzLFxyXG4gICAgICBtZXRhVGFnczoge1xyXG4gICAgICAgIHVybDogJ2xpbmsnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHRlbGVncmFtOiB7XHJcbiAgICB0eXBlOiAndGVsZWdyYW0nLFxyXG4gICAgdGV4dDogJ1RlbGVncmFtJyxcclxuICAgIGljb246IFsnZmFiJywgJ3RlbGVncmFtLXBsYW5lJ10sXHJcbiAgICBjb2xvcjogJyMwMDg4Y2MnLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgZGVza3RvcDogJ2h0dHBzOi8vdC5tZS9zaGFyZS91cmw/JyxcclxuICAgICAgYW5kcm9pZDogJ2h0dHBzOi8vdC5tZS9zaGFyZS91cmw/JyxcclxuICAgICAgaW9zOiAnaHR0cHM6Ly90Lm1lL3NoYXJlL3VybD8nLFxyXG4gICAgICBvcGVyYXRvcnM6IG1ldGFUYWdzT3BlcmF0b3JzLFxyXG4gICAgICBtZXRhVGFnczoge1xyXG4gICAgICAgIHVybDogJ3VybCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICd0ZXh0J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB2azoge1xyXG4gICAgdHlwZTogJ3ZrJyxcclxuICAgIHRleHQ6ICdWS29udGFrdGUnLFxyXG4gICAgaWNvbjogWydmYWInLCAndmsnXSxcclxuICAgIGNvbG9yOiAnIzRDNzVBMycsXHJcbiAgICBzaGFyZToge1xyXG4gICAgICBkZXNrdG9wOiAnaHR0cDovL3ZrLmNvbS9zaGFyZS5waHA/JyxcclxuICAgICAgYW5kcm9pZDogJ2h0dHA6Ly92ay5jb20vc2hhcmUucGhwPycsXHJcbiAgICAgIGlvczogJ2h0dHA6Ly92ay5jb20vc2hhcmUucGhwPycsXHJcbiAgICAgIG9wZXJhdG9yczogbWV0YVRhZ3NPcGVyYXRvcnMsXHJcbiAgICAgIG1ldGFUYWdzOiB7XHJcbiAgICAgICAgdXJsOiAndXJsJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBzdHVtYmxlOiB7XHJcbiAgICB0eXBlOiAnc3R1bWJsZScsXHJcbiAgICB0ZXh0OiAnU3R1bWJsZScsXHJcbiAgICBpY29uOiBbJ2ZhYicsICdzdHVtYmxldXBvbiddLFxyXG4gICAgY29sb3I6ICcjZWI0OTI0JyxcclxuICAgIHNoYXJlOiB7XHJcbiAgICAgIGRlc2t0b3A6ICdodHRwOi8vd3d3LnN0dW1ibGV1cG9uLmNvbS9zdWJtaXQ/JyxcclxuICAgICAgYW5kcm9pZDogJ2h0dHA6Ly93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD8nLFxyXG4gICAgICBpb3M6ICdodHRwOi8vd3d3LnN0dW1ibGV1cG9uLmNvbS9zdWJtaXQ/JyxcclxuICAgICAgb3BlcmF0b3JzOiBtZXRhVGFnc09wZXJhdG9ycyxcclxuICAgICAgbWV0YVRhZ3M6IHtcclxuICAgICAgICB1cmw6ICd1cmwnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHhpbmc6IHtcclxuICAgIHR5cGU6ICd4aW5nJyxcclxuICAgIHRleHQ6ICdYaW5nJyxcclxuICAgIGljb246IFsnZmFiJywgJ3hpbmcnXSxcclxuICAgIGNvbG9yOiAnIzAwNjU2NycsXHJcbiAgICBzaGFyZToge1xyXG4gICAgICBkZXNrdG9wOiAnaHR0cHM6Ly93d3cueGluZy5jb20vYXBwL3VzZXI/b3A9c2hhcmUmJyxcclxuICAgICAgYW5kcm9pZDogJ2h0dHBzOi8vd3d3LnhpbmcuY29tL2FwcC91c2VyP29wPXNoYXJlJicsXHJcbiAgICAgIGlvczogJ2h0dHBzOi8vd3d3LnhpbmcuY29tL2FwcC91c2VyP29wPXNoYXJlJicsXHJcbiAgICAgIG9wZXJhdG9yczogbWV0YVRhZ3NPcGVyYXRvcnMsXHJcbiAgICAgIG1ldGFUYWdzOiB7XHJcbiAgICAgICAgdXJsOiAndXJsJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBzbXM6IHtcclxuICAgIHR5cGU6ICdzbXMnLFxyXG4gICAgdGV4dDogJ1NNUycsXHJcbiAgICBpY29uOiAnY29tbWVudC1hbHQnLFxyXG4gICAgY29sb3I6ICcjMjBjMTZjJyxcclxuICAgIHNoYXJlOiB7XHJcbiAgICAgIGRlc2t0b3A6ICdzbXM6PycsXHJcbiAgICAgIGFuZHJvaWQ6ICdzbXM6PycsXHJcbiAgICAgIGlvczogJ3Ntczo/JyxcclxuICAgICAgbWV0YVRhZ3M6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ2JvZHknXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wZXJhdG9yczogW1xyXG4gICAgICAgIC4uLnVybEluTWVzc2FnZU9wZXJhdG9ycyxcclxuICAgICAgICAuLi5tZXRhVGFnc09wZXJhdG9yc1xyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfSxcclxuICBlbWFpbDoge1xyXG4gICAgdHlwZTogJ2VtYWlsJyxcclxuICAgIHRleHQ6ICdFbWFpbCcsXHJcbiAgICBpY29uOiAgJ2VudmVsb3BlJyxcclxuICAgIGNvbG9yOiAnI0ZGOTYxQycsXHJcbiAgICBzaGFyZToge1xyXG4gICAgICBkZXNrdG9wOiAnbWFpbHRvOj8nLFxyXG4gICAgICBhbmRyb2lkOiAnbWFpbHRvOj8nLFxyXG4gICAgICBpb3M6ICdtYWlsdG86PycsXHJcbiAgICAgIG9wZXJhdG9yczogW1xyXG4gICAgICAgIC4uLnVybEluTWVzc2FnZU9wZXJhdG9ycyxcclxuICAgICAgICAuLi5tZXRhVGFnc09wZXJhdG9yc1xyXG4gICAgICBdLFxyXG4gICAgICBtZXRhVGFnczoge1xyXG4gICAgICAgIHRpdGxlOiAnc3ViamVjdCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdib2R5J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBjb3B5OiB7XHJcbiAgICB0eXBlOiAnY29weScsXHJcbiAgICB0ZXh0OiAnQ29weSBsaW5rJyxcclxuICAgIHN1Y2Nlc3NUZXh0OiAnQ29waWVkJyxcclxuICAgIHN1Y2Nlc3NJY29uOiAnY2hlY2snLFxyXG4gICAgZmFpbFRleHQ6ICdFcnJvcicsXHJcbiAgICBmYWlsSWNvbjogJ2V4Y2xhbWF0aW9uJyxcclxuICAgIGljb246ICdsaW5rJyxcclxuICAgIGNvbG9yOiAnIzYwN0Q4QicsXHJcbiAgICBzaGFyZToge1xyXG4gICAgICBvcGVyYXRvcnM6IGNvcHlPcGVyYXRvcnNcclxuICAgIH1cclxuICB9LFxyXG4gIHByaW50OiB7XHJcbiAgICB0eXBlOiAncHJpbnQnLFxyXG4gICAgdGV4dDogJ1ByaW50JyxcclxuICAgIGljb246ICdwcmludCcsXHJcbiAgICBjb2xvcjogJyM3NjVBQTInLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgb3BlcmF0b3JzOiBwcmludE9wZXJhdG9yc1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIl19