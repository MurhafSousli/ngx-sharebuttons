/** STUMBLE DOCS: http://stackoverflow.com/questions/10591424/how-can-i-create-a-custom-stumbleupon-button */
import { IShareButton, ShareButtonProp } from '../models/share.models';
import { empty } from 'rxjs/observable/empty';

export class StumbleButton implements IShareButton {

  constructor(public prop: ShareButtonProp) {
  }

  link(url: string) {

    return this.prop.shareUrl + url;
  }

  count(): any {

    return empty();
  }
}

