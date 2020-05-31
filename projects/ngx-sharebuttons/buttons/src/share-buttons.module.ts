import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ShareButtonsConfig, SHARE_BUTTONS_CONFIG } from '../../src/public-api';
// import { ShareButtonModule } from '../../button/src/public_api';
// Uncomment the following in development mode
import { ShareButtonsConfig, SHARE_BUTTONS_CONFIG } from 'ngx-sharebuttons';
import { ShareButtonModule } from 'ngx-sharebuttons/button';

import { ShareButtons } from './share-buttons';
import { ExpandButton } from './expand-button';

@NgModule({
  declarations: [
    ShareButtons,
    ExpandButton
  ],
  imports: [
    ShareButtonModule,
    CommonModule
  ],
  exports: [
    ShareButtonModule,
    ShareButtons
  ]
})
export class ShareButtonsModule {
  static withConfig(config?: ShareButtonsConfig): ModuleWithProviders<ShareButtonsModule> {
    return {
      ngModule: ShareButtonsModule,
      providers: [{provide: SHARE_BUTTONS_CONFIG, useValue: config}]
    };
  }
}
