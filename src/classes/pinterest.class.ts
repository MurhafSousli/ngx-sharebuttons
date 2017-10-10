import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { IShareButton, ShareButtonArgs, ShareButtonProp } from '../models/share-buttons.models';

export class PinterestButton implements IShareButton {

  constructor(public prop: ShareButtonProp, private http: HttpClient) {
  }

  link(url: string, args?: ShareButtonArgs) {

    let shareUrl = this.prop.shareUrl + url;

    /** The description and the image are required to get the pin button to work. */

    if (args.description) {
      shareUrl += '&description=' + args.description;
    } else if (document) {

      /** If user didn't add description, get it from the OG meta tag */
      const ogDescription: Element = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        shareUrl += '&description=' + ogDescription.getAttribute('content');
      } else {
        console.warn('[ShareButtons]: You didn\'t set the description text for Pinterest button');
      }
    }

    if (args.image) {
      shareUrl += '&media=' + args.image;
    } else if (document) {
      const ogImage: Element = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        shareUrl += '&media=' + ogImage.getAttribute('content');
      } else {
        console.warn('[ShareButtons]: You didn\'t set the image URL for Pinterest button');
      }
    }

    return shareUrl;
  }

  count(url: string) {

    return this.http.get(this.prop.countUrl + url, {responseType: 'text'})
      .map(text => <ICount>JSON.parse(text.replace(/^receiveCount\((.*)\)/, '$1')))
      .filter(res => !!res.count)
      .map(res => +res.count)
      .catch(err => Observable.empty());
  }

}

/** Pinterest count interface */

interface ICount {
  url: string;
  count: number;
}
