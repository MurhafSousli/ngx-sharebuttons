import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { IShareButton, ShareButtonProp } from '../models/share-buttons.models';

export class FacebookButton implements IShareButton {

  constructor(public prop: ShareButtonProp, private http: HttpClient) {
  }

  link(url: string) {

    return this.prop.shareUrl + url;
  }

  count(url: string) {

    return this.http.get<ICount>(this.prop.countUrl + url)
      .filter(res => !!(res.share && res.share.share_count))
      .map(res => +res.share.share_count)
      .catch(err => Observable.empty());
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
