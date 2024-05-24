import { booleanAttribute, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faEye, faCode, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { flipperAnimation } from './code-switcher.animation';
import { MaterialModule } from '../material.module';
import { HlCodeComponent } from '../hl-code/hl-code.component';

@Component({
  standalone: true,
  selector: 'code-switcher',
  templateUrl: './code-switcher.component.html',
  styleUrl: './code-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
  animations: [flipperAnimation],
  imports: [MaterialModule, FaIconComponent, HlCodeComponent, FormsModule]
})
export class CodeSwitcherComponent {

  codeIcon: IconDefinition = faCode;
  eyeIcon: IconDefinition = faEye;
  toggle: any = false;
  flip: any = {
    true: {
      state: 'back',
      eyeColor: '#989898',
      codeColor: '#00bcd4'
    },
    false: {
      state: 'front',
      codeColor: '#989898',
      eyeColor: '#00bcd4'
    }
  };

  @Input() title: string = 'Example';
  @Input() code: string;
  @Input() languages: string[];
  @Input({ transform: booleanAttribute }) fill: boolean;
}
