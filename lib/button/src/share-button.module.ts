import { NgModule, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareModule, ShareButtons, ShareButtonsMeta, ShareButtonsOptions, OPTIONS, BUTTONS_META } from '@ngx-share/core';

import { ShareButtonComponent } from './share-button.component';

export function ShareButtonsFactory(httpClient: HttpClient, options: ShareButtonsOptions, buttonsMeta: ShareButtonsMeta) {
  return new ShareButtons(httpClient, options, buttonsMeta);
}

@NgModule({
  declarations: [
    ShareButtonComponent
  ],
  imports: [
    ShareModule
  ],
  exports: [
    ShareModule,
    ShareButtonComponent
  ]
})
export class ShareButtonModule {
  static forRoot(options?: ShareButtonsOptions, buttonsMeta?: ShareButtonsMeta) {
    return {
      ngModule: ShareButtonModule,
      providers: [
        {provide: OPTIONS, useValue: options},
        {provide: BUTTONS_META, useValue: buttonsMeta},
        {
          provide: ShareButtons,
          useFactory: ShareButtonsFactory,
          deps: [HttpClient, OPTIONS, BUTTONS_META]
        }
      ]
    };
  }
}

