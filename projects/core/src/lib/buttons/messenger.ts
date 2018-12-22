import { Platform } from '@angular/cdk/platform';
import { HttpClient } from '@angular/common/http';
import { ShareButtonBase } from './base';
import { IShareButton, ShareMetaTags } from '../share.models';

export class MessengerButton extends ShareButtonBase {

  protected _supportedMetaTags: ShareMetaTags = {
    url: 'link'
  };

  get android(): string {
    return 'fb-messenger://share/?';
  }

  get ios(): string {
    return 'fb-messenger://share/?';
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
}
