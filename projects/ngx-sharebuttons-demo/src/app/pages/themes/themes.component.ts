import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SharedModule } from '../../shared';

@Component({
  host: { class: 'page' },
  selector: 'themes',
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SharedModule]
})
export class ThemesComponent implements OnInit {

  private titleService: Title = inject(Title);

  theme: string;
  url: string = 'https://x.com/';

  ngOnInit(): void {
    this.titleService.setTitle('Themes');
  }

}
