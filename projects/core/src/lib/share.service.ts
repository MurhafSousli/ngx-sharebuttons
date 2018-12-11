import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShareButtonsConfig, SHARE_BUTTONS_CONFIG } from './share.models';
import { SHARE_BUTTONS } from './share.defaults';
import { mergeDeep } from './utils';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  /** Global config that applies on all share buttons in the app */
  config: ShareButtonsConfig = {
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

  constructor(@Optional() @Inject(SHARE_BUTTONS_CONFIG) config: ShareButtonsConfig) {
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
    return `width=${this.config.windowWidth}, height=${this.config.windowHeight}`;
  }

  setConfig(config: ShareButtonsConfig) {
    this.config = mergeDeep(this.config, config);
    this.config$.next(this.config);
  }

}
