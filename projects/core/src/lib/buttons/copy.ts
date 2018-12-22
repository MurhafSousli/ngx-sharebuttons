import { Platform } from '@angular/cdk/platform';
import { HttpClient } from '@angular/common/http';
import { ShareButtonBase } from './base';
import { IShareButton } from '../share.models';

export class CopyButton extends ShareButtonBase {

  private _disable: boolean;

  get text() {
    return this._disable ? this._props.extra.successLabel : this._props.text;
  }

  get icon() {
    return this._disable ? this._props.extra.successIcon : this._props.icon;
  }

  constructor(protected _props: IShareButton,
              protected _url: () => string,
              protected _http: HttpClient,
              protected _platform: Platform,
              protected _document: Document,
              protected _windowSize: string,
              protected _disableButtonClick: (disable: boolean) => void) {
    super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick);
  }

  private _disableButton() {
    // Disable pointer for tiny delay
    this._disable = true;
    this._disableButtonClick(true);
  }

  private _resetButton() {
    this._disable = false;
    this._disableButtonClick(false);
  }

  click(): void {
    try {
      const textArea: HTMLTextAreaElement = this._document.createElement('textarea') as HTMLTextAreaElement;

      textArea.value = decodeURIComponent(this._url());
      this._document.body.appendChild(textArea);

      // highlight TextArea to copy the sharing link
      if (this._platform.IOS) {
        const range = this._document.createRange();
        range.selectNodeContents(textArea);
        const selection = this._document.defaultView.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        textArea.readOnly = true;
        textArea.setSelectionRange(0, 999999);
      } else {
        textArea.select();
      }
      this._document.execCommand('copy');
      this._document.body.removeChild(textArea);
      this._disableButton();
    } catch (e) {
      console.warn('Copy link failed!', e.message);
    } finally {
      setTimeout(() => this._resetButton(), 2000);
    }
  }
}

