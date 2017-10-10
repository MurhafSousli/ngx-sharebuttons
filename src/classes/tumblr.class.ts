/** TUMBLR DOCS: https://www.tumblr.com/docs/en/share_button */

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { IShareButton, ShareButtonArgs, ShareButtonProp } from '../models/share-buttons.models';

export class TumblrButton implements IShareButton {

  constructor(public prop: ShareButtonProp, private http: HttpClient) {
  }

  link(url: string, args?: ShareButtonArgs) {

    let shareUrl = this.prop.shareUrl + url;

    if (args.description) {
      shareUrl += '&caption=' + args.description;
    }

    if (args.tags) {
      shareUrl += '&tags=' + args.tags;
    }

    return shareUrl;
  }

  count(url: string) {

    return this.http.jsonp<ICount>(this.prop.countUrl + url, 'callback')
      .filter(res => !!(res.response && res.response.note_count))
      .map(res => +res.response.note_count)
      .catch(err => Observable.empty());
  }
}

/** Tumblr count interface*/

interface Meta {
  status: number;
  msg: string;
}

interface Response {
  url: string;
  note_count: number;
}

interface ICount {
  meta: Meta;
  response: Response;
}
