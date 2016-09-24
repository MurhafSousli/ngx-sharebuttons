import {Component, ChangeDetectionStrategy} from '@angular/core';

import 'prismjs/prism';
declare var Prism: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

    constructor() {
    }

    data: any;

    importing = `import {ShareButtonsModule} from "ng2-sharebuttons";
@NgModule({
  imports[
    ShareButtonsModule
  ]
})`;

    basic= '<share-buttons [url]="linkToShare"></share-buttons>';

    metaHtml = "<share-button [url]=\"url\"></share-button>";

    basicUsage = `<share-buttons [shareTitle]=\"'ShareButtons for Twitter URL'\"
 [url]=\"'https://twitter.com'\"
 [count]="true"
 [totalCount]="true"
 ></share-buttons>`;

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

    customizeScript = `export class SomeComponent {
  shareTitle = "Sharing is caring";
  fbInner = "<img src='../assets/img/custom/facebook.svg'>";
  twitterInner = "<img src='../assets/img/custom/twitter.svg'>";
  pintInner = "<img src='../assets/img/custom/pinterest.svg'>";
  inInner = "<img src='../assets/img/custom/linkedin.svg'>";
  googleInner = "<img src='../assets/img/custom/google-plus.svg'>";
  tumblrInner = "<img src='../assets/img/custom/tumblr.svg'>";
}`;

    customizeCss = ` .sb-container{
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
 }`;

    popupWindow = `constructor(sbService: ShareButtonsService) {
    sbService.height = 600; //default: 400
    sbService.width = 800;  //default: 500
}`;
    ngAfterContentInit() {
        setTimeout(()=>Prism.highlightAll(), 500);
    }
}
