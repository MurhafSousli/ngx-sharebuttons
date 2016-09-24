import {Headers, RequestOptionsArgs} from "@angular/http";
export module ShareHelper {

    /** Share links */

    export const linkFacebook = 'https://www.facebook.com/sharer/sharer.php?u=';

//https://dev.twitter.com/web/tweet-button/web-intent
    export const linkTwitter = 'https://twitter.com/intent/tweet?url=';

//https://www.tumblr.com/docs/en/share_button
    export const linkTumblr = 'http://tumblr.com/widgets/share/tool?canonicalUrl=';

// From https://developers.google.com/+/web/share/#sharelink
    export const linkGooglePlus = 'https://plus.google.com/share?url=';

//http://stackoverflow.com/questions/24823114/post-to-reddit-via-url
    export const linkReddit = 'http://www.reddit.com/submit?url=';

//https://developer.linkedin.com/docs/share-on-linkedin#!
    export const linkLinkedin = 'http://www.linkedin.com/shareArticle?url=';

//http://stackoverflow.com/questions/10591424/how-can-i-create-a-custom-stumbleupon-button
    export const linkStumbleUpon = 'http://www.stumbleupon.com/submit?url=';

    export const linkPinterest = 'https://pinterest.com/pin/create/button/?url=';

    /** Prepare GPlus Count Post request body   */
    export const gplusCountBody = (url) => {
        return [{
            "method": "pos.plusones.get",
            "id": "p",
            "params": {"nolog": true, "id": url, "source": "widget", "userId": "@viewer", "groupId": "@self"},
            "jsonrpc": "2.0",
            "key": "p",
            "apiVersion": "v1"
        }];
    };

}

