import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ribbon',
  templateUrl: 'ribbon.component.html',
  styleUrls: ['ribbon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class RibbonComponent {

}
