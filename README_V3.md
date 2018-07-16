<p align="center">
  <img height="200px" width="200px" style="text-align: center;" src="https://cdn.rawgit.com/MurhafSousli/ngx-sharebuttons/master/assets/logo.svg">
  <h1 align="center">Angular Share Buttons v3.0.0</h1>
  <p align="center"><img src="https://image.ibb.co/eY16JG/buttons.png" alt="Capture" border="0"></p>
</p>

 > **NOTE:** This version `3.0.0` supports Angular 2 & 4 only.

___

[![Demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://murhafsousli.github.io/ngx-sharebuttons/)
[![NPM](https://img.shields.io/npm/v/ngx-sharebuttons.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/ngx-sharebuttons)
[![Build Status](https://travis-ci.org/MurhafSousli/ngx-sharebuttons.svg?branch=master)](https://travis-ci.org/MurhafSousli/ngx-sharebuttons)
[![Coverage Status](https://coveralls.io/repos/github/MurhafSousli/ngx-sharebuttons/badge.svg?branch=master)](https://coveralls.io/github/MurhafSousli/ngx-sharebuttons?branch=master)
[![LICENSE](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](/LICENSE)

**Available share buttons:**

`Facebook`, `Twitter`, `Pinterest`, `Whatsapp`, `Google`, `Tumbler`, `Reddit`, `StumbleUpOn`, `LinkedIn`

## Installation

Install it with npm

`npm install --save ngx-sharebuttons@3.0.0`

### SystemJS
If you are using SystemJS, you should also adjust your configuration to point to the UMD bundle.

In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-sharebuttons`:
```js
map: {
  'ngx-sharebuttons': 'node_modules/ngx-sharebuttons/bundles/ngx-sharebuttons.umd.js',
}
```

Here is a [plunker](https://plnkr.co/edit/BpV3UElDgdp0S9NPFRRO?p=preview), based on angular-quickstart.

## Add share buttons module

Import **ShareButtonsModule** in the root module

```ts
import {ShareButtonsModule} from 'ngx-sharebuttons';
@NgModule({
  imports: [
   //...
   HttpModule, 
   ShareButtonsModule.forRoot(),
  // ...
  ]
})
```

## Add share buttons

 - For all/some share buttons use:
```
<share-buttons></share-buttons>
```

 - For a single share button use:
```
<share-button button="facebook"></share-button>
```

Add share buttons for your favorite share services

**Basic usage:**

```html
<share-buttons [url]="linkToShare"></share-buttons>
```

The default usage comes with icons from [fontawesome](http://fontawesome.io/), make sure you import it in your app.

It's recommended to use the [meta tags](http://ogp.me/) to set the title, description and image for all share buttons.

Alternatively you can set them directly using the inputs as URL parameters, *Check inputs [compatibility](https://github.com/MurhafSousli/ngx-sharebuttons/wiki/Compatibility) with each social network.*

```html
<share-buttons [url]="linkToShare" [title]="title" [description]="description" [image]="image"></share-buttons>
```

**Options:**

   - `[url]` If URL is invalid or not presented, it will use the current url

  **Meta tags alternates:**

   - `[title]` Set title text
   - `[description]` Set description text
   - `[image]` Set Image
   - `[tags]` Set hashtags
   
  **Buttons templates:**
    Pass a custom button template to replace the default icons, Switch off a button by passing false
   - `[facebook]` 
   - `[twitter]`
   - `[linkedIn]`
   - `[tumblr]`
   - `[google]`
   - `[pinterest]`
   - `[stumbleUpOn]`
   - `[reddit]`

  **Options:**

   - `[showCount]` Enable counts on share buttons, default: false
   - `[defaultStyle]` Use default style is applied to the buttons, default: true
   - `[buttonClass]` Add custom classes to all buttons
   - `(count)` Output all buttons' counts
   - `(popUpClosed)` Output when pop up window is closed
 
 ### Styling share buttons
 
 Disable the default style with `[defaultStyle]="false"` then use the following classes to override share buttons style
 
 **Share counters in share component**
 
 To display share counters on buttons, enable the input `[count]="true"`
 
 ```html
 <share-buttons [url]="'https://twitter.com'" [showCount]="true"></share-buttons>
 ```
 
 **Share counters in share directive**
 
 ```ts
 <button [shareButton]="'facebook'" [sbShowCount]="true" (sbCount)="fbCount = $event">
    <i class="fa fa-facebook"></i> {{ fbCount | nFormatter }}
 </button>
 ```
 
   > **Twitter**, **WhatsApp** and **StumbleUpOn** do NOT provide share counts
   
   
   By default all social networks use the **meta tags** to get your app info.
   luckily the following inputs can set/override these info through the share URL as URL parameters
   
   Inputs compatibility with the social networks:
   
   |              |   URL    |    Title   |  Description  |     Image   |   Tags   |
   |   :---:      |  :---:   |    :---:   |     :---:     |     :---:   |   :---:  |
   |   facebook   |    ✔    |     ✔      |       ✔      |      ✔      |    ✖    |
   |   twitter    |    ✔    |     ✔      |       ✖      |      ✖      |    ✔    |
   |   google+    |    ✔    |     ✖      |       ✖      |      ✖      |    ✖    |
   |   linkedin   |    ✔    |     ✔      |       ✔      |      ✖      |    ✖    |
   |  pinterest   |    ✔    |     ✖      |       ✔      |      ✔      |    ✖    |
   |   tumblr     |    ✔    |     ✖      |       ✔      |      ✖      |    ✔    |
   |   whatsapp   |    ✔    |     ✔      |       ✔      |      ✖      |    ✖    |
   |    reddit    |    ✔    |     ✔      |       ✖      |      ✖      |    ✖    |
   | stumbleupon  |    ✔    |     ✖      |       ✖      |      ✖      |    ✖    |
   
   The incompatible inputs means either the social network do not have such input or it does not support URL parameters
   
   In any case you should make your app SEO friendly and this is done by setting the meta tags in document head.
   
   **Note:** the social networks reads only the static html of your URL (no javascript execution). it means that changing the meta tags using javascript or an angular module like *ngx-meta, ng2-meta, Angular Meta Service ...etc* will not effect without using a server side rendering such as **Universal**
   
   *An example of how would the meta tags look like in your app head*
   ```html
   <meta name="title" content="Angular Share Buttons">
   <meta name="description" content="Simple, lightweight, customizable share buttons">
   
   <meta property="og:title" content="Angular Share Buttons">
   <meta property="og:description" content="Simple, lightweight, customizable share buttons">
   <meta property="og:url" content="https://murhafsousli.github.io/ngx-sharebuttons/">
   <meta property="og:image" content="https://murhafsousli.github.io/ngx-sharebuttons/assets/img/cover.png">
   ```

 
 ```css
 share-buttons {
     /** ShareButtons Element */
     .sb-buttons {
       /** share buttons' container */
       .sb-button {
         /** button's container */
         button {
           .sb-template {
             /** icon's container */
           }
           .sb-count {
             /** share count */
           }
         }
       }
     }
  }
 ```
 Here is a [modified plunkr](https://plnkr.co/edit/cpCn6mFpY60Eh4leRYsY?p=preview) 
 
 ### Change buttons order
 
 Override `order` in the global style
 
 ```css
 .sb-buttons {
    .facebook {
      order: 6;
    }
    .twitter {
      order: 1;
    }
    .whatsapp {
      order: 2;
    }
 }
 ```
 
  > Add your custom css in the global style not in the component stylesheet*
 
 ### Custom button template (icon)
 
 To add a custom button template, Use the input of the social media service you want, e.g. give facebook a custom template `[facebook]="fbTemp"`.
 
 To exclude a button, set it to false. e.g. `[reddit]="false"`
 
 ```html
 <share-buttons
    [defaultStyle]="false"
 
    [facebook]="fbTemp"
    [twitter]="twitterTemp"
    [pinterest]="pintTemp"
    [linkedIn]="inTemp"
    [google]="googleTemp"
    [tumblr]="tumblrTemp"
 
    [reddit]="false"
    [stumbleUpOn]="false"
 ></share-buttons>
 ```
 ```javascript
 export class SomeComponent {
   fbTemp = "<img src='../assets/img/custom/facebook.svg'>";
   twitterTemp = "<img src='../assets/img/custom/twitter.svg'>";
   pintTemp = "<img src='../assets/img/custom/pinterest.svg'>";
   inTemp = "<img src='../assets/img/custom/linkedin.svg'>";
   googleTemp = "<img src='../assets/img/custom/google-plus.svg'>";
   tumblrTemp = "<img src='../assets/img/custom/tumblr.svg'>";
 }
 ```
 If you don't like to have such variables in your code, I recommend you to use the [share directive](https://github.com/MurhafSousli/ngx-sharebuttons/wiki/Share-Button-Directive) instead where you can define the buttons/images in the template and convert them to sharing buttons
 
 Convert any button to a share button using this directive, it is very useful for integration with Material/Bootstrap or your existing button style.
 
 **Usage:**
 
 ```ts
 <button shareButton="facebook"><i class="fa fa-facebook"></i></button>
 ```
 
 ```ts
 <button shareButton="twitter" [sbUrl]="'https://example.com'" [sbTags]="'angular awesomeness'">
   Tweet
 </button>
 ```
 
 ```ts
 <button shareButton="pinterest" [sbImage]="image" [sbDescription]="description">
     Pin it!
 </button>
 ```
 
 **Options:**
 
   - `[sbUrl]`: If URL is not valid or not presented, it will use your page title (`window.location.href`)
 
   **Meta tags alternates:**
  
   - `[sbTitle]` Set title text
   - `[sbDescription]`: Set description text
   - `[sbImage]` Set Image
   - `[sbTags]`: Set hashtags
 
 *Check input [compatibility](https://github.com/MurhafSousli/ngx-sharebuttons/wiki/Compatibility) with each social network.*
 
   **Button template:**
   
   - `[shareButton]`: Pass sharebutton name as string e.g. `facebook`
 
   **Button options**
 
   > **Twitter**, **WhatsApp** and **StumbleUpOn** do NOT provide share counts
 
   - `[sbShowCount]`: Enable share count on the button, default: false
   - `(sbCount)`: Output share count of the button
   - `(sbPopUpClosed)`: Output when pop up window is closed
       

 
 - or you can convert any element to share button (useful if you are using a css framework like bootstrap or material)
```
<button md-raised-button shareButton="twitter"><i class="fa fa-twitter"></i></button>
```
Check [share button directive doc](https://github.com/MurhafSousli/ngx-sharebuttons/wiki/Share-Button-Directive)


 - You can add `Via @yourTwitterAccount` to any tweet button you have on your application.
 - Set popup share window's dimension.

**Usage:**

```javascript
import {ShareButtonsService} from 'ngx-sharebuttons';
.
.
  constructor(shareButton: ShareButtonsService){

    //Add `Via @yourTwitterAccount` to tweet button. 
    shareButton.twitterAccount = "yourTwitterAccount";

    //Set the height and width of the popup share window.
    shareButton.windowHeight = 600; //default: 400
    shareButton.windowWidth = 800;  //default: 500
  }
```

 > Some social networks resizes the popup window automatically like `fb` and `pinterest`


## License

 - [MIT](/LICENSE)

<a name="author"/>

## Author

 **Murhaf Sousli**

 - [github/murhafsousli](https://github.com/MurhafSousli)
 - [twitter/murhafsousli](https://twitter.com/MurhafSousli)

<a name="more"/>

## More plugins from the author

 - [ngx-gallery](https://github.com/MurhafSousli/ngx-gallery)
 - [ngx-progressbar](https://github.com/MurhafSousli/ngx-progressbar)
 - [ngx-bar-rating](https://github.com/MurhafSousli/ngx-bar-rating)
 - [ngx-disqus](https://github.com/MurhafSousli/ngx-disqus)
 - [ngx-wordpress](https://github.com/MurhafSousli/ngx-wordpress)
 - [ngx-highlightjs](https://github.com/MurhafSousli/ngx-highlightjs)
 - [ng-teximate](https://github.com/MurhafSousli/ng-teximate)

