import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

@Component({
  host: {
    class: 'page'
  },
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  features = [
    '17 share buttons to boost traffic',
    'High quality buttons',
    'Lightweight',
    'Official Share Counts',
    'Massively Customizable',
    'Style Integration',
    'Google Analytics Integrated',
    'Universal Support'
  ];

  directiveIcon = faWrench;

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Home | ngx-sharebuttons');
  }
}
