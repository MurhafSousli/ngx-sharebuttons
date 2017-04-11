/** Share links functions:
 *  ShareLinks: Provide a share links for all services
 * */

import { ShareArgs } from './share-buttons.class';

export module ShareLinks {

    export function fbShare(args: ShareArgs) {

        let shareUrl = 'https://www.facebook.com/sharer/sharer.php';
        shareUrl += `?u=${args.url}`;

        if (args.title) {
            shareUrl += `&title=${args.title}`;
        }
        if (args.description) {
            shareUrl += `&description=${args.description}`;
        }
        if (args.image) {
            shareUrl += `&picture=${args.image}`;
        }
        return shareUrl;
    }

    // TWITTER DOCS: https://dev.twitter.com/web/tweet-button/web-intent
    export function twitterShare(args: ShareArgs) {

        let shareUrl = 'https://twitter.com/intent/tweet';
        shareUrl += `?url=${args.url}`;

        if (args.title) {
            shareUrl += `&text=${args.title}`;
        }
        if (args.via) {
            shareUrl += `&via=${args.via}`;
        }
        if (args.tags) {
            shareUrl += `&hashtags=${args.tags}`;
        }

        return shareUrl;
    }

    // LINKEDIN DOCS https://developer.linkedin.com/docs/share-on-linkedin#!
    export function linkedInShare(args: ShareArgs) {

        let shareUrl = 'http://www.linkedin.com/shareArticle';
        shareUrl += `?url=${args.url}`;

        if (args.title) {
            shareUrl += `&title=${args.title}`;
        }
        if (args.description) {
            shareUrl += `&summary=${args.description}`;
        }
        return shareUrl;
    }

    // REDDIT DOCS: http://stackoverflow.com/questions/24823114/post-to-reddit-via-url
    export function redditShare(args: ShareArgs) {

        let shareUrl = 'http://www.reddit.com/submit';
        shareUrl += `?url=${args.url}`;

        if (args.title) {
            shareUrl += `&title=${args.title}`;
        }
        return shareUrl;
    }

    // TUMBLR DOCS: https://www.tumblr.com/docs/en/share_button
    export function tumblrShare(args: ShareArgs) {

        let shareUrl = 'http://tumblr.com/widgets/share/tool';
        shareUrl += `?canonicalUrl=${args.url}`;

        if (args.description) {
            shareUrl += `&caption=${args.description}`;
        }
        if (args.tags) {
            shareUrl += `&tags=${args.tags}`;
        }
        return shareUrl;
    }

    // STUMBLE DOCS: http://stackoverflow.com/questions/10591424/how-can-i-create-a-custom-stumbleupon-button
    export function stumbleShare(args: ShareArgs) {

        let shareUrl;
        if (args.mobile) {
            shareUrl = 'stumbleupon://';
        } else {
            shareUrl = 'http://www.stumbleupon.com/submit';
        }
        shareUrl += `?url=${args.url}`;
        return shareUrl;
    }

    // GPLUS DOCS: https://developers.google.com/+/web/share/#sharelink
    export function gPlusShare(args: ShareArgs) {
        return `https://plus.google.com/share?url=${args.url}`;
    }

    export function pinShare(args: ShareArgs) {

        let shareUrl = `https://in.pinterest.com/pin/create/button/?url=${args.url}`;
        // if text is not provided, pin button won't work.
        if (args.description) {
            shareUrl += `&description=${args.description}`;
        } else if (document) {
            let descElm: Element = document.querySelector('meta[property="og:description"]');
            if (descElm) {
                shareUrl += `&description=${descElm.getAttribute('content')}`;
            }
        }
        if (args.image) {
            shareUrl += `&media=${args.image}`;
        } else if (document) {
            let imageElm: Element = document.querySelector('meta[property="og:image"]');
            if (imageElm) {
                shareUrl += `&media=${imageElm.getAttribute('content')}`;
            }
        }
        return shareUrl;
    }

    export function whatsappShare(args: ShareArgs) {

        let shareUrl = `${(args.mobile) ? 'whatsapp://' : 'https://web.whatsapp.com/'}send?text=`;

        // Title will add a new line
        if (args.title) {
            shareUrl += `${args.title} %0A`;
        }

        // Description adds a pipe to separate the url
        if (args.description) {
            shareUrl += `${args.description} | `;
        }

        shareUrl += `${args.url}`;
        return shareUrl;
    }

}

