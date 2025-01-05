import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SharedModule } from '../../shared';

@Component({
  host: { class: 'page' },
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SharedModule]
})
export class NotFoundComponent implements OnInit {

  private titleService: Title = inject(Title);

  ngOnInit(): void {
    this.titleService.setTitle('404 | ngx-sharebuttons');
  }

}
