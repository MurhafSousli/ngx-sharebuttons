import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'tab',
  template: `
    <div [hidden]="!active">
      <ng-content></ng-content>
    </div>
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent {

  title: string;

  @Input() set tabTitle(title) {
    switch (title.toLowerCase()) {
      case 'template':
        this.title = `<i class="fa fa-html5" aria-hidden="true"></i> ${title}`;
        break;
      case 'style':
        this.title = `<i class="fa fa-css3" aria-hidden="true"></i> ${title}`;
        break;
      case 'buttons':
        this.title = `<i class="fa fa-share-square-o" aria-hidden="true"></i> ${title}`;
        break;
      case 'link args':
        this.title = `<i class="fa fa-external-link" aria-hidden="true"></i> ${title}`;
        break;
      case 'options':
        this.title = `<i class="fa fa-cog" aria-hidden="true"></i> ${title}`;
        break;
      default:
        this.title = `<i class="fa fa-code" aria-hidden="true"></i> ${title}`;
    }
  }

  @Input() active = false;

}
