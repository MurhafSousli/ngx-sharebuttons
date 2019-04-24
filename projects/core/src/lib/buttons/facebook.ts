import { Platform } from '@angular/cdk/platform';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShareButtonBase } from './base';
import { IShareButton, ShareMetaTags, ShareApiOption } from '../share.models';

export class FacebookButton extends ShareButtonBase {

  supportShareCount = true;

  protected _supportedMetaTags: ShareMetaTags = {
    url: 'u'
  };

  get desktop(): string {
    return `https://www.facebook.com/sharer/sharer.php?`;
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

  shareCount(url: string, option: ShareApiOption ): Observable<number> {
    if (!option.fbAccessToken) {
      console.warn('need to setting access token to get facebook share count.');
      return of(0);
    } else {
      return this._http.get(`https://graph.facebook.com?id=${
        url
      }&fields=engagement&access_token=${
        option.fbAccessToken
      }`).pipe(
        map((res: any) => +res.engagement.share_count)
      );
    }
  }
}
