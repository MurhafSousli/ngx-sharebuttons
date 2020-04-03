import { Platform } from '@angular/cdk/platform';
import { ShareButtonBase } from './base';
import { IShareButton, ShareMetaTags } from '../share.models';

export class EmailButton extends ShareButtonBase {

  protected _supportedMetaTags: ShareMetaTags = {
    title: 'subject',
    description: 'body'
  };

  get desktop(): string {
    return `mailto:?`;
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

  click(metaTags: ShareMetaTags): Promise<any> {
    // Add URL to message body
    metaTags.description = metaTags.description ? `${metaTags.description}\r\n${this._url()}` : this._url();
    const serializedMetaTags = this._serializeMetaTags(metaTags);
    return this._open(serializedMetaTags);
  }
}
