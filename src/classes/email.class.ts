import { IShareButton, ShareButtonArgs, ShareButtonProp } from '../models/share-buttons.models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

export class EmailButton implements IShareButton {

  constructor(public prop: ShareButtonProp) {
  }

  link(url: string, args?: ShareButtonArgs) {

    let shareUrl = this.prop.shareUrl + args.email;

    if (args.title) {
      shareUrl += '&subject=' + args.title;
    }

    shareUrl += '&body=';
    if (args.description) {
      shareUrl += args.description + ' %0A';
    }

    return shareUrl + url;
  }

  count() {

    return Observable.empty();
  }

}
