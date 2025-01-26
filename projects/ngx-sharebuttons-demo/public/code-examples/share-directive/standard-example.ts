import { Component } from '@angular/core';
import { ShareButtonDirective } from 'ngx-sharebuttons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'basic-example',
  imports: [ShareButtonDirective, FaIconComponent],
  template: `
    <button shareButton="x">
      <fa-icon [icon]="xIcon" size="lg"></fa-icon>
    </button>
  `
})
export class ShareDirectiveExample {
  xIcon = faXTwitter
}
