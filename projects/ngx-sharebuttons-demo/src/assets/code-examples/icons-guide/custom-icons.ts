import { ApplicationConfig } from '@angular/core';
import { customShareButton, provideShareButtonsOptions } from 'ngx-sharebuttons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideShareButtonsOptions(
      // Override facebook icon
      customShareButton('facebook', {
        icon: faFacebookSquare
      })
    )
  ]
};
