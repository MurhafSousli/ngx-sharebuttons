<p align="center">
  <img height="200px" width="200px" style="text-align: center;" src="https://cdn.rawgit.com/MurhafSousli/ngx-sharebuttons/master/assets/logo.svg">
  <h1 align="center">Angular Share Buttons</h1>
  <p align="center"><img src="https://image.ibb.co/eY16JG/buttons.png" alt="Capture" border="0"></p>
</p>

[![npm](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://murhafsousli.github.io/ngx-sharebuttons/)
[![npm](https://img.shields.io/npm/v/ngx-sharebuttons.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/ngx-sharebuttons) 
[![Build Status](https://travis-ci.org/MurhafSousli/ngx-sharebuttons.svg?branch=master)](https://travis-ci.org/MurhafSousli/ngx-sharebuttons) 
[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](/LICENSE)

 - [Documentations for version 4.x](https://murhafsousli.github.io/ngx-sharebuttons/)
 - [Documentations for version 3.x](https://github.com/MurhafSousli/ngx-sharebuttons/wiki)
 
 [plunker](https://plnkr.co/edit/C2Ke4Fhk2wBZZzm0JCao?p=preview)/[stackblitz](https://stackblitz.com/edit/ngx-sharebuttons)

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
See usage documentation [here](https://murhafsousli.github.io/ngx-sharebuttons/#/getting-started)
    
 4. Import the core styles and the theme from the global style `src/styles.scss`
 
```css
/** Import core style */
@import "~ngx-sharebuttons/styles/share-buttons";

/** Import a theme */
@import "~ngx-sharebuttons/styles/themes/circles/circles-theme";
```

Check all themes [here](https://murhafsousli.github.io/ngx-sharebuttons/#/themes)
    

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

