import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareButtonsMeta, ShareButtonsOptions } from '../models/share.models';
import {
  FacebookButton,
  TwitterButton,
  GoogleButton,
  PinterestButton,
  TumblrButton,
  EmailButton,
  PrintButton,
  LinkedinButton,
  VKontakteButton,
  StumbleButton,
  RedditButton,
  WhatsappButton,
  TelegramButton,
  CopyButton,
  Buttons
} from '../classes';
import { BUTTONS_META, OPTIONS } from '../modules/tokens';

@Injectable()
export class ShareButtons {

  /** All buttons */
  allButtons = [
    'facebook',
    'twitter',
    'linkedin',
    'pinterest',
    'google',
    'stumble',
    'reddit',
    'whatsapp',
    'tumblr',
    'vk',
    'telegram',
    'email',
    'copy',
    'print'
  ];

  /** Default options */
  options: ShareButtonsOptions = {
    theme: 'default',
    include: this.allButtons,
    exclude: [],
    size: 0,
    title: null,
    image: null,
    description: null,
    tags: null,
    gaTracking: false,
    twitterAccount: null
  };

  /** Button's meta data such as icon,color and text of each button */
  meta: ShareButtonsMeta = Buttons;

  constructor(private http: HttpClient,
    @Inject(OPTIONS) options: ShareButtonsOptions,
    @Inject(BUTTONS_META) meta: ShareButtonsMeta) {

    /** Override global options with user's preference */
    this.options = mergeDeep(this.options, options);
    this.meta = mergeDeep(this.meta, meta);
  }

  get twitterAccount() {
    return this.options.twitterAccount;
  }

  /** Get all wanted buttons */
  get buttons() {
    if (!this.options.exclude.length) {
      return this.options.include;
    }
    return this.options.include.filter((btn) => this.options.exclude.indexOf(btn) < 0);
  }

  get theme() {
    return this.options.theme;
  }

  /** Global meta tags */

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

  createShareButton(buttonName: string) {

    switch (buttonName.toLowerCase()) {
      case this.meta.facebook.type:
        return new FacebookButton(this.meta.facebook, this.http);
      case this.meta.twitter.type:
        return new TwitterButton(this.meta.twitter);
      case this.meta.google.type:
        return new GoogleButton(this.meta.google);
      case this.meta.pinterest.type:
        return new PinterestButton(this.meta.pinterest, this.http);
      case this.meta.linkedin.type:
        return new LinkedinButton(this.meta.linkedin, this.http);
      case this.meta.reddit.type:
        return new RedditButton(this.meta.reddit, this.http);
      case this.meta.tumblr.type:
        return new TumblrButton(this.meta.tumblr, this.http);
      case this.meta.stumble.type:
        return new StumbleButton(this.meta.stumble);
      case this.meta.whatsapp.type:
        return new WhatsappButton(this.meta.whatsapp);
      case this.meta.vk.type:
        return new VKontakteButton(this.meta.vk);
      case this.meta.telegram.type:
        return new TelegramButton(this.meta.telegram);
      case this.meta.email.type:
        return new EmailButton(this.meta.email);
      case this.meta.copy.type:
        return new CopyButton(this.meta.copy);
      case this.meta.print.type:
        return new PrintButton(this.meta.print);
      default:
        return null;
    }
  }

  /**
   * Determine the mobile operating system.
   * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
   */
  getMobileOS() {
    // const userAgent = navigator.userAgent || navigator.vendor || (window || global).opera;

    // Windows Phone must come first because its UA also contains "Android"
    // if (/windows phone/i.test(userAgent)) {
    //   return 'WindowsPhone';
    // }

    // if (/android/i.test(userAgent)) {
    //   return 'Android';
    // }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    // if (/iPad|iPhone|iPod/.test(userAgent) && !(window || global).MSStream) {
    //   return 'iOS';
    // }

    return undefined;
  }

}

/**
 * Simple object check.
 */
function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

/**
 * Deep merge two objects.
 */
function mergeDeep(target, ...sources) {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, { [key]: {} });
        }
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}
