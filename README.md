<p align="center">
  <img height="200px" width="200px" style="text-align: center;" src="https://cdn.rawgit.com/MurhafSousli/ngx-sharebuttons/master/assets/logo.svg">
  <h1 align="center">Angular Share Buttons</h1>
  <p align="center"><img src="https://image.ibb.co/eY16JG/buttons.png" alt="Capture" border="0"></p>
</p>

[![npm](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://murhafsousli.github.io/ngx-sharebuttons/)
[![npm](https://img.shields.io/npm/v/@ngx-share/core.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/@ngx-share/core)
[![Build Status](https://travis-ci.org/MurhafSousli/ngx-sharebuttons.svg?branch=master)](https://travis-ci.org/MurhafSousli/ngx-sharebuttons) 
[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](/LICENSE)

### Before you begin!

This is the documentation for ngx-sharebuttons version 5.x (Angular >= 5)

- For ngx-sharebuttons version 4.x (Angular >= 5), See this [documentation](/README_V4.md)
- For ngx-sharebuttons version 3.x (Angular 2 & 4), See this [documentation](https://github.com/MurhafSousli/ngx-sharebuttons/wiki)

## Table of contents

- [Live demo](https://murhafsousli.github.io/ngx-sharebuttons/) | [stackblitz](https://stackblitz.com/edit/ngx-sharebuttons)
- [Packages](#packages)
- [Share button directive](#share-button-directive)
- [Single share button component](#share-button-component)
- [Share buttons component](#share-buttons-component)
- [Global options](#global-options)
- [Styling guide](#styling-guide)
- [Sharing on native apps](#native-apps)
- [FAQ](https://murhafsousli.github.io/ngx-sharebuttons/#/faq)
- [Issues](#issues)
- [License](/LICENSE)
- [Support](#support)
- [Author](#author)
- [More plugins](#more)

<a name="packages"/>

## Available buttons

`Facebook`, `Twitter`, `Google+`, `LinkedIn`, `Pinterest`, `WhatsApp`, `Messenger`, `Reddit`, `Tumblr`, `Telegram`, `Email`, `SMS`, `VK`, `StumbleUpOn`, `Xing`, `Copy link` and `Print`

## Packages

The plugin is divided into 3 modules to make it possible to include only the stuff you use.

- [@ngx-share/core](lib/core) - Share button directive to convert any element to a share button.
- [@ngx-share/button](lib/button) - Share button component to add buttons individually.
- [@ngx-share/buttons](lib/buttons) - Share buttons component to add a collection of share buttons.

<a name="share-button-directive"/>

## Share button directive

Convert any element to a share button using `[shareButton]` directive.

### Installation

**NPM**

```bash
$ npm install --save @ngx-share/core
$ npm install --save @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
```

**YARN**

```bash
$ yarn add @ngx-share/core
$ yarn add @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
```

### Usage

Import `ShareModule` in your module

```ts
import { ShareModule } from '@ngx-share/core';

@NgModule({
  imports: [
    HttpClientModule,      // (Required) for share counts
    HttpClientJsonpModule, // (Optional) for Tumblr counts
    ShareModule.forRoot()
  ]
})
```

The most basic usage to create a share button is `shareButton={{buttonName}}` on a button

```html
<button shareButton="facebook">Share</button>
<button shareButton="twitter">Tweet</button>
<button shareButton="pinterest">Pin</button>
```

To use the default icons and colors, Inject **ShareButtons** service in your component then access the properties from the template

Component:

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

Template:

```html
<!--Set color and icon-->
<button shareButton="twitter" [style.backgroundColor]="share.prop.twitter.color">
  <fa-icon [icon]="share.prop.twitter.icon" size="lg"></fa-icon>
</button>

<!--Material example-->
<button md-icon-button shareButton="telegram" [style.color]="share.prop.telegram.color">
  <fa-icon [icon]="share.prop.telegram.icon" size="lg"></fa-icon>
</button>
```

Check [ShareButton Directive Demo](https://murhafsousli.github.io/ngx-sharebuttons/#/share-button-directive).

### Available Inputs / Outputs

| Name            | Default value | Description                                                     |
| --------------- | ------------- | --------------------------------------------------------------- |
| [shareButton]   | null          | Button name, e.g. 'facebook', 'twitter' ...etc.                 |
| [url]           | current URL   | Sharing link.                                                   |
| [title]         | null          | Override title meta tag for LinkedIn, Reddit and Email.         |
| [description]   | null          | Override description meta tag for LinkedIn, WhatsApp, Messenger, Telegram, Pinterest and Email|
| [image]         | null          | Override image meta tag for Pinterest only.                     |
| [tags]          | null          | Override tags for Tumblr and Twitter.                           |
| [autoSetMeta]   | true          | Auto set meta tags inputs from the SEO meta tags.               |
| [getCount]      | false         | Gets and emits share counts.                                    |
| (opened)        | button name   | Stream that emits when share window has opened.                 |
| (closed)        | button name   | Stream that emits when share dialog has closed.                 |
| (count)         | share count   | Stream that emits share count of the share URL.                 |

<a name="share-button-component"/>

## Share button component

Use `<share-button>` component to add share buttons individually.

### Installation

**NPM**

```bash
$ npm install --save @ngx-share/core @ngx-share/button
$ npm install --save @fortawesome/fontawesome-svg-core @fortawesome/angular-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
```

**YARN**

```bash
$ yarn add @ngx-share/core @ngx-share/button 
$ yarn add @fortawesome/fontawesome-svg-core @fortawesome/angular-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
```

### Usage

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
@import '~@ngx-share/button/styles/share-buttons';
@import '~@ngx-share/button/styles/themes/default/default-theme';
```

_Check all themes [here](https://murhafsousli.github.io/ngx-sharebuttons/#/themes)_

Now you can use the component in your template

```html
<share-button button="facebook"></share-button>
<share-button button="twitter"></share-button>
```

Check [ShareButton Component Demo](https://murhafsousli.github.io/ngx-sharebuttons/#/share-button-component).

### Available Inputs / Outputs

| Name           | Default value | Description                                                     |
| -------------- | ------------- | --------------------------------------------------------------- |
| [button]       | null          | Button name, e.g. 'facebook', 'twitter' ...etc.                 |
| [theme]        | null          | Set button theme.                                               |
| [text]         | null          | Custom button text.                                             |
| [icon]         | null          | Custom button icon.                                             |
| [size]         | 0             | Button size, e.g. -4, 2.5, 1...etc.                             |
| [url]          | current URL   | Sharing link.                                                   |
| [title]        | null          | Override title meta tag for LinkedIn, Reddit and Email.         |
| [description]  | null          | Override description meta tag for LinkedIn, WhatsApp, Messenger, Telegram, Pinterest and Email|
| [image]        | null          | Override image meta tag for Pinterest only.                     |
| [tags]         | null          | Override tags for Tumblr and Twitter.                           |
| [autoSetMeta]  | true          | Initializes meta tags inputs from the SEO meta tags.            |
| [showIcon]     | true          | Show button icon.                                               |
| [showText]     | false         | Show button text.                                               |
| [showCount]    | false         | Show share count.                                               |
| (opened)       | button name   | Stream that emits when share dialog has opened.                 |
| (closed)       | button name   | Stream that emits when share dialog has closed.                 |
| (count)        | share count   | Stream that emits share count of the share URL.                 |

<a name="share-buttons-component"/>

## Share buttons component

Use `<share-buttons>` to add a collection of share buttons.

### Installation

**NPM**

```bash
$ npm install --save @ngx-share/core @ngx-share/button @ngx-share/buttons 
$ npm install --save @fortawesome/fontawesome-svg-core @fortawesome/angular-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
```

**YARN**

```bash
$ yarn add @ngx-share/core @ngx-share/button @ngx-share/buttons 
$ yarn add @fortawesome/fontawesome-svg-core @fortawesome/angular-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
```

### Usage

Import `ShareButtonModule` in your module

```ts
import { ShareButtonModule } from '@ngx-share/button';

@NgModule({
  imports: [
    HttpClientModule,      // (Required) for share counts
    HttpClientJsonpModule, // (Optional) for Tumblr counts
    ShareButtonModule.forRoot()
  ]
})
```

Import icons, core styles and theme from the global style `src/styles.scss`

```css
@import '~@ngx-share/button/styles/share-buttons';
@import '~@ngx-share/button/styles/themes/default/default-theme';
```

_Check [all themes](https://murhafsousli.github.io/ngx-sharebuttons/#/themes)_

Now you can use the component in your template

```html
<share-buttons></share-buttons>
```

Check [ShareButtons Component Demo](https://murhafsousli.github.io/ngx-sharebuttons/#/share-buttons-component)

### Available Inputs / Outputs

| Name           | Default value | Description                                                     |
| -------------- | ------------- | --------------------------------------------------------------- |
| [include]      | [ ]           | Include certain buttons. Button's order will be as you type it. |
| [exclude]      | [ ]           | Exclude certain buttons.                                        |
| [show]         | null          | Number of buttons to show, if defined 'more' button will appear.|
| [theme]        | null          | Set button theme.                                               |
| [size]         | 0             | Button size, e.g. -4, 2.5, 1...etc.                             |
| [url]          | current URL   | Sharing link.                                                   |
| [title]        | null          | Override title meta tag for LinkedIn, Reddit and Email.         |
| [description]  | null          | Override description meta tag for LinkedIn, WhatsApp, Messenger, Telegram, Pinterest and Email|
| [image]        | null          | Override image meta tag for Pinterest only.                     |
| [tags]         | null          | Override tags for Tumblr and Twitter.                           |
| [autoSetMeta]  | true          | Initializes meta tags inputs from the SEO meta tags.            |
| [showIcon]     | true          | Show button icon.                                               |
| [showText]     | false         | Show button text.                                               |
| [showCount]    | false         | Show share count.                                               |
| (opened)       | button name   | Stream that emits when share dialog has opened.                 |
| (closed)       | button name   | Stream that emits when share dialog has closed.                 |
| (count)        | share count   | Stream that emits the share count of the URL.                   |

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
| include        | [ ]           | Include certain buttons. Button's order will be as you type it. |
| exclude        | [ ]           | Exclude certain buttons.                                        |
| size           | 0             | Buttons default size.                                           |
| theme          | null          | Button theme name.                                              |
| dialogWidth    | 500           | Share popup window width.                                       |
| dialogHeight   | 400           | Share popup window height.                                      |
| url            | null          | Override url meta tag.                                          |
| title          | null          | Override title meta tag.                                        |
| description    | null          | Override description meta tag.                                  |
| image          | null          | Override image meta tag.                                        |
| tags           | null          | Override tags meta tag for Tumblr and Twitter.                  |
| autoSetMeta    | true          | Initializes meta tags inputs from the SEO meta tags.            |
| gaTracking     | false         | Roll sharing stats automatically into your Google Analytics.    |
| twitterAccount | null          | Add via @accountName at the end of the tweets.                  |

When `autoSetMeta` is **true**, the meta tags inputs `url`, `title`, `description` and `image` will be initialized from the SEO meta tags.

```html
<head>
  <meta property="og:title" content="The Rock" />
  <meta property="og:description" content="Directed by Michael Bay.  With Sean Connery, Nicolas Cage, Ed Harris, John Spencer."/>
  <meta property="og:url" content="http://www.imdb.com/title/tt0117500/" />
  <meta property="og:image" content="http://ia.media-imdb.com/images/rock.jpg" />
</head>
```

 > Set `autoSetMeta` to **false**, if the share buttons url does not point to the current url, e.g. displaying a list of articles each one with share buttons.

## Button Configuration

You can change the buttons meta data such as button icon and text

```ts
import { ShareButtonsModule } from '@ngx-share/buttons';
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const customProp = {
  facebook: {
    icon: 'fab fa-facebook-official',
    text: faFacebookSquare
  },
  twitter: {
    icon: faTwitterSquare,
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
  &.sb-group {
    /** ... share buttons container */
  }
  .sb-wrapper { /** ... share button wrapper */
    background-color: var(--button-color);

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

If you use `.sb-moon-theme` then the theme name will become `moon`:

```html
<share-buttons theme="colorful"></share-buttons>
```

[Styling guide](https://murhafsousli.github.io/ngx-sharebuttons/#/styling-guide)

<a name="#native-apps"/>

## Sharing on native apps

❌ No Support: Means it is tested but the share dialog opens in the mobile browser

| Button            | 💻 Desktop        | 📱 iPhone          | 📱 Android          |
| ----------------- | ----------------- | ------------------ | ------------------ |
| Facebook          | ✔️ Support     | ❌ No Support      | ❌ No Support       |
| Twitter           | ✔️ Support     | ✔️ Support      | ✔️ Support       |
| Pinterest         | ✔️ Support     | ✔️ Support      | ✔️ Support       |
| Google            | ✔️ Support     | ✔️ Support      | ✔️ Support       |
| LinkedIn          | ✔️ Support     | ✔️ Support      | ✔️ Support       |
| Whatsapp          | ✔️ Support     | ✔️ Support      | ✔️ Support       |
| Telegram          | ✔️ Support     | ✔️ Support      | ✔️ Support       |
| Messenger         | ❌ No Support     | ✔️ Support      | ✔️ Support       |
| VK                | ✔️ Support     | ❔ Not tested      | ❔ Not tested       |
| Reddit            | ✔️ Support     | ❌ No Support      | ❔ Not tested       |
| Tumblr            | ✔️ Support     | ❌ No Support      | ❔ Not tested       |
| StumbleUpOn       | ✔️ Support     | ❌ No Support      | ❔ Not tested       | 
| Xing              | ✔️ Support     | ❔ Not tested      | ❔ Not tested       |
| SMS               | ✔️ Support     | ✔️ Support      | ✔️ Support       |
| Copy              | ✔️ Support     | ✔️ Support      | ✔️ Support       |
| Print             | ✔️ Support     | ✔️ Support      | ✔️ Support       |
| Email             | ✔️ Support     | ✔️ Support      | ✔️ Support       |

**Notes:**

Facebook: Does not support sharing on native apps.
Tumbler: Opens in native app but then the app opens the browser again!

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

## More plugins by the author

- [ngx-gallery](https://github.com/MurhafSousli/ngx-gallery)
- [ngx-progressbar](https://github.com/MurhafSousli/ngx-progressbar)
- [ngx-bar-rating](https://github.com/MurhafSousli/ngx-bar-rating)
- [ngx-disqus](https://github.com/MurhafSousli/ngx-disqus)
- [ngx-wordpress](https://github.com/MurhafSousli/ngx-wordpress)
- [ngx-highlightjs](https://github.com/MurhafSousli/ngx-highlightjs)
- [ngx-scrollbar](https://github.com/MurhafSousli/ngx-scrollbar)
- [ng-teximate](https://github.com/MurhafSousli/ng-teximate)
