import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HighlightAuto } from 'ngx-highlightjs';
import { NgScrollbar } from 'ngx-scrollbar';
import { MaterialModule } from '../material.module';

@Component({
  standalone: true,
  selector: 'hl-code',
  templateUrl: './hl-code.component.html',
  styleUrl: './hl-code.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HighlightAuto,
    NgScrollbar,
    MaterialModule
  ]
})
export class HlCodeComponent {

  private toast: MatSnackBar = inject(MatSnackBar);

  @Input() code: string;
  @Input() height: number;
  @Input() languages: string[];

  onCopied(copied: boolean): void {
    if (copied) {
      this.toast.open('Code copied!', null, { duration: 3000 });
    }
  }
}
