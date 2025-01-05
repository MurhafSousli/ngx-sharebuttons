import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { OverviewContentComponent } from '../overview-content/overview-content.component';

@Component({
  host: {
    class: 'page-content container page-content-with-overview'
  },
  selector: 'doc-container',
  template: `
    <div class="page-content container page-content-with-overview">
      <div style="flex: 1; max-width: 860px">
        <ng-content/>

        <ng-template #overview>
          <overview-content/>
        </ng-template>
      </div>

      <div>
        <ng-container *ngTemplateOutlet="overview"></ng-container>
      </div>
    </div>
  `,
  styleUrl: './doc-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [OverviewContentComponent, NgTemplateOutlet]
})
export class DocContainerComponent {

}
