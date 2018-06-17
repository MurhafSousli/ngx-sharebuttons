import { Component } from '@angular/core';

@Component({
  selector: 'note',
  template: `
    <div class="container">
      <div class="note">
        <section>
          <ng-content></ng-content>
        </section>
      </div>
    </div>
  `,
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {

}
