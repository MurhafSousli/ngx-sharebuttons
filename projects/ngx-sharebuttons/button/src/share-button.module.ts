import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ShareModule, ShareButtonsConfig, SHARE_BUTTONS_CONFIG } from 'ngx-sharebuttons';

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
  static withConfig(config?: ShareButtonsConfig): ModuleWithProviders<ShareButtonModule> {
    return {
      ngModule: ShareButtonModule,
      providers: [{provide: SHARE_BUTTONS_CONFIG, useValue: config}]
    };
  }
}
