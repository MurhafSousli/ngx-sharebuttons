# Angular 2 Share Buttons [![npm](https://img.shields.io/npm/v/ng2-sharebuttons.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/ng2-sharebuttons) [![Build Status](https://travis-ci.org/MurhafSousli/ng2-sharebuttons.svg?branch=master)](https://travis-ci.org/MurhafSousli/ng2-sharebuttons) [![npm](https://img.shields.io/npm/dt/express.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/ng2-sharebuttons)

![Angular 2 Share Buttons cover](/assets/cover.png?raw=true "Optional Title")

Simple, lightweight, customizable share buttons for your angular 2 app. [live demo](https://murhafsousli.github.io/ng2-sharebuttons/)

Supported services:

`Facebook`, `Twitter`, `Pinterest`, `Google`, `Tumbler`, `Reddit`, `StumbleUpOn`, `LinkedIn`

## Installation

Install it with npm

`npm install ng2-sharebuttons --save`

## Usage:

The basic usage has no inputs
```
<share-buttons></share-buttons>
```
### Share buttons
By default all listed buttons will be displayed unless you disable them
```
@Input() facebook: boolean = true;
@Input() twitter: boolean = true;
@Input() linkedIn: boolean = true;
@Input() tumblr: boolean = true;
@Input() google: boolean = true;
@Input() pinterest: boolean = true;
@Input() stumbleUpOn: boolean = true;
@Input() reddit: boolean = true;

<share-buttons [tumbler]="false"></share-buttons>
```
### Meta tags

by default the share buttons will get the meta tags from the page head, leave them empty unless:

  1. The meta tags aren't set properly.
  2. if your using multiple instances of share-buttons, ex: a share button instance foreach post in a blog page

```
  @Input() title;
  @Input() description;
  @Input() image;
  @Input() url;

  <share-button [title]="post.title" [image]="post.image" [url]="post.url"></share-button>
```

### Popup share window
Set the popup window dimension. (default: 500x300)
```
<share-buttons [height]="600" [width]="400"></share-buttons>
```
### Share title
Set the title before share buttons wrapper
```
<share-buttons [shareTitle]="Share this"></share-buttons>
```
##Twitter account
Set your twitter account to add "via @YourAccount" to visitor's tweet
```
<share-buttons [twitterAccount]="'MurhafSousli'"></share-buttons>
```

##Customization:

Customization is very easy, the first thing you want to do is to set `[defaultStyle]=false` this will remove the default style (which is the basic hover effect), and then write your own css.

Each share service has its own button template, to customize a button pass your custom template to the button input, e.g. give facebook a custom template `[facebook]="facebookTemplate"` 

To exclude a button from the shareButtons, pass false to the button template e.g. `[facebook]="false"`

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
import {Component} from "@angular/core";
import {ShareButtons} from "../share/share.component";

@Component({
  selector: "customize",
  template: require("./customize.html"),
  directives: [ShareButtons]
})

export class Customize {

  shareTitle = "Custom share icons";

  fbInner = "<img src='../../assets/img/custom/facebook.svg'>";
  twitterInner = "<img src='../../assets/img/custom/twitter.svg'>";
  pintInner = "<img src='../../assets/img/custom/pinterest.svg'>";
  inInner = "<img src='../../assets/img/custom/linkedin.svg'>";
  googleInner = "<img src='../../assets/img/custom/google-plus.svg'>";
  tumblrInner = "<img src='../../assets/img/custom/tumblr.svg'>";
}
```
[Demo source](https://github.com/MurhafSousli/ng2-sharebuttons-demo/tree/master/src/app/customize)

##TODOs:

- Whatsapp button
- Share counter

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
