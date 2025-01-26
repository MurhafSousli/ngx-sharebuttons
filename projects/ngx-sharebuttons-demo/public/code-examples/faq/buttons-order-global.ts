import { ApplicationConfig } from '@angular/core';
import { provideShareButtonsOptions, withConfig } from 'ngx-sharebuttons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideShareButtonsOptions(
      withConfig({
        include: ['facebook', 'pinterest', 'x']
      })
    )
  ]
};
