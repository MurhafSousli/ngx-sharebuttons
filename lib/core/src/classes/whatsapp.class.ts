import { IShareButton, ShareButtonArgs, ShareButtonProp } from '../models/share.models';
import { empty } from 'rxjs/observable/empty';

export class WhatsappButton implements IShareButton {

  constructor(public prop: ShareButtonProp) {
  }

  link(url: string, args?: ShareButtonArgs) {

    let shareUrl = this.prop.shareUrl;

    if (args.description) {
      shareUrl += args.description + ' %0A';
    }

    return shareUrl + url;
  }

  count(): any {

    return empty();
  }

}
