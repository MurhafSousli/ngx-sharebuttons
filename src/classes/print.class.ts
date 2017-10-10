import { IShareButton, ShareButtonArgs, ShareButtonProp } from '../models/share-buttons.models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

export class PrintButton implements IShareButton {

  constructor(public prop: ShareButtonProp) {
  }

  link(url: string, args?: ShareButtonArgs) {

    return this.prop.type;
  }

  count() {

    return Observable.empty();
  }

}
