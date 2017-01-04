import { Injectable } from '@angular/core';
import { Http, Jsonp } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/observable/empty";
import "rxjs/add/operator/catch";
import { ShareProvider } from "../helpers/share-provider.enum";
import { ShareLinks } from "./share-links.functions";
export var ShareButtonsService = (function () {
    function ShareButtonsService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
        /** Optional parameters */
        this.windowWidth = 500;
        this.windowHeight = 400;
    }
    ShareButtonsService.prototype.share = function (type, args) {
        switch (type) {
            case ShareProvider.FACEBOOK:
                return ShareLinks.fbShare(args);
            case ShareProvider.TWITTER:
                return ShareLinks.twitterShare(args);
            case ShareProvider.LINKEDIN:
                return ShareLinks.linkedInShare(args);
            case ShareProvider.REDDIT:
                return ShareLinks.redditShare(args);
            case ShareProvider.TUMBLR:
                return ShareLinks.tumblrShare(args);
            case ShareProvider.STUMBLEUPON:
                return ShareLinks.stumbleShare(args);
            case ShareProvider.GOOGLEPLUS:
                return ShareLinks.gPlusShare(args);
            case ShareProvider.PINTEREST:
                return ShareLinks.pinShare(args);
            default:
                return '';
        }
    };
    /** Share Counts */
    ShareButtonsService.prototype.count = function (type, url) {
        switch (type) {
            case ShareProvider.FACEBOOK:
                return this.fbCount(url);
            case ShareProvider.LINKEDIN:
                return this.linkedInCount(url);
            case ShareProvider.REDDIT:
                return this.redditCount(url);
            case ShareProvider.TUMBLR:
                return this.tumblrCount(url);
            case ShareProvider.GOOGLEPLUS:
                return this.gPlusCount(url);
            case ShareProvider.PINTEREST:
                return this.pinCount(url);
            default:
                return Observable.empty();
        }
    };
    ShareButtonsService.prototype.fbCount = function (url) {
        return this.fetch('https://graph.facebook.com/?id=' + url)
            .map(function (data) {
            data = data.json();
            if (data.hasOwnProperty('share') && data.share.hasOwnProperty('share_count')) {
                return data.share.share_count;
            }
            return 0;
        });
    };
    ShareButtonsService.prototype.linkedInCount = function (url) {
        return this.fetchJsonp('https://www.linkedin.com/countserv/count/share?url=' + url)
            .map(function (data) {
            data = data.json();
            return data.count | 0;
        });
    };
    ShareButtonsService.prototype.redditCount = function (url) {
        return this.fetch('https://buttons.reddit.com/button_info.json?url=' + url)
            .map(function (data) {
            data = data.json();
            if (data.hasOwnProperty('data') && data.data.hasOwnProperty('children')) {
                if (data.data.children.length)
                    return data.data.children[0].data.score;
            }
            return 0;
        });
    };
    ShareButtonsService.prototype.gPlusCount = function (url) {
        var body = gplusCountBody(url);
        return this.http.post('https://clients6.google.com/rpc?key=AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ', body)
            .map(function (data) {
            data = data.json();
            if (data[0] && data[0].hasOwnProperty('result')) {
                return data[0].result.metadata.globalCounts.count;
            }
            return 0;
        });
    };
    ShareButtonsService.prototype.pinCount = function (url) {
        return this.fetch('https://api.pinterest.com/v1/urls/count.json?callback=receiveCount&url=' + url)
            .map(function (data) {
            data = data.text();
            var result = JSON.parse(data.replace(/^receiveCount\((.*)\)/, '$1'));
            return result.count | 0;
        });
    };
    ShareButtonsService.prototype.tumblrCount = function (url) {
        return this.fetchJsonp('https://api.tumblr.com/v2/share/stats?url=' + url)
            .map(function (data) {
            data = data.json();
            if (data.hasOwnProperty('response') && data.response.hasOwnProperty('note_count')) {
                return data.response.note_count;
            }
            return 0;
        });
    };
    ShareButtonsService.prototype.fetch = function (url) {
        return this.http.get(url)
            .catch(function (err) {
            console.warn('[ShareService HTTP]: ', err);
            return Observable.empty();
        });
    };
    ShareButtonsService.prototype.fetchJsonp = function (url) {
        return this.jsonp.request(url + '&format=jsonp&callback=JSONP_CALLBACK')
            .catch(function (err) {
            console.warn('[ShareService JSONP]: ', err);
            return Observable.empty();
        });
    };
    ShareButtonsService.prototype.windowAttr = function () {
        return 'width=' + this.windowWidth + ', height=' + this.windowHeight;
    };
    ShareButtonsService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ShareButtonsService.ctorParameters = [
        { type: Http, },
        { type: Jsonp, },
    ];
    return ShareButtonsService;
}());
/** Prepare gPlus count request body   */
export var gplusCountBody = function (url) {
    return [{
            "method": "pos.plusones.get",
            "id": "p",
            "params": { "nolog": true, "id": url, "source": "widget", "userId": "@viewer", "groupId": "@self" },
            "jsonrpc": "2.0",
            "key": "p",
            "apiVersion": "v1"
        }];
};
//# sourceMappingURL=share-buttons.service.js.map