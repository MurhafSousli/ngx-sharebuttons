/** Share links functions:
 *  ShareLinks: Provide a share links for all services
 * */

import {ShareArgs} from "../helpers/share-buttons.class";
export module ShareLinks {


    export function fbShare(args: ShareArgs) {
        let shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + args.url;
        if (args.title) {
            shareUrl += "&title=" + args.title;
        }
        if (args.description) {
            shareUrl += "&description=" + args.description;
        }
        if (args.image) {
            shareUrl += "&picture=" + args.image;
        }
        return shareUrl;
    }

//TWITTER DOCS: https://dev.twitter.com/web/tweet-button/web-intent
    export function twitterShare(args: ShareArgs) {
        let shareUrl = 'https://twitter.com/intent/tweet?url=' + args.url;
        if (args.description) {
            shareUrl += '&text=' + args.description;
        }
        if (this.twitterAccount) {
            shareUrl += '&via=' + this.twitterAccount;
        }
        if (args.tags) {
            shareUrl += '&hashtags=' + args.tags;
        }
        return shareUrl;
    }

//LINKEDIN DOCS https://developer.linkedin.com/docs/share-on-linkedin#!
    export function linkedInShare(args: ShareArgs) {
        let shareUrl = 'http://www.linkedin.com/shareArticle?url=' + args.url;
        if (args.title) {
            shareUrl += "&title=" + args.title;
        }
        if (args.description) {
            shareUrl += "&summary=" + args.description;
        }
        return shareUrl;
    }

//REDDIT DOCS: http://stackoverflow.com/questions/24823114/post-to-reddit-via-url
    export function redditShare(args: ShareArgs) {
        let shareUrl = 'http://www.reddit.com/submit?url=' + args.url;
        if (args.title) {
            shareUrl += "&title=" + args.title;
        }
        return shareUrl
    }

//TUMBLR DOCS: https://www.tumblr.com/docs/en/share_button
    export function tumblrShare(args: ShareArgs) {
        let shareUrl = 'http://tumblr.com/widgets/share/tool?canonicalUrl=' + args.url;
        if (args.description) {
            shareUrl += "&caption=" + args.description;
        }
        if (args.tags) {
            shareUrl += "&tags=" + args.tags;
        }
        return shareUrl;
    }

//STUMBLE DOCS: http://stackoverflow.com/questions/10591424/how-can-i-create-a-custom-stumbleupon-button
    export function stumbleShare(args: ShareArgs) {
        return 'http://www.stumbleupon.com/submit?url=' + args.url;
    }

//GPLUS DOCS: https://developers.google.com/+/web/share/#sharelink
    export function gPlusShare(args: ShareArgs) {
        return 'https://plus.google.com/share?url=' + args.url;
    }

    export function pinShare(args: ShareArgs) {
        let shareUrl = 'https://in.pinterest.com/pin/create/button/?url=' + args.url;
        //if text is not provided, pin button won't work.
        if (args.description) {
            shareUrl += '&description=' + args.description;
        }
        else {
            let desc = document.querySelector('meta[property="og:description"]').getAttribute('content');
            shareUrl += '&description=' + desc;
        }
        if (args.image) {
            shareUrl += '&media=' + args.image;
        }
        else {
            let image = document.querySelector('meta[property="og:image"]').getAttribute('content');
            shareUrl += '&media=' + image;
        }
        return shareUrl;
    }

}