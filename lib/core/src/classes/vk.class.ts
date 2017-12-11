/** VK DOCS: https://vk.com/dev/widget_share */

import { IShareButton, ShareButtonArgs, ShareButtonProp } from '../models/share.models';
import { empty } from 'rxjs/observable/empty';

export class VKontakteButton implements IShareButton {

  constructor(public prop: ShareButtonProp) {
  }

  link(url: string, args?: ShareButtonArgs) {
    return this.prop.shareUrl + url;
  }

  count(): any {
    return empty();
  }

}
