import { ApplicationConfig } from '@angular/core';
import { provideShareButtonsOptions } from 'ngx-sharebuttons';
import { shareIcons } from 'ngx-sharebuttons/icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideShareButtonsOptions(
      shareIcons()
    )
  ]
};
