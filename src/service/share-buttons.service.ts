import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

import {ShareProvider} from "../helpers/share-provider.enum";
import {ShareHelper} from "../helpers/share-buttons.helper";

@Injectable()
export class ShareButtonsService {

    /** Optional parameters for to set default inputs */
    windowWidth: number = 500;
    windowHeight: number = 400;

    constructor(private http: Http) {
    }

    count(type, url) {
        switch (type) {
            case ShareProvider.FACEBOOK:
                return this.fbCount(url);
            case ShareProvider.LINKEDIN:
                return this.linkedInCount(url);
            case ShareProvider.REDDIT:
                return this.redditCount(url);
            case ShareProvider.TUMBLR:
                return this.tumblrCount(url);
            case ShareProvider.STUMBLEUPON:
                return this.stumbleCount(url);
            case ShareProvider.GOOGLEPLUS:
                return this.gPlusCount(url);
            case ShareProvider.PINTEREST:
                return this.pinCount(url);
            default:
                return Observable.empty();
        }
    }

    private fbCount(url: string) {
        return this.fetch('http://graph.facebook.com/?id=' + url)
            .map((data:any) => {
                data = data.json();
                if (data.hasOwnProperty('share') && data.share.hasOwnProperty('share_count')) {
                    return data.share.share_count;
                }
                return Observable.empty();
            });
    }

    private linkedInCount(url: string) {
        return this.fetch('http://www.linkedin.com/countserv/count/share?url=' + url + '&format=json')
            .map((data:any) => {
                data = data.json();
                if (data.hasOwnProperty('count')) {
                    return data.count;
                }
                return Observable.empty();
            });
    }


    private redditCount(url: string) {
        return this.fetch('http://buttons.reddit.com/button_info.json?url=' + url)
            .map((data:any)=> {
                data = data.json();
                if (data.hasOwnProperty('data')) {
                    return data.data.children[0].data.score;
                }
                return Observable.empty();
            });
    }

    private gPlusCount(url: string) {
        let body = ShareHelper.gplusCountBody(url);
        return this.http.post('https://clients6.google.com/rpc?key=AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ', body)
            .map((data:any)=> {
                data = data.json();
                if (data[0] && data[0].hasOwnProperty('result')) {
                    return data[0].result.metadata.globalCounts.count;
                }
                return Observable.empty();
            });
    }

    private pinCount(url: string) {
        return this.fetch('http://api.pinterest.com/v1/urls/count.json?callback=receiveCount&url=' + url)
            .map((data:any)=> {
                data = data.text();
                var result = JSON.parse(data.replace(/^receiveCount\((.*)\)/, '$1'));
                return result.count;
            });
    }

    private stumbleCount(url: string) {
        return this.fetch('http://www.stumbleupon.com/services/1.01/badge.getinfo?url=' + url)
            .map((data:any)=> {
                data = data.json();
                if (data.hasOwnProperty('timestamp')) {
                    return data.timestamp;
                }
                return Observable.empty();
            });
    }

    private tumblrCount(url: string) {
        return this.fetch('http://api.tumblr.com/v2/share/stats?url=' + url)
            .map((data:any) => {
                data = data.json();
                if (data.hasOwnProperty('response') && data.response.hasOwnProperty('note_count')) {
                    return data.response.note_count;
                }
                return Observable.empty();
            });
    }

    fetch(url) {
        return this.http.get(url)
            .catch((err)=> {
                console.warn('[ShareService]: ', err);
                return Observable.empty();
            });
    }

    windowAttr() {
        return 'width=' + this.windowWidth + ', height=' + this.windowHeight;
    }
}
