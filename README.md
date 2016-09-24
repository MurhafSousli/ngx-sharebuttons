# Angular 2 Share Buttons [![npm](https://img.shields.io/npm/v/ng2-sharebuttons.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/ng2-sharebuttons) [![Build Status](https://travis-ci.org/MurhafSousli/ng2-sharebuttons.svg?branch=master)](https://travis-ci.org/MurhafSousli/ng2-sharebuttons) [![npm](https://img.shields.io/npm/dt/ng2-sharebuttons.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/ng2-sharebuttons)

![Angular 2 Share Buttons cover](/assets/cover.PNG?raw=true "Optional Title")

Simple, lightweight, customizable share buttons with counts [live demo](https://murhafsousli.github.io/ng2-sharebuttons/)

Supported services:

`Facebook`, `Twitter`, `Pinterest`, `Google`, `Tumbler`, `Reddit`, `StumbleUpOn`, `LinkedIn`

## Installation

Install it with npm

`npm install ng2-sharebuttons --save`

## Basic usage:

Import `ShareButtonsModule` in `NgModule` imports array
```
import {ShareButtonsModule} from "ng2-sharebuttons";
@NgModule({
  imports[
    ShareButtonsModule
  ]
})
```
in your template
```
<share-buttons [url]="linkToShare"></share-buttons>
```
The default icons requires [fontawesome](http://fontawesome.io/) to be loaded into your project.

To display share counts on buttons, enable the input `[count]="true"`

To display the total count of all shares, enable the input `[totalCount]="true"`
```
<share-buttons [shareTitle]="'Share Twitter Site'"
 [url]="'https://twitter.com'"
 [count]="true"
 [totalCount]="true"
 ></share-buttons>
```

## Customization:

Customization is very easy, the first thing you want to do is to set `[defaultStyle]=false` this will remove the class for the default style, after that use the following classes to add your own css.
```
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
```
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
```
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

## TODOs:

- [x] Share counters
- [x] Button order (can be done by css flexbox order)
- [] Fix StumbleUpOn share count issue

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
