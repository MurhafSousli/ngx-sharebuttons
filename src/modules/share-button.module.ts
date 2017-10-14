import { NgModule, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareDirectiveModule } from './share-directive.module';

import { ShareButtonsService } from '../services/share-buttons.service';
import { ShareButtonComponent } from '../components/share-button/share-button.component';
import { ShareButtonsMeta, ShareButtonsOptions } from '../models/share-buttons.models';
import { OPTIONS, BUTTONS_META } from './tokens';

export function ShareButtonsFactory(httpClient: HttpClient, options: ShareButtonsOptions, buttonsMeta: ShareButtonsMeta) {
  return new ShareButtonsService(httpClient, options, buttonsMeta);
}

@NgModule({
  declarations: [
    ShareButtonComponent
  ],
  imports: [
    ShareDirectiveModule
  ],
  exports: [
    ShareDirectiveModule,
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
          provide: ShareButtonsService,
          useFactory: ShareButtonsFactory,
          deps: [HttpClient, OPTIONS, BUTTONS_META]
        }
      ]
    };
  }
}

