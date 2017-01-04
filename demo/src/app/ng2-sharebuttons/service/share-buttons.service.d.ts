import { Http, Jsonp } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/observable/empty";
import "rxjs/add/operator/catch";
import { ShareButtonsInterface } from "./share-buttons.interface";
export declare class ShareButtonsService implements ShareButtonsInterface {
    private http;
    private jsonp;
    /** Optional parameters */
    windowWidth: number;
    windowHeight: number;
    /** Site Twitter Account: Add Via @TwitterAccount to the tweet  */
    twitterAccount: string;
    constructor(http: Http, jsonp: Jsonp);
    share(type: any, args: any): string;
    /** Share Counts */
    count(type: any, url: any): Observable<number>;
    private fbCount(url);
    private linkedInCount(url);
    private redditCount(url);
    private gPlusCount(url);
    private pinCount(url);
    private tumblrCount(url);
    private fetch(url);
    private fetchJsonp(url);
    windowAttr(): string;
}
/** Prepare gPlus count request body   */
export declare const gplusCountBody: (url: any) => {
    "method": string;
    "id": string;
    "params": {
        "nolog": boolean;
        "id": any;
        "source": string;
        "userId": string;
        "groupId": string;
    };
    "jsonrpc": string;
    "key": string;
    "apiVersion": string;
}[];
