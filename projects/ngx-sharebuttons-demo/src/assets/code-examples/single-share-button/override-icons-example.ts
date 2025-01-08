import { Component } from '@angular/core';
import { ShareButton } from 'ngx-sharebuttons/button';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'basic-example',
  imports: [ShareButton],
  template: `
    <share-button button="x" [icon]="xIcon"/>
  `
})
export class ShareDirectiveExample {
  xIcon = faXTwitter
}
