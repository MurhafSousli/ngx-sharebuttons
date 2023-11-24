import { NgModule } from '@angular/core';
import {
  faFacebookF, faFacebookMessenger, faLine, faLinkedinIn, faMix, faPinterestP,
  faRedditAlien, faTelegramPlane, faTumblr, faTwitter, faViber, faVk, faWhatsapp, faXing,faXTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faCheck, faEllipsisH, faEnvelope, faExclamation, faLink, faMinus, faPrint, faSms } from '@fortawesome/free-solid-svg-icons';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const shareIcons: IconDefinition[] = [
  faFacebookF, faTwitter,faXTwitter, faLinkedinIn, faPinterestP, faRedditAlien, faTumblr,
  faWhatsapp, faViber, faVk, faFacebookMessenger, faTelegramPlane, faMix, faXing, faSms,
  faEnvelope, faCheck, faPrint, faExclamation, faLink, faEllipsisH, faMinus, faLine
];

@NgModule({
  imports: [
    FontAwesomeModule,
  ]
})
export class ShareIconsModule {
  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIcons(...shareIcons);
  }
}
