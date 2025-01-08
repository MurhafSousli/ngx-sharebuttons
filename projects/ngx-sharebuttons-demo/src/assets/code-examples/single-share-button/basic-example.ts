import { Component } from '@angular/core';
import { ShareButton } from 'ngx-sharebuttons/button';

@Component({
  selector: 'basic-example',
  imports: [ShareButton],
  template: `
    <share-button button="facebook" text="Share" showText>
  `
})
export class ShareButtonExample {
}
