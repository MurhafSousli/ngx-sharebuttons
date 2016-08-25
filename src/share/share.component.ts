import {Input, Component, OnInit} from '@angular/core';

import {ShareButton} from './share.model';

@Component({
  selector: 'share-buttons',
  templateUrl: './share.html',
  styleUrls: ['./share.css']
})
export class ShareButtons implements OnInit {

  /** list of desired share buttons */
  private shareButtons: ShareButton[];

  /** window attributes set the height and width of share window */
  windowAttr: any;
  @Input()
  width = 500;
  @Input()
  height = 300;

  /** Share buttons container title, ex: Sharing is caring */
  @Input() shareTitle: string;

  /** Optional to add "Via @YourTwitter" to user tweet,
   * this can be useful to get notified when user shares your link on twitter
   * */
  @Input() twitterAccount: string;

  /** Share meta tags
   *  Leave those Inputs empty if OG meta tags are already set.
   * */
  @Input() title;
  @Input() description;
  @Input() image;
  @Input() url;

  /** Buttons Inner */
  @Input() facebook: any = "<i class='fa fa-facebook'></i>";
  @Input() twitter: any = "<i class='fa fa-twitter'></i>";
  @Input() linkedIn: any = "<i class='fa fa-linkedin'></i>";
  @Input() tumblr: any = "<i class='fa fa-tumblr'></i>";
  @Input() google: any = "<i class='fa fa-google-plus'></i>";
  @Input() pinterest: any = "<i class='fa fa-pinterest-p'></i>";
  @Input() stumbleUpOn: any = "<i class='fa fa-stumbleupon'></i>";
  @Input() reddit: any = "<i class='fa fa-reddit-alien'></i>";

  @Input() defaultStyle: boolean = true;

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
        this.facebook,
        this.windowAttr);
      this.shareButtons.push(btn);
    }
    if (this.twitter) {
      let btn = new ShareButton(this.linkTwitter(),
        'twitter',
        this.twitter,
        this.windowAttr);
      this.shareButtons.push(btn);
    }
    if (this.google) {
      let btn = new ShareButton(this.linkGooglePlus(),
        'googleplus',
        this.google,
        this.windowAttr);
      this.shareButtons.push(btn);
    }
    if (this.pinterest) {
      let btn = new ShareButton(this.linkPinterest(),
        'pinterest',
        this.pinterest,
        this.windowAttr);
      this.shareButtons.push(btn);
    }
    if (this.linkedIn) {
      let btn = new ShareButton(this.linkLinkedin(),
        'linkedin',
        this.linkedIn,
        this.windowAttr);
      this.shareButtons.push(btn);
    }
    if (this.stumbleUpOn) {
      let btn = new ShareButton(this.linkStumbleUpon(),
        'stumbleupon',
        this.stumbleUpOn,
        this.windowAttr);
      this.shareButtons.push(btn);
    }
    if (this.tumblr) {
      let btn = new ShareButton(this.linkTumblr(),
        'tumblr',
        this.tumblr,
        this.windowAttr);
      this.shareButtons.push(btn);
    }
    if (this.reddit) {
      let btn = new ShareButton(this.linkReddit(),
        'reddit',
        this.reddit,
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
