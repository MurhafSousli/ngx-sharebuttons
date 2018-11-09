import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconsComponent {

  code = {
    import: `import { library } from '@fortawesome/fontawesome-svg-core';

import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons/faRedditAlien';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons/faGooglePlusG';
import { faTumblr } from '@fortawesome/free-brands-svg-icons/faTumblr';
import { faPinterestP } from '@fortawesome/free-brands-svg-icons/faPinterestP';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faVk } from '@fortawesome/free-brands-svg-icons/faVk';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons/faTelegramPlane';
import { faStumbleupon } from '@fortawesome/free-brands-svg-icons/faStumbleupon';
import { faXing } from '@fortawesome/free-brands-svg-icons/faXing';

import { faCommentAlt } from '@fortawesome/free-solid-svg-icons/faCommentAlt';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons/faEllipsisH';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
import { faExclamation } from '@fortawesome/free-solid-svg-icons/faExclamation';
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

const icons = [
  faFacebookF, faTwitter, faLinkedinIn, faGooglePlusG, faPinterestP, faRedditAlien, faTumblr,
  faWhatsapp, faVk, faFacebookMessenger, faTelegramPlane, faStumbleupon, faXing, faCommentAlt,
  faEnvelope, faCheck, faPrint, faExclamation, faLink, faEllipsisH, faMinus
];

library.add(...icons);`,
    icons: `import './icons';`,
    libraryMethod: `import { library } from '@fortawesome/fontawesome-svg-core';

import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';

const icons = [
  // ... other icons
  faFacebookSquare
];

library.add(...icons);

const shareProp = {
  facebook: {
    icon: ['fab', 'facebook-square']
  }
};

@NgModule({
  imports: [
    ShareButtonsModule.forRoot({ prop: shareProp })
  ]
})`,
    literalMethod: `import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
const shareProp = {
  facebook: {
    icon: faFacebookSquare
  }
};
@NgModule({
  imports: [
    ShareButtonsModule.forRoot({ prop: shareProp })
  ]
})
`
  };

}
