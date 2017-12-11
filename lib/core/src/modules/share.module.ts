import { NgModule, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ShareButtons } from '../services/share.service';
import { ShareButtonDirective } from '../directives/share-button.directive';
import { NFormatterPipe } from '../pipes/n-formatter.pipe';
import { ShareButtonsMeta, ShareButtonsOptions } from '../models/share.models';
import { UniversalSupportService } from '../services/universal-support.service';
import { OPTIONS, BUTTONS_META } from './tokens';

export function ShareButtonsFactory(httpClient: HttpClient, options: ShareButtonsOptions, buttonsMeta: ShareButtonsMeta) {
  return new ShareButtons(httpClient, options, buttonsMeta);
}

/** TODO: remove CommonModule */
@NgModule({
  declarations: [
    ShareButtonDirective,
    NFormatterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ShareButtonDirective,
    NFormatterPipe
  ],
  providers: [UniversalSupportService]
})
export class ShareModule {
  static forRoot(options?: ShareButtonsOptions, buttonsMeta?: ShareButtonsMeta) {
    return {
      ngModule: ShareModule,
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

