import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SharedModule } from '../../shared';

@Component({
  host: { class: 'page' },
  selector: 'styling',
  templateUrl: './styling.component.html',
  styleUrl: './styling.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SharedModule]
})
export class StylingComponent implements OnInit {

  private titleService: Title = inject(Title);

  componentCode: string = `<share-buttons theme="moon"/>`;

  ngOnInit(): void {
    this.titleService.setTitle('Styling Guide');
  }

}
