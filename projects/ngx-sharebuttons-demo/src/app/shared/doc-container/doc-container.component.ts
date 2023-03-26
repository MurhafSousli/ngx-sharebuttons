import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  host: {
    class: 'page-content container page-content-with-overview'
  },
  selector: 'doc-container',
  template: `
    <div class="page-content container page-content-with-overview">
      <div style="flex: 1;">
        <ng-content></ng-content>

        <ng-template #overview>
          <overview-content></overview-content>
        </ng-template>
      </div>

      <div>
        <ng-container *ngTemplateOutlet="overview"></ng-container>
      </div>
    </div>
  `,
  styleUrls: ['./doc-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocContainerComponent {

}
