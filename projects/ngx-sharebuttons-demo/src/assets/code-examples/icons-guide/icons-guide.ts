import { ApplicationConfig } from '@angular/core';
import { provideShareButtonsOptions } from 'ngx-sharebuttons';
import { withIcons } from 'ngx-sharebuttons/icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideShareButtonsOptions(
      withIcons()
    )
  ]
};
