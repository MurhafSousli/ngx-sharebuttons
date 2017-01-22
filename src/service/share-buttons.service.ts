import { Injectable, EventEmitter } from '@angular/core';
import { Http, Jsonp, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { WindowService } from './window.service';
import { ShareArgs, ShareProvider, Helper } from '../helpers';

declare const global: any; // To make AoT compiler (ngc) happy

@Injectable()
export class ShareButtonsService {

    /** Window Object */
    window: Window;
    /** Optional parameters */
    windowWidth: number = 500;
    windowHeight: number = 400;

    /** Site Twitter Account: Add Via @TwitterAccount to the tweet  */
    twitterAccount: string;

    constructor(window: WindowService, private http: Http, private jsonp: Jsonp) {
        this.window = window.nativeWindow;
    }

    validateUrl(url: string) {
        /** If URL is specified then validate it, otherwise use window URL */
        if (url) {
            let r = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

            if (r.test(url)) {
                return url;
            } else {
                console.warn('[ShareButtons]: Invalid URL, fallback to Window URL');
            }
        }
        /** fallback to "Window" URL, or to "Global" in universal */
        return (this.window) ? encodeURIComponent(this.window.location.href) : (<any>global).url || '';
    }


    /** Open share window */
    share(btnProvider: ShareProvider, args: ShareArgs, popUpEmitter: EventEmitter<ShareProvider>) {

        let popUp = this.window.open(Helper.shareFactory(btnProvider, args), 'newwindow', this.windowAttr());

        /** Emit clicked button */
        if (this.window) {
            let pollTimer = this.window.setInterval(() => {
                if (popUp.closed) {
                    this.window.clearInterval(pollTimer);
                    popUpEmitter.emit(btnProvider);
                }
            }, 200);
        }
    }

    /** Share Counts */
    count(type: ShareProvider, url: string): Observable<number> {
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
                return data.count || 0;
            });
    }

    private redditCount(url: string): Observable<number> {
        return this.fetch('https://buttons.reddit.com/button_info.json?url=' + url)
            .map((data: any) => {
                data = data.json();
                if (data.hasOwnProperty('data') && data.data.hasOwnProperty('children')) {
                    if (data.data.children.length) {
                        return data.data.children[0].data.score;
                    }
                }
                return 0;
            });
    }

    private gPlusCount(url: string): Observable<number> {
        let body = Helper.gplusCountBody(url);
        return this.post('https://clients6.google.com/rpc?key=AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ', body)
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
                let result = JSON.parse(data.replace(/^receiveCount\((.*)\)/, '$1'));
                return result.count || 0;
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

    private post(url: string, body: any) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, body, options)
            .catch((err) => Observable.empty());
    }

    private fetch(url: string) {
        return this.http.get(url)
            .catch((err) => Observable.empty());
    }

    private fetchJsonp(url: string) {
        return this.jsonp.request(url + '&format=jsonp&callback=JSONP_CALLBACK')
            .catch((err) => Observable.empty());
    }

    windowAttr() {
        return 'width=' + this.windowWidth + ', height=' + this.windowHeight;
    }

}
