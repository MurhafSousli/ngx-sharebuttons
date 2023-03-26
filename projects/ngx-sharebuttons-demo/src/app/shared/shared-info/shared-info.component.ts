import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-info',
  templateUrl: './shared-info.component.html',
  styleUrls: ['./shared-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedInfoComponent {
}
