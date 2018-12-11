import { Platform } from '@angular/cdk/platform';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IShareButton, ShareMetaTags } from '../share.models';

export class ShareButtonBase {

  protected readonly _self: ShareButtonBase = this;

  /** Share button supported meta tags */
  protected readonly _supportedMetaTags: ShareMetaTags;

  /** Share button label */
  get text(): string {
    return this._props.text;
  }

  /** Share button aria-label attribute */
  get ariaLabel(): string {
    return this._props.ariaLabel;
  }

  /** Share button color */
  get color(): string {
    return this._props.color;
  }

  /** Share button icon (FontAwesome) */
  get icon(): string | string[] {
    return this._props.icon;
  }

  get desktop(): string | undefined {
    return undefined;
  }

  get android(): string | undefined {
    return this.desktop;
  }

  get ios(): string | undefined {
    return this.desktop;
  }

  get sharerUrl(): string {
    if (this._platform.IOS) return this.ios;
    if (this._platform.ANDROID) return this.android;
    return this.desktop;
  }

  /** If share button supports share count */
  supportShareCount = false;

  constructor(protected _props: IShareButton,
              protected _url: () => string,
              protected _http: HttpClient,
              protected _platform: Platform,
              protected _document: Document,
              protected _windowSize: string,
              // disable button click (used in copy button)
              protected _disableButtonClick: (disable: boolean) => void) {
  }

  /**
   * Opens share window
   */
  click(metaTags: ShareMetaTags): Window | null | void {
    return this._open(this._serializeMetaTags(metaTags));
  }

  /** Get share count of a URL */
  shareCount(url: string): Observable<number> | undefined {
    return undefined;
  }

  protected _serializeMetaTags(metaTags: ShareMetaTags): string {
    return Object.entries(this._supportedMetaTags)
      .map(([key, value]) =>
        metaTags[key] ? `${value}=${encodeURIComponent(metaTags[key])}` : ''
      )
      .join('&');
  }

  protected _open(serializedMetaTags: string): Window | null | void {
    if (this.sharerUrl) {
      // Avoid SSR error
      if (this._platform.isBrowser) {
        return this._document.defaultView.open(
          this.sharerUrl + serializedMetaTags,
          'newwindow',
          this._windowSize
        );
      }
    } else {
      console.warn(`${this.text} button is not compatible on this Platform`);
    }
  }
}
