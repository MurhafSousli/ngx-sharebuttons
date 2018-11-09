import { Component, Input } from '@angular/core';

@Component({
  selector: 'note',
  template: `
    <span class="note">
      <section>
        <span class="note-icon note-{{icon}}">
          <mat-icon>{{icon}}</mat-icon>
        </span>
        <div class="note-content">
          <ng-content></ng-content>
        </div>
      </section>
    </span>
  `,
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  @Input() icon = 'error_outline';
}
