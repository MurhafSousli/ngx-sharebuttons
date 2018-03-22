import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { flipperAnimation } from './code-switcher.animation';

@Component({
  selector: 'code-switcher',
  templateUrl: './code-switcher.component.html',
  styleUrls: ['./code-switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
  animations: [flipperAnimation]
})
export class CodeSwitcherComponent {

  @Input() title = 'Example';
  @Input() code: string;
  flip = false;
}
