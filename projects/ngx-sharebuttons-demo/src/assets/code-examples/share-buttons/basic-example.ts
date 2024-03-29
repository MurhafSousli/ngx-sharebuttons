import { Component } from '@angular/core';
import { ShareButtons } from 'ngx-sharebuttons/buttons';

@Component({
  standalone: true,
  selector: 'basic-example',
  imports: [ShareButtons],
  template: `
    <share-buttons>
  `
})
export class ShareButtonExample {
}
