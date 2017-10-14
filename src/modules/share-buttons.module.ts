import { NgModule, InjectionToken } from '@angular/core';

import { ShareButtonModule } from './share-button.module';
import { HttpClient } from '@angular/common/http';

import { ShareButtonsService } from '../services/share-buttons.service';
import { ShareButtonsComponent } from '../components/share-buttons/share-buttons.component';
import { ShareButtonsMeta, ShareButtonsOptions } from '../models/share-buttons.models';
import { OPTIONS, BUTTONS_META } from './tokens';

export function ShareButtonsFactory(httpClient: HttpClient, options: ShareButtonsOptions, buttonsMeta: ShareButtonsMeta) {
  return new ShareButtonsService(httpClient, options, buttonsMeta);
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
          provide: ShareButtonsService,
          useFactory: ShareButtonsFactory,
          deps: [HttpClient, OPTIONS, BUTTONS_META]
        }
      ]
    };
  }
}

