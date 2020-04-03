import { Platform } from '@angular/cdk/platform';
import { ShareButtonBase } from './base';
import { IShareButton, ShareMetaTags } from '../share.models';

export class TwitterButton extends ShareButtonBase {

  protected _supportedMetaTags: ShareMetaTags = {
    url: 'url',
    description: 'text',
    tags: 'hashtags',
    via: 'via'
  };

  get desktop(): string {
    return `https://twitter.com/intent/tweet?`;
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
