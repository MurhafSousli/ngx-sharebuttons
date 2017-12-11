/** LINKEDIN DOCS https://developer.linkedin.com/docs/share-on-linkedin#! */

import { HttpClient } from '@angular/common/http';
import { IShareButton, ShareButtonArgs, ShareButtonProp } from '../models/share.models';
import { empty } from 'rxjs/observable/empty';
import { catchError, filter, map } from 'rxjs/operators';

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

  count(url: string): any {

    return this.http.jsonp<ICount>(this.prop.countUrl + url, 'callback').pipe(
      filter(res => !!res.count),
      map(res => +res.count),
      catchError(err => empty()),
    );
  }
}

/** LinkedIn count interface */

export interface ICount {
  count: number;
  fCnt: string;
  fCntPlusOne: string;
  url: string;
}
