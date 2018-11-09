import { NgModule, ModuleWithProviders } from '@angular/core';
import { PlatformModule } from '@angular/cdk/platform';

import { ShareDirective } from './share-button.directive';
import { ShareCountPipe } from './share-count.pipe';
import { ShareButtonsConfig, CONFIG } from './share.models';

@NgModule({
  imports: [
    PlatformModule
  ],
  declarations: [
    ShareDirective,
    ShareCountPipe
  ],
  exports: [
    ShareDirective,
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
