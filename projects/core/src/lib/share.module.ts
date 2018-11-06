import { NgModule, ModuleWithProviders } from '@angular/core';
import { PlatformModule } from '@angular/cdk/platform';

import { ShareButtons } from './share.service';
import { ShareButtonDirective } from './share-button.directive';
import { ShareCountPipe } from './share-count.pipe';
import { ShareButtonsConfig } from './share.models';
import { CONFIG } from './share.tokens';

export function ShareButtonsFactory(config: ShareButtonsConfig) {
  return new ShareButtons(config);
}

@NgModule({
  imports: [
    PlatformModule
  ],
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
  static forRoot(config?: ShareButtonsConfig): ModuleWithProviders {
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
