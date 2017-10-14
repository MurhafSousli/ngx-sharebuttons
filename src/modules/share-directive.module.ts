import { NgModule, InjectionToken } from '@angular/core';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ShareButtonsService } from '../services/share-buttons.service';
import { ShareButtonDirective } from '../directives/share-button.directive';
import { NFormatterPipe } from '../pipes/n-formatter.pipe';
import { ShareButtonsMeta, ShareButtonsOptions } from '../models/share-buttons.models';
import { UniversalSupportService } from '../services/universal-support.service';
import { OPTIONS, BUTTONS_META } from './tokens';

export function ShareButtonsFactory(httpClient: HttpClient, options: ShareButtonsOptions, buttonsMeta: ShareButtonsMeta) {
  return new ShareButtonsService(httpClient, options, buttonsMeta);
}

@NgModule({
  declarations: [
    ShareButtonDirective,
    NFormatterPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  exports: [
    CommonModule,
    ShareButtonDirective,
    NFormatterPipe
  ],
  providers: [ UniversalSupportService ]
})
export class ShareDirectiveModule {
  static forRoot(options?: ShareButtonsOptions, buttonsMeta?: ShareButtonsMeta) {
    return {
      ngModule: ShareDirectiveModule,
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

