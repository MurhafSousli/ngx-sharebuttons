<p align="center">
  <img height="200px" width="200px" style="text-align: center;" src="https://cdn.rawgit.com/MurhafSousli/ngx-sharebuttons/master/assets/logo.svg">
  <h1 align="center">Angular Share Buttons</h1>
  <p align="center"><img src="https://image.ibb.co/eY16JG/buttons.png" alt="Capture" border="0"></p>
</p>

[![npm](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://murhafsousli.github.io/ngx-sharebuttons/)
[![npm](https://img.shields.io/npm/v/ngx-sharebuttons.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/ngx-sharebuttons) 
[![Build Status](https://travis-ci.org/MurhafSousli/ngx-sharebuttons.svg?branch=master)](https://travis-ci.org/MurhafSousli/ngx-sharebuttons) 
[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](/LICENSE)
 
[stackblitz](https://stackblitz.com/edit/ngx-sharebuttons)

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
    HttpClientModule,      // (Required) for share counts
    HttpClientJsonpModule, // (Optional) For linkedIn & Tumblr counts
    ShareButtonModule.forRoot()
  ]
})
```

Import core styles and theme from the global style `src/styles.scss`

```css
@import '~font-awesome/css/font-awesome.min.css';
@import "~@ngx-share/button/styles/share-buttons";
@import "~@ngx-share/button/styles/themes/default/default-theme";
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

 - [ng-gallery](https://github.com/MurhafSousli/ng-gallery)
 - [ngx-progressbar](https://github.com/MurhafSousli/ngx-progressbar)
 - [ngx-bar-rating](https://github.com/MurhafSousli/ngx-bar-rating)
 - [ngx-disqus](https://github.com/MurhafSousli/ngx-disqus)
 - [ngx-wordpress](https://github.com/MurhafSousli/ngx-wordpress)
 - [ngx-highlightjs](https://github.com/MurhafSousli/ngx-highlightjs)
 - [ng-teximate](https://github.com/MurhafSousli/ng-teximate)
