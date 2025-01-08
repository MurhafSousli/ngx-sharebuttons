import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';
import { MaterialModule } from '../material.module';
import { RibbonComponent } from '../ribbon/ribbon.component';

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
  imports: [
    MaterialModule,
    NgScrollbar,
    RouterModule,
    RibbonComponent
  ]
})
export class NavMenuComponent {

  readonly menu: { name: string, link: string }[] = [
    { name: 'Home', link: '/' },
    { name: 'Share Button Directive', link: '/share-button-directive' },
    { name: 'Single Share Button', link: '/share-button-component' },
    { name: 'Share Buttons', link: '/share-buttons-component' },
    { name: 'Add Custom Button', link: '/custom-button' },
    { name: 'Icons Guide', link: '/icons' },
    { name: 'Global Options', link: '/global-options' },
    { name: 'Styling Guide', link: '/styling-guide' },
    { name: 'Themes', link: '/themes' },
    { name: 'FAQ', link: '/faq' }
  ];
}
