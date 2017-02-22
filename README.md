[![npm](https://img.shields.io/npm/v/ng2-sharebuttons.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/ng2-sharebuttons) 
[![Build Status](https://travis-ci.org/MurhafSousli/ng2-sharebuttons.svg?branch=master)](https://travis-ci.org/MurhafSousli/ng2-sharebuttons) 
[![Coverage Status](https://coveralls.io/repos/github/MurhafSousli/ng2-sharebuttons/badge.svg?branch=master)](https://coveralls.io/github/MurhafSousli/ng2-sharebuttons?branch=master)
[![Join the chat at https://gitter.im/ng2-sharebuttons/Lobby](https://badges.gitter.im/ng2-sharebuttons/Lobby.svg)](https://gitter.im/ng2-sharebuttons/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm](https://img.shields.io/npm/dt/ng2-sharebuttons.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/ng2-sharebuttons)

<p align="center">
  <img height="300px" width="300px" style="text-align: center;" src="https://cdn.rawgit.com/MurhafSousli/ng2-sharebuttons/master/assets/logo.svg">
  <h1 align="center">Angular Share Buttons</h1>
</p>

Simple, lightweight, customizable share buttons with counts | [live demo](https://murhafsousli.github.io/ng2-sharebuttons/) | [vertical demo](https://murhafsousli.github.io/memory/) | [popup demo](https://murhafsousli.github.io/8puzzle/#/)

Supported services:

`Facebook`, `Twitter`, `Pinterest`, `Whatsapp`, `Google`, `Tumbler`, `Reddit`, `StumbleUpOn`, `LinkedIn`

## Installation

Install it with npm

`npm install ng2-sharebuttons --save`

### SystemJS
If you are using SystemJS, you should also adjust your configuration to point to the UMD bundle.

In your systemjs config file, `map` needs to tell the System loader where to look for `ng2-sharebuttons`:
```js
map: {
  'ng2-sharebuttons': 'node_modules/ng2-sharebuttons/bundles/ng2-sharebuttons.umd.js',
}
```

Here is a working [plunker](https://plnkr.co/edit/c9A6xzGQ8iSuKo3NMYLz), based on angular-quickstart.

## Basic usage:

Import **ShareButtonsModule** in your module

```ts
import {ShareButtonsModule} from "ng2-sharebuttons";
@NgModule({
  imports: [
    ShareButtonsModule.forRoot()
  ]
})
```

in your template

```html
<share-buttons [url]="linkToShare"></share-buttons>
```

The default icons requires [fontawesome](http://fontawesome.io/) to be loaded into your project.

To display share counts on buttons, enable the input `[count]="true"`

You can also sum the total number of share counters by using the output `(count)="sumCounts($event)"`

```html
 [url]="'https://twitter.com'"
 [showCount]="true"
 (count)="sumCounts($event)"
 ></share-buttons>
```
```ts
export class SomeComponent {
  
   totalShare: number = 0;

   sumCounts(count){
     this.totalShare += count;
   }
 }
```

## Customization:

Customization is very easy, disable the default style with `[defaultStyle]="false"` and override the following classes with your css. 

```scss
share-buttons{
    //ShareButtons Element
    .sb-buttons {
      //ShareButtons Container
      share-button{
        //ShareButton Element
        button{
          .sb-template{
            //ShareButton Template
          }
          .sb-count{
            //ShareButton Count
          }
        }
      }
    }
 }
```
To change buttons orders, use the css rule `order`
```scss
.facebook{
  order: 6;
}
.twitter{
  order: 1;
}
.whatsapp{
  order: 2;
}
```
To add a custom button template, create it with as string variable then pass it to the desired input, e.g. give facebook a custom template `[facebook]="facebookTemp"`.

To exclude a button, pass false to the button input. e.g. `[reddit]="false"`

```html
<share-buttons
   [shareTitle]="shareTitle"
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

## Integration:

Convert any button to a share button using the share directive `[shareButton]="buttonName"`
```html
<div class="material-sharebuttons">
  <button md-button [shareButton]="'facebook'"><i class="fa fa-facebook"></i></button>
  <button md-raised-button [shareButton]="'twitter'"><i class="fa fa-twitter"></i></button>
  <button md-icon-button [shareButton]="'linkedin'"><i class="fa fa-linkedin"></i></button>
  <button md-fab [shareButton]="'pinterest'"><i class="fa fa-pinterest-p"></i></button>
 </div>
 ```


---

### `<share-buttons>` share buttons component:

   - `[url]`: If URL is not valid or not presented, it will use `window.location.href`

  **Share links (by default it uses meta tags from head):**

   - `[title]` 
   - `[description]`
   - `[image]`
   - `[tags]`: Adds hashtags to the tweet, also for tumblr tags

   
  **Buttons templates:**
    Pass a custom button template to replace the default, Switch off a button by passing false
   - `[facebook]` 
   - `[twitter]`
   - `[linkedIn]`
   - `[tumblr]`
   - `[google]`
   - `[pinterest]`
   - `[stumbleUpOn]`
   - `[reddit]`

  **Options:**

   - `[showCount]`: Enable counts on share buttons, default: false
   - `[defaultStyle]`: Use default style is applied to the buttons, default: true
   - `[buttonClass]`: Add custom classes to all buttons
   - `(count)`: Output all buttons' counts
   - `(popUpClosed)`: Output when pop up window is closed
 


### `[shareButton]` share directive for single button:

  - `[sbUrl]`: If URL is not valid or not presented, it will use `window.location.href`

  **Meta tags alternates:**

  - `[sbTitle]` 
  - `[sbDescription]`
  - `[sbImage]`
  - `[sbTags]`: Adds hashtags to the twitter and tumblr

  **Button template:**
  
  - `[shareButton]`: Pass sharebutton name as string e.g. `facebook`

  **Button options**
  - `[sbShowCount]`: Enable share count on the button, default: false
  - `(sbCount)`: Output share count of the button
  - `(sbPopUpClosed)`: Output when pop up window is closed
      

## Misc

Use the service `ShareButtonsService` to set global variables like:

 - Site twitter account
 - The popup share window's dimension.

```javascript
import {ShareButtonsService} from "ng2-sharebuttons";
.
.
  constructor(sbService:ShareButtonsService){

    //Add `Via @yourTwitterAccount` to tweet button. 
    sbService.twitterAccount = "yourTwitterAccount";

    //Set the height and width of the popup share window.
    sbService.height = 600; //default: 400
    sbService.width = 800;  //default: 500
  }
```

<a name="issues"/>
## Issues


If you identify any errors in this component, or have an idea for an improvement, please open an [issue](https://github.com/MurhafSousli/ng2-sharebuttons/issues). I am excited to see what the community thinks of this project, and I would love your input!

## Author

 **Murhaf Sousli**

 - [github/murhafsousli](https://github.com/MurhafSousli)
 - [twitter/murhafsousli](https://twitter.com/MurhafSousli)

<a name="license"/>
## License

[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](/LICENSE)
