import { Component } from '@angular/core';
import { ShareButton } from 'ngx-sharebuttons/button';

@Component({
  standalone: true,
  selector: 'basic-example',
  imports: [ShareButton],
  template: `
    <share-button button="facebook" text="Share" showText>
  `
})
export class ShareButtonExample {
}
