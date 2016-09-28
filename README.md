# Angular 2 Share Buttons [![npm](https://img.shields.io/npm/v/ng2-sharebuttons.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/ng2-sharebuttons) [![Build Status](https://travis-ci.org/MurhafSousli/ng2-sharebuttons.svg?branch=master)](https://travis-ci.org/MurhafSousli/ng2-sharebuttons) [![npm](https://img.shields.io/npm/dt/ng2-sharebuttons.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/ng2-sharebuttons)

![Angular 2 Share Buttons cover](/assets/cover.PNG?raw=true "Optional Title")

Simple, lightweight, customizable share buttons with counts | [live demo](https://murhafsousli.github.io/ng2-sharebuttons/)

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

To display share counts on buttons, enable the input `[count]="true"`

To display the total count of all shares, enable the input `[totalCount]="true"`

```html
<share-buttons [shareTitle]="'Share Twitter Site'"
 [url]="'https://twitter.com'"
 [count]="true"
 [totalCount]="true"
 ></share-buttons>
```

## Customization:

Customization is very easy, the first thing you want to do is to set `[defaultStyle]=false` this will remove the class for the default style, after that use the following classes to add your own css.

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

Sometimes you just want to add a single button, use the component `<share-button>` in this case.

In this example, we will add a single twitter button, we will also add text and hashtags to the tweet.

```javascript
import {ShareButton, ShareProvider} from "ng2-sharebuttons";
  
export class TestComponent{
  twitterButton;
  hashtags = ['Hello','World'];
  defaultText = "This is a test";
  
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
<share-button [button]='twitterButton' [text]="defaultText" [hashtags]="hashtags"></share-button>
```

When using share buttons for a list of links, where each link has its own title and featured image, we need to set the inputs `[text]` and `[image]` for *Pinterest*, because unlike other social media, *Pinterest* won't get it automatically from the Open Graph meta tags

The inputs `[text]`, `[image]` and `[hashtags]` works the same in `<share-buttons>`, however in this example we will be using them in a single button.

```javascript
import {ShareButton, ShareProvider} from "ng2-sharebuttons";
  
export class TestComponent{
  pinButton;
  defaultText = "This is a test";
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
<share-button [button]='pinButton' [text]="defaultText" [image]="image"></share-button>
```

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
