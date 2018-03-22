import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavMenuComponent {

  menu = [
    {name: 'Home', link: '/'},
    {name: 'Share Buttons', link: '/share-buttons-component'},
    {name: 'Single Share Button', link: '/share-button-component'},
    {name: 'Share Button Directive', link: '/share-button-directive'},
    {name: 'Global Options', link: '/global-options'},
    {name: 'Styling Guide', link: '/styling-guide'},
    {name: 'Themes', link: '/themes'},
    {name: 'FAQ', link: '/faq'},
  ];
}
