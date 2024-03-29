import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NoteComponent } from '../note/note.component';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'shared-info',
  templateUrl: './shared-info.component.html',
  styleUrls: ['./shared-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NoteComponent,
    RouterLink
  ]
})
export class SharedInfoComponent {
}
