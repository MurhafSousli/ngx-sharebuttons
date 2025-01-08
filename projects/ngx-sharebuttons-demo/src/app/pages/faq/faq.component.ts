import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SharedModule } from '../../shared';


@Component({
  host: { class: 'page' },
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SharedModule]
})
export class FaqComponent implements OnInit {

  private titleService: Title = inject(Title);

  ngOnInit(): void {
    this.titleService.setTitle('Frequently Asked Questions');
  }

}
