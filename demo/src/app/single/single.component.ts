import {Component, OnInit} from '@angular/core';
import {ShareButton, ShareProvider} from "ng2-sharebuttons";

@Component({
    selector: 'app-single',
    templateUrl: './single.component.html',
    styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

    twitterButton;
    pinButton;

    hashtags = ['Hello', 'World'];
    defaultText = "This is a test";

    pinImage = 'https://murhafsousli.github.io/ng2-sharebuttons/assets/img/pinExample.jpg';

    twitterUsage = `<share-button [button]='twitterButton' [text]="defaultText" [hashtags]="hashtags"></share-button>`;
    pinUsage = `<share-button [button]='pinButton' [text]="defaultText" [image]="image"></share-button>`;

    constructor() {
    }

    ngOnInit() {

        this.twitterButton = new ShareButton(
            ShareProvider.TWITTER,
            "<img src='" + prefixRepo("../../assets/img/custom/single-twitter.svg") + "'> Tweet",
            'twitter'
        );

        this.pinButton = new ShareButton(
            ShareProvider.PINTEREST,
            "<img src='" + prefixRepo("../../assets/img/custom/single-pinterest.svg") + "'> Pin it",
            'pinterest'
        );
    }

    singleTwt = `import {ShareButton, ShareProvider} from "ng2-sharebuttons";
  
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
}`;
    singlePin = `import {ShareButton, ShareProvider} from "ng2-sharebuttons";
  
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
}`

}
var prefixRepo = (path) => {
    return 'ng2-sharebuttons' + path;
};