import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'output',
  template: `
    <h5><i class="fa fa-chevron-right" aria-hidden="true"></i> Output:</h5>
    <div class="output">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['output.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutputComponent {
}
