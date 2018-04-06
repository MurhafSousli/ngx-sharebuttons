<p align="center">
  <img height="200px" width="200px" style="text-align: center;" src="https://cdn.rawgit.com/MurhafSousli/ngx-sharebuttons/master/assets/logo.svg">
  <h1 align="center">Angular Share Buttons</h1>
  <p align="center"><img src="https://image.ibb.co/eY16JG/buttons.png" alt="Capture" border="0"></p>
</p>

[![npm](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://murhafsousli.github.io/ngx-sharebuttons/)
[![npm](https://img.shields.io/npm/v/@ngx-share/core.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/@ngx-share/core)
[![Build Status](https://travis-ci.org/MurhafSousli/ngx-sharebuttons.svg?branch=master)](https://travis-ci.org/MurhafSousli/ngx-sharebuttons) 
[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](/LICENSE)
 
[stackblitz](https://stackblitz.com/edit/ngx-sharebuttons)

## Share buttons component

Use `<share-buttons>` to add a collection of share buttons.

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

## Issues

If you identify any errors in this component, or have an idea for an improvement, please open an [issue](https://github.com/MurhafSousli/ngx-sharebuttons/issues). I am excited to see what the community thinks of this project, and I would love your input!

## Support

[![npm](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/bePatron?u=5594898)

## License

 - [MIT](/LICENSE)

## Author

 **Murhaf Sousli**

 - [github/murhafsousli](https://github.com/MurhafSousli)
 - [twitter/murhafsousli](https://twitter.com/MurhafSousli)
 
## More plugins from the author

 - [ngx-gallery](https://github.com/MurhafSousli/ngx-gallery)
 - [ngx-progressbar](https://github.com/MurhafSousli/ngx-progressbar)
 - [ngx-bar-rating](https://github.com/MurhafSousli/ngx-bar-rating)
 - [ngx-disqus](https://github.com/MurhafSousli/ngx-disqus)
 - [ngx-wordpress](https://github.com/MurhafSousli/ngx-wordpress)
 - [ngx-highlightjs](https://github.com/MurhafSousli/ngx-highlightjs)
 - [ng-teximate](https://github.com/MurhafSousli/ng-teximate)
