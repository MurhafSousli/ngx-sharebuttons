/** LINKEDIN DOCS https://developer.linkedin.com/docs/share-on-linkedin#! */

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { IShareButton, ShareButtonArgs, ShareButtonProp } from '../models/share-buttons.models';

export class LinkedinButton implements IShareButton {

  constructor(public prop: ShareButtonProp, private http: HttpClient) {
  }

  link(url: string, args?: ShareButtonArgs) {

    let shareUrl = this.prop.shareUrl + url;

    if (args.title) {
      shareUrl += '&title=' + args.title;
    }
    if (args.description) {
      shareUrl += '&summary=' + args.description;
    }

    return shareUrl;
  }

  count(url: string) {

    return this.http.jsonp<ICount>(this.prop.countUrl + url, 'callback')
      .filter(res => !!res.count)
      .map(res => +res.count)
      .catch(err => Observable.empty());
  }
}

/** LinkedIn count interface */

export interface ICount {
  count: number;
  fCnt: string;
  fCntPlusOne: string;
  url: string;
}
