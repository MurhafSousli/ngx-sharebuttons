import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  Renderer2
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material';
import { of } from 'rxjs/observable/of';
import { take, delay, tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'code-dialog',
  templateUrl: './code-dialog.component.html',
  styleUrls: ['./code-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeDialogComponent {

  copied = false;

  constructor( @Inject(MAT_DIALOG_DATA) public code: string,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private cd: ChangeDetectorRef) {
  }

  copyTextToClipboard(text) {

    const textArea = this.renderer.createElement('textarea');

    of(textArea).pipe(
      take(1),
      tap(() => {
        // Place in top-left corner of screen regardless of scroll position.
        this.renderer.setStyle(textArea, 'position', 'fixed');
        this.renderer.setStyle(textArea, 'top', 0);
        this.renderer.setStyle(textArea, 'left', 0);

        // Ensure it has a small width and height. Setting to 1px / 1em
        // doesn't work as this gives a negative w/h on some browsers.
        this.renderer.setStyle(textArea, 'width', '2em');
        this.renderer.setStyle(textArea, 'height', '2em');

        // We don't need padding, reducing the size if it does flash render.
        textArea.style.padding = 0;
        this.renderer.setStyle(textArea, 'padding', 0);

        // Clean up any borders.
        this.renderer.setStyle(textArea, 'border', 'none');
        this.renderer.setStyle(textArea, 'outline', 'none');
        this.renderer.setStyle(textArea, 'boxShadow', 'none');

        // Avoid flash of white box if rendered for any reason.
        this.renderer.setStyle(textArea, 'background', 'transparent');

        this.renderer.setProperty(textArea, 'value', text);

        this.document.body.appendChild(textArea);

        textArea.select();

        this.document.execCommand('copy');

        this.document.body.removeChild(textArea);

        this.copied = true;
      },
        (err: any) => {
          console.log('Error:', err);
        }),
      delay(3500),
      finalize(() => {
        this.copied = false;
        this.cd.markForCheck();
      })
    ).subscribe();

  }
}
