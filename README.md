<p align="center">
  <img height="200px" width="200px" style="text-align: center;" src="https://cdn.rawgit.com/MurhafSousli/ngx-sharebuttons/master/assets/logo.svg">
  <h1 align="center">Angular Share Buttons</h1>
  <p align="center"><img src="https://image.ibb.co/eY16JG/buttons.png" alt="Capture" border="0"></p>
</p>

[![npm](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://murhafsousli.github.io/ngx-sharebuttons/)
[![npm](https://img.shields.io/npm/v/@ngx-share/core.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/@ngx-share/core)
[![Build Status](https://travis-ci.org/MurhafSousli/ngx-sharebuttons.svg?branch=master)](https://travis-ci.org/MurhafSousli/ngx-sharebuttons) 
[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](/LICENSE)

## Table of contents

- [Live demo](https://murhafsousli.github.io/ngx-sharebuttons/) | [stackblitz](https://stackblitz.com/edit/ngx-sharebuttons)
- [Packages](#packages)
- [Share button directive](#share-button-directive)
- [Single share button component](#share-button-component)
- [Share buttons component](#share-buttons-component)
- [Global options](#global-options)
- [Styling guide](#styling-guide)
- [FAQ](https://murhafsousli.github.io/ngx-sharebuttons/#/faq)
- [Issues](#issues)
- [License](/LICENSE)
- [Support](#support)
- [Author](#author)
- [More plugins](#more)


For Angular 2 & 4, use **ngx-sharebuttons** [version 3](https://github.com/MurhafSousli/ngx-sharebuttons/wiki).

For **ngx-sharebuttons** v4, the README has moved to [here](/README_V4.md).

<a name="packages"/>

## Packages

I divided the plugin into 3 modules to make it possible to include only the module you use.

- [@ngx-share/core](lib/core) - Share button directive to convert any element to a share button.
- [@ngx-share/button](lib/button) - Share button component to add buttons individually.
- [@ngx-share/buttons](lib/buttons) - Share buttons component to add a collection of share buttons.

<a name="share-button-directive"/>

## Share button directive

Convert any element to a share button using `[shareButton]` directive.

Install with npm

```bash
$ npm install --save @ngx-share/core @fortawesome/fontawesome-free-webfonts
```

Import `ShareModule` in your module

```ts
import { ShareModule } from '@ngx-share/core';

@NgModule({
  imports: [
    HttpClientModule,      // (Required) for share counts
    HttpClientJsonpModule, // (Optional) For Tumblr counts
    ShareModule.forRoot()
  ]
})
```

Import FontAwesome if you want to use the icons

```scss
@import "~@fortawesome/fontawesome-free-webfonts/css/fa-brands.css";
@import "~@fortawesome/fontawesome-free-webfonts/css/fa-solid.css";
@import "~@fortawesome/fontawesome-free-webfonts/css/fontawesome.css";
```

In your template

```html
<button shareButton="facebook">Share</button>
<button shareButton="twitter">Tweet</button>
<button shareButton="pinterest">Pin</button>
```

To use the default icons or colors, use **ShareButtons** service so you can access buttons properties

```ts
import { ShareButtons } from '@ngx-share/core';

@Component({
  // ...
})
export class MyComponent {
  constructor(public share: ShareButtons) {
  }
}
```

Now you can set them

```html
<!--Set color and icon-->
<button shareButton="twitter" [style.backgroundColor]="share.prop.twitter.color">
  <i [class]="share.prop.twitter.icon"></i>
</button>

<!--Material example-->
<button md-icon-button shareButton="telegram" [style.color]="share.prop.telegram.color">
  <i [class]="share.prop.telegram.icon"></i>
</button>
```

Check [ShareButton Directive Demo](https://murhafsousli.github.io/ngx-sharebuttons/#/share-button-directive)

| Name            | Default value | Description                                                     |
| --------------- | ------------- | --------------------------------------------------------------- |
| [shareButton]   | null          | Button name, e.g. 'facebook', 'twitter' ...etc.                 |
| [sbUrl]         | current URL   | Sharing link.                                                   |
| [sbTitle]       | null          | Override title meta tag for LinkedIn and Reddit.                |
| [sbDescription] | null          | Override description meta tag for LinkedIn, WhatsApp, Telegram and Pinterest |
| [sbImage]       | null          | Override image meta tag for Pinterest only.                     |
| [sbTags]        | null          | Override tags for Tumblr and Twitter.                           |
| (sbOpened)      | button name   | Stream that emits when share window has opened.                 |
| (sbClosed)      | button name   | Stream that emits when share dialog has closed.                 |
| (sbCount)       | share count   | Stream that emits share count of the share URL.                 |

<a name="share-button-component"/>

## Share button component

Use `<share-button>` component to add buttons individually.

Share button component is built on top of `ShareModule` so you need to install both `@ngx-share/core` and `@ngx-share/button`.

To use the default icons, install `font-awesome` package.

```bash
$ npm install --save @ngx-share/core @ngx-share/button @fortawesome/fontawesome-free-webfonts
```

Import `ShareButtonModule` in your module

```ts
import { ShareButtonModule } from '@ngx-share/button';

@NgModule({
  imports: [
    HttpClientModule,      // (Required) for share counts
    HttpClientJsonpModule, // (Optional) For Tumblr counts
    ShareButtonModule.forRoot()
  ]
})
```

Import core styles and theme from the global style `src/styles.scss`

```css
@import "~@fortawesome/fontawesome-free-webfonts/css/fa-brands.css";
@import "~@fortawesome/fontawesome-free-webfonts/css/fa-solid.css";
@import "~@fortawesome/fontawesome-free-webfonts/css/fontawesome.css";
@import '~@ngx-share/button/styles/share-buttons';
@import '~@ngx-share/button/styles/themes/default/default-theme';
```

_Check all themes [here](https://murhafsousli.github.io/ngx-sharebuttons/#/themes)_

Now you can use the component in your template

```html
<share-button button="facebook"></share-button>
<share-button button="twitter"></share-button>

// Use custom text
<share-button button="pinterest" text="Pin" showText="true"></share-button>
```

Check [ShareButton Component Demo](https://murhafsousli.github.io/ngx-sharebuttons/#/share-button-component)

| Name           | Default value | Description                                                     |
| -------------- | ------------- | --------------------------------------------------------------- |
| [button]       | null          | Button name, e.g. 'facebook', 'twitter' ...etc.                 |
| [theme]        | null          | Set button theme.                                               |
| [size]         | 0             | Button size, e.g. -4, 2.5, 1...etc.                             |
| [url]          | current URL   | Sharing link.                                                   |
| [title]        | null          | Override title meta tag for LinkedIn and Reddit.                |
| [description]  | null          | Override description meta tag for LinkedIn, WhatsApp, Telegram and Pinterest |
| [image]        | null          | Override image meta tag for Pinterest only.                     |
| [tags]         | null          | Override tags for Tumblr and Twitter.                           |
| [showIcon]     | true          | Show button icon.                                               |
| [showText]     | false         | Show button text.                                               |
| [showCount]    | false         | Show share count.                                               |
| (opened)       | button name   | Stream that emits when share window has opened.                 |
| (closed)       | button name   | Stream that emits when share dialog has closed.                 |
| (count)        | share count   | Stream that emits share count of the share URL.                 |

<a name="share-buttons-component"/>

## Share buttons component

Use `<share-buttons>` component to a collection of share buttons.

Share buttons component is built on top of `ShareModule` and `ShareButtonModule` so you need to install both `@ngx-share/core`, `@ngx-share/button` and  `@ngx-share/buttons`.

To use the default icons, install `font-awesome` package.

```bash
$ npm install --save @ngx-share/core @ngx-share/button @ngx-share/buttons @fortawesome/fontawesome-free-webfonts
```

Import `ShareButtonModule` in your module

```ts
import { ShareButtonModule } from '@ngx-share/button';

@NgModule({
  imports: [
    HttpClientModule,      // (Required) for share counts
    HttpClientJsonpModule, // (Optional) For Tumblr counts
    ShareButtonModule.forRoot()
  ]
})
```

Import core styles and theme from the global style `src/styles.scss`

```css
@import "~@fortawesome/fontawesome-free-webfonts/css/fa-brands.css";
@import "~@fortawesome/fontawesome-free-webfonts/css/fa-solid.css";
@import "~@fortawesome/fontawesome-free-webfonts/css/fontawesome.css";
@import '~@ngx-share/button/styles/share-buttons';
@import '~@ngx-share/button/styles/themes/default/default-theme';
```

_Check [all themes](https://murhafsousli.github.io/ngx-sharebuttons/#/themes)_

Now you can use the component in your template

```html
<share-buttons></share-buttons>
```

Check [ShareButtons Component Demo](https://murhafsousli.github.io/ngx-sharebuttons/#/share-buttons-component)

| Name           | Default value | Description                                                     |
| -------------- | ------------- | --------------------------------------------------------------- |
| [include]      | [all buttons] | Include certain buttons. Button's order will be as you type it. |
| [exclude]      | [ ]           | Exclude certain buttons.                                        |
| [show]         | null          | Number of buttons to show, if defined 'more' button will appear.|
| [theme]        | null          | Set button theme.                                               |
| [size]         | 0             | Button size, e.g. -4, 2.5, 1...etc.                             |
| [url]          | current URL   | Sharing link.                                                   |
| [title]        | null          | Override title meta tag for LinkedIn and Reddit.                |
| [description]  | null          | Override description meta tag for LinkedIn, WhatsApp, Telegram and Pinterest |
| [image]        | null          | Override image meta tag for Pinterest only.                     |
| [tags]         | null          | Override tags for Tumblr and Twitter.                           |
| [showIcon]     | true          | Show button icon.                                               |
| [showText]     | false         | Show button text.                                               |
| [showCount]    | false         | Show share count.                                               |
| (opened)       | button name   | Stream that emits when share window has opened.                 |
| (closed)       | button name   | Stream that emits when share dialog has closed.                 |
| (count)        | share count   | Stream that emits share count of the share URL.                 |

<a name="global-options"/>

## Global options

If you want set custom global options, pass your config in the library is imported

```ts
import { ShareButtonsOptions } from '@ngx-share/core';
import { ShareButtonsModule } from '@ngx-share/buttons';

const customOptions: ShareButtonsOptions = {
  include: ['facebook', 'twitter', 'google'],
  exclude: ['tumblr', 'stumble', 'vk'],
  theme: 'modern-light',
  gaTracking: true,
  twitterAccount: 'twitterUsername'
}

@NgModule({
  imports: [
    // the module you choice 'ShareModule', 'ShareButtonModule' or 'ShareButtonsModule'
    ShareButtonsModule.forRoot({ options: customOptions })
  ]
})
```

| Option         | Default value | Description                                                     |
| -------------- | ------------- | --------------------------------------------------------------- |
| include        | [all buttons] | Include certain buttons. Button's order will be as you type it. |
| exclude        | [ ]           | Exclude certain buttons.                                        |
| size           | 0             | Buttons default size.                                           |
| theme          | null          | Button theme name.                                              |
| dialogWidth    | 500           | Share popup window width.                                       |
| dialogHeight   | 400           | Share popup window height.                                      |
| title          | null          | Override title meta tag (if button supports it).                |
| description    | null          | Override description meta tag (if button supports it).          |
| image          | null          | Override image meta tag. (if button supports it).               |
| tags           | null          | Override tags meta tag for Tumblr and Twitter.                  |
| gaTracking     | false         | Roll sharing stats automatically into your Google Analytics.    |
| twitterAccount | null          | Add via @accountName at the end of the tweets.                  |

## Button Configuration

You can change the buttons meta data such as button icon and text

```ts
import { ShareButtonsModule } from '@ngx-share/buttons';

const customProp = {
  facebook: {
    icon: 'fab fa-facebook-official',
    text: 'Share on Facebook'
  },
  twitter: {
    icon: 'fab fa-twitter-square',
    text: 'Tweet'
  },
  // and so on...
};

@NgModule({
  imports: [
    ShareButtonsModule.forRoot({ prop: customProp })
  ]
})
```

<a name="styling-guide"/>

## Styling guide

There are several classes that help you to create your custom styles

```scss
.sb-moon-theme {
  /** You can get button color by using the css variable --{buttonName}-color */
  &.sb-group {
    /** ... share buttons container */
  }
  .sb-wrapper { /** ... share button wrapper */
    background-color: var(--facebook-color);

    .sb-inner { /** ... inner wrapper */
      .sb-content { /** ... content wrapper */
        .sb-icon { /** ... icon wrapper */ }
        .sb-text { /** ... text wrapper */ }
       }
      .sb-count { /** ... count wrapper */ }
    }

    // For conditional styles
    &.sb-show-icon.sb-show-text.sb-show-count {
      /** ... Apply when icon, text and count are shown */
      .sb-icon { /** ... icon wrapper */ }
      .sb-text { /** ... text wrapper */ }
    }
  }
}
```

Then set theme input like:
```
<share-buttons theme="moon"></share-buttons>
```

[Read more about Styling guide](https://murhafsousli.github.io/ngx-sharebuttons/#/styling-guide)

<a name="issues"/>

## Issues

If you identify any errors in this component, or have an idea for an improvement, please open an [issue](https://github.com/MurhafSousli/ngx-sharebuttons/issues). I am excited to see what the community thinks of this project, and I would love your input!

<a name="support"/>

## Support

[![npm](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/bePatron?u=5594898)

<a name="author"/>

## Author

 **Murhaf Sousli**

- [github/murhafsousli](https://github.com/MurhafSousli)
- [twitter/murhafsousli](https://twitter.com/MurhafSousli)

<a name="more"/>

## More plugins from the author

- [ngx-gallery](https://github.com/MurhafSousli/ngx-gallery)
- [ngx-progressbar](https://github.com/MurhafSousli/ngx-progressbar)
- [ngx-bar-rating](https://github.com/MurhafSousli/ngx-bar-rating)
- [ngx-disqus](https://github.com/MurhafSousli/ngx-disqus)
- [ngx-wordpress](https://github.com/MurhafSousli/ngx-wordpress)
- [ngx-highlightjs](https://github.com/MurhafSousli/ngx-highlightjs)
- [ngx-scrollbar](https://github.com/MurhafSousli/ngx-scrollbar)
- [ng-teximate](https://github.com/MurhafSousli/ng-teximate)
