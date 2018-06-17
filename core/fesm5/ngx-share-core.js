import { InjectionToken, Inject, Injectable, Directive, Input, Output, HostListener, EventEmitter, ElementRef, Renderer2, ChangeDetectorRef, PLATFORM_ID, Pipe, NgModule } from '@angular/core';
import { __assign, __spread, __read } from 'tslib';
import { of, BehaviorSubject, EMPTY } from 'rxjs';
import { tap, map, delay, switchMap, catchError, filter, take } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ CONFIG = new InjectionToken('CONFIG');

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
    return of(url).pipe(tap(function (text) {
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
    var /** @type {?} */ userAgent = navigator.userAgent || navigator.vendor || (/** @type {?} */ (window)).opera;
    if (/android/i.test(userAgent)) {
        return 'android';
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !(/** @type {?} */ (window)).MSStream) {
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
    map(function (ref) {
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
    map(function () { return window.print(); })
];
/**
 * Copy link to clipboard, used for copy button
 */
var /** @type {?} */ copyOperators = [
    map(function (ref) {
        // Disable the button
        ref.renderer.setStyle(ref.el, 'pointer-events', 'none');
        ref.temp = { text: ref.prop.text, icon: ref.prop.icon };
        ref.metaTags.url = decodeURIComponent(ref.metaTags.url);
        return ref;
    }),
    switchMap(function (ref) { return copyToClipboard(ref.metaTags.url, ref.os).pipe(map(function () {
        ref.prop.text = ref.prop.successText;
        ref.prop.icon = ref.prop.successIcon;
        return ref;
    }), catchError(function () {
        ref.prop.text = ref.prop.failText;
        ref.prop.icon = ref.prop.failIcon;
        return of(ref);
    })); }),
    map(function (ref) {
        ref.cd.markForCheck();
        return ref;
    }),
    delay(2000),
    map(function (ref) {
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
    map(function (ref) {
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
    map(function (res) { return +res.share.share_count; })
];
var /** @type {?} */ PinterestCountOperators = [
    map(function (text) { return JSON.parse(text.replace(/^receiveCount\((.*)\)/, '$1')); }),
    map(function (res) { return +res.count; })
];
var /** @type {?} */ TumblrCountOperators = [
    map(function (res) { return +res.response.note_count; })
];
var /** @type {?} */ RedditCountOperators = [
    map(function (res) { return +res.data.children[0].data.score; })
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
var ShareButtons = /** @class */ (function () {
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
        this.config$ = new BehaviorSubject(this.config);
        if (config) {
            this.setConfig(config);
        }
    }
    Object.defineProperty(ShareButtons.prototype, "prop", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.prop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "twitterAccount", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.options.twitterAccount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "theme", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.options.theme;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "windowSize", {
        get: /**
         * @return {?}
         */
        function () {
            return "width=" + this.config.options.windowWidth + ", height=" + this.config.options.windowHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "url", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.options.url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "title", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.options.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "description", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.options.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "image", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.options.image;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "tags", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.options.tags;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "autoSetMeta", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.options.autoSetMeta;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "gaTracking", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.options.gaTracking;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "size", {
        get: /**
         * @return {?}
         */
        function () {
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
        { type: Injectable },
    ];
    /** @nocollapse */
    ShareButtons.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [CONFIG,] }] }
    ]; };
    return ShareButtons;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ShareButtonDirective = /** @class */ (function () {
    function ShareButtonDirective(shareService, http, renderer, cd, el, platform) {
        this.shareService = shareService;
        this.http = http;
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
        this.count = new EventEmitter();
        /**
         * Stream that emits when share dialog is opened
         */
        this.opened = new EventEmitter();
        /**
         * Stream that emits when share dialog is closed
         */
        this.closed = new EventEmitter();
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
        if (isPlatformBrowser(this.platform)) {
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
            (_a = of(ref)).pipe.apply(_a, __spread(this.prop.share.operators, [tap(function (sharerURL) { return _this.share(sharerURL); }),
                take(1)])).subscribe();
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
        if (isPlatformBrowser(this.platform)) {
            if (changes['shareButton'] && (changes['shareButton'].firstChange || changes['shareButton'].previousValue !== this.shareButton)) {
                this.createShareButton(this.shareButton);
            }
            if (!this.url || (changes['url'] && changes['url'].previousValue !== this.url)) {
                of(null).pipe(map(function () {
                    _this.url = getValidUrl(_this.autoSetMeta ? _this.url || getMetaContent('og:url') : _this.url, window.location.href);
                    return _this.url;
                }), filter(function () { return _this.prop.count && _this.getCount; }), switchMap(function (url) { return _this.shareCount(url); }), tap(function (shareCount) { return _this.count.emit(shareCount); }), take(1)).subscribe();
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
            return (_a = this.http.jsonp(this.prop.count.url + url, 'callback')).pipe.apply(_a, __spread(this.prop.count.operators, [catchError(function () { return EMPTY; })]));
        }
        else {
            return (_b = this.http.get(this.prop.count.url + url, this.prop.count.args)).pipe.apply(_b, __spread(this.prop.count.operators, [catchError(function () { return EMPTY; })]));
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
        { type: Directive, args: [{
                    selector: '[shareButton]'
                },] },
    ];
    /** @nocollapse */
    ShareButtonDirective.ctorParameters = function () { return [
        { type: ShareButtons },
        { type: HttpClient },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    ShareButtonDirective.propDecorators = {
        shareButton: [{ type: Input }],
        getCount: [{ type: Input }],
        autoSetMeta: [{ type: Input }],
        url: [{ type: Input }],
        title: [{ type: Input }],
        description: [{ type: Input }],
        image: [{ type: Input }],
        tags: [{ type: Input }],
        count: [{ type: Output }],
        opened: [{ type: Output }],
        closed: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return ShareButtonDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ShareCountPipe = /** @class */ (function () {
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
        { type: Pipe, args: [{
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
var ShareModule = /** @class */ (function () {
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
        { type: NgModule, args: [{
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

export { ShareButtonsFactory, ShareModule, ShareButtons, ShareButtonDirective, metaTagsOperators, printOperators, copyOperators, urlInMessageOperators, FacebookCountOperators, PinterestCountOperators, TumblrCountOperators, RedditCountOperators, shareButtonsProp, ShareCountPipe, CONFIG };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNoYXJlLWNvcmUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BuZ3gtc2hhcmUvY29yZS9saWIvc2hhcmUudG9rZW5zLnRzIiwibmc6Ly9Abmd4LXNoYXJlL2NvcmUvbGliL3V0aWxzLnRzIiwibmc6Ly9Abmd4LXNoYXJlL2NvcmUvbGliL3NoYXJlLm9wZXJhdG9ycy50cyIsIm5nOi8vQG5neC1zaGFyZS9jb3JlL2xpYi9zaGFyZS5wcm9wLnRzIiwibmc6Ly9Abmd4LXNoYXJlL2NvcmUvbGliL3NoYXJlLnNlcnZpY2UudHMiLCJuZzovL0BuZ3gtc2hhcmUvY29yZS9saWIvc2hhcmUtYnV0dG9uLmRpcmVjdGl2ZS50cyIsIm5nOi8vQG5neC1zaGFyZS9jb3JlL2xpYi9zaGFyZS1jb3VudC5waXBlLnRzIiwibmc6Ly9Abmd4LXNoYXJlL2NvcmUvbGliL3NoYXJlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbnNDb25maWcgfSBmcm9tICcuL3NoYXJlLm1vZGVscyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPFNoYXJlQnV0dG9uc0NvbmZpZz4oJ0NPTkZJRycpO1xyXG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG4vKiogU2ltcGxlIG9iamVjdCBjaGVjay4qL1xyXG5mdW5jdGlvbiBpc09iamVjdChpdGVtKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSk7XHJcbn1cclxuXHJcbi8qKiBEZWVwIG1lcmdlIHR3byBvYmplY3RzLiovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XHJcbiAgaWYgKCFzb3VyY2VzLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIHRhcmdldDtcclxuICB9XHJcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpO1xyXG5cclxuICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcclxuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xyXG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcclxuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7W2tleV06IHt9fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7W2tleV06IHNvdXJjZVtrZXldfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKTtcclxufVxyXG5cclxuLyoqIFJldHVybnMgYSByZWFkYWJsZSBudW1iZXIgZnJvbSBzaGFyZSBjb3VudCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2hhcmVDb3VudEZvcm1hdHRlcihudW06IG51bWJlciwgZGlnaXRzOiBudW1iZXIpOiBzdHJpbmcge1xyXG5cclxuICBjb25zdCBzaSA9IFtcclxuICAgIHt2YWx1ZTogMUU5LCBzeW1ib2w6ICdCJ30sXHJcbiAgICB7dmFsdWU6IDFFNiwgc3ltYm9sOiAnTSd9LFxyXG4gICAge3ZhbHVlOiAxRTMsIHN5bWJvbDogJ0snfVxyXG4gIF0sIHJ4ID0gL1xcLjArJHwoXFwuWzAtOV0qWzEtOV0pMCskLztcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKG51bSA+PSBzaVtpXS52YWx1ZSkge1xyXG4gICAgICByZXR1cm4gKG51bSAvIHNpW2ldLnZhbHVlKS50b0ZpeGVkKGRpZ2l0cykucmVwbGFjZShyeCwgJyQxJykgKyBzaVtpXS5zeW1ib2w7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBudW0udG9GaXhlZChkaWdpdHMpLnJlcGxhY2UocngsICckMScpO1xyXG59XHJcblxyXG4vKiogQ29weSB0ZXh0IHRvIGNsaXBib2FyZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29weVRvQ2xpcGJvYXJkKHVybDogc3RyaW5nLCBicm93c2VyOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gIHJldHVybiBvZih1cmwpLnBpcGUoXHJcbiAgICB0YXAoKHRleHQ6IHN0cmluZykgPT4ge1xyXG5cclxuICAgICAgLy8gQ3JlYXRlIGEgaGlkZGVuIHRleHRhcmVhIGVsZW1lbnRcclxuICAgICAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICB0ZXh0QXJlYS52YWx1ZSA9IHRleHQ7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dEFyZWEpO1xyXG5cclxuICAgICAgLy8gaGlnaGxpZ2h0IHRleHRhcmVhIHRvIGNvcHkgdGhlIHRleHRcclxuICAgICAgaWYgKGJyb3dzZXIgPT09ICdpb3MnKSB7XHJcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyh0ZXh0QXJlYSk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICAgIHRleHRBcmVhLnJlYWRPbmx5ID0gdHJ1ZTtcclxuICAgICAgICB0ZXh0QXJlYS5zZXRTZWxlY3Rpb25SYW5nZSgwLCA5OTk5OTkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRleHRBcmVhLnNlbGVjdCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGV4dEFyZWEpO1xyXG4gICAgfSlcclxuICApO1xyXG59XHJcblxyXG4vKiogR2V0IG1ldGEgdGFnIGNvbnRlbnQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1ldGFDb250ZW50KGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICBjb25zdCBtZXRhVGFnOiBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbWV0YVtwcm9wZXJ0eT1cIiR7a2V5fVwiXWApO1xyXG4gIHJldHVybiBtZXRhVGFnID8gbWV0YVRhZy5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSA6IHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqIERldGVjdCBvcGVyYXRpbmcgc3lzdGVtICdpb3MnLCAnYW5kcm9pZCcsIG9yICdkZXNrdG9wJyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T1MoKTogc3RyaW5nIHtcclxuICBjb25zdCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgKDxhbnk+d2luZG93KS5vcGVyYTtcclxuXHJcbiAgaWYgKC9hbmRyb2lkL2kudGVzdCh1c2VyQWdlbnQpKSB7XHJcbiAgICByZXR1cm4gJ2FuZHJvaWQnO1xyXG4gIH1cclxuXHJcbiAgaWYgKC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KHVzZXJBZ2VudCkgJiYgISg8YW55PndpbmRvdykuTVNTdHJlYW0pIHtcclxuICAgIHJldHVybiAnaW9zJztcclxuICB9XHJcbiAgcmV0dXJuICdkZXNrdG9wJztcclxufVxyXG5cclxuXHJcbi8qKiBSZXR1cm5zIGEgdmFsaWQgVVJMIG9yIGZhbGxzIGJhY2sgdG8gY3VycmVudCBVUkwgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbGlkVXJsKHVybDogc3RyaW5nLCBmYWxsYmFja1VybDogc3RyaW5nKTogc3RyaW5nIHtcclxuXHJcbiAgaWYgKHVybCkge1xyXG4gICAgY29uc3QgciA9IC8oaHR0cHxodHRwcyk6XFwvXFwvKFxcdys6ezAsMX1cXHcqQCk/KFxcUyspKDpbMC05XSspPyhcXC98XFwvKFtcXHcjITouPys9JiVAIVxcLVxcL10pKT8vO1xyXG4gICAgaWYgKHIudGVzdCh1cmwpKSB7XHJcbiAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLndhcm4oYFtTaGFyZUJ1dHRvbnNdOiBTaGFyaW5nIGxpbmsgJyR7dXJsfScgaXMgaW52YWxpZCFgKTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbGxiYWNrVXJsO1xyXG59XHJcbiIsImltcG9ydCB7IG9mLCBPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgZGVsYXksIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU2hhcmVCdXR0b25SZWYgfSBmcm9tICcuL3NoYXJlLm1vZGVscyc7XHJcbmltcG9ydCB7IGNvcHlUb0NsaXBib2FyZCwgbWVyZ2VEZWVwIH0gZnJvbSAnLi91dGlscyc7XHJcblxyXG4vKipcclxuICogTWV0YSB0YWdzIG9wZXJhdG9yIC0gU2VyaWFsaXplIG1ldGEgdGFncyBpbnRvIHRoZSBzaGFyZXIgVVJMXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWV0YVRhZ3NPcGVyYXRvcnM6IE9wZXJhdG9yRnVuY3Rpb248YW55LCBhbnk+W10gPSBbXHJcbiAgbWFwKChyZWY6IFNoYXJlQnV0dG9uUmVmKSA9PiB7XHJcblxyXG4gICAgLy8gU29jaWFsIG5ldHdvcmsgc2hhcmVyIFVSTCAqL1xyXG4gICAgY29uc3QgU2hhcmVyVVJMID0gcmVmLnByb3Auc2hhcmVbcmVmLm9zXTtcclxuICAgIGlmIChTaGFyZXJVUkwpIHtcclxuXHJcbiAgICAgIC8vIG9iamVjdCBjb250YWlucyBzdXBwb3J0ZWQgbWV0YSB0YWdzXHJcbiAgICAgIGNvbnN0IG1ldGFUYWdzID0gcmVmLnByb3Auc2hhcmUubWV0YVRhZ3M7XHJcblxyXG4gICAgICAvLyBvYmplY3QgY29udGFpbnMgbWV0YSB0YWdzIHZhbHVlcyAqL1xyXG4gICAgICBjb25zdCBtZXRhVGFnc1ZhbHVlcyA9IHJlZi5tZXRhVGFncztcclxuXHJcbiAgICAgIGxldCBsaW5rID0gJyc7XHJcbiAgICAgIC8vIFNldCBlYWNoIG1ldGEgdGFnIHdpdGggdXNlciB2YWx1ZVxyXG4gICAgICBpZiAobWV0YVRhZ3MpIHtcclxuICAgICAgICBsaW5rID0gT2JqZWN0LmVudHJpZXMobWV0YVRhZ3MpLm1hcCgoW2tleSwgbWV0YVRhZ10pID0+XHJcbiAgICAgICAgICBtZXRhVGFnc1ZhbHVlc1trZXldID8gYCR7bWV0YVRhZ309JHtlbmNvZGVVUklDb21wb25lbnQobWV0YVRhZ3NWYWx1ZXNba2V5XSl9YCA6ICcnXHJcbiAgICAgICAgKS5qb2luKCcmJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFNoYXJlclVSTCArIGxpbms7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfSlcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBQcmludCBidXR0b24gb3BlcmF0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBwcmludE9wZXJhdG9yczogT3BlcmF0b3JGdW5jdGlvbjxhbnksIGFueT5bXSA9IFtcclxuICBtYXAoKCkgPT4gd2luZG93LnByaW50KCkpXHJcbl07XHJcblxyXG4vKipcclxuICogQ29weSBsaW5rIHRvIGNsaXBib2FyZCwgdXNlZCBmb3IgY29weSBidXR0b25cclxuICovXHJcbmV4cG9ydCBjb25zdCBjb3B5T3BlcmF0b3JzOiBPcGVyYXRvckZ1bmN0aW9uPGFueSwgYW55PltdID0gW1xyXG4gIG1hcCgocmVmOiBTaGFyZUJ1dHRvblJlZikgPT4ge1xyXG5cclxuICAgIC8vIERpc2FibGUgdGhlIGJ1dHRvblxyXG4gICAgcmVmLnJlbmRlcmVyLnNldFN0eWxlKHJlZi5lbCwgJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnKTtcclxuXHJcbiAgICByZWYudGVtcCA9IHt0ZXh0OiByZWYucHJvcC50ZXh0LCBpY29uOiByZWYucHJvcC5pY29ufTtcclxuICAgIHJlZi5tZXRhVGFncy51cmwgPSBkZWNvZGVVUklDb21wb25lbnQocmVmLm1ldGFUYWdzLnVybCk7XHJcbiAgICByZXR1cm4gcmVmO1xyXG4gIH0pLFxyXG4gIHN3aXRjaE1hcCgocmVmOiBTaGFyZUJ1dHRvblJlZikgPT4gY29weVRvQ2xpcGJvYXJkKHJlZi5tZXRhVGFncy51cmwsIHJlZi5vcykucGlwZShcclxuICAgIG1hcCgoKSA9PiB7XHJcbiAgICAgIHJlZi5wcm9wLnRleHQgPSByZWYucHJvcC5zdWNjZXNzVGV4dDtcclxuICAgICAgcmVmLnByb3AuaWNvbiA9IHJlZi5wcm9wLnN1Y2Nlc3NJY29uO1xyXG4gICAgICByZXR1cm4gcmVmO1xyXG4gICAgfSksXHJcbiAgICBjYXRjaEVycm9yKCgpID0+IHtcclxuICAgICAgcmVmLnByb3AudGV4dCA9IHJlZi5wcm9wLmZhaWxUZXh0O1xyXG4gICAgICByZWYucHJvcC5pY29uID0gcmVmLnByb3AuZmFpbEljb247XHJcbiAgICAgIHJldHVybiBvZihyZWYpO1xyXG4gICAgfSlcclxuICApKSxcclxuICBtYXAoKHJlZjogU2hhcmVCdXR0b25SZWYpID0+IHtcclxuICAgIHJlZi5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgIHJldHVybiByZWY7XHJcbiAgfSksXHJcbiAgZGVsYXkoMjAwMCksXHJcbiAgbWFwKChyZWY6IFNoYXJlQnV0dG9uUmVmKSA9PiB7XHJcblxyXG4gICAgLy8gRW5hYmxlIHRoZSBidXR0b25cclxuICAgIHJlZi5yZW5kZXJlci5zZXRTdHlsZShyZWYuZWwsICdwb2ludGVyLWV2ZW50cycsICdhdXRvJyk7XHJcblxyXG4gICAgLy8gUmVzZXQgY29weSBidXR0b24gdGV4dCBhbmQgaWNvbiAqL1xyXG4gICAgcmVmLnByb3AudGV4dCA9IHJlZi50ZW1wLnRleHQ7XHJcbiAgICByZWYucHJvcC5pY29uID0gcmVmLnRlbXAuaWNvbjtcclxuICAgIHJlZi5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICB9KVxyXG5dO1xyXG5cclxuLyoqXHJcbiAqIEFkZCB0aGUgc2hhcmUgVVJMIHRvIG1lc3NhZ2UgYm9keSwgdXNlZCBmb3IgV2hhdHNBcHAgYW5kIEVtYWlsIGJ1dHRvbnNcclxuICovXHJcbmV4cG9ydCBjb25zdCB1cmxJbk1lc3NhZ2VPcGVyYXRvcnM6IE9wZXJhdG9yRnVuY3Rpb248YW55LCBhbnk+W10gPSBbXHJcbiAgbWFwKChyZWY6IFNoYXJlQnV0dG9uUmVmKSA9PiB7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHJlZi5tZXRhVGFncy5kZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0IHVybCA9IHJlZi5tZXRhVGFncy51cmw7XHJcbiAgICBjb25zdCBuZXdSZWY6IFNoYXJlQnV0dG9uUmVmID0ge1xyXG4gICAgICBtZXRhVGFnczoge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiA/IGAke2Rlc2NyaXB0aW9ufVxcclxcbiR7dXJsfWAgOiB1cmxcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBtZXJnZURlZXAocmVmLCBuZXdSZWYpO1xyXG4gIH0pXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgRmFjZWJvb2tDb3VudE9wZXJhdG9yczogT3BlcmF0b3JGdW5jdGlvbjxhbnksIGFueT5bXSA9IFtcclxuICBtYXAoKHJlczogYW55KSA9PiArcmVzLnNoYXJlLnNoYXJlX2NvdW50KVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBpbnRlcmVzdENvdW50T3BlcmF0b3JzOiBPcGVyYXRvckZ1bmN0aW9uPGFueSwgYW55PltdID0gW1xyXG4gIG1hcCgodGV4dDogc3RyaW5nKSA9PiBKU09OLnBhcnNlKHRleHQucmVwbGFjZSgvXnJlY2VpdmVDb3VudFxcKCguKilcXCkvLCAnJDEnKSkpLFxyXG4gIG1hcCgocmVzOiBhbnkpID0+ICtyZXMuY291bnQpXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgVHVtYmxyQ291bnRPcGVyYXRvcnM6IE9wZXJhdG9yRnVuY3Rpb248YW55LCBhbnk+W10gPSBbXHJcbiAgbWFwKChyZXM6IGFueSkgPT4gK3Jlcy5yZXNwb25zZS5ub3RlX2NvdW50KVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlZGRpdENvdW50T3BlcmF0b3JzOiBPcGVyYXRvckZ1bmN0aW9uPGFueSwgYW55PltdID0gW1xyXG4gIG1hcCgocmVzOiBhbnkpID0+ICtyZXMuZGF0YS5jaGlsZHJlblswXS5kYXRhLnNjb3JlKVxyXG5dO1xyXG4iLCJpbXBvcnQge1xyXG4gIG1ldGFUYWdzT3BlcmF0b3JzLFxyXG4gIHByaW50T3BlcmF0b3JzLFxyXG4gIGNvcHlPcGVyYXRvcnMsXHJcbiAgdXJsSW5NZXNzYWdlT3BlcmF0b3JzLFxyXG4gIEZhY2Vib29rQ291bnRPcGVyYXRvcnMsXHJcbiAgUGludGVyZXN0Q291bnRPcGVyYXRvcnMsXHJcbiAgVHVtYmxyQ291bnRPcGVyYXRvcnMsXHJcbiAgUmVkZGl0Q291bnRPcGVyYXRvcnNcclxufSBmcm9tICcuL3NoYXJlLm9wZXJhdG9ycyc7XHJcbmltcG9ydCB7IElTaGFyZUJ1dHRvbnMgfSBmcm9tICcuL3NoYXJlLm1vZGVscyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2hhcmVCdXR0b25zUHJvcDogSVNoYXJlQnV0dG9ucyA9IHtcclxuICBmYWNlYm9vazoge1xyXG4gICAgdHlwZTogJ2ZhY2Vib29rJyxcclxuICAgIHRleHQ6ICdGYWNlYm9vaycsXHJcbiAgICBpY29uOiBbJ2ZhYicsICdmYWNlYm9vay1mJ10sXHJcbiAgICBjb2xvcjogJyM0MjY3QjInLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgZGVza3RvcDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD8nLFxyXG4gICAgICBhbmRyb2lkOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwPycsXHJcbiAgICAgIGlvczogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD8nLFxyXG4gICAgICBvcGVyYXRvcnM6IG1ldGFUYWdzT3BlcmF0b3JzLFxyXG4gICAgICBtZXRhVGFnczoge1xyXG4gICAgICAgIHVybDogJ3UnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb3VudDoge1xyXG4gICAgICByZXF1ZXN0OiAnaHR0cCcsXHJcbiAgICAgIHVybDogJ2h0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tP2lkPScsXHJcbiAgICAgIG9wZXJhdG9yczogRmFjZWJvb2tDb3VudE9wZXJhdG9yc1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdHdpdHRlcjoge1xyXG4gICAgdHlwZTogJ3R3aXR0ZXInLFxyXG4gICAgdGV4dDogJ1R3aXR0ZXInLFxyXG4gICAgaWNvbjogWydmYWInLCAndHdpdHRlciddLFxyXG4gICAgY29sb3I6ICcjMDBhY2VlJyxcclxuICAgIHNoYXJlOiB7XHJcbiAgICAgIGRlc2t0b3A6ICdodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD8nLFxyXG4gICAgICBhbmRyb2lkOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/JyxcclxuICAgICAgaW9zOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/JyxcclxuICAgICAgb3BlcmF0b3JzOiBtZXRhVGFnc09wZXJhdG9ycyxcclxuICAgICAgbWV0YVRhZ3M6IHtcclxuICAgICAgICB1cmw6ICd1cmwnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAndGV4dCcsXHJcbiAgICAgICAgdGFnczogJ2hhc2h0YWdzJyxcclxuICAgICAgICB2aWE6ICd2aWEnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGdvb2dsZToge1xyXG4gICAgdHlwZTogJ2dvb2dsZScsXHJcbiAgICB0ZXh0OiAnR29vZ2xlKycsXHJcbiAgICBpY29uOiBbJ2ZhYicsICdnb29nbGUtcGx1cy1nJ10sXHJcbiAgICBjb2xvcjogJyNEQjQ0MzcnLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgZGVza3RvcDogJ2h0dHBzOi8vcGx1cy5nb29nbGUuY29tL3NoYXJlPycsXHJcbiAgICAgIGFuZHJvaWQ6ICdodHRwczovL3BsdXMuZ29vZ2xlLmNvbS9zaGFyZT8nLFxyXG4gICAgICBpb3M6ICdodHRwczovL3BsdXMuZ29vZ2xlLmNvbS9zaGFyZT8nLFxyXG4gICAgICBtZXRhVGFnczoge1xyXG4gICAgICAgIHVybDogJ3VybCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wZXJhdG9yczogbWV0YVRhZ3NPcGVyYXRvcnNcclxuICAgIH1cclxuICB9LFxyXG4gIGxpbmtlZGluOiB7XHJcbiAgICB0eXBlOiAnbGlua2VkaW4nLFxyXG4gICAgdGV4dDogJ0xpbmtlZEluJyxcclxuICAgIGljb246IFsnZmFiJywgJ2xpbmtlZGluLWluJ10sXHJcbiAgICBjb2xvcjogJyMwMDZmYTYnLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgZGVza3RvcDogJ2h0dHA6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT8nLFxyXG4gICAgICBhbmRyb2lkOiAnaHR0cDovL3d3dy5saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlPycsXHJcbiAgICAgIGlvczogJ2h0dHA6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT8nLFxyXG4gICAgICBvcGVyYXRvcnM6IG1ldGFUYWdzT3BlcmF0b3JzLFxyXG4gICAgICBtZXRhVGFnczoge1xyXG4gICAgICAgIHVybDogJ3VybCcsXHJcbiAgICAgICAgdGl0bGU6ICd0aXRsZScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdzdW1tYXJ5J1xyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGludGVyZXN0OiB7XHJcbiAgICB0eXBlOiAncGludGVyZXN0JyxcclxuICAgIHRleHQ6ICdQaW50ZXJlc3QnLFxyXG4gICAgaWNvbjogWydmYWInLCAncGludGVyZXN0LXAnXSxcclxuICAgIGNvbG9yOiAnI0JEMDkxRCcsXHJcbiAgICBzaGFyZToge1xyXG4gICAgICBkZXNrdG9wOiAnaHR0cHM6Ly9pbi5waW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYnV0dG9uLz8nLFxyXG4gICAgICBhbmRyb2lkOiAnaHR0cHM6Ly9pbi5waW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYnV0dG9uLz8nLFxyXG4gICAgICBpb3M6ICdodHRwczovL2luLnBpbnRlcmVzdC5jb20vcGluL2NyZWF0ZS9idXR0b24vPycsXHJcbiAgICAgIG9wZXJhdG9yczogbWV0YVRhZ3NPcGVyYXRvcnMsXHJcbiAgICAgIG1ldGFUYWdzOiB7XHJcbiAgICAgICAgdXJsOiAndXJsJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ2Rlc2NyaXB0aW9uJyxcclxuICAgICAgICBpbWFnZTogJ21lZGlhJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY291bnQ6IHtcclxuICAgICAgcmVxdWVzdDogJ2h0dHAnLFxyXG4gICAgICB1cmw6ICdodHRwczovL2FwaS5waW50ZXJlc3QuY29tL3YxL3VybHMvY291bnQuanNvbj91cmw9JyxcclxuICAgICAgYXJnczoge3Jlc3BvbnNlVHlwZTogJ3RleHQnfSxcclxuICAgICAgb3BlcmF0b3JzOiBQaW50ZXJlc3RDb3VudE9wZXJhdG9yc1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVkZGl0OiB7XHJcbiAgICB0eXBlOiAncmVkZGl0JyxcclxuICAgIHRleHQ6ICdSZWRkaXQnLFxyXG4gICAgaWNvbjogWydmYWInLCAncmVkZGl0LWFsaWVuJ10sXHJcbiAgICBjb2xvcjogJyNGRjQwMDYnLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgZGVza3RvcDogJ2h0dHA6Ly93d3cucmVkZGl0LmNvbS9zdWJtaXQ/JyxcclxuICAgICAgYW5kcm9pZDogJ2h0dHA6Ly93d3cucmVkZGl0LmNvbS9zdWJtaXQ/JyxcclxuICAgICAgaW9zOiAnaHR0cDovL3d3dy5yZWRkaXQuY29tL3N1Ym1pdD8nLFxyXG4gICAgICBvcGVyYXRvcnM6IG1ldGFUYWdzT3BlcmF0b3JzLFxyXG4gICAgICBtZXRhVGFnczoge1xyXG4gICAgICAgIHVybDogJ3VybCcsXHJcbiAgICAgICAgdGl0bGU6ICd0aXRsZSdcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjb3VudDoge1xyXG4gICAgICByZXF1ZXN0OiAnaHR0cCcsXHJcbiAgICAgIHVybDogJ2h0dHBzOi8vYnV0dG9ucy5yZWRkaXQuY29tL2J1dHRvbl9pbmZvLmpzb24/dXJsPScsXHJcbiAgICAgIG9wZXJhdG9yczogUmVkZGl0Q291bnRPcGVyYXRvcnNcclxuICAgIH0sXHJcbiAgfSxcclxuICB0dW1ibHI6IHtcclxuICAgIHR5cGU6ICd0dW1ibHInLFxyXG4gICAgdGV4dDogJ1R1bWJscicsXHJcbiAgICBpY29uOiBbJ2ZhYicsICd0dW1ibHInXSxcclxuICAgIGNvbG9yOiAnIzM2NDY1RCcsXHJcbiAgICBzaGFyZToge1xyXG4gICAgICBkZXNrdG9wOiAnaHR0cDovL3R1bWJsci5jb20vd2lkZ2V0cy9zaGFyZS90b29sPycsXHJcbiAgICAgIGFuZHJvaWQ6ICdodHRwOi8vdHVtYmxyLmNvbS93aWRnZXRzL3NoYXJlL3Rvb2w/JyxcclxuICAgICAgaW9zOiAnaHR0cDovL3R1bWJsci5jb20vd2lkZ2V0cy9zaGFyZS90b29sPycsXHJcbiAgICAgIG9wZXJhdG9yczogbWV0YVRhZ3NPcGVyYXRvcnMsXHJcbiAgICAgIG1ldGFUYWdzOiB7XHJcbiAgICAgICAgdXJsOiAnY2Fub25pY2FsVXJsJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ2NhcHRpb24nLFxyXG4gICAgICAgIHRhZ3M6ICd0YWdzJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY291bnQ6IHtcclxuICAgICAgcmVxdWVzdDogJ2pzb25wJyxcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkudHVtYmxyLmNvbS92Mi9zaGFyZS9zdGF0cz91cmw9JyxcclxuICAgICAgb3BlcmF0b3JzOiBUdW1ibHJDb3VudE9wZXJhdG9yc1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgd2hhdHNhcHA6IHtcclxuICAgIHR5cGU6ICd3aGF0c2FwcCcsXHJcbiAgICB0ZXh0OiAnV2hhdHNBcHAnLFxyXG4gICAgaWNvbjogWydmYWInLCAnd2hhdHNhcHAnXSxcclxuICAgIGNvbG9yOiAnIzI1RDM2NicsXHJcbiAgICBzaGFyZToge1xyXG4gICAgICBkZXNrdG9wOiAnaHR0cHM6Ly93ZWIud2hhdHNhcHAuY29tL3NlbmQ/JyxcclxuICAgICAgYW5kcm9pZDogJ3doYXRzYXBwOi8vc2VuZD8nLFxyXG4gICAgICBpb3M6ICd3aGF0c2FwcDovL3NlbmQ/JyxcclxuICAgICAgb3BlcmF0b3JzOiBbXHJcbiAgICAgICAgLi4udXJsSW5NZXNzYWdlT3BlcmF0b3JzLFxyXG4gICAgICAgIC4uLm1ldGFUYWdzT3BlcmF0b3JzXHJcbiAgICAgIF0sXHJcbiAgICAgIG1ldGFUYWdzOiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246ICd0ZXh0J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXNzZW5nZXI6IHtcclxuICAgIHR5cGU6ICdtZXNzZW5nZXInLFxyXG4gICAgdGV4dDogJ01lc3NlbmdlcicsXHJcbiAgICBpY29uOiBbJ2ZhYicsICdmYWNlYm9vay1tZXNzZW5nZXInXSxcclxuICAgIGNvbG9yOiAnIzAwODBGRicsXHJcbiAgICBzaGFyZToge1xyXG4gICAgICBhbmRyb2lkOiAnZmItbWVzc2VuZ2VyOi8vc2hhcmUvPycsXHJcbiAgICAgIGlvczogJ2ZiLW1lc3NlbmdlcjovL3NoYXJlLz8nLFxyXG4gICAgICBvcGVyYXRvcnM6IG1ldGFUYWdzT3BlcmF0b3JzLFxyXG4gICAgICBtZXRhVGFnczoge1xyXG4gICAgICAgIHVybDogJ2xpbmsnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHRlbGVncmFtOiB7XHJcbiAgICB0eXBlOiAndGVsZWdyYW0nLFxyXG4gICAgdGV4dDogJ1RlbGVncmFtJyxcclxuICAgIGljb246IFsnZmFiJywgJ3RlbGVncmFtLXBsYW5lJ10sXHJcbiAgICBjb2xvcjogJyMwMDg4Y2MnLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgZGVza3RvcDogJ2h0dHBzOi8vdC5tZS9zaGFyZS91cmw/JyxcclxuICAgICAgYW5kcm9pZDogJ2h0dHBzOi8vdC5tZS9zaGFyZS91cmw/JyxcclxuICAgICAgaW9zOiAnaHR0cHM6Ly90Lm1lL3NoYXJlL3VybD8nLFxyXG4gICAgICBvcGVyYXRvcnM6IG1ldGFUYWdzT3BlcmF0b3JzLFxyXG4gICAgICBtZXRhVGFnczoge1xyXG4gICAgICAgIHVybDogJ3VybCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICd0ZXh0J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB2azoge1xyXG4gICAgdHlwZTogJ3ZrJyxcclxuICAgIHRleHQ6ICdWS29udGFrdGUnLFxyXG4gICAgaWNvbjogWydmYWInLCAndmsnXSxcclxuICAgIGNvbG9yOiAnIzRDNzVBMycsXHJcbiAgICBzaGFyZToge1xyXG4gICAgICBkZXNrdG9wOiAnaHR0cDovL3ZrLmNvbS9zaGFyZS5waHA/JyxcclxuICAgICAgYW5kcm9pZDogJ2h0dHA6Ly92ay5jb20vc2hhcmUucGhwPycsXHJcbiAgICAgIGlvczogJ2h0dHA6Ly92ay5jb20vc2hhcmUucGhwPycsXHJcbiAgICAgIG9wZXJhdG9yczogbWV0YVRhZ3NPcGVyYXRvcnMsXHJcbiAgICAgIG1ldGFUYWdzOiB7XHJcbiAgICAgICAgdXJsOiAndXJsJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBzdHVtYmxlOiB7XHJcbiAgICB0eXBlOiAnc3R1bWJsZScsXHJcbiAgICB0ZXh0OiAnU3R1bWJsZScsXHJcbiAgICBpY29uOiBbJ2ZhYicsICdzdHVtYmxldXBvbiddLFxyXG4gICAgY29sb3I6ICcjZWI0OTI0JyxcclxuICAgIHNoYXJlOiB7XHJcbiAgICAgIGRlc2t0b3A6ICdodHRwOi8vd3d3LnN0dW1ibGV1cG9uLmNvbS9zdWJtaXQ/JyxcclxuICAgICAgYW5kcm9pZDogJ2h0dHA6Ly93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD8nLFxyXG4gICAgICBpb3M6ICdodHRwOi8vd3d3LnN0dW1ibGV1cG9uLmNvbS9zdWJtaXQ/JyxcclxuICAgICAgb3BlcmF0b3JzOiBtZXRhVGFnc09wZXJhdG9ycyxcclxuICAgICAgbWV0YVRhZ3M6IHtcclxuICAgICAgICB1cmw6ICd1cmwnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHhpbmc6IHtcclxuICAgIHR5cGU6ICd4aW5nJyxcclxuICAgIHRleHQ6ICdYaW5nJyxcclxuICAgIGljb246IFsnZmFiJywgJ3hpbmcnXSxcclxuICAgIGNvbG9yOiAnIzAwNjU2NycsXHJcbiAgICBzaGFyZToge1xyXG4gICAgICBkZXNrdG9wOiAnaHR0cHM6Ly93d3cueGluZy5jb20vYXBwL3VzZXI/b3A9c2hhcmUmJyxcclxuICAgICAgYW5kcm9pZDogJ2h0dHBzOi8vd3d3LnhpbmcuY29tL2FwcC91c2VyP29wPXNoYXJlJicsXHJcbiAgICAgIGlvczogJ2h0dHBzOi8vd3d3LnhpbmcuY29tL2FwcC91c2VyP29wPXNoYXJlJicsXHJcbiAgICAgIG9wZXJhdG9yczogbWV0YVRhZ3NPcGVyYXRvcnMsXHJcbiAgICAgIG1ldGFUYWdzOiB7XHJcbiAgICAgICAgdXJsOiAndXJsJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBzbXM6IHtcclxuICAgIHR5cGU6ICdzbXMnLFxyXG4gICAgdGV4dDogJ1NNUycsXHJcbiAgICBpY29uOiAnY29tbWVudC1hbHQnLFxyXG4gICAgY29sb3I6ICcjMjBjMTZjJyxcclxuICAgIHNoYXJlOiB7XHJcbiAgICAgIGRlc2t0b3A6ICdzbXM6PycsXHJcbiAgICAgIGFuZHJvaWQ6ICdzbXM6PycsXHJcbiAgICAgIGlvczogJ3Ntczo/JyxcclxuICAgICAgbWV0YVRhZ3M6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ2JvZHknXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wZXJhdG9yczogW1xyXG4gICAgICAgIC4uLnVybEluTWVzc2FnZU9wZXJhdG9ycyxcclxuICAgICAgICAuLi5tZXRhVGFnc09wZXJhdG9yc1xyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfSxcclxuICBlbWFpbDoge1xyXG4gICAgdHlwZTogJ2VtYWlsJyxcclxuICAgIHRleHQ6ICdFbWFpbCcsXHJcbiAgICBpY29uOiAgJ2VudmVsb3BlJyxcclxuICAgIGNvbG9yOiAnI0ZGOTYxQycsXHJcbiAgICBzaGFyZToge1xyXG4gICAgICBkZXNrdG9wOiAnbWFpbHRvOj8nLFxyXG4gICAgICBhbmRyb2lkOiAnbWFpbHRvOj8nLFxyXG4gICAgICBpb3M6ICdtYWlsdG86PycsXHJcbiAgICAgIG9wZXJhdG9yczogW1xyXG4gICAgICAgIC4uLnVybEluTWVzc2FnZU9wZXJhdG9ycyxcclxuICAgICAgICAuLi5tZXRhVGFnc09wZXJhdG9yc1xyXG4gICAgICBdLFxyXG4gICAgICBtZXRhVGFnczoge1xyXG4gICAgICAgIHRpdGxlOiAnc3ViamVjdCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdib2R5J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBjb3B5OiB7XHJcbiAgICB0eXBlOiAnY29weScsXHJcbiAgICB0ZXh0OiAnQ29weSBsaW5rJyxcclxuICAgIHN1Y2Nlc3NUZXh0OiAnQ29waWVkJyxcclxuICAgIHN1Y2Nlc3NJY29uOiAnY2hlY2snLFxyXG4gICAgZmFpbFRleHQ6ICdFcnJvcicsXHJcbiAgICBmYWlsSWNvbjogJ2V4Y2xhbWF0aW9uJyxcclxuICAgIGljb246ICdsaW5rJyxcclxuICAgIGNvbG9yOiAnIzYwN0Q4QicsXHJcbiAgICBzaGFyZToge1xyXG4gICAgICBvcGVyYXRvcnM6IGNvcHlPcGVyYXRvcnNcclxuICAgIH1cclxuICB9LFxyXG4gIHByaW50OiB7XHJcbiAgICB0eXBlOiAncHJpbnQnLFxyXG4gICAgdGV4dDogJ1ByaW50JyxcclxuICAgIGljb246ICdwcmludCcsXHJcbiAgICBjb2xvcjogJyM3NjVBQTInLFxyXG4gICAgc2hhcmU6IHtcclxuICAgICAgb3BlcmF0b3JzOiBwcmludE9wZXJhdG9yc1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBJU2hhcmVCdXR0b24sIFNoYXJlQnV0dG9uc0NvbmZpZyB9IGZyb20gJy4vc2hhcmUubW9kZWxzJztcclxuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9zaGFyZS50b2tlbnMnO1xyXG5pbXBvcnQgeyBzaGFyZUJ1dHRvbnNQcm9wIH0gZnJvbSAnLi9zaGFyZS5wcm9wJztcclxuaW1wb3J0IHsgbWVyZ2VEZWVwIH0gZnJvbSAnLi91dGlscyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTaGFyZUJ1dHRvbnMge1xyXG5cclxuICBjb25maWc6IFNoYXJlQnV0dG9uc0NvbmZpZyA9IHtcclxuICAgIHByb3A6IHNoYXJlQnV0dG9uc1Byb3AsXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIHRoZW1lOiAnZGVmYXVsdCcsXHJcbiAgICAgIGluY2x1ZGU6IFtdLFxyXG4gICAgICBleGNsdWRlOiBbXSxcclxuICAgICAgc2l6ZTogMCxcclxuICAgICAgdXJsOiB1bmRlZmluZWQsXHJcbiAgICAgIHRpdGxlOiB1bmRlZmluZWQsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB1bmRlZmluZWQsXHJcbiAgICAgIGltYWdlOiB1bmRlZmluZWQsXHJcbiAgICAgIHRhZ3M6IHVuZGVmaW5lZCxcclxuICAgICAgdHdpdHRlckFjY291bnQ6IHVuZGVmaW5lZCxcclxuICAgICAgYXV0b1NldE1ldGE6IHRydWUsXHJcbiAgICAgIGdhVHJhY2tpbmc6IGZhbHNlLFxyXG4gICAgICB3aW5kb3dXaWR0aDogODAwLFxyXG4gICAgICB3aW5kb3dIZWlnaHQ6IDUwMCxcclxuICAgICAgbW9yZUJ1dHRvbkljb246ICdlbGxpcHNpcy1oJyxcclxuICAgICAgbGVzc0J1dHRvbkljb246ICdtaW51cydcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuY29uZmlnKTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDT05GSUcpIGNvbmZpZzogU2hhcmVCdXR0b25zQ29uZmlnKSB7XHJcbiAgICBpZiAoY29uZmlnKSB7XHJcbiAgICAgIHRoaXMuc2V0Q29uZmlnKGNvbmZpZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgcHJvcCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5wcm9wO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHR3aXR0ZXJBY2NvdW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLm9wdGlvbnMudHdpdHRlckFjY291bnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgdGhlbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcub3B0aW9ucy50aGVtZTtcclxuICB9XHJcblxyXG4gIGdldCB3aW5kb3dTaXplKCkge1xyXG4gICAgcmV0dXJuIGB3aWR0aD0ke3RoaXMuY29uZmlnLm9wdGlvbnMud2luZG93V2lkdGh9LCBoZWlnaHQ9JHt0aGlzLmNvbmZpZy5vcHRpb25zLndpbmRvd0hlaWdodH1gO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHVybCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5vcHRpb25zLnVybDtcclxuICB9XHJcblxyXG4gIGdldCB0aXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5vcHRpb25zLnRpdGxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLm9wdGlvbnMuZGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICBnZXQgaW1hZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcub3B0aW9ucy5pbWFnZTtcclxuICB9XHJcblxyXG4gIGdldCB0YWdzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLm9wdGlvbnMudGFncztcclxuICB9XHJcblxyXG4gIGdldCBhdXRvU2V0TWV0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5vcHRpb25zLmF1dG9TZXRNZXRhO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGdhVHJhY2tpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcub3B0aW9ucy5nYVRyYWNraW5nO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNpemUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcub3B0aW9ucy5zaXplO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29uZmlnKGNvbmZpZzogU2hhcmVCdXR0b25zQ29uZmlnKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IG1lcmdlRGVlcCh0aGlzLmNvbmZpZywgY29uZmlnKTtcclxuICAgIHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuY29uZmlnKTtcclxuICB9XHJcblxyXG4gIGFkZEJ1dHRvbihuYW1lOiBzdHJpbmcsIGRhdGE6IElTaGFyZUJ1dHRvbikge1xyXG4gICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICBwcm9wOiB7Li4uc2hhcmVCdXR0b25zUHJvcCwgLi4ue1tuYW1lXTogZGF0YX19XHJcbiAgICB9O1xyXG4gICAgdGhpcy5zZXRDb25maWcoY29uZmlnKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbmplY3QsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIFBMQVRGT1JNX0lEXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBFTVBUWSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAsIGZpbHRlciwgc3dpdGNoTWFwLCBtYXAsIHRha2UsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbnMgfSBmcm9tICcuL3NoYXJlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJU2hhcmVCdXR0b24sIFNoYXJlQnV0dG9uUmVmIH0gZnJvbSAnLi9zaGFyZS5tb2RlbHMnO1xyXG5pbXBvcnQgeyBnZXRNZXRhQ29udGVudCwgZ2V0T1MsIGdldFZhbGlkVXJsIH0gZnJvbSAnLi91dGlscyc7XHJcblxyXG4vKiogR29vZ2xlIGFuYWx5dGljcyByZWYgKi9cclxuZGVjbGFyZSBjb25zdCBnYTogRnVuY3Rpb247XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tzaGFyZUJ1dHRvbl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZUJ1dHRvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblxyXG4gIC8qKiBBIHJlZiB0byBidXR0b24gY2xhc3MgLSB1c2VkIHRvIHJlbW92ZSBwcmV2aW91cyBjbGFzcyB3aGVuIHRoZSBidXR0b24gdHlwZSBpcyBjaGFuZ2VkICovXHJcbiAgcHJpdmF0ZSBfYnV0dG9uQ2xhc3M6IHN0cmluZztcclxuXHJcbiAgLyoqIEJ1dHRvbiBwcm9wZXJ0aWVzICovXHJcbiAgcHJvcDogSVNoYXJlQnV0dG9uO1xyXG5cclxuICAvKiogU2hhcmUgYnV0dG9uIHR5cGUgKi9cclxuICBASW5wdXQoKSBzaGFyZUJ1dHRvbjogc3RyaW5nO1xyXG5cclxuICAvKiogR2V0IHNoYXJlIGNvdW50ICovXHJcbiAgQElucHV0KCkgZ2V0Q291bnQgPSBmYWxzZTtcclxuXHJcbiAgLyoqIFNldCBtZXRhIHRhZ3MgZnJvbSBkb2N1bWVudCBoZWFkLCB1c2VmdWwgd2hlbiBTRU8gaXMgc3VwcG9ydGVkICovXHJcbiAgQElucHV0KCkgYXV0b1NldE1ldGE6IGJvb2xlYW4gPSB0aGlzLnNoYXJlU2VydmljZS5hdXRvU2V0TWV0YTtcclxuXHJcbiAgLyoqIE1ldGEgdGFncyBpbnB1dHMgLSBpbml0aWFsaXplZCBmcm9tIHRoZSBnbG9iYWwgb3B0aW9ucyAqL1xyXG4gIEBJbnB1dCgpIHVybDogc3RyaW5nID0gdGhpcy5zaGFyZVNlcnZpY2UudXJsO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSB0aGlzLnNoYXJlU2VydmljZS50aXRsZTtcclxuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nID0gdGhpcy5zaGFyZVNlcnZpY2UuZGVzY3JpcHRpb247XHJcbiAgQElucHV0KCkgaW1hZ2U6IHN0cmluZyA9IHRoaXMuc2hhcmVTZXJ2aWNlLmltYWdlO1xyXG4gIEBJbnB1dCgpIHRhZ3M6IHN0cmluZyA9IHRoaXMuc2hhcmVTZXJ2aWNlLnRhZ3M7XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHNoYXJlIGNvdW50IGlzIGZldGNoZWQgKi9cclxuICBAT3V0cHV0KCkgY291bnQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gc2hhcmUgZGlhbG9nIGlzIG9wZW5lZCAqL1xyXG4gIEBPdXRwdXQoKSBvcGVuZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gc2hhcmUgZGlhbG9nIGlzIGNsb3NlZCAqL1xyXG4gIEBPdXRwdXQoKSBjbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzaGFyZVNlcnZpY2U6IFNoYXJlQnV0dG9ucyxcclxuICAgICAgICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgICAgICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgICAgICAgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm06IE9iamVjdCkge1xyXG4gIH1cclxuXHJcbiAgLyoqIFNoYXJlIGxpbmsgb24gZWxlbWVudCBjbGljayAqL1xyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBvbkNsaWNrKCkge1xyXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm0pKSB7XHJcbiAgICAgIGNvbnN0IG1ldGFUYWdzID0gdGhpcy5hdXRvU2V0TWV0YSA/IHtcclxuICAgICAgICB1cmw6IHRoaXMudXJsLFxyXG4gICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlIHx8IGdldE1ldGFDb250ZW50KCdvZzp0aXRsZScpLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uIHx8IGdldE1ldGFDb250ZW50KCdvZzpkZXNjcmlwdGlvbicpLFxyXG4gICAgICAgIGltYWdlOiB0aGlzLmltYWdlIHx8IGdldE1ldGFDb250ZW50KCdvZzppbWFnZScpLFxyXG4gICAgICAgIHZpYTogdGhpcy5zaGFyZVNlcnZpY2UudHdpdHRlckFjY291bnQgfHwgZ2V0TWV0YUNvbnRlbnQoJ3R3aXR0ZXI6c2l0ZScpLFxyXG4gICAgICAgIHRhZ3M6IHRoaXMudGFncyxcclxuICAgICAgfSA6IHtcclxuICAgICAgICB1cmw6IHRoaXMudXJsLFxyXG4gICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxyXG4gICAgICAgIHRhZ3M6IHRoaXMudGFncyxcclxuICAgICAgICB2aWE6IHRoaXMuc2hhcmVTZXJ2aWNlLnR3aXR0ZXJBY2NvdW50LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVmOiBTaGFyZUJ1dHRvblJlZiA9IHtcclxuICAgICAgICBjZDogdGhpcy5jZCxcclxuICAgICAgICByZW5kZXJlcjogdGhpcy5yZW5kZXJlcixcclxuICAgICAgICBwcm9wOiB0aGlzLnByb3AsXHJcbiAgICAgICAgZWw6IHRoaXMuZWwubmF0aXZlRWxlbWVudCxcclxuICAgICAgICBvczogZ2V0T1MoKSxcclxuICAgICAgICBtZXRhVGFnc1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gU2hhcmUgdGhlIGxpbmtcclxuICAgICAgb2YocmVmKS5waXBlKFxyXG4gICAgICAgIC4uLnRoaXMucHJvcC5zaGFyZS5vcGVyYXRvcnMsXHJcbiAgICAgICAgdGFwKChzaGFyZXJVUkw6IGFueSkgPT4gdGhpcy5zaGFyZShzaGFyZXJVUkwpKSxcclxuICAgICAgICB0YWtlKDEpXHJcbiAgICAgICkuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybSkpIHtcclxuXHJcbiAgICAgIGlmIChjaGFuZ2VzWydzaGFyZUJ1dHRvbiddICYmIChjaGFuZ2VzWydzaGFyZUJ1dHRvbiddLmZpcnN0Q2hhbmdlIHx8IGNoYW5nZXNbJ3NoYXJlQnV0dG9uJ10ucHJldmlvdXNWYWx1ZSAhPT0gdGhpcy5zaGFyZUJ1dHRvbikpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZVNoYXJlQnV0dG9uKHRoaXMuc2hhcmVCdXR0b24pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXRoaXMudXJsIHx8IChjaGFuZ2VzWyd1cmwnXSAmJiBjaGFuZ2VzWyd1cmwnXS5wcmV2aW91c1ZhbHVlICE9PSB0aGlzLnVybCkpIHtcclxuICAgICAgICBvZihudWxsKS5waXBlKFxyXG4gICAgICAgICAgbWFwKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cmwgPSBnZXRWYWxpZFVybCh0aGlzLmF1dG9TZXRNZXRhID8gdGhpcy51cmwgfHwgZ2V0TWV0YUNvbnRlbnQoJ29nOnVybCcpIDogdGhpcy51cmwsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5wcm9wLmNvdW50ICYmIHRoaXMuZ2V0Q291bnQpLFxyXG4gICAgICAgICAgc3dpdGNoTWFwKCh1cmw6IHN0cmluZykgPT4gdGhpcy5zaGFyZUNvdW50KHVybCkpLFxyXG4gICAgICAgICAgdGFwKChzaGFyZUNvdW50OiBudW1iZXIpID0+IHRoaXMuY291bnQuZW1pdChzaGFyZUNvdW50KSksXHJcbiAgICAgICAgICB0YWtlKDEpXHJcbiAgICAgICAgKS5zdWJzY3JpYmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3BlbiBzaGFyaW5nIGRpYWxvZ1xyXG4gICAqIEBwYXJhbSB1cmwgLSBTaGFyZSBVUkxcclxuICAgKi9cclxuICBzaGFyZSh1cmw6IHN0cmluZykge1xyXG4gICAgaWYgKHVybCkge1xyXG5cclxuICAgICAgLy8gR0EgVHJhY2tpbmdcclxuICAgICAgaWYgKHRoaXMuc2hhcmVTZXJ2aWNlLmdhVHJhY2tpbmcgJiYgdHlwZW9mIGdhICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGdhKCdzZW5kJywgJ3NvY2lhbCcsIHRoaXMucHJvcC50eXBlLCAnY2xpY2snLCB0aGlzLnVybCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEVtaXQgd2hlbiBzaGFyZSBkaWFsb2cgaXMgb3BlbmVkXHJcbiAgICAgIHRoaXMub3BlbmVkLmVtaXQodGhpcy5wcm9wLnR5cGUpO1xyXG5cclxuICAgICAgY29uc3QgcG9wVXAgPSB3aW5kb3cub3Blbih1cmwsICduZXd3aW5kb3cnLCB0aGlzLnNoYXJlU2VydmljZS53aW5kb3dTaXplKTtcclxuXHJcbiAgICAgIC8vIEVtaXQgd2hlbiBzaGFyZSBkaWFsb2cgaXMgY2xvc2VkXHJcbiAgICAgIGlmIChwb3BVcCkge1xyXG4gICAgICAgIGNvbnN0IHBvbGxUaW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAocG9wVXAuY2xvc2VkKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHBvbGxUaW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VkLmVtaXQodGhpcy5wcm9wLnR5cGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIDIwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBsaW5rIHNoYXJlIGNvdW50XHJcbiAgICogQHBhcmFtIHVybCAtIFNoYXJlIFVSTFxyXG4gICAqIEByZXR1cm5zIFNoYXJlIGNvdW50XHJcbiAgICovXHJcbiAgc2hhcmVDb3VudCh1cmw6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcblxyXG4gICAgaWYgKHRoaXMucHJvcC5jb3VudC5yZXF1ZXN0ID09PSAnanNvbnAnKSB7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmpzb25wPGFueT4odGhpcy5wcm9wLmNvdW50LnVybCArIHVybCwgJ2NhbGxiYWNrJykucGlwZShcclxuICAgICAgICAuLi50aGlzLnByb3AuY291bnQub3BlcmF0b3JzLFxyXG4gICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gRU1QVFkpLFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5wcm9wLmNvdW50LnVybCArIHVybCwgdGhpcy5wcm9wLmNvdW50LmFyZ3MpLnBpcGUoXHJcbiAgICAgICAgLi4udGhpcy5wcm9wLmNvdW50Lm9wZXJhdG9ycyxcclxuICAgICAgICBjYXRjaEVycm9yKCgpID0+IEVNUFRZKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgY3JlYXRlU2hhcmVCdXR0b24oYnV0dG9uc05hbWU6IHN0cmluZykge1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IHsuLi50aGlzLnNoYXJlU2VydmljZS5wcm9wW2J1dHRvbnNOYW1lXX07XHJcblxyXG4gICAgaWYgKGJ1dHRvbikge1xyXG4gICAgICAvLyBTZXQgc2hhcmUgYnV0dG9uIHByb3BlcnRpZXNcclxuICAgICAgdGhpcy5wcm9wID0gYnV0dG9uO1xyXG5cclxuICAgICAgLy8gUmVtb3ZlIHByZXZpb3VzIGJ1dHRvbiBjbGFzc1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgYHNiLSR7dGhpcy5fYnV0dG9uQ2xhc3N9YCk7XHJcblxyXG4gICAgICAvLyBBZGQgbmV3IGJ1dHRvbiBjbGFzc1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgYHNiLSR7YnV0dG9uLnR5cGV9YCk7XHJcblxyXG4gICAgICAvLyBTZXQgYnV0dG9uIGNzcyBjb2xvciB2YXJpYWJsZVxyXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYnV0dG9uLWNvbG9yJywgdGhpcy5wcm9wLmNvbG9yKTtcclxuXHJcbiAgICAgIC8vIEtlZXAgYSBjb3B5IG9mIHRoZSBjbGFzcyBmb3IgZnV0dXJlIHJlcGxhY2VtZW50XHJcbiAgICAgIHRoaXMuX2J1dHRvbkNsYXNzID0gYnV0dG9uLnR5cGU7XHJcblxyXG4gICAgICAvLyBTZXQgYXJpYS1sYWJlbCBhdHRyaWJ1dGVcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYXJpYS1sYWJlbCcsIGJ1dHRvbi5hcmlhTGFiZWwgfHwgYnV0dG9uLnRleHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbU2hhcmVCdXR0b25zXTogVGhlIHNoYXJlIGJ1dHRvbiAnJHtidXR0b25zTmFtZX0nIGRvZXMgbm90IGV4aXN0IWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBzaGFyZUNvdW50Rm9ybWF0dGVyIH0gZnJvbSAnLi91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3NoYXJlQ291bnQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZUNvdW50UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShudW06IG51bWJlciwgZGlnaXRzPzogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gc2hhcmVDb3VudEZvcm1hdHRlcihudW0sIGRpZ2l0cyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbnMgfSBmcm9tICcuL3NoYXJlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJy4vc2hhcmUtYnV0dG9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFNoYXJlQ291bnRQaXBlIH0gZnJvbSAnLi9zaGFyZS1jb3VudC5waXBlJztcclxuaW1wb3J0IHsgU2hhcmVCdXR0b25zQ29uZmlnIH0gZnJvbSAnLi9zaGFyZS5tb2RlbHMnO1xyXG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL3NoYXJlLnRva2Vucyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2hhcmVCdXR0b25zRmFjdG9yeShjb25maWc6IFNoYXJlQnV0dG9uc0NvbmZpZykge1xyXG4gIHJldHVybiBuZXcgU2hhcmVCdXR0b25zKGNvbmZpZyk7XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBTaGFyZUJ1dHRvbkRpcmVjdGl2ZSxcclxuICAgIFNoYXJlQ291bnRQaXBlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBTaGFyZUJ1dHRvbkRpcmVjdGl2ZSxcclxuICAgIFNoYXJlQ291bnRQaXBlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IFNoYXJlQnV0dG9uc0NvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFNoYXJlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7cHJvdmlkZTogQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBTaGFyZUJ1dHRvbnMsXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBTaGFyZUJ1dHRvbnNGYWN0b3J5LFxyXG4gICAgICAgICAgZGVwczogW0NPTkZJR11cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAg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