import { Inject, NgModule } from '@angular/core';

import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons/faRedditAlien';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTumblr } from '@fortawesome/free-brands-svg-icons/faTumblr';
import { faPinterestP } from '@fortawesome/free-brands-svg-icons/faPinterestP';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faVk } from '@fortawesome/free-brands-svg-icons/faVk';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons/faTelegramPlane';
import { faMix } from '@fortawesome/free-brands-svg-icons/faMix';
import { faXing } from '@fortawesome/free-brands-svg-icons/faXing';
import { faLine } from '@fortawesome/free-brands-svg-icons/faLine';

import { faSms } from '@fortawesome/free-solid-svg-icons/faSms';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons/faEllipsisH';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
import { faExclamation } from '@fortawesome/free-solid-svg-icons/faExclamation';
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';


import { SHARE_BUTTONS_ICONS } from './share-custom-icons.module';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const shareIcons = [
  faFacebookF, faTwitter, faLinkedinIn, faPinterestP, faRedditAlien, faTumblr,
  faWhatsapp, faVk, faFacebookMessenger, faTelegramPlane, faMix, faXing, faSms,
  faEnvelope, faCheck, faPrint, faExclamation, faLink, faEllipsisH, faMinus, faLine
];

@NgModule({
  imports: [
    FontAwesomeModule,
  ],
  providers: [
    {
      provide: SHARE_BUTTONS_ICONS, useValue: shareIcons
    }
  ]
})
export class ShareIconsModule {

  constructor(iconLibrary: FaIconLibrary, @Inject(SHARE_BUTTONS_ICONS) icons) {
    iconLibrary.addIcons(...icons);
  }
}
