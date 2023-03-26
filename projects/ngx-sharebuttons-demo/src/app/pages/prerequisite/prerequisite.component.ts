import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  host: {
    class: 'page'
  },
  selector: 'app-prerequisite',
  templateUrl: './prerequisite.component.html',
  styleUrls: ['./prerequisite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrerequisiteComponent {

}
