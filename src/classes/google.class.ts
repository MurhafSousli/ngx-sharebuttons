/** GPLUS DOCS: https://developers.google.com/+/web/share/#sharelink */

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import { IShareButton, ShareButtonProp } from '../models/share-buttons.models';

export class GoogleButton implements IShareButton {

  constructor(public prop: ShareButtonProp, private http: HttpClient) {
  }

  link(url: string) {
    return this.prop.shareUrl + url;
  }

  count(url: string) {

    return Observable.empty();
  }
}
