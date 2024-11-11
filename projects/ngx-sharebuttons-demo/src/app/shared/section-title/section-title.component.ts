import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCaretRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { KebabCasePipe } from '../kebab-case.pipe';

@Component({
  standalone: true,
  selector: 'section-title',
  template: `
    <div class="section-title">
      <h2 #el [id]="el.textContent | kebabCase">
        <a routerLink="."
           [fragment]="el.textContent | kebabCase"
           (click)="scrollbar.scrollToElement(el, { top: -20 })">
          <fa-icon [icon]="iconCaretRight" size="lg"/>
          <ng-content/>
        </a>
      </h2>
    </div>
  `,
  styleUrl: './section-title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
  imports: [
    KebabCasePipe,
    RouterLink,
    FaIconComponent
  ]
})
export class SectionTitleComponent {

  readonly iconCaretRight: IconDefinition = faCaretRight;

  readonly scrollbar: NgScrollbar = inject(NgScrollbar);

}
