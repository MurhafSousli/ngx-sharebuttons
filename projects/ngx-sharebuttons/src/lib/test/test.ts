// export const shareButtonsProp = {
//   facebook: {
//     type: 'facebook',
//     text: 'Facebook',
//     icon: 'faFacebookF',
//     color: '#4267B2',
//     share: {
//       desktop: 'https://www.facebook.com/sharer/sharer.php?',
//       android: 'https://www.facebook.com/sharer/sharer.php?',
//       ios: 'https://www.facebook.com/sharer/sharer.php?',
//       operators: 'metaTags',
//       metaTags: {
//         url: 'u'
//       }
//     }
//   },
//   twitter: {
//     type: 'twitter',
//     text: 'Twitter',
//     icon: 'faTwitter',
//     color: '#00acee',
//     share: {
//       desktop: 'https://twitter.com/intent/tweet?',
//       android: 'https://twitter.com/intent/tweet?',
//       ios: 'https://twitter.com/intent/tweet?',
//       operators: 'metaTags',
//       metaTags: {
//         url: 'url',
//         description: 'text',
//         tags: 'hashtags',
//         via: 'via'
//       }
//     }
//   },
//   linkedin: {
//     type: 'linkedin',
//     text: 'LinkedIn',
//     icon: 'faLinkedinIn',
//     color: '#006fa6',
//     share: {
//       desktop: 'http://www.linkedin.com/shareArticle?',
//       android: 'http://www.linkedin.com/shareArticle?',
//       ios: 'http://www.linkedin.com/shareArticle?',
//       operators: 'metaTags',
//       metaTags: {
//         url: 'url',
//         title: 'title',
//         description: 'summary'
//       },
//     }
//   },
//   pinterest: {
//     type: 'pinterest',
//     text: 'Pinterest',
//     icon: 'faPinterestP',
//     color: '#BD091D',
//     share: {
//       desktop: 'https://in.pinterest.com/pin/create/button/?',
//       android: 'https://in.pinterest.com/pin/create/button/?',
//       ios: 'https://in.pinterest.com/pin/create/button/?',
//       operators: 'metaTags',
//       metaTags: {
//         url: 'url',
//         description: 'description',
//         image: 'media'
//       }
//     }
//   },
//   reddit: {
//     type: 'reddit',
//     text: 'Reddit',
//     icon: 'faRedditAlien',
//     color: '#FF4006',
//     share: {
//       desktop: 'http://www.reddit.com/submit?',
//       android: 'http://www.reddit.com/submit?',
//       ios: 'http://www.reddit.com/submit?',
//       operators: 'metaTags',
//       metaTags: {
//         url: 'url',
//         title: 'title'
//       },
//     }
//   },
//   tumblr: {
//     type: 'tumblr',
//     text: 'Tumblr',
//     icon: 'faTumblr',
//     color: '#36465D',
//     share: {
//       desktop: 'http://tumblr.com/widgets/share/tool?',
//       android: 'http://tumblr.com/widgets/share/tool?',
//       ios: 'http://tumblr.com/widgets/share/tool?',
//       operators: 'metaTags',
//       metaTags: {
//         url: 'canonicalUrl',
//         description: 'caption',
//         tags: 'tags'
//       }
//     }
//   },
//   whatsapp: {
//     type: 'whatsapp',
//     text: 'WhatsApp',
//     icon: 'faWhatsapp',
//     color: '#25D366',
//     share: {
//       desktop: 'https://web.whatsapp.com/send?',
//       android: 'whatsapp://send?',
//       ios: 'whatsapp://send?',
//       operators: [
//         ...'urlInMessage',
//         ...'metaTags'
//       ],
//       metaTags: {
//         description: 'text'
//       }
//     }
//   },
//   messenger: {
//     type: 'messenger',
//     text: 'Messenger',
//     icon: 'faFacebookMessenger',
//     color: '#0080FF',
//     share: {
//       android: 'fb-messenger://share/?',
//       ios: 'fb-messenger://share/?',
//       operators: 'metaTags',
//       metaTags: {
//         url: 'link'
//       }
//     }
//   },
//   telegram: {
//     type: 'telegram',
//     text: 'Telegram',
//     icon: 'faTelegramPlane',
//     color: '#0088cc',
//     share: {
//       desktop: 'https://t.me/share/url?',
//       android: 'https://t.me/share/url?',
//       ios: 'https://t.me/share/url?',
//       operators: 'metaTags',
//       metaTags: {
//         url: 'url',
//         description: 'text'
//       }
//     }
//   },
//   vk: {
//     type: 'vk',
//     text: 'VKontakte',
//     icon: 'faVk',
//     color: '#4C75A3',
//     share: {
//       desktop: 'http://vk.com/share.php?',
//       android: 'http://vk.com/share.php?',
//       ios: 'http://vk.com/share.php?',
//       operators: 'metaTags',
//       metaTags: {
//         url: 'url'
//       }
//     }
//   },
//   stumble: {
//     type: 'stumble',
//     text: 'Stumble',
//     icon: 'faStumbleupon',
//     color: '#eb4924',
//     share: {
//       desktop: 'http://www.stumbleupon.com/submit?',
//       android: 'http://www.stumbleupon.com/submit?',
//       ios: 'http://www.stumbleupon.com/submit?',
//       operators: 'metaTags',
//       metaTags: {
//         url: 'url'
//       }
//     }
//   },
//   xing: {
//     type: 'xing',
//     text: 'Xing',
//     icon: 'faXing',
//     color: '#006567',
//     share: {
//       desktop: 'https://www.xing.com/app/user?op=share&',
//       android: 'https://www.xing.com/app/user?op=share&',
//       ios: 'https://www.xing.com/app/user?op=share&',
//       operators: 'metaTags',
//       metaTags: {
//         url: 'url'
//       }
//     }
//   },
//   sms: {
//     type: 'sms',
//     text: 'SMS',
//     icon: 'faCommentAlt',
//     color: '#20c16c',
//     share: {
//       desktop: 'sms:?',
//       android: 'sms:?',
//       ios: 'sms:?',
//       metaTags: {
//         description: 'body'
//       },
//       operators: [
//         ...'urlInMessage',
//         ...'metaTags'
//       ]
//     }
//   },
//   email: {
//     type: 'email',
//     text: 'Email',
//     icon: 'faEnvelope',
//     color: '#FF961C',
//     share: {
//       desktop: 'mailto:?',
//       android: 'mailto:?',
//       ios: 'mailto:?',
//       operators: [
//         ...'urlInMessage',
//         ...'metaTags'
//       ],
//       metaTags: {
//         title: 'subject',
//         description: 'body'
//       }
//     }
//   },
//   copy: {
//     type: 'copy',
//     text: 'Copy link',
//     successText: 'Copied',
//     successIcon: 'faCheck',
//     failText: 'Error',
//     failIcon: 'faExclamation',
//     icon: 'faLink',
//     color: '#607D8B',
//     share: {
//       operators: 'copy'
//     }
//   },
//   print: {
//     type: 'print',
//     text: 'Print',
//     icon: 'faPrint',
//     color: '#765AA2',
//     share: {
//       operators: 'print'
//     }
//   }
// };


/**
 * Meta tags operator - Serialize meta tags into the sharer URL
 */
// export const metaTags = [
//   map((ref: ShareButtonRef) => {
//
//     // Social network sharer URL */
//     const SharerURL = ref.prop.share[ref.os];
//     if (SharerURL) {
//
//       // object contains supported meta tags
//       const metaTags = ref.prop.share.metaTags;
//
//       // object contains meta tags values */
//       const metaTagsValues = ref.metaTags;
//
//       let link = '';
//       // Set each meta tag with user value
//       if (metaTags) {
//         link = Object.entries(metaTags).map(([key, metaTag]) =>
//           metaTagsValues[key] ? `${metaTag}=${encodeURIComponent(metaTagsValues[key])}` : ''
//         ).join('&');
//       }
//       return SharerURL + link;
//     }
//     return;
//   })
// ];

/**
 * Print button operator
 */
// export const printOperators = [
//   map(() => window.print())
// ];

/**
 * Copy link to clipboard, used for copy button
 */
// export const copyOperators = [
//   map((ref: ShareButtonRef) => {
//
//     // Disable the button
//     ref.renderer.setStyle(ref.el, 'pointer-events', 'none');
//
//     ref.temp = {text: ref.prop.text, icon: ref.prop.icon};
//     const link = decodeURIComponent(ref.metaTags.url);
//
//     copyToClipboard(link, ref.os === 'ios')
//     .then(() => {
//       ref.prop.text = ref.prop.successText;
//       ref.prop.icon = ref.prop.successIcon;
//     })
//     .catch(() => {
//       ref.prop.text = ref.prop.failText;
//       ref.prop.icon = ref.prop.failIcon;
//     })
//     .then(() => ref.cd.markForCheck());
//     return ref;
//   }),
//   delay(2000),
//   map((ref: ShareButtonRef) => {
//
//     // Enable the button
//     ref.renderer.setStyle(ref.el, 'pointer-events', 'auto');
//
//     // Reset copy button text and icon */
//     ref.prop.text = ref.temp.text;
//     ref.prop.icon = ref.temp.icon;
//     ref.cd.markForCheck();
//   })
// ];

/**
 * Add the share URL to message body, used for WhatsApp and Email buttons
 */
// export const urlInMessage = [
//   map((ref: ShareButtonRef) => {
//     const description = ref.metaTags.description;
//     const url = ref.metaTags.url;
//     const newRef: ShareButtonRef = {
//       metaTags: {
//         description: description ? `${description}\r\n${url}` : url
//       }
//     };
//     return mergeDeep(ref, newRef);
//   })
// ];
