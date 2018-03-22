import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  features = [
    '15 share buttons to boost traffic',
    'High quality buttons',
    'Lightweight',
    'Official Share Counts',
    'Massively Customizable',
    'Style Integration',
    'Google Analytics Integrated',
    'Universal Support'
  ];

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Home | ngx-sharebuttons');
  }
}
