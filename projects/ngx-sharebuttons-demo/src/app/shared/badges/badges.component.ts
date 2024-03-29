import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: true,
  selector: 'badges',
  templateUrl: 'badges.component.html',
  styleUrl: 'badges.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgesComponent {
}
