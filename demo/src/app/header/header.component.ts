import {Component} from '@angular/core';

@Component({
  selector: 'header',
  template: require('./header.html')
})

export class Header {

  angularLogo = prefixRepo('../../assets/img/angular-logo.png');
  fbLogo = prefixRepo('../../assets/img/share/facebook.svg');
  twttLogo = prefixRepo('../../assets/img/share/twitter.svg');
  pintLogo = prefixRepo('../../assets/img/share/pinterest.svg');
  stumbleLogo = prefixRepo('../../assets/img/share/stumbleupon.svg');
  googleLogo = prefixRepo('../../assets/img/share/google-plus.svg');
  tumblrLogo = prefixRepo('../../assets/img/share/tumblr.svg');
  redditLogo = prefixRepo('../../assets/img/share/reddit.svg');
  inLogo = prefixRepo('../../assets/img/share/linkedin.svg');

}

var prefixRepo = (path) => {
  return 'ng2-sharebutton-demo' + path;
}
