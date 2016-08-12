import {Input, Component, OnInit} from '@angular/core';

import {ShareButton} from './share.model';

declare var require: any

@Component({
  selector: 'share-buttons',
  template: require('./share.html')
})
export class ShareButtons implements OnInit {

  /** list of desired share buttons */
  private shareButtons: ShareButton[];

  /** window attributes set the height and width of share window */
  windowAttr: any;
  @Input()
  width: number = 500;
  @Input()
  height: number = 300;

  /** Share buttons container title, ex: Sharing is caring */
  @Input() shareTitle: string;

  /** Optional to add "Via @YourTwitter" to user tweet */
  @Input() twitterAccount: string;

  /** Share meta tags
   *  Leave those Inputs empty if OG meta tags are already set.
   * */
  @Input() title: string;
  @Input() description: string;
  @Input() image: string;
  @Input() url: string;

  @Input() facebook: boolean = true;
  @Input() twitter: boolean = true;
  @Input() linkedIn: boolean = true;
  @Input() tumblr: boolean = true;
  @Input() google: boolean = true;
  @Input() pinterest: boolean = true;
  @Input() stumbleUpOn: boolean = true;
  @Input() reddit: boolean = true;

  ngOnInit() {
    if (!this.url) {
      this.url = this.getMetaContent('og:url');
    }
    if (!this.title) {
      this.title = this.getMetaContent('og:title');
    }
    if (!this.description) {
      this.description = this.getMetaContent('og:description');
    }
    if (!this.image) {
      this.image = this.getMetaContent('og:image');
    }

    this.windowAttr = 'width=' + this.width + ', height=' + this.height;

    this.initButtons();
  }

  initButtons() {
    this.shareButtons = [];
    if (this.facebook) {
      let btn = new ShareButton(this.linkFacebook(),
        'facebook',
        "<i class='fa fa-facebook'></i>",
        this.windowAttr);
      this.shareButtons.push(btn);
    }
    if (this.twitter) {
      let btn = new ShareButton(this.linkTwitter(),
        'twitter',
        "<i class='fa fa-twitter'></i>",
        this.windowAttr);
      this.shareButtons.push(btn);
    }
    if (this.linkedIn) {
      let btn = new ShareButton(this.linkLinkedin(),
        'linkedin',
        "<i class='fa fa-linkedin'></i>",
        this.windowAttr);
      this.shareButtons.push(btn);
    }
    if (this.tumblr) {
      let btn = new ShareButton(this.linkTumblr(),
        'tumblr',
        "<i class='fa fa-tumblr'></i>",
        this.windowAttr);
      this.shareButtons.push(btn);
    }
    if (this.google) {
      let btn = new ShareButton(this.linkGooglePlus(),
        'googleplus',
        "<i class='fa fa-google-plus'></i>",
        this.windowAttr);
      this.shareButtons.push(btn);
    }
    if (this.reddit) {
      let btn = new ShareButton(this.linkReddit(),
        'reddit',
        "<i class='fa fa-reddit-alien'></i>",
        this.windowAttr);
      this.shareButtons.push(btn);
    }
    if (this.pinterest) {
      let btn = new ShareButton(this.linkPinterest(),
        'pinterest',
        "<i class='fa fa-pinterest-p'></i>",
        this.windowAttr);
      this.shareButtons.push();
    }
    if (this.stumbleUpOn) {
      let btn = new ShareButton(this.linkStumbleUpon(),
        'stumbleupon',
        "<i class='fa fa-stumbleupon'></i>",
        this.windowAttr);
      this.shareButtons.push(btn);
    }
  }


  linkFacebook = (): string => {
    return 'http://www.facebook.com/sharer/sharer.php?u=' + this.url +
      '&title=' + this.title;
  }

  linkTwitter = () => {
    if (this.twitterAccount) {
      return 'https://twitter.com/intent/tweet?url=' + this.url +
        '&text=' + this.title +
        '&via=' + this.twitterAccount +
        '&image=' + this.image;
    }
    return 'https://twitter.com/intent/tweet?url=' + this.url +
      '&text=' + this.title +
      '&image=' + this.image;
  }

  linkTumblr = () => {
    return 'http://www.tumblr.com/share?v=3&u=' + this.url +
      '&t=' + this.title;
  }

  linkGooglePlus = () => {
    return 'https://plus.google.com/share?url=' + this.url;
  }

  linkReddit = () => {
    return 'http://www.reddit.com/submit?url=' + this.url +
      '&title=' + this.title;
  }

  linkLinkedin = () => {
    return 'http://www.linkedin.com/shareArticle?mini=true&url=' + this.url +
      '&title=' + this.title +
      '&source=' + document.domain;
  }

  linkStumbleUpon = () => {
    return 'http://www.stumbleupon.com/submit?url=' + this.url +
      '&title=' + this.title;
  }

  linkPinterest = () => {
    return 'https://pinterest.com/pin/create/button/?url=' + this.url +
      '&media=' + this.image +
      '&description=' + this.title;
  }


  getMetaContent = (property: string): string => {
    let metas: any = document.getElementsByTagName('meta');
    for (let i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute("name") == property) {
        return metas[i].getAttribute("content");
      }
    }
    return "";
  }
}

/*
 TODO: add share counts feature.
 TODO: write testing file
 */


/*
 To display share counts

 fbCount;
 tumblrCount;
 googlePlusCount;
 linkedinCount;
 stumbleuponCount;
 pinterestCount;
 redditCount;
 getTotalShareCount() {
 }
 getFbCount() {
 var query = 'http://graph.facebook.com/?id=' + this.url;
 return this.http.get(query).map(res => res.json());
 }
 getRedditCount() {
 var query = 'http://buttons.reddit.com/button_info.json?url=%%' + this.url + '%%';
 return this.http.get(query).map(res => res.json());
 }
 getGooglePlusCount() {
 }
 getLinkedInCount() {
 var query = 'http://www.linkedin.com/countserv/count/share?url=%%' + this.url + '%%&format=json';
 return this.http.get(query).map(res => res.json());
 }
 getStumbleUpOnCount() {
 var query = 'http://www.stumbleupon.com/services/1.01/badge.getinfo?url=%%' + this.url + '%%';
 return this.http.get(query).map(res => res.json());
 }
 getPinterestCount() {
 var query = 'http://widgets.pinterest.com/v1/urls/count.json?source=6&url=%%' + this.url + '%%';
 return this.http.get(query).map(res => res.json());
 }
 */
