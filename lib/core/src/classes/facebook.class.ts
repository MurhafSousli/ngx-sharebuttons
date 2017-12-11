import { HttpClient } from '@angular/common/http';
import { IShareButton, ShareButtonProp } from '../models/share.models';
import { catchError, filter, map } from 'rxjs/operators';
import { empty } from 'rxjs/observable/empty';

export class FacebookButton implements IShareButton {

  constructor(public prop: ShareButtonProp, private http: HttpClient) {
  }

  link(url: string) {

    return this.prop.shareUrl + url;
  }

  count(url: string): any {

    return this.http.get<ICount>(this.prop.countUrl + url).pipe(
      filter(res => !!(res.share && res.share.share_count)),
      map(res => +res.share.share_count),
      catchError(err => empty())
    );
  }
}

/** Facebook Count interface */

interface Share {
  comment_count: number;
  share_count: number;
}

interface OgObject {
  id: string;
  description: string;
  title: string;
  type: string;
  updated_time: Date;
}

interface ICount {
  share: Share;
  og_object: OgObject;
  id: string;
}
