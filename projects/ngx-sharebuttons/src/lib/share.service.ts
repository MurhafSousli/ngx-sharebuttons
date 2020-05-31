import { Inject, Injectable, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { IShareButton, SHARE_BUTTONS_CONFIG, ShareButtonsConfig, SharerMethod } from './share.models';
import { SHARE_BUTTONS } from './share.defaults';
import { mergeDeep } from './utils';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  /** Global config that applies on all share buttons in the app */
  config: ShareButtonsConfig = {
    sharerMethod: SharerMethod.Anchor,
    sharerTarget: '_blank',
    windowObj: this._document.defaultView,
    windowFuncName: 'open',
    prop: SHARE_BUTTONS,
    theme: 'default',
    include: [],
    exclude: [],
    size: 0,
    autoSetMeta: true,
    windowWidth: 800,
    windowHeight: 500,
    moreButtonIcon: 'ellipsis-h',
    lessButtonIcon: 'minus'
  };

  /** Stream that emits when config changes */
  config$ = new BehaviorSubject(this.config);

  constructor(@Optional() @Inject(SHARE_BUTTONS_CONFIG) config: ShareButtonsConfig, @Inject(DOCUMENT) private _document: any) {
    if (config) {
      this.setConfig(config);
    }
  }

  /**
   * Share buttons properties, used to get the text, color and icon of each button.
   */
  get prop() {
    return this.config.prop;
  }

  get windowSize() {
    return `width=${ this.config.windowWidth }, height=${ this.config.windowHeight }`;
  }

  setConfig(config: ShareButtonsConfig) {
    this.config = mergeDeep(this.config, config);
    this.config$.next(this.config);
  }

  addButton(name: string, props: IShareButton) {
    this.setConfig({
      prop: {
        [name]: props
      }
    });
  }

}
