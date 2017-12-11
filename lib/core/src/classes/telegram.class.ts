import { IShareButton, ShareButtonArgs, ShareButtonProp } from '../models/share.models';
import { empty } from 'rxjs/observable/empty';

export class TelegramButton implements IShareButton {

  constructor(public prop: ShareButtonProp) {
  }

  link(url: string, args?: ShareButtonArgs) {

    let shareUrl = this.prop.shareUrl + url;

    if (args.description) {
      shareUrl += '&text=' + args.description;
    }

    return shareUrl;
  }

  count(): any {

    return empty();
  }

}
