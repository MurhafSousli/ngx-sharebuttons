import { Platform } from '@angular/cdk/platform';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShareButtonBase } from './base';
import { IShareButton, ShareMetaTags } from '../share.models';

export class TumblrButton extends ShareButtonBase {

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
              protected _platform: Platform,
              protected _document: Document,
              protected _windowSize: string,
              protected _disableButtonClick: (disable: boolean) => void,
              protected _logger: (text: string) => void) {
    super(_props, _url, _platform, _document, _windowSize, _disableButtonClick, _logger);
  }
}
