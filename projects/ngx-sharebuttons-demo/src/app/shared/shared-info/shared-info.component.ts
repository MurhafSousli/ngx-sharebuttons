import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NoteComponent } from '../note/note.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'shared-info',
  templateUrl: './shared-info.component.html',
  styleUrl: './shared-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NoteComponent,
    RouterLink
  ]
})
export class SharedInfoComponent {
}
