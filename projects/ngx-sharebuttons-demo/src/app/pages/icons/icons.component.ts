import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SharedModule } from '../../shared';

@Component({
  host: { class: 'page' },
  selector: 'icons',
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SharedModule]
})
export class IconsComponent implements OnInit {

  private titleService: Title = inject(Title);

  ngOnInit(): void {
    this.titleService.setTitle('Icons Guide')
  }
}
