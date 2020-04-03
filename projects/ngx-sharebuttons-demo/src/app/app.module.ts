import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressRouterModule } from 'ngx-progressbar/router';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import { SHARE_BUTTONS_CONFIG } from '../../../ngx-sharebuttons/src/public-api';

import { SharedModule } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DocsService } from './docs/docs.service';

import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons/faRedditAlien';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons/faGooglePlusG';
import { faTumblr } from '@fortawesome/free-brands-svg-icons/faTumblr';
import { faPinterestP } from '@fortawesome/free-brands-svg-icons/faPinterestP';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faVk } from '@fortawesome/free-brands-svg-icons/faVk';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons/faTelegramPlane';
import { faMix } from '@fortawesome/free-brands-svg-icons/faMix';
import { faXing } from '@fortawesome/free-brands-svg-icons/faXing';
import { faLine } from '@fortawesome/free-brands-svg-icons/faLine';

import { faCommentAlt } from '@fortawesome/free-solid-svg-icons/faCommentAlt';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons/faEllipsisH';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
import { faExclamation } from '@fortawesome/free-solid-svg-icons/faExclamation';
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

import { faLightbulb } from '@fortawesome/free-solid-svg-icons/faLightbulb';
import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee';
import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo';
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';

const icons = [
  faFacebookF, faTwitter, faLinkedinIn, faGooglePlusG, faPinterestP, faRedditAlien, faTumblr,
  faWhatsapp, faVk, faFacebookMessenger, faTelegramPlane, faMix, faXing, faCommentAlt, faBook, faLine,
  faEnvelope, faCheck, faPrint, faExclamation, faLink, faEllipsisH, faMinus, faLightbulb, faCoffee, faInfo
];

import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml')
  };
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
    HighlightModule,
    NgProgressModule,
    NgProgressHttpModule,
    NgProgressRouterModule,
    SharedModule
  ],
  providers: [
    DocsService,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages()
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
    iconLibrary.addIcons(...icons);
  }

}
