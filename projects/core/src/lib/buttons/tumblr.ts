import { Platform } from '@angular/cdk/platform';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShareButtonBase } from './base';
import { IShareButton, ShareMetaTags } from '../share.models';

export class TumblrButton extends ShareButtonBase {

  supportShareCount = true;

  protected _supportedMetaTags: ShareMetaTags = {
    url: 'canonicalUrl',
    description: 'caption',
    tags: 'tags'
  };

  get desktop(): string {
    return `http://tumblr.com/widgets/share/tool?`;
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

  shareCount(url: string): Observable<number> {
    return this._http.jsonp(
      `https://api.tumblr.com/v2/share/stats?url=${url}`,
      'callback'
    ).pipe(
      map((res: any) => +res.response.note_count)
    );
  }
}
