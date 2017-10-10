/** TWITTER DOCS: https://dev.twitter.com/web/tweet-button/web-intent */
import { IShareButton, ShareButtonArgs, ShareButtonProp } from '../models/share-buttons.models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

export class TwitterButton implements IShareButton {

  constructor(public prop: ShareButtonProp) {
  }

  link(url: string, args?: ShareButtonArgs) {

    let shareUrl = this.prop.shareUrl + url;

    if (args.description) {
      shareUrl += '&text=' + args.description;
    }

    if (args.via) {
      shareUrl += '&via=' + args.via;
    }

    if (args.tags) {
      shareUrl += '&hashtags=' + args.tags;
    }

    return shareUrl;
  }

  count() {

    return Observable.empty();
  }

}
