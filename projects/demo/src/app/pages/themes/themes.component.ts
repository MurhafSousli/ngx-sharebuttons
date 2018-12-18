import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  host: {
    'class': 'page'
  },
  selector: 'themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemesComponent implements OnInit {

  theme: string;
  url = 'http://twitter.com/';

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Themes');
  }

}
