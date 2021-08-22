import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareButtonsConfig, SHARE_BUTTONS_CONFIG } from 'ngx-sharebuttons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';

import { ShareButtonsPopup } from './share-buttons-popup';
import { SharePopupService } from './share-popup.service';
import { SharePopupButtonsDirective } from './share-popup-buttons.directive';
import { SharePopupComponent } from './share-popup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ShareButtonsPopup,
    SharePopupButtonsDirective,
    SharePopupComponent
  ],
  imports: [
    CommonModule,
    ShareButtonsModule,
    FontAwesomeModule
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
