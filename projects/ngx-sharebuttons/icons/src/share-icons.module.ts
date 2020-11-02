import { NgModule } from '@angular/core';
import {
  faFacebookF, faFacebookMessenger, faGoogle, faLine, faLinkedinIn, faMix, faPinterestP,
  faRedditAlien, faTelegramPlane, faTumblr, faTwitter, faVk, faWhatsapp, faXing
} from '@fortawesome/free-brands-svg-icons';
import { faCheck, faEllipsisH, faEnvelope, faExclamation, faLink, faMinus, faPrint, faSms } from '@fortawesome/free-solid-svg-icons';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const shareIcons: IconDefinition[] = [
  faFacebookF, faGoogle, faTwitter, faLinkedinIn, faPinterestP, faRedditAlien, faTumblr,
  faWhatsapp, faVk, faFacebookMessenger, faTelegramPlane, faMix, faXing, faSms,
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
