import { IShareButton, ShareButtonArgs, ShareButtonProp } from '../models/share.models';
import { empty } from 'rxjs/observable/empty';

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

  count(): any {

    return empty();
  }

}
