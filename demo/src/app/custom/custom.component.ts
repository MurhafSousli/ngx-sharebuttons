import { Component } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent {

  shareTitle = "Sharing is caring";

  fbInner = "<img src=" + prefixRepo("../../assets/img/custom/custom-facebook.svg") + ">";
  twitterInner = "<img src=" + prefixRepo("../../assets/img/custom/custom-twitter.svg") + ">";
  pintInner = "<img src=" + prefixRepo("../../assets/img/custom/custom-pinterest.svg")+ ">";
  inInner = "<img src=" + prefixRepo("../../assets/img/custom/custom-linkedin.svg") + ">";
  googleInner = "<img src=" + prefixRepo("../../assets/img/custom/custom-google-plus.svg") + ">";
  tumblrInner = "<img src=" + prefixRepo("../../assets/img/custom/custom-tumblr.svg") + ">";
}


var prefixRepo = (path) => {
  return 'ng2-sharebuttons' + path;
};