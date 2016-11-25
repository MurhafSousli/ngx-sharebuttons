# Angular 2 Share Buttons [![npm](https://img.shields.io/npm/v/ng2-sharebuttons.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/ng2-sharebuttons) [![Build Status](https://travis-ci.org/MurhafSousli/ng2-sharebuttons.svg?branch=master)](https://travis-ci.org/MurhafSousli/ng2-sharebuttons) [![npm](https://img.shields.io/npm/dt/ng2-sharebuttons.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/ng2-sharebuttons)

![Angular 2 Share Buttons cover](/assets/cover.PNG?raw=true "Optional Title")

Simple, lightweight, customizable share buttons with counts | [live demo](https://murhafsousli.github.io/ng2-sharebuttons/) | [vertical live demo](https://murhafsousli.github.io/memory/)

Supported services:

`Facebook`, `Twitter`, `Pinterest`, `Google`, `Tumbler`, `Reddit`, `StumbleUpOn`, `LinkedIn`

## Installation

Install it with npm

`npm install ng2-sharebuttons --save`

## Basic usage:

Add `ShareButtonsModule` to **NgModule** `imports` array

```javascript
import {ShareButtonsModule} from "ng2-sharebuttons";
@NgModule({
  imports: [
    ShareButtonsModule
  ]
})
```

in your template

```html
<share-buttons [url]="linkToShare"></share-buttons>
```

The default icons requires [fontawesome](http://fontawesome.io/) to be loaded into your project.

To display share counts on buttons, enable the input `[count]="true"` , To display the total count of all shares, enable the input `[totalCount]="true"` , To display a title for share buttons container use `[title]="yourTitle"`

```html
<share-buttons [shareTitle]="'Share Twitter Site'"
 [url]="'https://twitter.com'"
 [count]="true"
 [totalCount]="true"
 ></share-buttons>
```

## Customization:

Customization is very easy, disable the default style with `[defaultStyle]=false` then use the following classes to add your own css.

```css
.sb-container{
    //ShareButtons Holder
 }
 .sb-title{
    //Share Title
 }
 .sb-count{
    //Total Share Count
 }
 .sb-buttons{
    //Buttons Container
 }
 .sb-btn{
    //Share Button, the container of the button template 
 }
 .sb-btn-count{
    //Button Share Count
 }
```
Each share service has its own button template, pass your custom button template as string in its input, e.g. give facebook a custom template `[facebook]="facebookTemplate"`.

To exclude a button, pass false to the button input. e.g. `[facebook]="false"`

```html
<share-buttons
   [shareTitle]="shareTitle"
   [defaultStyle]="false"

   [facebook]="fbInner"
   [twitter]="twitterInner"
   [pinterest]="pintInner"
   [linkedIn]="inInner"
   [google]="googleInner"
   [tumblr]="tumblrInner"

   [reddit]="false"
   [stumbleUpOn]="false"
></share-buttons>
```
```javascript
export class SomeComponent {
  shareTitle = "Sharing is caring";
  fbInner = "<img src='../assets/img/custom/facebook.svg'>";
  twitterInner = "<img src='../assets/img/custom/twitter.svg'>";
  pintInner = "<img src='../assets/img/custom/pinterest.svg'>";
  inInner = "<img src='../assets/img/custom/linkedin.svg'>";
  googleInner = "<img src='../assets/img/custom/google-plus.svg'>";
  tumblrInner = "<img src='../assets/img/custom/tumblr.svg'>";
}
```

## Advanced usage:

Sometimes you just want to add a single button, or you want to make your own complex design, use the component `<share-button>` in this case.

In this example, we will add a Tweet button, we will also add text and hashtags to the tweet.

```javascript
import {ShareButton, ShareProvider} from "ng2-sharebuttons";
  
export class TestComponent{
  twitterButton;
  tags = 'Hello, World';
  description = "This is a test";
  
  ngOnInit() {
    this.twitterButton = new ShareButton(
        ShareProvider.TWITTER,              //choose the button from ShareProvider
        "<img src='../../assets/img/custom/single-twitter.svg'> Tweet",    //set button template
        'twitter'                           //set button classes
      );
  }
}
```
```html
<share-button [button]='twitterButton' [description]="description" [tags]="tags"></share-button>
```

Another example for adding Pinterest button

```javascript
import {ShareButton, ShareProvider} from "ng2-sharebuttons";
  
export class TestComponent{
  pinButton;
  description = "This is a test";
  image= "../../assets/img/pinExample.jpg";
  
  ngOnInit() {
    this.pinButton = new ShareButton(
        ShareProvider.PINTEREST,
        "<img src='../../assets/img/custom/single-pinterest.svg'> Pin it",
        'pinterest'
      );
  }
}
```

```html
<share-button [button]='pinButton' [description]="description" [image]="image"></share-button>
```

### Sharebuttons  `<share-buttons>` component inputs:

   - `[url]`: If URL is not valid or not presented, it will use `window.location.href`

  **Meta tags alternates:**

   - `[title]` 
   - `[description]`
   - `[image]`
   - `[tags]`: Adds hashtags to the tweet, also for tumblr tags

  **Sharebuttons container:**

   - `[shareTitle]`: Sharebuttons container title, default: false
   - `[count]`: Enable counts on share buttons, default: false
   - `[totalCount]`: Show total count of all buttons, default: false
   - `[defaultStyle]`: Use default style is applied to the buttons, default: true
   - `(popUpClosed)`: Output when pop up window is closed
 

  **Buttons inputs**
    Pass a custom button template to replace the default, Switch off a button by passing false
   - `[facebook]` 
   - `[twitter]`
   - `[linkedIn]`
   - `[tumblr]`
   - `[google]`
   - `[pinterest]`
   - `[stumbleUpOn]`
   - `[reddit]`

### Sharebutton `<share-button>` component inputs:

  - `[url]`: If URL is not valid or not presented, it will use `window.location.href`

  **Meta tags alternates:**

  - `[title]` 
  - `[description]`
  - `[image]`
  - `[tags]`: Adds hashtags to the twitter and tumblr

  **Button options**
  - `[button]`: Pass `ShareButton` object, like fb, twitter, reddit...etc
  - `[count]`: Enable share count on the button, default: false
  - `(countOuter)`: Output share count of the button
  - `(popUpClosed)`: Output when pop up window is closed
      

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
