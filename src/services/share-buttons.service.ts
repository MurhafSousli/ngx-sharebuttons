import { Injectable, EventEmitter } from '@angular/core';
import { Http, Jsonp, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';

import { WindowService } from './window.service';
import { ShareArgs, ShareProvider, Helper } from '../helpers/index';

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
            let r = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

            if (r.test(url)) {
                return encodeURIComponent(url);
            } else {
                console.warn('[ShareButtons]: Invalid URL, fallback to Window URL');
            }
        }
        /** fallback to "Window" URL, or to "Global" in universal */
        return (this.window) ? encodeURIComponent(this.window.location.href) : (<any>global).url || '';
    }


    /** Open share window */
    share(type: ShareProvider, args: ShareArgs, popUpClosed: EventEmitter<ShareProvider>) {

        /** include twitterAccount in args for twitter button */
        if (this.twitterAccount) {
            args = Object.assign({}, args, { via: this.twitterAccount });
        }

        /** check for mobile browser (this won't detect tablets browser) */
        if (this.window.innerWidth <= 480) {
            args = Object.assign({}, args, { mobile: true });
        }

        let popUp = this.window.open(Helper.shareFactory(type, args), 'newwindow', this.windowAttr());

        /** Emit clicked button */
        if (this.window && popUp) {
            let pollTimer = this.window.setInterval(() => {
                if (popUp.closed) {
                    this.window.clearInterval(pollTimer);
                    popUpClosed.emit(type);
                }
            }, 200);
        }
    }

    /** Share Counts */
    count(type: ShareProvider, url: string, count: EventEmitter<number>) {

        switch (type) {
            case ShareProvider.FACEBOOK:
                this.fbCount(url, count);
                break;
            case ShareProvider.LINKEDIN:
                this.linkedInCount(url, count);
                break;
            case ShareProvider.REDDIT:
                this.redditCount(url, count);
                break;
            case ShareProvider.TUMBLR:
                this.tumblrCount(url, count);
                break;
            case ShareProvider.GOOGLEPLUS:
                this.gPlusCount(url, count);
                break;
            case ShareProvider.PINTEREST:
                this.pinCount(url, count);
                break;
            default:
        }
    }

    private fbCount(url: string, count: EventEmitter<number>) {
        this.fetch(`https://graph.facebook.com/?id=${url}`)
            .subscribe((data: any) => {
                data = data.json();
                if (data.hasOwnProperty('share') && data.share.hasOwnProperty('share_count')) {
                    count.emit(data.share.share_count);
                    return;
                }
                count.emit(0);
            });
    }

    private linkedInCount(url: string, count: EventEmitter<number>) {
        this.fetchJsonp(`https://www.linkedin.com/countserv/count/share?url=${url}`)
            .subscribe((data: any) => {
                data = data.json();
                count.emit(data.count || 0);
            });
    }

    private redditCount(url: string, count: EventEmitter<number>) {
        this.fetch(`https://buttons.reddit.com/button_info.json?url=${url}`)
            .subscribe((data: any) => {
                data = data.json();
                if (data.hasOwnProperty('data') && data.data.hasOwnProperty('children')) {
                    if (data.data.children.length) {
                        count.emit(data.data.children[0].data.score);
                        return;
                    }
                }
                count.emit(0);
            });
    }

    private gPlusCount(url: string, count: EventEmitter<number>) {
        let body = Helper.gplusCountBody(url);
        this.post('https://clients6.google.com/rpc?key=AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ', body)
            .subscribe((data: any) => {
                data = data.json();
                if (data[0] && data[0].hasOwnProperty('result')) {
                    count.emit(data[0].result.metadata.globalCounts.count);
                    return;
                }
                count.emit(0);
            });
    }

    private pinCount(url: string, count: EventEmitter<number>) {
        this.fetch(`https://api.pinterest.com/v1/urls/count.json?callback=receiveCount&url=${url}`)
            .subscribe((data: any) => {
                data = data.text();
                let result = JSON.parse(data.replace(/^receiveCount\((.*)\)/, '$1'));
                count.emit(result.count || 0);
            });
    }

    private tumblrCount(url: string, count: EventEmitter<number>) {
        this.fetchJsonp(`https://api.tumblr.com/v2/share/stats?url=${url}`)
            .subscribe((data: any) => {
                data = data.json();
                if (data.hasOwnProperty('response') && data.response.hasOwnProperty('note_count')) {
                    count.emit(data.response.note_count);
                    return;
                }
                count.emit(0);
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
        return this.jsonp.request(`${url}&format=jsonp&callback=JSONP_CALLBACK`)
            .catch((err) => Observable.empty());
    }

    windowAttr() {
        return 'width=' + this.windowWidth + ', height=' + this.windowHeight;
    }

}
