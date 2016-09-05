import {Component} from '@angular/core';
import {ShareButtons} from "ng2-sharebuttons";

var Prism: any = require('prismjs');

@Component({
  selector: 'home',
  template: require('./home.html')
})

export class Home {

  data: any;

  metaHtml = "<share-button [title]=\"post.title\" [image]=\"post.image\" [url]=\"post.url\"></share-button>";

  basicUsage = "<share-buttons [shareTitle]=\"'Default style'\"></share-buttons>";

  customizeHtml = `<share-buttons
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
></share-buttons>`;

  customizeScript = `import {Component} from "@angular/core";
import {ShareButtons} from 'ng2-sharebuttons';

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
`;

  ngAfterContentInit() {
    setTimeout(()=>Prism.highlightAll(), 500);
  }

}
