import { ApplicationConfig } from '@angular/core';
import { customShareButton, provideShareButtonsOptions, withConfig } from 'ngx-sharebuttons';
import { shareIcons } from 'ngx-sharebuttons/icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideShareButtonsOptions(
      // Override default config
      withConfig({
        debug: true
      }),
      // Load the default share icons set (optional)
      shareIcons(),
      // Override a specific share button config
      customShareButton('facebook', {
        color: 'orange'
      })
    ),
    // ...
  ]
};
