import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareButtons, ShareButtonsConfig, CONFIG } from '../core';
import { ShareButtonModule } from '../button';

import { ShareButtonsComponent } from './share-buttons.component';
import { ExpandButtonComponent } from './expand-button.component';

export function ShareButtonsFactory(config: ShareButtonsConfig) {
  return new ShareButtons(config);
}

@NgModule({
  declarations: [
    ShareButtonsComponent,
    ExpandButtonComponent
  ],
  imports: [
    ShareButtonModule,
    CommonModule
  ],
  exports: [
    ShareButtonModule,
    ShareButtonsComponent
  ]
})
export class ShareButtonsModule {
  static forRoot(config?: ShareButtonsConfig) {
    return {
      ngModule: ShareButtonsModule,
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
