import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IShareButton, IShareButtons, ShareButtonsConfig } from './share.models';
import { CONFIG } from './share.tokens';
import { shareButtonsProp } from './share.prop';
import { mergeDeep } from './utils';

@Injectable()
export class ShareButtons {

  config = {
    prop: shareButtonsProp,
    options: {
      theme: 'default',
      include: [],
      exclude: [],
      size: 0,
      title: null,
      image: null,
      description: null,
      tags: null,
      gaTracking: false,
      twitterAccount: null,
      windowWidth: 800,
      windowHeight: 500
    }
  };
  config$ = new BehaviorSubject(this.config);

  constructor(@Inject(CONFIG) config: ShareButtonsConfig) {
    if (config) {
      this.setConfig(config);
    }
  }

  get prop() {
    return this.config.prop;
  }

  get twitterAccount() {
    return this.config.options.twitterAccount;
  }

  get theme() {
    return this.config.options.theme;
  }

  get windowSize() {
    return `width=${this.config.options.windowWidth}, height=${this.config.options.windowHeight}`;
  }

  get title() {
    return this.config.options.title;
  }

  get description() {
    return this.config.options.description;
  }

  get image() {
    return this.config.options.image;
  }

  get tags() {
    return this.config.options.tags;
  }

  get gaTracking() {
    return this.config.options.gaTracking;
  }

  get size() {
    return this.config.options.size;
  }

  setConfig(config: ShareButtonsConfig) {
    this.config = mergeDeep(this.config, config);
    this.config$.next(this.config);
  }

  addButton(name: string, data: IShareButton) {
    const config = {
      prop: {...shareButtonsProp, ...{[name]: data}}
    };
    this.setConfig(config);
  }
}
