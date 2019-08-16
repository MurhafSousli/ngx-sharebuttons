import { Platform } from '@angular/cdk/platform';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShareButtonBase } from './base';
import { IShareButton, ShareMetaTags } from '../share.models';

export class PinterestButton extends ShareButtonBase {

  supportShareCount = true;

  protected _supportedMetaTags: ShareMetaTags = {
    url: 'url',
    description: 'description',
    image: 'media'
  };

  get desktop(): string {
    return `https://pinterest.com/pin/create/button/?`;
  }

  constructor(protected _props: IShareButton,
              protected _url: () => string,
              protected _http: HttpClient,
              protected _platform: Platform,
              protected _document: Document,
              protected _windowSize: string,
              protected _disableButtonClick: (disable: boolean) => void,
              protected _logger: (text: string) => void) {
    super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
  }

  click(metaTags: ShareMetaTags): Promise<any> {
    // Check if image parameter is defined
    if (metaTags.image) {
      return this._open(this._serializeMetaTags(metaTags));
    }
    console.warn('Pinterest button: image parameter is required!');
  }

  shareCount(url: string): Observable<number> {
    return this._http.get(
      `https://api.pinterest.com/v1/urls/count.json?url=${url}`,
      {responseType: 'text'}
    ).pipe(
      map((text: string) => JSON.parse(text.replace(/^receiveCount\((.*)\)/, '$1'))),
      map((res: any) => +res.count)
    );
  }
}
