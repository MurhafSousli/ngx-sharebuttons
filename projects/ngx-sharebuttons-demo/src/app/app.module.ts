import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HIGHLIGHT_OPTIONS, HighlightOptions } from 'ngx-highlightjs';
import { NG_SCROLLBAR_OPTIONS } from 'ngx-scrollbar';

import { SHARE_BUTTONS_CONFIG } from 'ngx-sharebuttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faShare, faLightbulb, faCoffee, faInfo, faTimesCircle, faBook } from '@fortawesome/free-solid-svg-icons';

import { SharedModule } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DocsService } from './docs/docs.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ShareIconsModule
  ],
  providers: [
    DocsService,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml'),
        },
        themePath: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/atom-one-light.min.css'
      } as HighlightOptions
    },
    {
      provide: NG_SCROLLBAR_OPTIONS,
      useValue: {
        autoHeightDisabled: false
      }
    },
    {
      provide: SHARE_BUTTONS_CONFIG,
      useValue: {
        twitterAccount: 'MurhafSousli',
        theme: 'material-dark',
        debug: true
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIcons(faLightbulb, faBook, faCoffee, faInfo, faTimesCircle, faShare);
  }
}
