<p align="center">
  <img height="200px" width="200px" style="text-align: center;" src="https://cdn.rawgit.com/MurhafSousli/ngx-sharebuttons/master/assets/logo.svg">
  <h1 align="center">Angular Share Buttons</h1>
  <p align="center"><img src="https://image.ibb.co/eY16JG/buttons.png" alt="Capture" border="0"></p>
</p>

[![npm](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://murhafsousli.github.io/ngx-sharebuttons/)
[![npm](https://img.shields.io/npm/v/ngx-sharebuttons.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/ngx-sharebuttons) 
[![Build Status](https://travis-ci.org/MurhafSousli/ngx-sharebuttons.svg?branch=master)](https://travis-ci.org/MurhafSousli/ngx-sharebuttons) 
[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](/LICENSE)

 - [Documentations for version 3.x](https://github.com/MurhafSousli/ngx-sharebuttons/wiki)
 

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
    HttpClientModule, // (Required) for share counts
    HttpClientJsonpModule, // (Optional) For linkedIn & Tumblr counts
    ShareButtonsModule.forRoot()
  ]
})
```
    
 4. Import the core styles and the theme from the global style `src/styles.scss`
 
```css
/** Import Fontawesome icons */
@import '~font-awesome/css/font-awesome.min.css';

/** Import core style */
@import "~ngx-sharebuttons/styles/share-buttons";

/** Import a theme */
@import "~ngx-sharebuttons/styles/themes/circles/circles-theme";
```

## Share button directive

Convert any element to a share button using the directive `[shareButton]`

```html
<button shareButton="facebook"><i class="fa fa-facebook"></i></button>
<button md-raised-button shareButton="twitter"><i class="fa fa-twitter"></i></button>
<button md-icon-button shareButton="linkedin"><i class="fa fa-linkedin"></i></button>
<button md-fab shareButton="pinterest"><i class="fa fa-pinterest-p"></i></button>
```

Get text and icon from ShareButtons Service

```html
<button md-fab shareButton="twitter" [style.backgroundColor]="share.meta.twitter.color">
  <i [class]="share.meta.twitter.icon"></i>
</button>
<button md-fab shareButton="linkedin" [style.color]="share.meta.linkedin.color">
  <i [class]="share.meta.linkedin.icon"></i>
</button>
```

### API

| Name            | Description                                                    | value         |
| --------------- | -------------------------------------------------------------- | ------------- |
| [shareButton]   | Button name, e.g. 'facebook', 'twitter' ...etc.                | null          |
| [sbUrl]         | Sharing link.                                                  | current URL   |
| [sbTitle]       | Override title meta tag for LinkedIn and Reddit.               | null          |
| [sbDescription] | Override description meta tag for LinkedIn, WhatsApp, Telegram and Pinterest | null          |
| [sbImage]       | Override image meta tag for Pinterest only.                    | null          |
| [sbTags]        | Override tags for Tumblr and Twitter.                          | null          |
| (sbOpened)      | Stream that emits when share window has opened.                | button name   |
| (sbClosed)      | Stream that emits when share dialog has closed.                | button name   |
| (sbCount)       | Stream that emits share count of the share URL.                | share count   |


## Share button component

Add a single share button

```html
<share-button button="facebook"></share-button>
<share-button button="twitter" showName="true">Tweet!</share-button>
<share-button button="facebook" showName="true" showCount="true"><b>Share on Facebook</b></share-button>
<share-button button="pinterest" showName="true"></share-button>
```

### API

| Name           | Description                                                    | value         |
| -------------- | -------------------------------------------------------------- | ------------- |
| [button]       | Button name, e.g. 'facebook', 'twitter' ...etc.                | null          |
| [theme]        | Set button theme.                                              | null          |
| [size]         | Button size, e.g. -4, 2.5, 1...etc.                            | 0             |
| [url]          | Sharing link.                                                  | current URL   |
| [title]        | Override title meta tag for LinkedIn and Reddit.               | null          |
| [description]  | Override description meta tag for LinkedIn, WhatsApp, Telegram and Pinterest | null          |
| [image]        | Override image meta tag for Pinterest only.                    | null          |
| [tags]         | Override tags for Tumblr and Twitter.                          | null          |
| [showIcon]     | Show button icon.                                              | true          |
| [showName]     | Show button text.                                              | false         |
| [showCount]    | Show share count.                                              | false         |
| (opened)       | Emits when share window has opened.                            | button's name |
| (closed)       | Emits when share dialog has closed.                            | button's name |
| (count)        | Emits share count of the share URL.                            | share count   |


## Share buttons component

Add a collection of share buttons

```html
<share-buttons></share-buttons>
```
    
### API


| Name           | Description                                                    | value         |
| -------------- | -------------------------------------------------------------- | ------------- |
| [include]      | Include certain buttons. Button's order will be as you type it | [all buttons] |
| [exclude]      | Exclude certain buttons.                                       | null          |
| [show]         | Number of buttons to show, if defined 'more' button will appear. | null          |
| [theme]        | Set button's theme.                                            | null          |
| [size]         | Button size, e.g. -4, 2.5, 1...etc.                            | 0             |
| [url]          | Sharing link.                                                  | current URL   |
| [title]        | Override title meta tag for LinkedIn and Reddit.               | null          |
| [description]  | Override description meta tag for LinkedIn, WhatsApp, Telegram and Pinterest | null          |
| [image]        | Override image meta tag for Pinterest only.                    | null          |
| [tags]         | Override tags for Tumblr and Twitter.                          | null          |
| [showIcon]     | Show button icon.                                              | true          |
| [showName]     | Show button text.                                              | false         |
| [showCount]    | Show share count.                                              | false         |
| (opened)       | Stream that emits when share window has opened.                | button's name |
| (closed)       | Stream that emits when share dialog has closed.                | button's name |
| (count)        | Stream that emits share count of the share URL.                | share count   |


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

| Option         | Description                                                    | value         |
| -------------- | -------------------------------------------------------------- | ------------- |
| include        | Include certain buttons. Button's order will be as you type it | [all buttons] |
| exclude        | Exclude certain buttons.                                       | null          |
| size           | Buttons default size.                                          | 0             |
| theme          | Button theme name.                                             | null          |
| dialogWidth    | Share popup window width.                                      | 500           |
| dialogHeight   | Share popup window height.                                     | 400           |
| title          | Override title meta tag (if button supports it)                | null          |
| description    | Override description meta tag (if button supports it)          | null          |
| image          | Override image meta tag. (if button supports it)               | null          |
| tags           | Override tags meta tag for Tumblr and Twitter                  | null          |
| gaTracking     | Roll sharing stats automatically into your Google Analytics    | false         |
| twitterAccount | Add via @accountName at the end of the tweets                  | null          |

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

@import '~@ngx-sharebuttons/styles/share-buttons';
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

## Issues

If you identify any errors in this component, or have an idea for an improvement, please open an [issue](https://github.com/MurhafSousli/ngx-sharebuttons/issues). I am excited to see what the community thinks of this project, and I would love your input!

## Support

[![npm](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/bePatron?u=5594898)

## Development

 - Fork and clone the repo
 - Install npm dependencies `npm install`
 - Make your changes
 - Build the package `gulp build`
 - Submit your PR

This library was generated with [generator-ngx-library](https://github.com/tinesoft/generator-ngx-library#development) by @tinesoft
You may want to check it out for development info

## License

 - [MIT](/LICENSE)

## Author

 **Murhaf Sousli**

 - [github/murhafsousli](https://github.com/MurhafSousli)
 - [twitter/murhafsousli](https://twitter.com/MurhafSousli)
 
## More plugins from the author

 - [ng-gallery](https://github.com/MurhafSousli/ng-gallery)
 - [ngx-progressbar](https://github.com/MurhafSousli/ngx-progressbar)
 - [ngx-bar-rating](https://github.com/MurhafSousli/ngx-bar-rating)
 - [ngx-disqus](https://github.com/MurhafSousli/ngx-disqus)
 - [ngx-wordpress](https://github.com/MurhafSousli/ngx-wordpress)
 - [ngx-highlightjs](https://github.com/MurhafSousli/ngx-highlightjs)
 - [ng-teximate](https://github.com/MurhafSousli/ng-teximate)

