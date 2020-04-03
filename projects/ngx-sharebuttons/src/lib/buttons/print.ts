import { Platform } from '@angular/cdk/platform';
import { ShareButtonBase } from './base';
import { IShareButton } from '../share.models';

export class PrintButton extends ShareButtonBase {

  constructor(protected _props: IShareButton,
              protected _url: () => string,
              protected _platform: Platform,
              protected _document: Document,
              protected _windowSize: string,
              protected _disableButtonClick: (disable: boolean) => void,
              protected _logger: (text: string) => void) {
    super(_props, _url, _platform, _document, _windowSize, _disableButtonClick, _logger);
  }

  click(): Promise<any> {
    return new Promise((resolve) => {
      this._document.defaultView.print();
      resolve();
    });
  }
}
