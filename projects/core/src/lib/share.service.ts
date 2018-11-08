import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IShareButton, ShareButtonsConfig, CONFIG } from './share.models';
import { shareButtonsProp } from './share.prop';
import { mergeDeep } from './utils';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  config: ShareButtonsConfig = {
    prop: shareButtonsProp,
    options: {
      theme: 'default',
      include: [],
      exclude: [],
      size: 0,
      url: null,
      title: null,
      description: null,
      image: null,
      tags: null,
      twitterAccount: null,
      autoSetMeta: true,
      gaTracking: false,
      windowWidth: 800,
      windowHeight: 500,
      moreButtonIcon: 'ellipsis-h',
      lessButtonIcon: 'minus'
    }
  };
  config$ = new BehaviorSubject(this.config);

  constructor(@Optional() @Inject(CONFIG) config: ShareButtonsConfig) {
    this.setConfig(config);
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

  get url() {
    return this.config.options.url;
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

  get autoSetMeta() {
    return this.config.options.autoSetMeta;
  }

  get gaTracking() {
    return this.config.options.gaTracking;
  }

  get size() {
    return this.config.options.size;
  }

  setConfig(config: ShareButtonsConfig) {
    if (config) {
      this.config = mergeDeep(this.config, config);
      this.config$.next(this.config);
    }
  }

  addButton(name: string, data: IShareButton) {
    const config = {
      prop: {...shareButtonsProp, ...{[name]: data}}
    };
    this.setConfig(config);
  }
}
