import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { HighlightModule } from 'ngx-highlightjs';
import { SHARE_BUTTONS_CONFIG } from '@ngx-share/core';

import { SharedModule } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DocsService } from './docs/docs.service';

import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml}
  ];
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
    NgProgressModule.forRoot(),
    NgProgressHttpModule,
    NgProgressRouterModule,
    SharedModule
  ],
  providers: [
    DocsService,
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
}
