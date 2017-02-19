import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  logo = 'assets/img/logo.svg';
  description = 'Simple, lightweight, customizable share buttons with counts';
}
