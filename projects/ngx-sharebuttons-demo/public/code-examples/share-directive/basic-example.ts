import { Component } from '@angular/core';
import { ShareButtonDirective } from 'ngx-sharebuttons';

@Component({
  selector: 'basic-example',
  imports: [ShareButtonDirective],
  template: `
    <button shareButton="facebook">
      Share on facebook
    </button>
  `
})
export class ShareDirectiveExample {
}
