import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SharedModule } from '../../shared';

@Component({
  standalone: true,
  host: { class: 'page' },
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SharedModule]
})
export class CustomButtonComponent implements OnInit {

  private titleService: Title = inject(Title);

  ngOnInit(): void {
    this.titleService.setTitle('Add Custom Button');
  }
}
