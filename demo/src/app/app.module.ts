import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { HighlightModule } from 'ngx-highlightjs';
import { ShareButtonsModule } from './share/buttons';
import { SharedModule } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DocsService } from './docs/docs.service';

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
      theme: 'atom-one-dark'
    }),
    ShareButtonsModule.forRoot({
      options: {
        twitterAccount: 'MurhafSousli',
        theme: 'material-dark'
      }
    }),
    NgProgressModule.forRoot(),
    NgProgressHttpModule,
    NgProgressRouterModule,
    SharedModule
  ],
  providers: [DocsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
