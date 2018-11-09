import { Component, Input } from '@angular/core';

@Component({
  selector: 'note',
  template: `
    <span class="note note-{{icon}}">
      <section>
        <span class="note-icon">
          <fa-icon [icon]="['fas', icon]"></fa-icon>
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
  @Input() icon = 'info';
}
