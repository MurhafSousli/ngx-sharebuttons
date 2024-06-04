import { ApplicationConfig } from '@angular/core';
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  provideRouter,
  withHashLocation,
  withInMemoryScrolling
} from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHighlightOptions } from 'ngx-highlightjs';

import { routes } from './app.routes';
import { shareIcons } from 'ngx-sharebuttons/icons';
import { provideShareButtonsOptions, SharerMethods, withConfig } from 'ngx-sharebuttons';

const scrollConfig: InMemoryScrollingOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
};
const inMemoryScrollingFeature: InMemoryScrollingFeature = withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes, withHashLocation(), inMemoryScrollingFeature),
    provideShareButtonsOptions(
      shareIcons(),
      withConfig({
        debug: true,
        sharerMethod: SharerMethods.Anchor
        // xAccount: 'MurhafSousli'
      }),
      // customShareButton('x', {
      //   color: 'purple'
      // }),
      // customShareButton('facebook', {
      //   color: 'orange',
      //   icon: faFacebookSquare
      // })
    ),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js'),
      themePath: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/atom-one-light.min.css'
    })
  ]
}
