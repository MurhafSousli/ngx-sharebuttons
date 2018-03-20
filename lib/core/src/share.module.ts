import { NgModule, InjectionToken } from '@angular/core';

import { ShareButtons } from './share.service';
import { ShareButtonDirective } from './share-button.directive';
import { ShareCountPipe } from './share-count.pipe';
import { ShareButtonsConfig } from './share.models';
import { CONFIG } from './share.tokens';

export function ShareButtonsFactory(config: ShareButtonsConfig) {
  return new ShareButtons(config);
}

@NgModule({
  declarations: [
    ShareButtonDirective,
    ShareCountPipe
  ],
  exports: [
    ShareButtonDirective,
    ShareCountPipe
  ]
})
export class ShareModule {
  static forRoot(config?: ShareButtonsConfig) {
    return {
      ngModule: ShareModule,
      providers: [
        {provide: CONFIG, useValue: config},
        {
          provide: ShareButtons,
          useFactory: ShareButtonsFactory,
          deps: [CONFIG]
        }
      ]
    };
  }
}

