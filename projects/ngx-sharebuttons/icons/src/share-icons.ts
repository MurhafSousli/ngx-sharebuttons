import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { SHARE_ICONS } from 'ngx-sharebuttons';
import {
  faFacebookF, faFacebookMessenger, faLine, faLinkedinIn, faMix, faPinterestP,
  faRedditAlien, faTelegramPlane, faTumblr, faXTwitter, faViber, faVk, faWhatsapp, faXing
} from '@fortawesome/free-brands-svg-icons';
import {
  faCheck, faEllipsisH, faEnvelope,
  faExclamation, faLink, faMinus, faPrint, faSms
} from '@fortawesome/free-solid-svg-icons';

const icons: IconDefinition[] = [
  faFacebookF, faXTwitter, faLinkedinIn, faPinterestP, faRedditAlien, faTumblr,
  faWhatsapp, faViber, faVk, faFacebookMessenger, faTelegramPlane, faMix, faXing, faSms,
  faEnvelope, faCheck, faPrint, faExclamation, faLink, faEllipsisH, faMinus, faLine
];

export function iconsLoaderFactory(iconLibrary: FaIconLibrary) {
  iconLibrary.addIcons(...icons);
  return null;
}

export function shareIcons(): EnvironmentProviders {
  return makeEnvironmentProviders([{
    provide: SHARE_ICONS,
    useFactory: iconsLoaderFactory,
    deps: [FaIconLibrary]
  }]);
}
