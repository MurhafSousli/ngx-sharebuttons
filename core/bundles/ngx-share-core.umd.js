(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('@ngx-share/core', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/common', '@angular/common/http'], factory) :
    (factory((global['ngx-share'] = global['ngx-share'] || {}, global['ngx-share'].core = {}),global.ng.core,global.rxjs,global.rxjs.operators,global.ng.common,global.ng.common.http));
}(this, (function (exports,core,rxjs,operators,common,http) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ CONFIG = new core.InjectionToken('CONFIG');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Simple object check.
     * @param {?} item
     * @return {?}
     */
    function isObject(item) {
        return (item && typeof item === 'object' && !Array.isArray(item));
    }
    /**
     * Deep merge two objects.
     * @param {?} target
     * @param {...?} sources
     * @return {?}
     */
    function mergeDeep(target) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        if (!sources.length) {
            return target;
        }
        var /** @type {?} */ source = sources.shift();
        if (isObject(target) && isObject(source)) {
            for (var /** @type {?} */ key in source) {
                if (isObject(source[key])) {
                    if (!target[key]) {
                        Object.assign(target, (_a = {}, _a[key] = {}, _a));
                    }
                    mergeDeep(target[key], source[key]);
                }
                else {
                    Object.assign(target, (_b = {}, _b[key] = source[key], _b));
                }
            }
        }
        return mergeDeep.apply(void 0, __spread([target], sources));
        var _a, _b;
    }
    /**
     * Returns a readable number from share count
     * @param {?} num
     * @param {?} digits
     * @return {?}
     */
    function shareCountFormatter(num, digits) {
        var /** @type {?} */ si = [
            { value: 1E9, symbol: 'B' },
            { value: 1E6, symbol: 'M' },
            { value: 1E3, symbol: 'K' }
        ], /** @type {?} */ rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        for (var /** @type {?} */ i = 0; i < si.length; i++) {
            if (num >= si[i].value) {
                return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
            }
        }
        return num.toFixed(digits).replace(rx, '$1');
    }
    /**
     * Copy text to clipboard
     * @param {?} url
     * @param {?} browser
     * @return {?}
     */
    function copyToClipboard(url, browser) {
        return rxjs.of(url).pipe(operators.tap(function (text) {
            // Create a hidden textarea element
            var /** @type {?} */ textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            // highlight textarea to copy the text
            if (browser === 'ios') {
                var /** @type {?} */ range = document.createRange();
                range.selectNodeContents(textArea);
                var /** @type {?} */ selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
                textArea.readOnly = true;
                textArea.setSelectionRange(0, 999999);
            }
            else {
                textArea.select();
            }
            document.execCommand('copy');
            document.body.removeChild(textArea);
        }));
    }
    /**
     * Get meta tag content
     * @param {?} key
     * @return {?}
     */
    function getMetaContent(key) {
        var /** @type {?} */ metaTag = document.querySelector("meta[property=\"" + key + "\"]");
        return metaTag ? metaTag.getAttribute('content') : undefined;
    }
    /**
     * Detect operating system 'ios', 'android', or 'desktop'
     * @return {?}
     */
    function getOS() {
        var /** @type {?} */ userAgent = navigator.userAgent || navigator.vendor || ((window)).opera;
        if (/android/i.test(userAgent)) {
            return 'android';
        }
        if (/iPad|iPhone|iPod/.test(userAgent) && !((window)).MSStream) {
            return 'ios';
        }
        return 'desktop';
    }
    /**
     * Returns a valid URL or falls back to current URL
     * @param {?} url
     * @param {?} fallbackUrl
     * @return {?}
     */
    function getValidUrl(url, fallbackUrl) {
        if (url) {
            var /** @type {?} */ r = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            if (r.test(url)) {
                return url;
            }
            console.warn("[ShareButtons]: Sharing link '" + url + "' is invalid!");
        }
        return fallbackUrl;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Meta tags operator - Serialize meta tags into the sharer URL
     */
    var /** @type {?} */ metaTagsOperators = [
        operators.map(function (ref) {
            // Social network sharer URL */
            var /** @type {?} */ SharerURL = ref.prop.share[ref.os];
            if (SharerURL) {
                // object contains supported meta tags
                var /** @type {?} */ metaTags = ref.prop.share.metaTags;
                // object contains meta tags values */
                var /** @type {?} */ metaTagsValues_1 = ref.metaTags;
                var /** @type {?} */ link = '';
                // Set each meta tag with user value
                if (metaTags) {
                    link = Object.entries(metaTags).map(function (_a) {
                        var _b = __read(_a, 2), key = _b[0], metaTag = _b[1];
                        return metaTagsValues_1[key] ? metaTag + "=" + encodeURIComponent(metaTagsValues_1[key]) : '';
                    }).join('&');
                }
                return SharerURL + link;
            }
            return;
        })
    ];
    /**
     * Print button operator
     */
    var /** @type {?} */ printOperators = [
        operators.map(function () { return window.print(); })
    ];
    /**
     * Copy link to clipboard, used for copy button
     */
    var /** @type {?} */ copyOperators = [
        operators.map(function (ref) {
            // Disable the button
            ref.renderer.setStyle(ref.el, 'pointer-events', 'none');
            ref.temp = { text: ref.prop.text, icon: ref.prop.icon };
            ref.metaTags.url = decodeURIComponent(ref.metaTags.url);
            return ref;
        }),
        operators.switchMap(function (ref) {
            return copyToClipboard(ref.metaTags.url, ref.os).pipe(operators.map(function () {
                ref.prop.text = ref.prop.successText;
                ref.prop.icon = ref.prop.successIcon;
                return ref;
            }), operators.catchError(function () {
                ref.prop.text = ref.prop.failText;
                ref.prop.icon = ref.prop.failIcon;
                return rxjs.of(ref);
            }));
        }),
        operators.map(function (ref) {
            ref.cd.markForCheck();
            return ref;
        }),
        operators.delay(2000),
        operators.map(function (ref) {
            // Enable the button
            ref.renderer.setStyle(ref.el, 'pointer-events', 'auto');
            // Reset copy button text and icon */
            ref.prop.text = ref.temp.text;
            ref.prop.icon = ref.temp.icon;
            ref.cd.markForCheck();
        })
    ];
    /**
     * Add the share URL to message body, used for WhatsApp and Email buttons
     */
    var /** @type {?} */ urlInMessageOperators = [
        operators.map(function (ref) {
            var /** @type {?} */ description = ref.metaTags.description;
            var /** @type {?} */ url = ref.metaTags.url;
            var /** @type {?} */ newRef = {
                metaTags: {
                    description: description ? description + "\r\n" + url : url
                }
            };
            return mergeDeep(ref, newRef);
        })
    ];
    var /** @type {?} */ FacebookCountOperators = [
        operators.map(function (res) { return +res.share.share_count; })
    ];
    var /** @type {?} */ PinterestCountOperators = [
        operators.map(function (text) { return JSON.parse(text.replace(/^receiveCount\((.*)\)/, '$1')); }),
        operators.map(function (res) { return +res.count; })
    ];
    var /** @type {?} */ TumblrCountOperators = [
        operators.map(function (res) { return +res.response.note_count; })
    ];
    var /** @type {?} */ RedditCountOperators = [
        operators.map(function (res) { return +res.data.children[0].data.score; })
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ shareButtonsProp = {
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
                operators: __spread(urlInMessageOperators, metaTagsOperators),
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
                operators: __spread(urlInMessageOperators, metaTagsOperators)
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
                operators: __spread(urlInMessageOperators, metaTagsOperators),
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ShareButtons = (function () {
        function ShareButtons(config) {
            this.config = {
                prop: shareButtonsProp,
                options: {
                    theme: 'default',
                    include: [],
                    exclude: [],
                    size: 0,
                    url: undefined,
                    title: undefined,
                    description: undefined,
                    image: undefined,
                    tags: undefined,
                    twitterAccount: undefined,
                    autoSetMeta: true,
                    gaTracking: false,
                    windowWidth: 800,
                    windowHeight: 500,
                    moreButtonIcon: 'ellipsis-h',
                    lessButtonIcon: 'minus'
                }
            };
            this.config$ = new rxjs.BehaviorSubject(this.config);
            if (config) {
                this.setConfig(config);
            }
        }
        Object.defineProperty(ShareButtons.prototype, "prop", {
            get: /**
             * @return {?}
             */ function () {
                return this.config.prop;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShareButtons.prototype, "twitterAccount", {
            get: /**
             * @return {?}
             */ function () {
                return this.config.options.twitterAccount;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShareButtons.prototype, "theme", {
            get: /**
             * @return {?}
             */ function () {
                return this.config.options.theme;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShareButtons.prototype, "windowSize", {
            get: /**
             * @return {?}
             */ function () {
                return "width=" + this.config.options.windowWidth + ", height=" + this.config.options.windowHeight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShareButtons.prototype, "url", {
            get: /**
             * @return {?}
             */ function () {
                return this.config.options.url;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShareButtons.prototype, "title", {
            get: /**
             * @return {?}
             */ function () {
                return this.config.options.title;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShareButtons.prototype, "description", {
            get: /**
             * @return {?}
             */ function () {
                return this.config.options.description;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShareButtons.prototype, "image", {
            get: /**
             * @return {?}
             */ function () {
                return this.config.options.image;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShareButtons.prototype, "tags", {
            get: /**
             * @return {?}
             */ function () {
                return this.config.options.tags;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShareButtons.prototype, "autoSetMeta", {
            get: /**
             * @return {?}
             */ function () {
                return this.config.options.autoSetMeta;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShareButtons.prototype, "gaTracking", {
            get: /**
             * @return {?}
             */ function () {
                return this.config.options.gaTracking;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShareButtons.prototype, "size", {
            get: /**
             * @return {?}
             */ function () {
                return this.config.options.size;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} config
         * @return {?}
         */
        ShareButtons.prototype.setConfig = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                this.config = mergeDeep(this.config, config);
                this.config$.next(this.config);
            };
        /**
         * @param {?} name
         * @param {?} data
         * @return {?}
         */
        ShareButtons.prototype.addButton = /**
         * @param {?} name
         * @param {?} data
         * @return {?}
         */
            function (name, data) {
                var /** @type {?} */ config = {
                    prop: __assign({}, shareButtonsProp, (_a = {}, _a[name] = data, _a))
                };
                this.setConfig(config);
                var _a;
            };
        ShareButtons.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        ShareButtons.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [CONFIG,] }] }
            ];
        };
        return ShareButtons;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ShareButtonDirective = (function () {
        function ShareButtonDirective(shareService, http$$1, renderer, cd, el, platform) {
            this.shareService = shareService;
            this.http = http$$1;
            this.renderer = renderer;
            this.cd = cd;
            this.el = el;
            this.platform = platform;
            /**
             * Get share count
             */
            this.getCount = false;
            /**
             * Set meta tags from document head, useful when SEO is supported
             */
            this.autoSetMeta = this.shareService.autoSetMeta;
            /**
             * Meta tags inputs - initialized from the global options
             */
            this.url = this.shareService.url;
            this.title = this.shareService.title;
            this.description = this.shareService.description;
            this.image = this.shareService.image;
            this.tags = this.shareService.tags;
            /**
             * Stream that emits when share count is fetched
             */
            this.count = new core.EventEmitter();
            /**
             * Stream that emits when share dialog is opened
             */
            this.opened = new core.EventEmitter();
            /**
             * Stream that emits when share dialog is closed
             */
            this.closed = new core.EventEmitter();
        }
        /** Share link on element click */
        /**
         * Share link on element click
         * @return {?}
         */
        ShareButtonDirective.prototype.onClick = /**
         * Share link on element click
         * @return {?}
         */
            function () {
                var _this = this;
                if (common.isPlatformBrowser(this.platform)) {
                    var /** @type {?} */ metaTags = this.autoSetMeta ? {
                        url: this.url,
                        title: this.title || getMetaContent('og:title'),
                        description: this.description || getMetaContent('og:description'),
                        image: this.image || getMetaContent('og:image'),
                        via: this.shareService.twitterAccount || getMetaContent('twitter:site'),
                        tags: this.tags,
                    } : {
                        url: this.url,
                        title: this.title,
                        description: this.description,
                        image: this.image,
                        tags: this.tags,
                        via: this.shareService.twitterAccount,
                    };
                    var /** @type {?} */ ref = {
                        cd: this.cd,
                        renderer: this.renderer,
                        prop: this.prop,
                        el: this.el.nativeElement,
                        os: getOS(),
                        metaTags: metaTags
                    };
                    // Share the link
                    // Share the link
                    (_a = rxjs.of(ref)).pipe.apply(_a, __spread(this.prop.share.operators, [operators.tap(function (sharerURL) { return _this.share(sharerURL); }),
                        operators.take(1)])).subscribe();
                }
                var _a;
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        ShareButtonDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                var _this = this;
                if (common.isPlatformBrowser(this.platform)) {
                    if (changes['shareButton'] && (changes['shareButton'].firstChange || changes['shareButton'].previousValue !== this.shareButton)) {
                        this.createShareButton(this.shareButton);
                    }
                    if (!this.url || (changes['url'] && changes['url'].previousValue !== this.url)) {
                        rxjs.of(null).pipe(operators.map(function () {
                            _this.url = getValidUrl(_this.autoSetMeta ? _this.url || getMetaContent('og:url') : _this.url, window.location.href);
                            return _this.url;
                        }), operators.filter(function () { return _this.prop.count && _this.getCount; }), operators.switchMap(function (url) { return _this.shareCount(url); }), operators.tap(function (shareCount) { return _this.count.emit(shareCount); }), operators.take(1)).subscribe();
                    }
                }
            };
        /**
         * Open sharing dialog
         * @param url - Share URL
         */
        /**
         * Open sharing dialog
         * @param {?} url - Share URL
         * @return {?}
         */
        ShareButtonDirective.prototype.share = /**
         * Open sharing dialog
         * @param {?} url - Share URL
         * @return {?}
         */
            function (url) {
                var _this = this;
                if (url) {
                    // GA Tracking
                    if (this.shareService.gaTracking && typeof ga !== 'undefined') {
                        ga('send', 'social', this.prop.type, 'click', this.url);
                    }
                    // Emit when share dialog is opened
                    this.opened.emit(this.prop.type);
                    var /** @type {?} */ popUp_1 = window.open(url, 'newwindow', this.shareService.windowSize);
                    // Emit when share dialog is closed
                    if (popUp_1) {
                        var /** @type {?} */ pollTimer_1 = window.setInterval(function () {
                            if (popUp_1.closed) {
                                window.clearInterval(pollTimer_1);
                                _this.closed.emit(_this.prop.type);
                            }
                        }, 200);
                    }
                }
            };
        /**
         * Get link share count
         * @param url - Share URL
         * @returns Share count
         */
        /**
         * Get link share count
         * @param {?} url - Share URL
         * @return {?} Share count
         */
        ShareButtonDirective.prototype.shareCount = /**
         * Get link share count
         * @param {?} url - Share URL
         * @return {?} Share count
         */
            function (url) {
                if (this.prop.count.request === 'jsonp') {
                    return (_a = this.http.jsonp(this.prop.count.url + url, 'callback')).pipe.apply(_a, __spread(this.prop.count.operators, [operators.catchError(function () { return rxjs.EMPTY; })]));
                }
                else {
                    return (_b = this.http.get(this.prop.count.url + url, this.prop.count.args)).pipe.apply(_b, __spread(this.prop.count.operators, [operators.catchError(function () { return rxjs.EMPTY; })]));
                }
                var _a, _b;
            };
        /**
         * @param {?} buttonsName
         * @return {?}
         */
        ShareButtonDirective.prototype.createShareButton = /**
         * @param {?} buttonsName
         * @return {?}
         */
            function (buttonsName) {
                var /** @type {?} */ button = __assign({}, this.shareService.prop[buttonsName]);
                if (button) {
                    // Set share button properties
                    this.prop = button;
                    // Remove previous button class
                    this.renderer.removeClass(this.el.nativeElement, "sb-" + this._buttonClass);
                    // Add new button class
                    this.renderer.addClass(this.el.nativeElement, "sb-" + button.type);
                    // Set button css color variable
                    this.el.nativeElement.style.setProperty('--button-color', this.prop.color);
                    // Keep a copy of the class for future replacement
                    this._buttonClass = button.type;
                    // Set aria-label attribute
                    this.renderer.setAttribute(this.el.nativeElement, 'aria-label', button.ariaLabel || button.text);
                }
                else {
                    throw new Error("[ShareButtons]: The share button '" + buttonsName + "' does not exist!");
                }
            };
        ShareButtonDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[shareButton]'
                    },] },
        ];
        /** @nocollapse */
        ShareButtonDirective.ctorParameters = function () {
            return [
                { type: ShareButtons },
                { type: http.HttpClient },
                { type: core.Renderer2 },
                { type: core.ChangeDetectorRef },
                { type: core.ElementRef },
                { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
            ];
        };
        ShareButtonDirective.propDecorators = {
            shareButton: [{ type: core.Input }],
            getCount: [{ type: core.Input }],
            autoSetMeta: [{ type: core.Input }],
            url: [{ type: core.Input }],
            title: [{ type: core.Input }],
            description: [{ type: core.Input }],
            image: [{ type: core.Input }],
            tags: [{ type: core.Input }],
            count: [{ type: core.Output }],
            opened: [{ type: core.Output }],
            closed: [{ type: core.Output }],
            onClick: [{ type: core.HostListener, args: ['click',] }]
        };
        return ShareButtonDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ShareCountPipe = (function () {
        function ShareCountPipe() {
        }
        /**
         * @param {?} num
         * @param {?=} digits
         * @return {?}
         */
        ShareCountPipe.prototype.transform = /**
         * @param {?} num
         * @param {?=} digits
         * @return {?}
         */
            function (num, digits) {
                return shareCountFormatter(num, digits);
            };
        ShareCountPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'shareCount'
                    },] },
        ];
        return ShareCountPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} config
     * @return {?}
     */
    function ShareButtonsFactory(config) {
        return new ShareButtons(config);
    }
    var ShareModule = (function () {
        function ShareModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        ShareModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
            function (config) {
                return {
                    ngModule: ShareModule,
                    providers: [
                        { provide: CONFIG, useValue: config },
                        {
                            provide: ShareButtons,
                            useFactory: ShareButtonsFactory,
                            deps: [CONFIG]
                        }
                    ]
                };
            };
        ShareModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            ShareButtonDirective,
                            ShareCountPipe
                        ],
                        exports: [
                            ShareButtonDirective,
                            ShareCountPipe
                        ]
                    },] },
        ];
        return ShareModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.ShareButtonsFactory = ShareButtonsFactory;
    exports.ShareModule = ShareModule;
    exports.ShareButtons = ShareButtons;
    exports.ShareButtonDirective = ShareButtonDirective;
    exports.metaTagsOperators = metaTagsOperators;
    exports.printOperators = printOperators;
    exports.copyOperators = copyOperators;
    exports.urlInMessageOperators = urlInMessageOperators;
    exports.FacebookCountOperators = FacebookCountOperators;
    exports.PinterestCountOperators = PinterestCountOperators;
    exports.TumblrCountOperators = TumblrCountOperators;
    exports.RedditCountOperators = RedditCountOperators;
    exports.shareButtonsProp = shareButtonsProp;
    exports.ShareCountPipe = ShareCountPipe;
    exports.CONFIG = CONFIG;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNoYXJlLWNvcmUudW1kLmpzLm1hcCIsInNvdXJjZXMiOltudWxsLCJuZzovL0BuZ3gtc2hhcmUvY29yZS9saWIvc2hhcmUudG9rZW5zLnRzIiwibmc6Ly9Abmd4LXNoYXJlL2NvcmUvbGliL3V0aWxzLnRzIiwibmc6Ly9Abmd4LXNoYXJlL2NvcmUvbGliL3NoYXJlLm9wZXJhdG9ycy50cyIsIm5nOi8vQG5neC1zaGFyZS9jb3JlL2xpYi9zaGFyZS5wcm9wLnRzIiwibmc6Ly9Abmd4LXNoYXJlL2NvcmUvbGliL3NoYXJlLnNlcnZpY2UudHMiLCJuZzovL0BuZ3gtc2hhcmUvY29yZS9saWIvc2hhcmUtYnV0dG9uLmRpcmVjdGl2ZS50cyIsIm5nOi8vQG5neC1zaGFyZS9jb3JlL2xpYi9zaGFyZS1jb3VudC5waXBlLnRzIiwibmc6Ly9Abmd4LXNoYXJlL2NvcmUvbGliL3NoYXJlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2hhcmVCdXR0b25zQ29uZmlnIH0gZnJvbSAnLi9zaGFyZS5tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxTaGFyZUJ1dHRvbnNDb25maWc+KCdDT05GSUcnKTtcclxuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuLyoqIFNpbXBsZSBvYmplY3QgY2hlY2suKi9cclxuZnVuY3Rpb24gaXNPYmplY3QoaXRlbSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkpO1xyXG59XHJcblxyXG4vKiogRGVlcCBtZXJnZSB0d28gb2JqZWN0cy4qL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcykge1xyXG4gIGlmICghc291cmNlcy5sZW5ndGgpIHtcclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgfVxyXG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcclxuXHJcbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XHJcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcclxuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XHJcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1trZXldOiB7fX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1trZXldOiBzb3VyY2Vba2V5XX0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcyk7XHJcbn1cclxuXHJcbi8qKiBSZXR1cm5zIGEgcmVhZGFibGUgbnVtYmVyIGZyb20gc2hhcmUgY291bnQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNoYXJlQ291bnRGb3JtYXR0ZXIobnVtOiBudW1iZXIsIGRpZ2l0czogbnVtYmVyKTogc3RyaW5nIHtcclxuXHJcbiAgY29uc3Qgc2kgPSBbXHJcbiAgICB7dmFsdWU6IDFFOSwgc3ltYm9sOiAnQid9LFxyXG4gICAge3ZhbHVlOiAxRTYsIHN5bWJvbDogJ00nfSxcclxuICAgIHt2YWx1ZTogMUUzLCBzeW1ib2w6ICdLJ31cclxuICBdLCByeCA9IC9cXC4wKyR8KFxcLlswLTldKlsxLTldKTArJC87XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2kubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChudW0gPj0gc2lbaV0udmFsdWUpIHtcclxuICAgICAgcmV0dXJuIChudW0gLyBzaVtpXS52YWx1ZSkudG9GaXhlZChkaWdpdHMpLnJlcGxhY2UocngsICckMScpICsgc2lbaV0uc3ltYm9sO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbnVtLnRvRml4ZWQoZGlnaXRzKS5yZXBsYWNlKHJ4LCAnJDEnKTtcclxufVxyXG5cclxuLyoqIENvcHkgdGV4dCB0byBjbGlwYm9hcmQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlUb0NsaXBib2FyZCh1cmw6IHN0cmluZywgYnJvd3Nlcjogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICByZXR1cm4gb2YodXJsKS5waXBlKFxyXG4gICAgdGFwKCh0ZXh0OiBzdHJpbmcpID0+IHtcclxuXHJcbiAgICAgIC8vIENyZWF0ZSBhIGhpZGRlbiB0ZXh0YXJlYSBlbGVtZW50XHJcbiAgICAgIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgdGV4dEFyZWEudmFsdWUgPSB0ZXh0O1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRBcmVhKTtcclxuXHJcbiAgICAgIC8vIGhpZ2hsaWdodCB0ZXh0YXJlYSB0byBjb3B5IHRoZSB0ZXh0XHJcbiAgICAgIGlmIChicm93c2VyID09PSAnaW9zJykge1xyXG4gICAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGV4dEFyZWEpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuICAgICAgICB0ZXh0QXJlYS5yZWFkT25seSA9IHRydWU7XHJcbiAgICAgICAgdGV4dEFyZWEuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgOTk5OTk5KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0ZXh0QXJlYS5zZWxlY3QoKTtcclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRleHRBcmVhKTtcclxuICAgIH0pXHJcbiAgKTtcclxufVxyXG5cclxuLyoqIEdldCBtZXRhIHRhZyBjb250ZW50ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXRhQ29udGVudChrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgY29uc3QgbWV0YVRhZzogRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYG1ldGFbcHJvcGVydHk9XCIke2tleX1cIl1gKTtcclxuICByZXR1cm4gbWV0YVRhZyA/IG1ldGFUYWcuZ2V0QXR0cmlidXRlKCdjb250ZW50JykgOiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKiBEZXRlY3Qgb3BlcmF0aW5nIHN5c3RlbSAnaW9zJywgJ2FuZHJvaWQnLCBvciAnZGVza3RvcCcgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9TKCk6IHN0cmluZyB7XHJcbiAgY29uc3QgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yIHx8ICg8YW55PndpbmRvdykub3BlcmE7XHJcblxyXG4gIGlmICgvYW5kcm9pZC9pLnRlc3QodXNlckFnZW50KSkge1xyXG4gICAgcmV0dXJuICdhbmRyb2lkJztcclxuICB9XHJcblxyXG4gIGlmICgvaVBhZHxpUGhvbmV8aVBvZC8udGVzdCh1c2VyQWdlbnQpICYmICEoPGFueT53aW5kb3cpLk1TU3RyZWFtKSB7XHJcbiAgICByZXR1cm4gJ2lvcyc7XHJcbiAgfVxyXG4gIHJldHVybiAnZGVza3RvcCc7XHJcbn1cclxuXHJcblxyXG4vKiogUmV0dXJucyBhIHZhbGlkIFVSTCBvciBmYWxscyBiYWNrIHRvIGN1cnJlbnQgVVJMICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWxpZFVybCh1cmw6IHN0cmluZywgZmFsbGJhY2tVcmw6IHN0cmluZyk6IHN0cmluZyB7XHJcblxyXG4gIGlmICh1cmwpIHtcclxuICAgIGNvbnN0IHIgPSAvKGh0dHB8aHR0cHMpOlxcL1xcLyhcXHcrOnswLDF9XFx3KkApPyhcXFMrKSg6WzAtOV0rKT8oXFwvfFxcLyhbXFx3IyE6Lj8rPSYlQCFcXC1cXC9dKSk/LztcclxuICAgIGlmIChyLnRlc3QodXJsKSkge1xyXG4gICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS53YXJuKGBbU2hhcmVCdXR0b25zXTogU2hhcmluZyBsaW5rICcke3VybH0nIGlzIGludmFsaWQhYCk7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxsYmFja1VybDtcclxufVxyXG4iLCJpbXBvcnQgeyBvZiwgT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIGRlbGF5LCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFNoYXJlQnV0dG9uUmVmIH0gZnJvbSAnLi9zaGFyZS5tb2RlbHMnO1xyXG5pbXBvcnQgeyBjb3B5VG9DbGlwYm9hcmQsIG1lcmdlRGVlcCB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuLyoqXHJcbiAqIE1ldGEgdGFncyBvcGVyYXRvciAtIFNlcmlhbGl6ZSBtZXRhIHRhZ3MgaW50byB0aGUgc2hhcmVyIFVSTFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1ldGFUYWdzT3BlcmF0b3JzOiBPcGVyYXRvckZ1bmN0aW9uPGFueSwgYW55PltdID0gW1xyXG4gIG1hcCgocmVmOiBTaGFyZUJ1dHRvblJlZikgPT4ge1xyXG5cclxuICAgIC8vIFNvY2lhbCBuZXR3b3JrIHNoYXJlciBVUkwgKi9cclxuICAgIGNvbnN0IFNoYXJlclVSTCA9IHJlZi5wcm9wLnNoYXJlW3JlZi5vc107XHJcbiAgICBpZiAoU2hhcmVyVVJMKSB7XHJcblxyXG4gICAgICAvLyBvYmplY3QgY29udGFpbnMgc3VwcG9ydGVkIG1ldGEgdGFnc1xyXG4gICAgICBjb25zdCBtZXRhVGFncyA9IHJlZi5wcm9wLnNoYXJlLm1ldGFUYWdzO1xyXG5cclxuICAgICAgLy8gb2JqZWN0IGNvbnRhaW5zIG1ldGEgdGFncyB2YWx1ZXMgKi9cclxuICAgICAgY29uc3QgbWV0YVRhZ3NWYWx1ZXMgPSByZWYubWV0YVRhZ3M7XHJcblxyXG4gICAgICBsZXQgbGluayA9ICcnO1xyXG4gICAgICAvLyBTZXQgZWFjaCBtZXRhIHRhZyB3aXRoIHVzZXIgdmFsdWVcclxuICAgICAgaWYgKG1ldGFUYWdzKSB7XHJcbiAgICAgICAgbGluayA9IE9iamVjdC5lbnRyaWVzKG1ldGFUYWdzKS5tYXAoKFtrZXksIG1ldGFUYWddKSA9PlxyXG4gICAgICAgICAgbWV0YVRhZ3NWYWx1ZXNba2V5XSA/IGAke21ldGFUYWd9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KG1ldGFUYWdzVmFsdWVzW2tleV0pfWAgOiAnJ1xyXG4gICAgICAgICkuam9pbignJicpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBTaGFyZXJVUkwgKyBsaW5rO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH0pXHJcbl07XHJcblxyXG4vKipcclxuICogUHJpbnQgYnV0dG9uIG9wZXJhdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcHJpbnRPcGVyYXRvcnM6IE9wZXJhdG9yRnVuY3Rpb248YW55LCBhbnk+W10gPSBbXHJcbiAgbWFwKCgpID0+IHdpbmRvdy5wcmludCgpKVxyXG5dO1xyXG5cclxuLyoqXHJcbiAqIENvcHkgbGluayB0byBjbGlwYm9hcmQsIHVzZWQgZm9yIGNvcHkgYnV0dG9uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY29weU9wZXJhdG9yczogT3BlcmF0b3JGdW5jdGlvbjxhbnksIGFueT5bXSA9IFtcclxuICBtYXAoKHJlZjogU2hhcmVCdXR0b25SZWYpID0+IHtcclxuXHJcbiAgICAvLyBEaXNhYmxlIHRoZSBidXR0b25cclxuICAgIHJlZi5yZW5kZXJlci5zZXRTdHlsZShyZWYuZWwsICdwb2ludGVyLWV2ZW50cycsICdub25lJyk7XHJcblxyXG4gICAgcmVmLnRlbXAgPSB7dGV4dDogcmVmLnByb3AudGV4dCwgaWNvbjogcmVmLnByb3AuaWNvbn07XHJcbiAgICByZWYubWV0YVRhZ3MudXJsID0gZGVjb2RlVVJJQ29tcG9uZW50KHJlZi5tZXRhVGFncy51cmwpO1xyXG4gICAgcmV0dXJuIHJlZjtcclxuICB9KSxcclxuICBzd2l0Y2hNYXAoKHJlZjogU2hhcmVCdXR0b25SZWYpID0+IGNvcHlUb0NsaXBib2FyZChyZWYubWV0YVRhZ3MudXJsLCByZWYub3MpLnBpcGUoXHJcbiAgICBtYXAoKCkgPT4ge1xyXG4gICAgICByZWYucHJvcC50ZXh0ID0gcmVmLnByb3Auc3VjY2Vzc1RleHQ7XHJcbiAgICAgIHJlZi5wcm9wLmljb24gPSByZWYucHJvcC5zdWNjZXNzSWNvbjtcclxuICAgICAgcmV0dXJuIHJlZjtcclxuICAgIH0pLFxyXG4gICAgY2F0Y2hFcnJvcigoKSA9PiB7XHJcbiAgICAgIHJlZi5wcm9wLnRleHQgPSByZWYucHJvcC5mYWlsVGV4dDtcclxuICAgICAgcmVmLnByb3AuaWNvbiA9IHJlZi5wcm9wLmZhaWxJY29uO1xyXG4gICAgICByZXR1cm4gb2YocmVmKTtcclxuICAgIH0pXHJcbiAgKSksXHJcbiAgbWFwKChyZWY6IFNoYXJlQnV0dG9uUmVmKSA9PiB7XHJcbiAgICByZWYuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICByZXR1cm4gcmVmO1xyXG4gIH0pLFxyXG4gIGRlbGF5KDIwMDApLFxyXG4gIG1hcCgocmVmOiBTaGFyZUJ1dHRvblJlZikgPT4ge1xyXG5cclxuICAgIC8vIEVuYWJsZSB0aGUgYnV0dG9uXHJcbiAgICByZWYucmVuZGVyZXIuc2V0U3R5bGUocmVmLmVsLCAncG9pbnRlci1ldmVudHMnLCAnYXV0bycpO1xyXG5cclxuICAgIC8vIFJlc2V0IGNvcHkgYnV0dG9uIHRleHQgYW5kIGljb24gKi9cclxuICAgIHJlZi5wcm9wLnRleHQgPSByZWYudGVtcC50ZXh0O1xyXG4gICAgcmVmLnByb3AuaWNvbiA9IHJlZi50ZW1wLmljb247XHJcbiAgICByZWYuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfSlcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBBZGQgdGhlIHNoYXJlIFVSTCB0byBtZXNzYWdlIGJvZHksIHVzZWQgZm9yIFdoYXRzQXBwIGFuZCBFbWFpbCBidXR0b25zXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdXJsSW5NZXNzYWdlT3BlcmF0b3JzOiBPcGVyYXRvckZ1bmN0aW9uPGFueSwgYW55PltdID0gW1xyXG4gIG1hcCgocmVmOiBTaGFyZUJ1dHRvblJlZikgPT4ge1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSByZWYubWV0YVRhZ3MuZGVzY3JpcHRpb247XHJcbiAgICBjb25zdCB1cmwgPSByZWYubWV0YVRhZ3MudXJsO1xyXG4gICAgY29uc3QgbmV3UmVmOiBTaGFyZUJ1dHRvblJlZiA9IHtcclxuICAgICAgbWV0YVRhZ3M6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gPyBgJHtkZXNjcmlwdGlvbn1cXHJcXG4ke3VybH1gIDogdXJsXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gbWVyZ2VEZWVwKHJlZiwgbmV3UmVmKTtcclxuICB9KVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZhY2Vib29rQ291bnRPcGVyYXRvcnM6IE9wZXJhdG9yRnVuY3Rpb248YW55LCBhbnk+W10gPSBbXHJcbiAgbWFwKChyZXM6IGFueSkgPT4gK3Jlcy5zaGFyZS5zaGFyZV9jb3VudClcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBQaW50ZXJlc3RDb3VudE9wZXJhdG9yczogT3BlcmF0b3JGdW5jdGlvbjxhbnksIGFueT5bXSA9IFtcclxuICBtYXAoKHRleHQ6IHN0cmluZykgPT4gSlNPTi5wYXJzZSh0ZXh0LnJlcGxhY2UoL15yZWNlaXZlQ291bnRcXCgoLiopXFwpLywgJyQxJykpKSxcclxuICBtYXAoKHJlczogYW55KSA9PiArcmVzLmNvdW50KVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFR1bWJsckNvdW50T3BlcmF0b3JzOiBPcGVyYXRvckZ1bmN0aW9uPGFueSwgYW55PltdID0gW1xyXG4gIG1hcCgocmVzOiBhbnkpID0+ICtyZXMucmVzcG9uc2Uubm90ZV9jb3VudClcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBSZWRkaXRDb3VudE9wZXJhdG9yczogT3BlcmF0b3JGdW5jdGlvbjxhbnksIGFueT5bXSA9IFtcclxuICBtYXAoKHJlczogYW55KSA9PiArcmVzLmRhdGEuY2hpbGRyZW5bMF0uZGF0YS5zY29yZSlcclxuXTtcclxuIiwiaW1wb3J0IHtcclxuICBtZXRhVGFnc09wZXJhdG9ycyxcclxuICBwcmludE9wZXJhdG9ycyxcclxuICBjb3B5T3BlcmF0b3JzLFxyXG4gIHVybEluTWVzc2FnZU9wZXJhdG9ycyxcclxuICBGYWNlYm9va0NvdW50T3BlcmF0b3JzLFxyXG4gIFBpbnRlcmVzdENvdW50T3BlcmF0b3JzLFxyXG4gIFR1bWJsckNvdW50T3BlcmF0b3JzLFxyXG4gIFJlZGRpdENvdW50T3BlcmF0b3JzXHJcbn0gZnJvbSAnLi9zaGFyZS5vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBJU2hhcmVCdXR0b25zIH0gZnJvbSAnLi9zaGFyZS5tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNoYXJlQnV0dG9uc1Byb3A6IElTaGFyZUJ1dHRvbnMgPSB7XHJcbiAgZmFjZWJvb2s6IHtcclxuICAgIHR5cGU6ICdmYWNlYm9vaycsXHJcbiAgICB0ZXh0OiAnRmFjZWJvb2snLFxyXG4gICAgaWNvbjogWydmYWInLCAnZmFjZWJvb2stZiddLFxyXG4gICAgY29sb3I6ICcjNDI2N0IyJyxcclxuICAgIHNoYXJlOiB7XHJcbiAgICAgIGRlc2t0b3A6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/JyxcclxuICAgICAgYW5kcm9pZDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD8nLFxyXG4gICAgICBpb3M6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/JyxcclxuICAgICAgb3BlcmF0b3JzOiBtZXRhVGFnc09wZXJhdG9ycyxcclxuICAgICAgbWV0YVRhZ3M6IHtcclxuICAgICAgICB1cmw6ICd1J1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY291bnQ6IHtcclxuICAgICAgcmVxdWVzdDogJ2h0dHAnLFxyXG4gICAgICB1cmw6ICdodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbT9pZD0nLFxyXG4gICAgICBvcGVyYXRvcnM6IEZhY2Vib29rQ291bnRPcGVyYXRvcnNcclxuICAgIH1cclxuICB9LFxyXG4gIHR3aXR0ZXI6IHtcclxuICAgIHR5cGU6ICd0d2l0dGVyJyxcclxuICAgIHRleHQ6ICdUd2l0dGVyJyxcclxuICAgIGljb246IFsnZmFiJywgJ3R3aXR0ZXInXSxcclxuICAgIGNvbG9yOiAnIzAwYWNlZScsXHJcbiAgICBzaGFyZToge1xyXG4gICAgICBkZXNrdG9wOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/JyxcclxuICAgICAgYW5kcm9pZDogJ2h0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0PycsXHJcbiAgICAgIGlvczogJ2h0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0PycsXHJcbiAgICAgIG9wZXJhdG9yczogbWV0YVRhZ3NPcGVyYXRvcnMsXHJcbiAgICAgIG1ldGFUYWdzOiB7XHJcbiAgICAgICAgdXJsOiAndXJsJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ3RleHQnLFxyXG4gICAgICAgIHRhZ3M6ICdoYXNodGFncycsXHJcbiAgICAgICAgdmlhOiAndmlhJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBnb29nbGU6IHtcclxuICAgIHR5cGU6ICdnb29nbGUnLFxyXG4gICAgdGV4dDogJ0dvb2dsZSsnLFxyXG4gICAgaWNvbjogWydmYWInLCAnZ29vZ2xlLXBsdXMtZyddLFxyXG4gICAgY29sb3I6ICcjREI0NDM3JyxcclxuICAgIHNoYXJlOiB7XHJcbiAgICAgIGRlc2t0b3A6ICdodHRwczovL3BsdXMuZ29vZ2xlLmNvbS9zaGFyZT8nLFxyXG4gICAgICBhbmRyb2lkOiAnaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vc2hhcmU/JyxcclxuICAgICAgaW9zOiAnaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vc2hhcmU/JyxcclxuICAgICAgbWV0YVRhZ3M6IHtcclxuICAgICAgICB1cmw6ICd1cmwnLFxyXG4gICAgICB9LFxyXG4gICAgICBvcGVyYXRvcnM6IG1ldGFUYWdzT3BlcmF0b3JzXHJcbiAgICB9XHJcbiAgfSxcclxuICBsaW5rZWRpbjoge1xyXG4gICAgdHlwZTogJ2xpbmtlZGluJyxcclxuICAgIHRleHQ6ICdMaW5rZWRJbicsXHJcbiAgICBpY29uOiBbJ2ZhYicsICdsaW5rZWRpbi1pbiddLFxyXG4gICAgY29sb3I6ICcjMDA2ZmE2JyxcclxuICAgIHNoYXJlOiB7XHJcbiAgICAgIGRlc2t0b3A6ICdodHRwOi8vd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/JyxcclxuICAgICAgYW5kcm9pZDogJ2h0dHA6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT8nLFxyXG4gICAgICBpb3M6ICdodHRwOi8vd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/JyxcclxuICAgICAgb3BlcmF0b3JzOiBtZXRhVGFnc09wZXJhdG9ycyxcclxuICAgICAgbWV0YVRhZ3M6IHtcclxuICAgICAgICB1cmw6ICd1cmwnLFxyXG4gICAgICAgIHRpdGxlOiAndGl0bGUnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnc3VtbWFyeSdcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9LFxyXG4gIHBpbnRlcmVzdDoge1xyXG4gICAgdHlwZTogJ3BpbnRlcmVzdCcsXHJcbiAgICB0ZXh0OiAnUGludGVyZXN0JyxcclxuICAgIGljb246IFsnZmFiJywgJ3BpbnRlcmVzdC1wJ10sXHJcbiAgICBjb2xvcjogJyNCRDA5MUQnLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgZGVza3RvcDogJ2h0dHBzOi8vaW4ucGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2J1dHRvbi8/JyxcclxuICAgICAgYW5kcm9pZDogJ2h0dHBzOi8vaW4ucGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2J1dHRvbi8/JyxcclxuICAgICAgaW9zOiAnaHR0cHM6Ly9pbi5waW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYnV0dG9uLz8nLFxyXG4gICAgICBvcGVyYXRvcnM6IG1ldGFUYWdzT3BlcmF0b3JzLFxyXG4gICAgICBtZXRhVGFnczoge1xyXG4gICAgICAgIHVybDogJ3VybCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdkZXNjcmlwdGlvbicsXHJcbiAgICAgICAgaW1hZ2U6ICdtZWRpYSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvdW50OiB7XHJcbiAgICAgIHJlcXVlc3Q6ICdodHRwJyxcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkucGludGVyZXN0LmNvbS92MS91cmxzL2NvdW50Lmpzb24/dXJsPScsXHJcbiAgICAgIGFyZ3M6IHtyZXNwb25zZVR5cGU6ICd0ZXh0J30sXHJcbiAgICAgIG9wZXJhdG9yczogUGludGVyZXN0Q291bnRPcGVyYXRvcnNcclxuICAgIH1cclxuICB9LFxyXG4gIHJlZGRpdDoge1xyXG4gICAgdHlwZTogJ3JlZGRpdCcsXHJcbiAgICB0ZXh0OiAnUmVkZGl0JyxcclxuICAgIGljb246IFsnZmFiJywgJ3JlZGRpdC1hbGllbiddLFxyXG4gICAgY29sb3I6ICcjRkY0MDA2JyxcclxuICAgIHNoYXJlOiB7XHJcbiAgICAgIGRlc2t0b3A6ICdodHRwOi8vd3d3LnJlZGRpdC5jb20vc3VibWl0PycsXHJcbiAgICAgIGFuZHJvaWQ6ICdodHRwOi8vd3d3LnJlZGRpdC5jb20vc3VibWl0PycsXHJcbiAgICAgIGlvczogJ2h0dHA6Ly93d3cucmVkZGl0LmNvbS9zdWJtaXQ/JyxcclxuICAgICAgb3BlcmF0b3JzOiBtZXRhVGFnc09wZXJhdG9ycyxcclxuICAgICAgbWV0YVRhZ3M6IHtcclxuICAgICAgICB1cmw6ICd1cmwnLFxyXG4gICAgICAgIHRpdGxlOiAndGl0bGUnXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY291bnQ6IHtcclxuICAgICAgcmVxdWVzdDogJ2h0dHAnLFxyXG4gICAgICB1cmw6ICdodHRwczovL2J1dHRvbnMucmVkZGl0LmNvbS9idXR0b25faW5mby5qc29uP3VybD0nLFxyXG4gICAgICBvcGVyYXRvcnM6IFJlZGRpdENvdW50T3BlcmF0b3JzXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdHVtYmxyOiB7XHJcbiAgICB0eXBlOiAndHVtYmxyJyxcclxuICAgIHRleHQ6ICdUdW1ibHInLFxyXG4gICAgaWNvbjogWydmYWInLCAndHVtYmxyJ10sXHJcbiAgICBjb2xvcjogJyMzNjQ2NUQnLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgZGVza3RvcDogJ2h0dHA6Ly90dW1ibHIuY29tL3dpZGdldHMvc2hhcmUvdG9vbD8nLFxyXG4gICAgICBhbmRyb2lkOiAnaHR0cDovL3R1bWJsci5jb20vd2lkZ2V0cy9zaGFyZS90b29sPycsXHJcbiAgICAgIGlvczogJ2h0dHA6Ly90dW1ibHIuY29tL3dpZGdldHMvc2hhcmUvdG9vbD8nLFxyXG4gICAgICBvcGVyYXRvcnM6IG1ldGFUYWdzT3BlcmF0b3JzLFxyXG4gICAgICBtZXRhVGFnczoge1xyXG4gICAgICAgIHVybDogJ2Nhbm9uaWNhbFVybCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdjYXB0aW9uJyxcclxuICAgICAgICB0YWdzOiAndGFncydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvdW50OiB7XHJcbiAgICAgIHJlcXVlc3Q6ICdqc29ucCcsXHJcbiAgICAgIHVybDogJ2h0dHBzOi8vYXBpLnR1bWJsci5jb20vdjIvc2hhcmUvc3RhdHM/dXJsPScsXHJcbiAgICAgIG9wZXJhdG9yczogVHVtYmxyQ291bnRPcGVyYXRvcnNcclxuICAgIH1cclxuICB9LFxyXG4gIHdoYXRzYXBwOiB7XHJcbiAgICB0eXBlOiAnd2hhdHNhcHAnLFxyXG4gICAgdGV4dDogJ1doYXRzQXBwJyxcclxuICAgIGljb246IFsnZmFiJywgJ3doYXRzYXBwJ10sXHJcbiAgICBjb2xvcjogJyMyNUQzNjYnLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgZGVza3RvcDogJ2h0dHBzOi8vd2ViLndoYXRzYXBwLmNvbS9zZW5kPycsXHJcbiAgICAgIGFuZHJvaWQ6ICd3aGF0c2FwcDovL3NlbmQ/JyxcclxuICAgICAgaW9zOiAnd2hhdHNhcHA6Ly9zZW5kPycsXHJcbiAgICAgIG9wZXJhdG9yczogW1xyXG4gICAgICAgIC4uLnVybEluTWVzc2FnZU9wZXJhdG9ycyxcclxuICAgICAgICAuLi5tZXRhVGFnc09wZXJhdG9yc1xyXG4gICAgICBdLFxyXG4gICAgICBtZXRhVGFnczoge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAndGV4dCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWVzc2VuZ2VyOiB7XHJcbiAgICB0eXBlOiAnbWVzc2VuZ2VyJyxcclxuICAgIHRleHQ6ICdNZXNzZW5nZXInLFxyXG4gICAgaWNvbjogWydmYWInLCAnZmFjZWJvb2stbWVzc2VuZ2VyJ10sXHJcbiAgICBjb2xvcjogJyMwMDgwRkYnLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgYW5kcm9pZDogJ2ZiLW1lc3NlbmdlcjovL3NoYXJlLz8nLFxyXG4gICAgICBpb3M6ICdmYi1tZXNzZW5nZXI6Ly9zaGFyZS8/JyxcclxuICAgICAgb3BlcmF0b3JzOiBtZXRhVGFnc09wZXJhdG9ycyxcclxuICAgICAgbWV0YVRhZ3M6IHtcclxuICAgICAgICB1cmw6ICdsaW5rJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB0ZWxlZ3JhbToge1xyXG4gICAgdHlwZTogJ3RlbGVncmFtJyxcclxuICAgIHRleHQ6ICdUZWxlZ3JhbScsXHJcbiAgICBpY29uOiBbJ2ZhYicsICd0ZWxlZ3JhbS1wbGFuZSddLFxyXG4gICAgY29sb3I6ICcjMDA4OGNjJyxcclxuICAgIHNoYXJlOiB7XHJcbiAgICAgIGRlc2t0b3A6ICdodHRwczovL3QubWUvc2hhcmUvdXJsPycsXHJcbiAgICAgIGFuZHJvaWQ6ICdodHRwczovL3QubWUvc2hhcmUvdXJsPycsXHJcbiAgICAgIGlvczogJ2h0dHBzOi8vdC5tZS9zaGFyZS91cmw/JyxcclxuICAgICAgb3BlcmF0b3JzOiBtZXRhVGFnc09wZXJhdG9ycyxcclxuICAgICAgbWV0YVRhZ3M6IHtcclxuICAgICAgICB1cmw6ICd1cmwnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAndGV4dCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdms6IHtcclxuICAgIHR5cGU6ICd2aycsXHJcbiAgICB0ZXh0OiAnVktvbnRha3RlJyxcclxuICAgIGljb246IFsnZmFiJywgJ3ZrJ10sXHJcbiAgICBjb2xvcjogJyM0Qzc1QTMnLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgZGVza3RvcDogJ2h0dHA6Ly92ay5jb20vc2hhcmUucGhwPycsXHJcbiAgICAgIGFuZHJvaWQ6ICdodHRwOi8vdmsuY29tL3NoYXJlLnBocD8nLFxyXG4gICAgICBpb3M6ICdodHRwOi8vdmsuY29tL3NoYXJlLnBocD8nLFxyXG4gICAgICBvcGVyYXRvcnM6IG1ldGFUYWdzT3BlcmF0b3JzLFxyXG4gICAgICBtZXRhVGFnczoge1xyXG4gICAgICAgIHVybDogJ3VybCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3R1bWJsZToge1xyXG4gICAgdHlwZTogJ3N0dW1ibGUnLFxyXG4gICAgdGV4dDogJ1N0dW1ibGUnLFxyXG4gICAgaWNvbjogWydmYWInLCAnc3R1bWJsZXVwb24nXSxcclxuICAgIGNvbG9yOiAnI2ViNDkyNCcsXHJcbiAgICBzaGFyZToge1xyXG4gICAgICBkZXNrdG9wOiAnaHR0cDovL3d3dy5zdHVtYmxldXBvbi5jb20vc3VibWl0PycsXHJcbiAgICAgIGFuZHJvaWQ6ICdodHRwOi8vd3d3LnN0dW1ibGV1cG9uLmNvbS9zdWJtaXQ/JyxcclxuICAgICAgaW9zOiAnaHR0cDovL3d3dy5zdHVtYmxldXBvbi5jb20vc3VibWl0PycsXHJcbiAgICAgIG9wZXJhdG9yczogbWV0YVRhZ3NPcGVyYXRvcnMsXHJcbiAgICAgIG1ldGFUYWdzOiB7XHJcbiAgICAgICAgdXJsOiAndXJsJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB4aW5nOiB7XHJcbiAgICB0eXBlOiAneGluZycsXHJcbiAgICB0ZXh0OiAnWGluZycsXHJcbiAgICBpY29uOiBbJ2ZhYicsICd4aW5nJ10sXHJcbiAgICBjb2xvcjogJyMwMDY1NjcnLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgZGVza3RvcDogJ2h0dHBzOi8vd3d3LnhpbmcuY29tL2FwcC91c2VyP29wPXNoYXJlJicsXHJcbiAgICAgIGFuZHJvaWQ6ICdodHRwczovL3d3dy54aW5nLmNvbS9hcHAvdXNlcj9vcD1zaGFyZSYnLFxyXG4gICAgICBpb3M6ICdodHRwczovL3d3dy54aW5nLmNvbS9hcHAvdXNlcj9vcD1zaGFyZSYnLFxyXG4gICAgICBvcGVyYXRvcnM6IG1ldGFUYWdzT3BlcmF0b3JzLFxyXG4gICAgICBtZXRhVGFnczoge1xyXG4gICAgICAgIHVybDogJ3VybCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc21zOiB7XHJcbiAgICB0eXBlOiAnc21zJyxcclxuICAgIHRleHQ6ICdTTVMnLFxyXG4gICAgaWNvbjogJ2NvbW1lbnQtYWx0JyxcclxuICAgIGNvbG9yOiAnIzIwYzE2YycsXHJcbiAgICBzaGFyZToge1xyXG4gICAgICBkZXNrdG9wOiAnc21zOj8nLFxyXG4gICAgICBhbmRyb2lkOiAnc21zOj8nLFxyXG4gICAgICBpb3M6ICdzbXM6PycsXHJcbiAgICAgIG1ldGFUYWdzOiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdib2R5J1xyXG4gICAgICB9LFxyXG4gICAgICBvcGVyYXRvcnM6IFtcclxuICAgICAgICAuLi51cmxJbk1lc3NhZ2VPcGVyYXRvcnMsXHJcbiAgICAgICAgLi4ubWV0YVRhZ3NPcGVyYXRvcnNcclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZW1haWw6IHtcclxuICAgIHR5cGU6ICdlbWFpbCcsXHJcbiAgICB0ZXh0OiAnRW1haWwnLFxyXG4gICAgaWNvbjogICdlbnZlbG9wZScsXHJcbiAgICBjb2xvcjogJyNGRjk2MUMnLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgZGVza3RvcDogJ21haWx0bzo/JyxcclxuICAgICAgYW5kcm9pZDogJ21haWx0bzo/JyxcclxuICAgICAgaW9zOiAnbWFpbHRvOj8nLFxyXG4gICAgICBvcGVyYXRvcnM6IFtcclxuICAgICAgICAuLi51cmxJbk1lc3NhZ2VPcGVyYXRvcnMsXHJcbiAgICAgICAgLi4ubWV0YVRhZ3NPcGVyYXRvcnNcclxuICAgICAgXSxcclxuICAgICAgbWV0YVRhZ3M6IHtcclxuICAgICAgICB0aXRsZTogJ3N1YmplY3QnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnYm9keSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29weToge1xyXG4gICAgdHlwZTogJ2NvcHknLFxyXG4gICAgdGV4dDogJ0NvcHkgbGluaycsXHJcbiAgICBzdWNjZXNzVGV4dDogJ0NvcGllZCcsXHJcbiAgICBzdWNjZXNzSWNvbjogJ2NoZWNrJyxcclxuICAgIGZhaWxUZXh0OiAnRXJyb3InLFxyXG4gICAgZmFpbEljb246ICdleGNsYW1hdGlvbicsXHJcbiAgICBpY29uOiAnbGluaycsXHJcbiAgICBjb2xvcjogJyM2MDdEOEInLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgb3BlcmF0b3JzOiBjb3B5T3BlcmF0b3JzXHJcbiAgICB9XHJcbiAgfSxcclxuICBwcmludDoge1xyXG4gICAgdHlwZTogJ3ByaW50JyxcclxuICAgIHRleHQ6ICdQcmludCcsXHJcbiAgICBpY29uOiAncHJpbnQnLFxyXG4gICAgY29sb3I6ICcjNzY1QUEyJyxcclxuICAgIHNoYXJlOiB7XHJcbiAgICAgIG9wZXJhdG9yczogcHJpbnRPcGVyYXRvcnNcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSVNoYXJlQnV0dG9uLCBTaGFyZUJ1dHRvbnNDb25maWcgfSBmcm9tICcuL3NoYXJlLm1vZGVscyc7XHJcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4vc2hhcmUudG9rZW5zJztcclxuaW1wb3J0IHsgc2hhcmVCdXR0b25zUHJvcCB9IGZyb20gJy4vc2hhcmUucHJvcCc7XHJcbmltcG9ydCB7IG1lcmdlRGVlcCB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2hhcmVCdXR0b25zIHtcclxuXHJcbiAgY29uZmlnOiBTaGFyZUJ1dHRvbnNDb25maWcgPSB7XHJcbiAgICBwcm9wOiBzaGFyZUJ1dHRvbnNQcm9wLFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICB0aGVtZTogJ2RlZmF1bHQnLFxyXG4gICAgICBpbmNsdWRlOiBbXSxcclxuICAgICAgZXhjbHVkZTogW10sXHJcbiAgICAgIHNpemU6IDAsXHJcbiAgICAgIHVybDogdW5kZWZpbmVkLFxyXG4gICAgICB0aXRsZTogdW5kZWZpbmVkLFxyXG4gICAgICBkZXNjcmlwdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgICBpbWFnZTogdW5kZWZpbmVkLFxyXG4gICAgICB0YWdzOiB1bmRlZmluZWQsXHJcbiAgICAgIHR3aXR0ZXJBY2NvdW50OiB1bmRlZmluZWQsXHJcbiAgICAgIGF1dG9TZXRNZXRhOiB0cnVlLFxyXG4gICAgICBnYVRyYWNraW5nOiBmYWxzZSxcclxuICAgICAgd2luZG93V2lkdGg6IDgwMCxcclxuICAgICAgd2luZG93SGVpZ2h0OiA1MDAsXHJcbiAgICAgIG1vcmVCdXR0b25JY29uOiAnZWxsaXBzaXMtaCcsXHJcbiAgICAgIGxlc3NCdXR0b25JY29uOiAnbWludXMnXHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25maWckID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLmNvbmZpZyk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ09ORklHKSBjb25maWc6IFNoYXJlQnV0dG9uc0NvbmZpZykge1xyXG4gICAgaWYgKGNvbmZpZykge1xyXG4gICAgICB0aGlzLnNldENvbmZpZyhjb25maWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHByb3AoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcucHJvcDtcclxuICB9XHJcblxyXG4gIGdldCB0d2l0dGVyQWNjb3VudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5vcHRpb25zLnR3aXR0ZXJBY2NvdW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRoZW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLm9wdGlvbnMudGhlbWU7XHJcbiAgfVxyXG5cclxuICBnZXQgd2luZG93U2l6ZSgpIHtcclxuICAgIHJldHVybiBgd2lkdGg9JHt0aGlzLmNvbmZpZy5vcHRpb25zLndpbmRvd1dpZHRofSwgaGVpZ2h0PSR7dGhpcy5jb25maWcub3B0aW9ucy53aW5kb3dIZWlnaHR9YDtcclxuICB9XHJcblxyXG4gIGdldCB1cmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcub3B0aW9ucy51cmw7XHJcbiAgfVxyXG5cclxuICBnZXQgdGl0bGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcub3B0aW9ucy50aXRsZTtcclxuICB9XHJcblxyXG4gIGdldCBkZXNjcmlwdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5vcHRpb25zLmRlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGltYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLm9wdGlvbnMuaW1hZ2U7XHJcbiAgfVxyXG5cclxuICBnZXQgdGFncygpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5vcHRpb25zLnRhZ3M7XHJcbiAgfVxyXG5cclxuICBnZXQgYXV0b1NldE1ldGEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcub3B0aW9ucy5hdXRvU2V0TWV0YTtcclxuICB9XHJcblxyXG4gIGdldCBnYVRyYWNraW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLm9wdGlvbnMuZ2FUcmFja2luZztcclxuICB9XHJcblxyXG4gIGdldCBzaXplKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLm9wdGlvbnMuc2l6ZTtcclxuICB9XHJcblxyXG4gIHNldENvbmZpZyhjb25maWc6IFNoYXJlQnV0dG9uc0NvbmZpZykge1xyXG4gICAgdGhpcy5jb25maWcgPSBtZXJnZURlZXAodGhpcy5jb25maWcsIGNvbmZpZyk7XHJcbiAgICB0aGlzLmNvbmZpZyQubmV4dCh0aGlzLmNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBhZGRCdXR0b24obmFtZTogc3RyaW5nLCBkYXRhOiBJU2hhcmVCdXR0b24pIHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgcHJvcDogey4uLnNoYXJlQnV0dG9uc1Byb3AsIC4uLntbbmFtZV06IGRhdGF9fVxyXG4gICAgfTtcclxuICAgIHRoaXMuc2V0Q29uZmlnKGNvbmZpZyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5qZWN0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBFbGVtZW50UmVmLFxyXG4gIFJlbmRlcmVyMixcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBQTEFURk9STV9JRFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgRU1QVFkgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFwLCBmaWx0ZXIsIHN3aXRjaE1hcCwgbWFwLCB0YWtlLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgU2hhcmVCdXR0b25zIH0gZnJvbSAnLi9zaGFyZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSVNoYXJlQnV0dG9uLCBTaGFyZUJ1dHRvblJlZiB9IGZyb20gJy4vc2hhcmUubW9kZWxzJztcclxuaW1wb3J0IHsgZ2V0TWV0YUNvbnRlbnQsIGdldE9TLCBnZXRWYWxpZFVybCB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuLyoqIEdvb2dsZSBhbmFseXRpY3MgcmVmICovXHJcbmRlY2xhcmUgY29uc3QgZ2E6IEZ1bmN0aW9uO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbc2hhcmVCdXR0b25dJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVCdXR0b25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cclxuICAvKiogQSByZWYgdG8gYnV0dG9uIGNsYXNzIC0gdXNlZCB0byByZW1vdmUgcHJldmlvdXMgY2xhc3Mgd2hlbiB0aGUgYnV0dG9uIHR5cGUgaXMgY2hhbmdlZCAqL1xyXG4gIHByaXZhdGUgX2J1dHRvbkNsYXNzOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBCdXR0b24gcHJvcGVydGllcyAqL1xyXG4gIHByb3A6IElTaGFyZUJ1dHRvbjtcclxuXHJcbiAgLyoqIFNoYXJlIGJ1dHRvbiB0eXBlICovXHJcbiAgQElucHV0KCkgc2hhcmVCdXR0b246IHN0cmluZztcclxuXHJcbiAgLyoqIEdldCBzaGFyZSBjb3VudCAqL1xyXG4gIEBJbnB1dCgpIGdldENvdW50ID0gZmFsc2U7XHJcblxyXG4gIC8qKiBTZXQgbWV0YSB0YWdzIGZyb20gZG9jdW1lbnQgaGVhZCwgdXNlZnVsIHdoZW4gU0VPIGlzIHN1cHBvcnRlZCAqL1xyXG4gIEBJbnB1dCgpIGF1dG9TZXRNZXRhOiBib29sZWFuID0gdGhpcy5zaGFyZVNlcnZpY2UuYXV0b1NldE1ldGE7XHJcblxyXG4gIC8qKiBNZXRhIHRhZ3MgaW5wdXRzIC0gaW5pdGlhbGl6ZWQgZnJvbSB0aGUgZ2xvYmFsIG9wdGlvbnMgKi9cclxuICBASW5wdXQoKSB1cmw6IHN0cmluZyA9IHRoaXMuc2hhcmVTZXJ2aWNlLnVybDtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gdGhpcy5zaGFyZVNlcnZpY2UudGl0bGU7XHJcbiAgQElucHV0KCkgZGVzY3JpcHRpb246IHN0cmluZyA9IHRoaXMuc2hhcmVTZXJ2aWNlLmRlc2NyaXB0aW9uO1xyXG4gIEBJbnB1dCgpIGltYWdlOiBzdHJpbmcgPSB0aGlzLnNoYXJlU2VydmljZS5pbWFnZTtcclxuICBASW5wdXQoKSB0YWdzOiBzdHJpbmcgPSB0aGlzLnNoYXJlU2VydmljZS50YWdzO1xyXG5cclxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBzaGFyZSBjb3VudCBpcyBmZXRjaGVkICovXHJcbiAgQE91dHB1dCgpIGNvdW50ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHNoYXJlIGRpYWxvZyBpcyBvcGVuZWQgKi9cclxuICBAT3V0cHV0KCkgb3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHNoYXJlIGRpYWxvZyBpcyBjbG9zZWQgKi9cclxuICBAT3V0cHV0KCkgY2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2hhcmVTZXJ2aWNlOiBTaGFyZUJ1dHRvbnMsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgICAgICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgICAgICAgIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtOiBPYmplY3QpIHtcclxuICB9XHJcblxyXG4gIC8qKiBTaGFyZSBsaW5rIG9uIGVsZW1lbnQgY2xpY2sgKi9cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgb25DbGljaygpIHtcclxuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtKSkge1xyXG4gICAgICBjb25zdCBtZXRhVGFncyA9IHRoaXMuYXV0b1NldE1ldGEgPyB7XHJcbiAgICAgICAgdXJsOiB0aGlzLnVybCxcclxuICAgICAgICB0aXRsZTogdGhpcy50aXRsZSB8fCBnZXRNZXRhQ29udGVudCgnb2c6dGl0bGUnKSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbiB8fCBnZXRNZXRhQ29udGVudCgnb2c6ZGVzY3JpcHRpb24nKSxcclxuICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSB8fCBnZXRNZXRhQ29udGVudCgnb2c6aW1hZ2UnKSxcclxuICAgICAgICB2aWE6IHRoaXMuc2hhcmVTZXJ2aWNlLnR3aXR0ZXJBY2NvdW50IHx8IGdldE1ldGFDb250ZW50KCd0d2l0dGVyOnNpdGUnKSxcclxuICAgICAgICB0YWdzOiB0aGlzLnRhZ3MsXHJcbiAgICAgIH0gOiB7XHJcbiAgICAgICAgdXJsOiB0aGlzLnVybCxcclxuICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcclxuICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcclxuICAgICAgICB0YWdzOiB0aGlzLnRhZ3MsXHJcbiAgICAgICAgdmlhOiB0aGlzLnNoYXJlU2VydmljZS50d2l0dGVyQWNjb3VudCxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlZjogU2hhcmVCdXR0b25SZWYgPSB7XHJcbiAgICAgICAgY2Q6IHRoaXMuY2QsXHJcbiAgICAgICAgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXIsXHJcbiAgICAgICAgcHJvcDogdGhpcy5wcm9wLFxyXG4gICAgICAgIGVsOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgb3M6IGdldE9TKCksXHJcbiAgICAgICAgbWV0YVRhZ3NcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIFNoYXJlIHRoZSBsaW5rXHJcbiAgICAgIG9mKHJlZikucGlwZShcclxuICAgICAgICAuLi50aGlzLnByb3Auc2hhcmUub3BlcmF0b3JzLFxyXG4gICAgICAgIHRhcCgoc2hhcmVyVVJMOiBhbnkpID0+IHRoaXMuc2hhcmUoc2hhcmVyVVJMKSksXHJcbiAgICAgICAgdGFrZSgxKVxyXG4gICAgICApLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm0pKSB7XHJcblxyXG4gICAgICBpZiAoY2hhbmdlc1snc2hhcmVCdXR0b24nXSAmJiAoY2hhbmdlc1snc2hhcmVCdXR0b24nXS5maXJzdENoYW5nZSB8fCBjaGFuZ2VzWydzaGFyZUJ1dHRvbiddLnByZXZpb3VzVmFsdWUgIT09IHRoaXMuc2hhcmVCdXR0b24pKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVTaGFyZUJ1dHRvbih0aGlzLnNoYXJlQnV0dG9uKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF0aGlzLnVybCB8fCAoY2hhbmdlc1sndXJsJ10gJiYgY2hhbmdlc1sndXJsJ10ucHJldmlvdXNWYWx1ZSAhPT0gdGhpcy51cmwpKSB7XHJcbiAgICAgICAgb2YobnVsbCkucGlwZShcclxuICAgICAgICAgIG1hcCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXJsID0gZ2V0VmFsaWRVcmwodGhpcy5hdXRvU2V0TWV0YSA/IHRoaXMudXJsIHx8IGdldE1ldGFDb250ZW50KCdvZzp1cmwnKSA6IHRoaXMudXJsLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVybDtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMucHJvcC5jb3VudCAmJiB0aGlzLmdldENvdW50KSxcclxuICAgICAgICAgIHN3aXRjaE1hcCgodXJsOiBzdHJpbmcpID0+IHRoaXMuc2hhcmVDb3VudCh1cmwpKSxcclxuICAgICAgICAgIHRhcCgoc2hhcmVDb3VudDogbnVtYmVyKSA9PiB0aGlzLmNvdW50LmVtaXQoc2hhcmVDb3VudCkpLFxyXG4gICAgICAgICAgdGFrZSgxKVxyXG4gICAgICAgICkuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wZW4gc2hhcmluZyBkaWFsb2dcclxuICAgKiBAcGFyYW0gdXJsIC0gU2hhcmUgVVJMXHJcbiAgICovXHJcbiAgc2hhcmUodXJsOiBzdHJpbmcpIHtcclxuICAgIGlmICh1cmwpIHtcclxuXHJcbiAgICAgIC8vIEdBIFRyYWNraW5nXHJcbiAgICAgIGlmICh0aGlzLnNoYXJlU2VydmljZS5nYVRyYWNraW5nICYmIHR5cGVvZiBnYSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBnYSgnc2VuZCcsICdzb2NpYWwnLCB0aGlzLnByb3AudHlwZSwgJ2NsaWNrJywgdGhpcy51cmwpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBFbWl0IHdoZW4gc2hhcmUgZGlhbG9nIGlzIG9wZW5lZFxyXG4gICAgICB0aGlzLm9wZW5lZC5lbWl0KHRoaXMucHJvcC50eXBlKTtcclxuXHJcbiAgICAgIGNvbnN0IHBvcFVwID0gd2luZG93Lm9wZW4odXJsLCAnbmV3d2luZG93JywgdGhpcy5zaGFyZVNlcnZpY2Uud2luZG93U2l6ZSk7XHJcblxyXG4gICAgICAvLyBFbWl0IHdoZW4gc2hhcmUgZGlhbG9nIGlzIGNsb3NlZFxyXG4gICAgICBpZiAocG9wVXApIHtcclxuICAgICAgICBjb25zdCBwb2xsVGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHBvcFVwLmNsb3NlZCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChwb2xsVGltZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlZC5lbWl0KHRoaXMucHJvcC50eXBlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCAyMDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgbGluayBzaGFyZSBjb3VudFxyXG4gICAqIEBwYXJhbSB1cmwgLSBTaGFyZSBVUkxcclxuICAgKiBAcmV0dXJucyBTaGFyZSBjb3VudFxyXG4gICAqL1xyXG4gIHNoYXJlQ291bnQodXJsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cclxuICAgIGlmICh0aGlzLnByb3AuY291bnQucmVxdWVzdCA9PT0gJ2pzb25wJykge1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5qc29ucDxhbnk+KHRoaXMucHJvcC5jb3VudC51cmwgKyB1cmwsICdjYWxsYmFjaycpLnBpcGUoXHJcbiAgICAgICAgLi4udGhpcy5wcm9wLmNvdW50Lm9wZXJhdG9ycyxcclxuICAgICAgICBjYXRjaEVycm9yKCgpID0+IEVNUFRZKSxcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHRoaXMucHJvcC5jb3VudC51cmwgKyB1cmwsIHRoaXMucHJvcC5jb3VudC5hcmdzKS5waXBlKFxyXG4gICAgICAgIC4uLnRoaXMucHJvcC5jb3VudC5vcGVyYXRvcnMsXHJcbiAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiBFTVBUWSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVNoYXJlQnV0dG9uKGJ1dHRvbnNOYW1lOiBzdHJpbmcpIHtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSB7Li4udGhpcy5zaGFyZVNlcnZpY2UucHJvcFtidXR0b25zTmFtZV19O1xyXG5cclxuICAgIGlmIChidXR0b24pIHtcclxuICAgICAgLy8gU2V0IHNoYXJlIGJ1dHRvbiBwcm9wZXJ0aWVzXHJcbiAgICAgIHRoaXMucHJvcCA9IGJ1dHRvbjtcclxuXHJcbiAgICAgIC8vIFJlbW92ZSBwcmV2aW91cyBidXR0b24gY2xhc3NcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGBzYi0ke3RoaXMuX2J1dHRvbkNsYXNzfWApO1xyXG5cclxuICAgICAgLy8gQWRkIG5ldyBidXR0b24gY2xhc3NcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGBzYi0ke2J1dHRvbi50eXBlfWApO1xyXG5cclxuICAgICAgLy8gU2V0IGJ1dHRvbiBjc3MgY29sb3IgdmFyaWFibGVcclxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWJ1dHRvbi1jb2xvcicsIHRoaXMucHJvcC5jb2xvcik7XHJcblxyXG4gICAgICAvLyBLZWVwIGEgY29weSBvZiB0aGUgY2xhc3MgZm9yIGZ1dHVyZSByZXBsYWNlbWVudFxyXG4gICAgICB0aGlzLl9idXR0b25DbGFzcyA9IGJ1dHRvbi50eXBlO1xyXG5cclxuICAgICAgLy8gU2V0IGFyaWEtbGFiZWwgYXR0cmlidXRlXHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2FyaWEtbGFiZWwnLCBidXR0b24uYXJpYUxhYmVsIHx8IGJ1dHRvbi50ZXh0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW1NoYXJlQnV0dG9uc106IFRoZSBzaGFyZSBidXR0b24gJyR7YnV0dG9uc05hbWV9JyBkb2VzIG5vdCBleGlzdCFgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgc2hhcmVDb3VudEZvcm1hdHRlciB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdzaGFyZUNvdW50J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVDb3VudFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0obnVtOiBudW1iZXIsIGRpZ2l0cz86IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHNoYXJlQ291bnRGb3JtYXR0ZXIobnVtLCBkaWdpdHMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU2hhcmVCdXR0b25zIH0gZnJvbSAnLi9zaGFyZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2hhcmVCdXR0b25EaXJlY3RpdmUgfSBmcm9tICcuL3NoYXJlLWJ1dHRvbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBTaGFyZUNvdW50UGlwZSB9IGZyb20gJy4vc2hhcmUtY291bnQucGlwZSc7XHJcbmltcG9ydCB7IFNoYXJlQnV0dG9uc0NvbmZpZyB9IGZyb20gJy4vc2hhcmUubW9kZWxzJztcclxuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9zaGFyZS50b2tlbnMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNoYXJlQnV0dG9uc0ZhY3RvcnkoY29uZmlnOiBTaGFyZUJ1dHRvbnNDb25maWcpIHtcclxuICByZXR1cm4gbmV3IFNoYXJlQnV0dG9ucyhjb25maWcpO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgU2hhcmVCdXR0b25EaXJlY3RpdmUsXHJcbiAgICBTaGFyZUNvdW50UGlwZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgU2hhcmVCdXR0b25EaXJlY3RpdmUsXHJcbiAgICBTaGFyZUNvdW50UGlwZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBTaGFyZUJ1dHRvbnNDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBTaGFyZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge3Byb3ZpZGU6IENPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ30sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogU2hhcmVCdXR0b25zLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogU2hhcmVCdXR0b25zRmFjdG9yeSxcclxuICAgICAgICAgIGRlcHM6IFtDT05GSUddXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiSW5qZWN0aW9uVG9rZW4iLCJvZiIsInRhcCIsIm1hcCIsInN3aXRjaE1hcCIsImNhdGNoRXJyb3IiLCJkZWxheSIsIkJlaGF2aW9yU3ViamVjdCIsIkluamVjdGFibGUiLCJJbmplY3QiLCJodHRwIiwiRXZlbnRFbWl0dGVyIiwiaXNQbGF0Zm9ybUJyb3dzZXIiLCJ0YWtlIiwiZmlsdGVyIiwiRU1QVFkiLCJEaXJlY3RpdmUiLCJIdHRwQ2xpZW50IiwiUmVuZGVyZXIyIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJFbGVtZW50UmVmIiwiUExBVEZPUk1fSUQiLCJJbnB1dCIsIk91dHB1dCIsIkhvc3RMaXN0ZW5lciIsIlBpcGUiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFZTyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLGtCQUFrQixDQUFDO1FBQ3RELEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pELENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsS0FBSyxJQUFJ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