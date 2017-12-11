<p align="center">
  <img height="200px" width="200px" style="text-align: center;" src="https://cdn.rawgit.com/MurhafSousli/ngx-sharebuttons/master/assets/logo.svg">
  <h1 align="center">Angular Share Buttons</h1>
  <p align="center"><img src="https://image.ibb.co/eY16JG/buttons.png" alt="Capture" border="0"></p>
</p>

[![npm](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://murhafsousli.github.io/ngx-sharebuttons/)
[![npm](https://img.shields.io/npm/v/ngx-sharebuttons.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/ngx-sharebuttons) 
[![Build Status](https://travis-ci.org/MurhafSousli/ngx-sharebuttons.svg?branch=master)](https://travis-ci.org/MurhafSousli/ngx-sharebuttons) 
[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](/LICENSE)
 
 [plunker](https://plnkr.co/edit/C2Ke4Fhk2wBZZzm0JCao?p=preview)/[stackblitz](https://stackblitz.com/edit/ngx-sharebuttons)


## Table of contents

 - [Live demo](https://murhafsousli.github.io/ngx-sharebuttons/)
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
 - [For Angular 2 and 4, use this version 3 and this documentations](https://github.com/MurhafSousli/ngx-sharebuttons/wiki)
 - [More plugins](#more)
 
<a name="packages"/>

## Packages

I divided the plugin into 3 modules to make it possible to include only the module you use.

 - [@ngx-share/core](lib/core) - Share button directive to convert any element to a share button.
 - [@ngx-share/button](lib/button) - Share button component to add buttons individually.
 - [@ngx-share/buttons](lib/buttons) - Share buttons component to add a collection of share buttons.

<a name="directive"/>

## Share button directive

Convert any element to a share button using `[shareButton]` directive.

Install with npm
  
```bash
$ npm install --save @ngx-share/core
```

Import `ShareModule` in your module

```ts
import { ShareModule } from '@ngx-share/core';

@NgModule({
  imports: [
    ShareModule.forRoot()
  ]
})
```

In your template

```html
<button shareButton="facebook">Share</button>
<button shareButton="twitter">Tweet</button>
<button shareButton="pinterest">Pin</button>
```

To use the default icons or colors inject the share buttons service in your component

```ts
constructor(public share: ShareButtons) { }
```

Now you can set them


```html
// Set color and icon
<button shareButton="twitter" [style.backgroundColor]="share.meta.twitter.color">
  <i [class]="share.meta.twitter.icon"></i>
</button>

// Material example
<button md-icon-button shareButton="telegram" [style.color]="share.meta.telegram.color">
  <i [class]="share.meta.telegram.icon"></i>
</button>
```

Check [ShareButton Directive Demo](https://murhafsousli.github.io/ngx-sharebuttons/#/share-button-directive)

| Name            | Description                                                    | value         |
| --------------- | -------------------------------------------------------------- | ------------- |
| [shareButton]   | Button name, e.g. 'facebook', 'twitter' ...etc.                | null          |
| [sbUrl]         | Link to share.                                                 | current URL   |
| [sbTitle]       | Override title meta tag for LinkedIn and Reddit.               | null          |
| [sbDescription] | Override description meta tag for LinkedIn, WhatsApp, Telegram and Pinterest | null          |
| [sbImage]       | Override image meta tag for Pinterest only.                    | null          |
| [sbTags]        | Override tags for Tumblr and Twitter.                          | null          |
| (sbOpened)      | Emits when share window has opened.                            | button's name |
| (sbClosed)      | Emits when share dialog has closed.                            | button's name |
| (sbCount)       | Emits share count of the share URL.                            | share count   |

<a name="share-button-component"/>

## Share button component

Use `<share-button>` component to add buttons individually.

Share button component is built on top of `ShareModule` so you need to install both `@ngx-share/core` and `@ngx-share/button`.

To use the default icons, install `font-awesome` package.
  
```bash
$ npm install --save @ngx-share/core @ngx-share/button font-awesome
```

Import `ShareButtonModule` in your module

```ts
import { ShareButtonModule } from '@ngx-share/button';

@NgModule({
  imports: [
    ShareButtonModule.forRoot()
  ]
})
```

Import core styles and theme from the global style `src/styles.scss`

```css
/** Import core style */
@import "~ngx-sharebuttons/styles/share-buttons";

/** Import a theme */
@import "~ngx-sharebuttons/styles/themes/default/default-theme";
```
_Check all themes [here](https://murhafsousli.github.io/ngx-sharebuttons/#/themes)_

Now you can use the component in your template

```html
<share-button button="facebook"></share-button>
<share-button button="twitter"></share-button>
<share-button button="pinterest"></share-button>

// Use custom text
<share-button button="google">share!</share-button>

// Use custom template
<share-button button="linkedin"><img src="linkedin-icon.png"/><span>share</span></share-button>
```

Check [ShareButton Component Demo](https://murhafsousli.github.io/ngx-sharebuttons/#/share-button-component)

| Name           | Description                                                    | value         |
| -------------- | -------------------------------------------------------------- | ------------- |
| [button]       | Button name, e.g. 'facebook', 'twitter' ...etc.                | null          |
| [theme]        | Set button's theme.                                            | null          |
| [size]         | Button size, e.g. -4, 2.5, 1...etc.                            | 0             |
| [url]          | Link to share.                                                 | current URL   |
| [title]        | Override title meta tag for LinkedIn and Reddit.               | null          |
| [description]  | Override description meta tag for LinkedIn, WhatsApp, Telegram and Pinterest | null          |
| [image]        | Override image meta tag for Pinterest only.                    | null          |
| [tags]         | Override tags for Tumblr and Twitter.                          | null          |
| [showIcon]     | Show button icon.                                              | true          |
| [showName]     | Show button name.                                              | false         |
| [showCount]    | Show share count.                                              | false         |
| (opened)       | Emits when share window has opened.                            | button's name |
| (closed)       | Emits when share dialog has closed.                            | button's name |
| (count)        | Emits share count of the share URL.                            | share count   |


<a name="share-buttons-component"/>

## Share buttons component

Use `<share-buttons>` component to a collection of share buttons.

Share buttons component is built on top of `ShareModule` and `ShareButtonModule` so you need to install both `@ngx-share/core`, `@ngx-share/button` and  `@ngx-share/buttons`.

To use the default icons, install `font-awesome` package.
  
```bash
$ npm install --save @ngx-share/core @ngx-share/button @ngx-share/buttons font-awesome
```

Import `ShareButtonModule` in your module

```ts
import { ShareButtonModule } from '@ngx-share/button';

@NgModule({
  imports: [
    ShareButtonModule.forRoot()
  ]
})
```

Import core styles and theme from the global style `src/styles.scss`

```css
/** Import core style */
@import "~ngx-sharebuttons/styles/share-buttons";

/** Import a theme */
@import "~ngx-sharebuttons/styles/themes/default/default-theme";
```
_Check [all themes](https://murhafsousli.github.io/ngx-sharebuttons/#/themes)_

Now you can use the component in your template

```html
<share-buttons></share-buttons>
```

Check [ShareButtons Component Demo](https://murhafsousli.github.io/ngx-sharebuttons/#/share-buttons-component)


| Name           | Description                                                    | value         |
| -------------- | -------------------------------------------------------------- | ------------- |
| [include]      | Include certain buttons. Button's order will be as you type it | [all buttons] |
| [exclude]      | Exclude certain buttons.                                       | null          |
| [show]         | Number of buttons to show, if defined 'more' button will appear. | null          |
| [theme]        | Set button's theme.                                            | null          |
| [size]         | Button size, e.g. -4, 2.5, 1...etc.                            | 0             |
| [url]          | Link to share.                                                 | current URL   |
| [title]        | Override title meta tag for LinkedIn and Reddit.               | null          |
| [description]  | Override description meta tag for LinkedIn, WhatsApp, Telegram and Pinterest | null          |
| [image]        | Override image meta tag for Pinterest only.                    | null          |
| [tags]         | Override tags for Tumblr and Twitter.                          | null          |
| [showIcon]     | Show button icon.                                              | true          |
| [showName]     | Show button name.                                              | false         |
| [showCount]    | Show share count.                                              | false         |
| (opened)       | Emits when share window has opened.                            | button's name |
| (closed)       | Emits when share dialog has closed.                            | button's name |
| (count)        | Emits share count of the share URL.                            | share count   |


<a name="global-options"/>

## Global options

If you want set custom global options, pass your config in the library is imported

```ts
import { ShareButtonsModule } from 'ngx-sharebuttons';

const options: ShareButtonsOptions = {
  include: ['facebook', 'twitter', 'google'],
  exclude: ['tumblr', 'stumble', 'vk'],
  theme: 'modern-light',
  gaTracking: true,
  twitterAccount: 'twitterUsername'
}

@NgModule({
  imports: [
    ShareButtonsModule.forRoot(options)
  ]
})
```


| Option         | Description                                                    | value         |
| -------------- | -------------------------------------------------------------- | ------------- |
| include        | Include certain buttons. Button's order will be as you type it | [all buttons] |
| exclude        | Exclude certain buttons.                                       | null          |
| theme          | Button's theme name.                                           | null          |
| dialogWidth    | Exclude certain buttons.                                       | 500           |
| dialogHeight   | Exclude certain buttons.                                       | 400           |
| title          | Override title meta tag (if button supports it)                | null          |
| description    | Override description meta tag (if button supports it)          | null          |
| image          | Override image meta tag. (if button supports it)               | null          |
| tags           | Override tags meta tag for Tumblr and Twitter                  | null          |
| gaTracking     | Sharing stats automatically roll into your Google Analytics    | false         |
| twitterAccount | Add via @accountName at the end of the tweets                  | null          |


## Button Configuration

You can change the buttons meta data such as button icon and text

```ts
import { ShareButtonsModule } from 'ngx-sharebuttons';

const options: ShareButtonsOptions = { /** ... */ }

const buttonsConfig = {
  facebook: {
    icon: 'fa fa-facebook-official',
    text: 'Share on Facebook'
  },
  twitter: {
    icon: 'fa fa-twitter-square',
    text: 'Tweet'
  },
  // and so on...
};

@NgModule({
  imports: [
    ShareButtonsModule.forRoot(options, buttonsConfig)
  ]
})
```

<a name="styling-guide"/>

## Styling guide

This is useful to customize the style for `<share-button>` and `<share-buttons>` components

```scss
@import '~ngx-sharebuttons/styles/variables';

// change buttons colors

$sb-buttons: (
  facebook: #488aff,
  twitter: #32db64,
  google: #f53d3d,
  stumble: #f4f4f4,
  linkedin: $sb-linkedin,
  pinterest: $sb-pinterest,
  reddit: $sb-reddit,
  tumblr: $sb-tumblr,
  whatsapp: $sb-whatsapp,
  telegram: $sb-telegram,
  email: $sb-email,
  vk: $sb-vk,
  more: $sb-more,
  copy: $sb-copy,
  print: $sb-print
);

// change other variables

$sb-border-radius: 10px;

@import '~ngx-sharebuttons/styles/share-buttons';
```
[See all available variables](https://murhafsousli.github.io/ngx-sharebuttons/#/override-sass-variables)


### To create your own theme

Use the following classes

```scss
.sb-custom-theme {

  &.sb-group {
    /** ... share buttons container */
  }
  .sb-wrapper { /** ... share button wrapper */
    .sb-inner { /** ... inner wrapper */
      .sb-content { /** ... content wrapper */
        .sb-icon { /** ... icon wrapper */ }
        .sb-text { /** ... text wrapper */ }
       }
      .sb-template { /** ... template wrapper */ }
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

 - [ng-gallery](https://github.com/MurhafSousli/ng-gallery)
 - [ngx-progressbar](https://github.com/MurhafSousli/ngx-progressbar)
 - [ngx-bar-rating](https://github.com/MurhafSousli/ngx-bar-rating)
 - [ngx-disqus](https://github.com/MurhafSousli/ngx-disqus)
 - [ngx-wordpress](https://github.com/MurhafSousli/ngx-wordpress)
 - [ngx-highlightjs](https://github.com/MurhafSousli/ngx-highlightjs)
 - [ngx-scrollbar](https://github.com/MurhafSousli/ngx-scrollbar)
 - [ng-teximate](https://github.com/MurhafSousli/ng-teximate)

