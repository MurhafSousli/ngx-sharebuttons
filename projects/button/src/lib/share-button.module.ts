import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule, ShareButtonsConfig, CONFIG } from '@ngx-share/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ShareButton } from './share-button';

@NgModule({
  declarations: [
    ShareButton
  ],
  imports: [
    ShareModule,
    FontAwesomeModule,
    CommonModule
  ],
  exports: [
    ShareModule,
    FontAwesomeModule,
    ShareButton
  ]
})
export class ShareButtonModule {
  static forRoot(config?: ShareButtonsConfig): ModuleWithProviders {
    return {
      ngModule: ShareButtonModule,
      providers: [{provide: CONFIG, useValue: config}]
    };
  }
}
