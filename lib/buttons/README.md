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

## Share buttons component

Use `<share-buttons>` component to a collection of share buttons.

Share buttons component is built on top of `ShareModule` and `ShareButtonModule` so you need to install `@ngx-share/core`, `@ngx-share/button` and  `@ngx-share/buttons`.

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
