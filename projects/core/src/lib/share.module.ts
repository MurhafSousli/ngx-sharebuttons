import { NgModule, ModuleWithProviders } from '@angular/core';
import { PlatformModule } from '@angular/cdk/platform';

import { ShareButtonDirective } from './share-button.directive';
import { ShareCountPipe } from './share-count.pipe';
import { ShareButtonsConfig } from './share.models';
import { CONFIG } from './share.tokens';

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
        {provide: CONFIG, useValue: config}
      ]
    };
  }
}
