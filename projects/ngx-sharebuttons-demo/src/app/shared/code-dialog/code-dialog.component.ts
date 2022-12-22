import { ChangeDetectionStrategy, Component, Inject, } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

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
