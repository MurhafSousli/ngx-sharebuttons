import { Inject, Injectable } from '@angular/core';
import { IShareButton, IShareButtons, ShareButtonsConfig, ShareButtonsOptions } from './share.models';
import { CONFIG } from './share.tokens';
import { shareButtonsProp } from './share.prop';
import { mergeDeep } from './utils';

@Injectable()
export class ShareButtons {

  /** List of share buttons */
  allButtons: string[];

  /** Default options */
  options: ShareButtonsOptions;

  /** Default properties */
  prop: IShareButtons;

  constructor(@Inject(CONFIG) config: ShareButtonsConfig) {

    /** Set buttons properties */
    this.prop = shareButtonsProp;

    /** Set buttons list */
    this.allButtons = Object.keys(this.prop);

    /** Set default options */
    this.options = {
      theme: 'default',
      include: this.allButtons,
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
    };

    if (config) {
      /** Override global options with user's preference */
      this.options = mergeDeep(this.options, config.options);
      this.prop = mergeDeep(this.prop, config.prop);
    }
  }

  get twitterAccount() {
    return this.options.twitterAccount;
  }

  /**
   * Get wanted buttons
   */
  get buttons() {
    if (!this.options.exclude.length) {
      return this.options.include;
    }
    return this.options.include.filter((btn) => this.options.exclude.indexOf(btn) < 0);
  }

  get theme() {
    return this.options.theme;
  }

  get windowSize() {
    return `width=${this.options.windowWidth}, height=${this.options.windowHeight}`;
  }

  get title() {
    return this.options.title;
  }

  get description() {
    return this.options.description;
  }

  get image() {
    return this.options.image;
  }

  get tags() {
    return this.options.tags;
  }

  get gaTracking() {
    return this.options.gaTracking;
  }

  get size() {
    return this.options.size;
  }

  registerButton(name: string, data: IShareButton) {
    this.prop = {...shareButtonsProp, ...{[name]: data}};
    this.allButtons = Object.keys(this.prop);
  }
}
