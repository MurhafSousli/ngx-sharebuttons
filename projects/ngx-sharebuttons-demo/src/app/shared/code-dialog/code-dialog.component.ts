import { ChangeDetectionStrategy, Component, Inject, } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'code-dialog',
  template: `
    <hl-code [code]="code"></hl-code>
  `,
  styleUrls: ['./code-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public code: string) {
  }

}
