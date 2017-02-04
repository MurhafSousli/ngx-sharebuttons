import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ngShareButtonLogo = 'assets/img/logo.svg';
  fbLogo = 'assets/img/share/facebook.svg';
  twttLogo = 'assets/img/share/twitter.svg';
  pintLogo = 'assets/img/share/pinterest.svg';
  stumbleLogo = 'assets/img/share/stumbleupon.svg';
  googleLogo = 'assets/img/share/google-plus.svg';
  tumblrLogo = 'assets/img/share/tumblr.svg';
  redditLogo = 'assets/img/share/reddit.svg';
  inLogo = 'assets/img/share/linkedin.svg';

  constructor() { }

  ngOnInit() {
  }

}
