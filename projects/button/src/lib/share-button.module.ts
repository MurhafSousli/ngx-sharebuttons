import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule, ShareButtons, ShareButtonsConfig, CONFIG } from '@ngx-share/core';

import { ShareButtonComponent } from './share-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export function ShareButtonsFactory(config: ShareButtonsConfig) {
  return new ShareButtons(config);
}

@NgModule({
  declarations: [
    ShareButtonComponent
  ],
  imports: [
    ShareModule,
    FontAwesomeModule,
    CommonModule
  ],
  exports: [
    ShareModule,
    FontAwesomeModule,
    ShareButtonComponent
  ]
})
export class ShareButtonModule {
  static forRoot(config?: ShareButtonsConfig): ModuleWithProviders {
    return {
      ngModule: ShareButtonModule,
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
