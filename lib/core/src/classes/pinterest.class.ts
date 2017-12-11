import { HttpClient } from '@angular/common/http';
import { IShareButton, ShareButtonArgs, ShareButtonProp } from '../models/share.models';
import { catchError, filter, map } from 'rxjs/operators';
import { empty } from 'rxjs/observable/empty';

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

  count(url: string): any {

    return this.http.get(this.prop.countUrl + url, {responseType: 'text'}).pipe(
      map(text => <ICount>JSON.parse(text.replace(/^receiveCount\((.*)\)/, '$1'))),
      filter(res => !!res.count),
      map(res => +res.count),
      catchError(err => empty())
    );
  }

}

/** Pinterest count interface */

interface ICount {
  url: string;
  count: number;
}
