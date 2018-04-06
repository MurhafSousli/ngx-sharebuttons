import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { flipperAnimation } from './code-switcher.animation';
import { faEye, faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'code-switcher',
  templateUrl: './code-switcher.component.html',
  styleUrls: ['./code-switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
  animations: [flipperAnimation]
})
export class CodeSwitcherComponent {

  codeIcon = faCode;
  eyeIcon = faEye;
  toggle: any = false;
  flip = {
    true: {
      state: 'back',
      eyeColor: '#2E4057',
      codeColor: '#2196F3'
    },
    false: {
      state: 'front',
      animation: '#2E4057',
      eyeColor: '#2196F3'
    }
  };

  @Input() title = 'Example';
  @Input() code: string;
}
