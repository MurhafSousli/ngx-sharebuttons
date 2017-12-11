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

 - [ng-gallery](https://github.com/MurhafSousli/ng-gallery)
 - [ngx-progressbar](https://github.com/MurhafSousli/ngx-progressbar)
 - [ngx-bar-rating](https://github.com/MurhafSousli/ngx-bar-rating)
 - [ngx-disqus](https://github.com/MurhafSousli/ngx-disqus)
 - [ngx-wordpress](https://github.com/MurhafSousli/ngx-wordpress)
 - [ngx-highlightjs](https://github.com/MurhafSousli/ngx-highlightjs)
 - [ngx-scrollbar](https://github.com/MurhafSousli/ngx-scrollbar)
 - [ng-teximate](https://github.com/MurhafSousli/ng-teximate)
