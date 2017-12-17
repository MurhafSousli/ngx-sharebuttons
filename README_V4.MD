<p align="center">
  <img height="200px" width="200px" style="text-align: center;" src="https://cdn.rawgit.com/MurhafSousli/ngx-sharebuttons/master/assets/logo.svg">
  <h1 align="center">Angular Share Buttons</h1>
  <p align="center"><img src="https://image.ibb.co/eY16JG/buttons.png" alt="Capture" border="0"></p>
</p>

[![npm](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://murhafsousli.github.io/ngx-sharebuttons/)
[![npm](https://img.shields.io/npm/v/ngx-sharebuttons.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/ngx-sharebuttons) 
[![Build Status](https://travis-ci.org/MurhafSousli/ngx-sharebuttons.svg?branch=master)](https://travis-ci.org/MurhafSousli/ngx-sharebuttons) 
[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](/LICENSE)



## Table of contents

- [Plunker](https://plnkr.co/edit/C2Ke4Fhk2wBZZzm0JCao?p=preview)
- [Installation](#installation)
- [Share button directive](#share-button-directive)
- [Single share button component](#share-button-component)
- [Share buttons component](#share-buttons-component)
- [Global options](#global-options)
- [Styling guide](#styling-guide)
- [Issues](#issues)
- [License](/LICENSE)
- [Support](#support)
- [Author](#author)
- [More plugins](#more) 
- [Documentations for version 3.x](https://github.com/MurhafSousli/ngx-sharebuttons/wiki)

<a name="installation"/>

## Installation

 1. Install the library `npm install ngx-sharebuttons --save`
 2. Install font-awesome icons `npm install font-awesome --save` or use a [FontAwesome CDN](https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css)
 3. Choose the module: 
 
    - **ShareButtonsModule** for `<share-buttons></share-buttons>`
    - **ShareButtonModule** for `<share-button [button]="buttonName"></share-button>`
    - **ShareDirectiveModule** for `<button [shareButton]="buttonName"></button>`

```ts
import { ShareButtonsModule } from 'ngx-sharebuttons';

@NgModule({
  imports: [
    HttpClientModule,      // (Required) for share counts
    HttpClientJsonpModule, // (Optional) For linkedIn & Tumblr counts
    ShareButtonsModule.forRoot()
  ]
})
```
    
 4. If you want to use the components, import the core styles and the theme from the global style `src/styles.scss`
 
```css
/** Import Fontawesome icons */
@import '~font-awesome/css/font-awesome.min.css';

/** Import core style */
@import "~ngx-sharebuttons/styles/share-buttons";

/** Import a theme */
@import "~ngx-sharebuttons/styles/themes/circles/circles-theme";
```

<a name="share-button-directive"/>

## Share button directive

Convert any element to a share button using the directive `[shareButton]`.

A very basic example:

```html
<button shareButton="facebook"><i class="fa fa-facebook"></i></button>
```

Material example:

```html
<button md-raised-button shareButton="twitter"><i class="fa fa-twitter"></i></button>
<button md-icon-button shareButton="linkedin"><i class="fa fa-linkedin"></i></button>
```


You can get the button text and icon from **ShareButtons** Service

```ts
import { ShareButtons } from 'ngx-sharebuttons';

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
<button md-fab shareButton="twitter" [style.backgroundColor]="share.meta.twitter.color">
  <i [class]="share.meta.twitter.icon"></i>
</button>
<button md-fab shareButton="linkedin" [style.color]="share.meta.linkedin.color">
  <i [class]="share.meta.linkedin.icon"></i>
</button>
```

### API

| Name            | Value         | Description                                                     |
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

___


<a name="share-button-component"/>

## Share button component

Add a single share button

```html
<share-button button="facebook"></share-button>
<share-button button="twitter" showName="true">Tweet!</share-button>
<share-button button="facebook" showName="true" showCount="true"><b>Share on Facebook</b></share-button>
<share-button button="pinterest" showName="true"></share-button>
```

### API

| Name           | Value         | Description                                                     |
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
| [showName]     | false         | Show button text.                                               |
| [showCount]    | false         | Show share count.                                               |
| (opened)       | button name   | Stream that emits when share window has opened.                 |
| (closed)       | button name   | Stream that emits when share dialog has closed.                 |
| (count)        | share count   | Stream that emits share count of the share URL.                 |

___

<a name="share-buttons-component"/>

## Share buttons component

Add a collection of share buttons

```html
<share-buttons></share-buttons>
```
    
### API

| Name           | Value         | Description                                                     |
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
| [showName]     | false         | Show button text.                                               |
| [showCount]    | false         | Show share count.                                               |
| (opened)       | button name   | Stream that emits when share window has opened.                 |
| (closed)       | button name   | Stream that emits when share dialog has closed.                 |
| (count)        | share count   | Stream that emits share count of the share URL.                 |

___

<a name="global-options"/>

## Global options

To use custom options globally, pass your options in `forRoot(option)` where the module is imported.

```ts
import { ShareButtonsModule, ShareButtonsOptions } from 'ngx-sharebuttons';

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

| Option         | Value         | Description                                                     |
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
import { ShareButtonsModule } from 'ngx-sharebuttons';

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

### Custom theme

To create a custom theme, use the following classes:

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

<a name="issues"/>

## Issues

If you identify any errors in this component, or have an idea for an improvement, please open an [issue](https://github.com/MurhafSousli/ngx-sharebuttons/issues). I am excited to see what the community thinks of this project, and I would love your input!

<a name="support"/>

## Support

[![npm](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/bePatron?u=5594898)

## License

 - [MIT](/LICENSE)

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
 - [ng-teximate](https://github.com/MurhafSousli/ng-teximate)

