import { NgModule, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ShareButtons, ShareButtonsMeta, ShareButtonsOptions, OPTIONS, BUTTONS_META } from '@ngx-share/core';
import { ShareButtonModule } from '@ngx-share/button';

import { ShareButtonsComponent } from './share-buttons.component';

export function ShareButtonsFactory(httpClient: HttpClient, options: ShareButtonsOptions, buttonsMeta: ShareButtonsMeta) {
  return new ShareButtons(httpClient, options, buttonsMeta);
}

@NgModule({
  declarations: [
    ShareButtonsComponent
  ],
  imports: [
    ShareButtonModule
  ],
  exports: [
    ShareButtonModule,
    ShareButtonsComponent
  ]
})
export class ShareButtonsModule {
  static forRoot(options?: ShareButtonsOptions, buttonsMeta?: ShareButtonsMeta) {
    return {
      ngModule: ShareButtonsModule,
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

