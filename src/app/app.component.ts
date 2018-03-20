import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ShareButtons, noneOperator } from './sharebuttons/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
