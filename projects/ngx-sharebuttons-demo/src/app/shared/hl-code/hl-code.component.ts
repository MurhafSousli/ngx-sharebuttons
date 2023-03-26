import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'hl-code',
  templateUrl: './hl-code.component.html',
  styleUrls: ['./hl-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HlCodeComponent {

  @Input() code: string;
  @Input() height: number;
  @Input() languages: string[];

  constructor(private toast: MatSnackBar) {
  }

  onCopied(copied: boolean) {
    if (copied) {
      this.toast.open('Code copied!', null, { duration: 3000 });
    }
  }
}
