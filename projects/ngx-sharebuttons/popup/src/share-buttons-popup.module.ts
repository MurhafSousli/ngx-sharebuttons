import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareButtonsConfig, SHARE_BUTTONS_CONFIG } from '../../src/public-api';
import { ShareButtonsModule } from '../../buttons/src/public_api';
// Uncomment the following in development mode
// import { ShareButtonsConfig, SHARE_BUTTONS_CONFIG } from 'ngx-sharebuttons';
// import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';

import { ShareButtonsPopup } from './share-buttons-popup';
import { SharePopupService } from './share-popup.service';
import { SharePopupButtonsDirective } from './share-popup-buttons.directive';
import { SharePopupComponent } from './share-popup.component';

@NgModule({
  declarations: [
    ShareButtonsPopup,
    SharePopupButtonsDirective,
    SharePopupComponent
  ],
  imports: [
    ShareButtonsModule,
    CommonModule
  ],
  exports: [
    ShareButtonsModule,
    ShareButtonsPopup,
    SharePopupButtonsDirective,
    SharePopupComponent
  ],
  providers: [
    SharePopupService
  ]
})
export class ShareButtonsPopupModule {
  static withConfig(config?: ShareButtonsConfig): ModuleWithProviders<ShareButtonsModule> {
    return {
      ngModule: ShareButtonsModule,
      providers: [{provide: SHARE_BUTTONS_CONFIG, useValue: config}]
    };
  }
}
