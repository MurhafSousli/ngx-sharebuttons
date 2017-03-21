import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { ShareButtonsComponent } from './components/share-buttons/share-buttons.component';
import { ShareButtonComponent } from './components/share-button/share-button.component';
import { ShareButtonDirective } from './directives/share-button/share-button.directive';
import { ShareButtonsService } from './services/share-buttons.service';
import { WindowService } from './services/window.service';
import { NFormatterPipe } from './helpers/n-formatter.pipe';
import { ShareButton, ShareArgs, ShareProvider } from './helpers/index';

@NgModule({
  declarations: [
    ShareButtonsComponent,
    ShareButtonComponent,
    ShareButtonDirective,
    NFormatterPipe
  ],
  imports: [
    CommonModule,
    JsonpModule
  ],
  exports: [
    ShareButtonsComponent,
    ShareButtonComponent,
    ShareButtonDirective,
    NFormatterPipe
  ]
})
export class ShareButtonsModule {
  static forRoot() {
    return {
      ngModule: ShareButtonsModule,
      providers: [
        ShareButtonsService,
        WindowService
      ]
    };
  }
}

export {
  ShareButtonsComponent,
  ShareButtonComponent,
  ShareButtonDirective,
  ShareButton,
  NFormatterPipe,
  ShareButtonsService,
  ShareArgs,
  ShareProvider
}
