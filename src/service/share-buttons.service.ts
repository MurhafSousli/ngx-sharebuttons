import { Injectable } from '@angular/core';
import { Http, Jsonp } from "@angular/http";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/observable/empty";
import "rxjs/add/operator/catch";

import { ShareProvider } from "../helpers/share-provider.enum";
import { ShareButtonsInterface } from "./share-buttons.interface";
import { ShareLinks } from "./share-links.functions";

@Injectable()
export class ShareButtonsService implements ShareButtonsInterface {

    /** Optional parameters for to set default inputs */
    windowWidth: number = 500;
    windowHeight: number = 400;

    /** Site Twitter Account: Add Via @TwitterAccount to the tweet  */
    twitterAccount: string;

    constructor(private http: Http, private jsonp: Jsonp) {
    }


    share(type, args) {
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
    }


    /** Share Counts */

    count(type, url): Observable<number> {
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
                return Observable.empty<number>();
        }
    }

    private fbCount(url: string): Observable<number> {
        return this.fetch('https://graph.facebook.com/?id=' + url)
            .map((data: any) => {
                data = data.json();
                if (data.hasOwnProperty('share') && data.share.hasOwnProperty('share_count')) {
                    return data.share.share_count;
                }
                return 0;
            });
    }

    private linkedInCount(url: string): Observable<number> {
        return this.fetchJsonp('https://www.linkedin.com/countserv/count/share?url=' + url)
            .map((data: any) => {
                data = data.json();
                return data.count | 0;
            });
    }

    private redditCount(url: string): Observable<number> {
        return this.fetch('https://buttons.reddit.com/button_info.json?url=' + url)
            .map((data: any) => {
                data = data.json();
                if (data.hasOwnProperty('data') && data.data.hasOwnProperty('children')) {
                    if (data.data.children.length) return data.data.children[0].data.score;
                }
                return 0;
            });
    }

    private gPlusCount(url: string): Observable<number> {
        let body = gplusCountBody(url);
        return this.http.post('https://clients6.google.com/rpc?key=AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ', body)
            .map((data: any) => {
                data = data.json();
                if (data[0] && data[0].hasOwnProperty('result')) {
                    return data[0].result.metadata.globalCounts.count;
                }
                return 0;
            });
    }

    private pinCount(url: string): Observable<number> {
        return this.fetch('https://api.pinterest.com/v1/urls/count.json?callback=receiveCount&url=' + url)
            .map((data: any) => {
                data = data.text();
                var result = JSON.parse(data.replace(/^receiveCount\((.*)\)/, '$1'));
                return result.count | 0;
            });
    }

    private tumblrCount(url: string): Observable<number> {
        return this.fetchJsonp('https://api.tumblr.com/v2/share/stats?url=' + url)
            .map((data: any) => {
                data = data.json();
                if (data.hasOwnProperty('response') && data.response.hasOwnProperty('note_count')) {
                    return data.response.note_count;
                }
                return 0;
            });
    }

    private fetch(url) {
        return this.http.get(url)
            .catch((err) => {
                console.warn('[ShareService HTTP]: ', err);
                return Observable.empty();
            });
    }

    private fetchJsonp(url) {
        return this.jsonp.request(url + '&format=jsonp&callback=JSONP_CALLBACK')
            .catch((err) => {
                console.warn('[ShareService JSONP]: ', err);
                return Observable.empty();
            });
    }

    windowAttr() {
        return 'width=' + this.windowWidth + ', height=' + this.windowHeight;
    }

}


/** Prepare GPlus Count Post request body   */
export const gplusCountBody = (url) => {
    return [{
        "method": "pos.plusones.get",
        "id": "p",
        "params": { "nolog": true, "id": url, "source": "widget", "userId": "@viewer", "groupId": "@self" },
        "jsonrpc": "2.0",
        "key": "p",
        "apiVersion": "v1"
    }];
};