import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faWrench, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SharedModule } from '../../shared';

@Component({
  standalone: true,
  host: { class: 'page' },
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SharedModule]
})
export class HomeComponent implements OnInit {

  private titleService: Title = inject(Title);

  features: string[] = [
    '17 share buttons to boost traffic',
    'High quality buttons',
    'Lightweight',
    'Official Share Counts',
    'Massively Customizable',
    'Style Integration',
    'Google Analytics Integrated',
    'Universal Support'
  ];

  directiveIcon: IconDefinition = faWrench;

  ngOnInit(): void {
    this.titleService.setTitle('Home | ngx-sharebuttons');
  }
}
