/** GPLUS DOCS: https://developers.google.com/+/web/share/#sharelink */

import 'rxjs/add/observable/empty';
import { IShareButton, ShareButtonProp } from '../models/share.models';
import { empty } from 'rxjs/observable/empty';

export class GoogleButton implements IShareButton {

  constructor(public prop: ShareButtonProp) {
  }

  link(url: string) {
    return this.prop.shareUrl + url;
  }

  count(url: string): any {

    return empty();
  }
}
