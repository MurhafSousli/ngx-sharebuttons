/** TUMBLR DOCS: https://www.tumblr.com/docs/en/share_button */

import { HttpClient } from '@angular/common/http';
import { IShareButton, ShareButtonArgs, ShareButtonProp } from '../models/share.models';
import { catchError, filter, map } from 'rxjs/operators';
import { empty } from 'rxjs/observable/empty';

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

  count(url: string): any {

    return this.http.jsonp<ICount>(this.prop.countUrl + url, 'callback').pipe(
      filter(res => !!(res.response && res.response.note_count)),
      map(res => +res.response.note_count),
      catchError(err => empty()),
    );
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
