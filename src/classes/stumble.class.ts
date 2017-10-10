/** STUMBLE DOCS: http://stackoverflow.com/questions/10591424/how-can-i-create-a-custom-stumbleupon-button */
import { IShareButton, ShareButtonProp } from '../models/share-buttons.models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

export class StumbleButton implements IShareButton {

  constructor(public prop: ShareButtonProp) {
  }

  link(url: string) {

    return this.prop.shareUrl + url;
  }

  count() {

    return Observable.empty();
  }
}

