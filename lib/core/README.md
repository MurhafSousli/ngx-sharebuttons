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

## Issues

If you identify any errors in this component, or have an idea for an improvement, please open an [issue](https://github.com/MurhafSousli/ngx-sharebuttons/issues). I am excited to see what the community thinks of this project, and I would love your input!


## Support

[![npm](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/bePatron?u=5594898)


## Author

 **Murhaf Sousli**

 - [github/murhafsousli](https://github.com/MurhafSousli)
 - [twitter/murhafsousli](https://twitter.com/MurhafSousli)
 
## License

 - [MIT](/LICENSE)
 
## More plugins from the author

 - [ngx-gallery](https://github.com/MurhafSousli/ngx-gallery)
 - [ngx-progressbar](https://github.com/MurhafSousli/ngx-progressbar)
 - [ngx-bar-rating](https://github.com/MurhafSousli/ngx-bar-rating)
 - [ngx-disqus](https://github.com/MurhafSousli/ngx-disqus)
 - [ngx-wordpress](https://github.com/MurhafSousli/ngx-wordpress)
 - [ngx-highlightjs](https://github.com/MurhafSousli/ngx-highlightjs)
 - [ngx-scrollbar](https://github.com/MurhafSousli/ngx-scrollbar)
 - [ng-teximate](https://github.com/MurhafSousli/ng-teximate)
