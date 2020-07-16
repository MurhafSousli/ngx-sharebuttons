import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <div class="page-title" ngClass.lt-md="title-mobile">
      <div class="container">
        <ng-content></ng-content>
      </div>
    </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

}
