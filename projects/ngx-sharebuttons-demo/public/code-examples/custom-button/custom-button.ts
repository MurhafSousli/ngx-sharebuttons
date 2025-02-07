import { ApplicationConfig } from '@angular/core';
import { customShareButton, provideShareButtonsOptions, ShareButtonFuncArgs } from 'ngx-sharebuttons';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideShareButtonsOptions(
      customShareButton('custom-button', {
        type: 'custom-button',
        text: 'My Custom Button',
        icon: faCommentsDollar,
        color: 'blue',
        params: {
          // define the needed parameters here
        },
        // or if the button needs to execute a function, use the following instead
        func: (args: ShareButtonFuncArgs<any>) => alert('Custom button works!')
      })
    ),
  ]
};
