import { Component, Input } from '@angular/core';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  standalone: true,
  selector: 'note',
  template: `
    <span class="note">
      <section>
        <span class="note-icon">
          <fa-icon [icon]="icon"/>
        </span>
        <div class="note-content">
          <ng-content/>
        </div>
      </section>
    </span>
  `,
  styleUrl: './note.component.scss',
  imports: [FaIconComponent]
})
export class NoteComponent {
  @Input() icon: IconProp = 'info';
}
