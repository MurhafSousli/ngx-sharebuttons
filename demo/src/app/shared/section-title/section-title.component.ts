import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'section-title',
  template: `
    <div fxLayout fxLayoutAlign="start center">
      <h2>
        <i class="fas fa-caret-right" aria-hidden="true"></i>
        <fa-icon [icon]="iconCaretRight" size="lg"></fa-icon>
        <ng-content></ng-content>
      </h2>
    </div>
  `,
  styles: [`
    :host {
      width: 100%;
    }
    h2 {
      flex: 1;
      margin: 1em 0;
    }
    h2:after {
      content: '';
      display: block;
      height: 1px;
      width: 100%;
      opacity: 0.2;
      background-color: rgba(0, 0, 0, 0.8);
      margin-top: 15px;
    }
    fa-icon {
      color: #F44336;
      margin-right: 10px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class SectionTitleComponent {

  iconCaretRight = faCaretRight;
}
