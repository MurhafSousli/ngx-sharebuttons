/** Share links functions:
 *  ShareLinks: Provide a share links for all services
 * */
export var ShareLinks;
(function (ShareLinks) {
    function fbShare(args) {
        var shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + args.url;
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
    ShareLinks.fbShare = fbShare;
    //TWITTER DOCS: https://dev.twitter.com/web/tweet-button/web-intent
    function twitterShare(args) {
        var shareUrl = 'https://twitter.com/intent/tweet?url=' + args.url;
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
    ShareLinks.twitterShare = twitterShare;
    //LINKEDIN DOCS https://developer.linkedin.com/docs/share-on-linkedin#!
    function linkedInShare(args) {
        var shareUrl = 'http://www.linkedin.com/shareArticle?url=' + args.url;
        if (args.title) {
            shareUrl += "&title=" + args.title;
        }
        if (args.description) {
            shareUrl += "&summary=" + args.description;
        }
        return shareUrl;
    }
    ShareLinks.linkedInShare = linkedInShare;
    //REDDIT DOCS: http://stackoverflow.com/questions/24823114/post-to-reddit-via-url
    function redditShare(args) {
        var shareUrl = 'http://www.reddit.com/submit?url=' + args.url;
        if (args.title) {
            shareUrl += "&title=" + args.title;
        }
        return shareUrl;
    }
    ShareLinks.redditShare = redditShare;
    //TUMBLR DOCS: https://www.tumblr.com/docs/en/share_button
    function tumblrShare(args) {
        var shareUrl = 'http://tumblr.com/widgets/share/tool?canonicalUrl=' + args.url;
        if (args.description) {
            shareUrl += "&caption=" + args.description;
        }
        if (args.tags) {
            shareUrl += "&tags=" + args.tags;
        }
        return shareUrl;
    }
    ShareLinks.tumblrShare = tumblrShare;
    //STUMBLE DOCS: http://stackoverflow.com/questions/10591424/how-can-i-create-a-custom-stumbleupon-button
    function stumbleShare(args) {
        return 'http://www.stumbleupon.com/submit?url=' + args.url;
    }
    ShareLinks.stumbleShare = stumbleShare;
    //GPLUS DOCS: https://developers.google.com/+/web/share/#sharelink
    function gPlusShare(args) {
        return 'https://plus.google.com/share?url=' + args.url;
    }
    ShareLinks.gPlusShare = gPlusShare;
    function pinShare(args) {
        var shareUrl = 'https://in.pinterest.com/pin/create/button/?url=' + args.url;
        //if text is not provided, pin button won't work.
        if (args.description) {
            shareUrl += '&description=' + args.description;
        }
        else {
            var desc = document.querySelector('meta[property="og:description"]').getAttribute('content');
            shareUrl += '&description=' + desc;
        }
        if (args.image) {
            shareUrl += '&media=' + args.image;
        }
        else {
            var image = document.querySelector('meta[property="og:image"]').getAttribute('content');
            shareUrl += '&media=' + image;
        }
        return shareUrl;
    }
    ShareLinks.pinShare = pinShare;
})(ShareLinks || (ShareLinks = {}));
//# sourceMappingURL=share-links.functions.js.map