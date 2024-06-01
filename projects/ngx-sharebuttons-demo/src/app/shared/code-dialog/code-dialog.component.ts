import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HlCodeComponent } from '../hl-code/hl-code.component';

@Component({
  standalone: true,
  selector: 'code-dialog',
  template: `
    <hl-code [code]="code"/>
  `,
  styleUrl: './code-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HlCodeComponent]
})
export class CodeDialogComponent {
  readonly code: string = inject(MAT_DIALOG_DATA);
}
