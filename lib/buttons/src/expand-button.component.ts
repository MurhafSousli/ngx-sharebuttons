import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { faEllipsisH, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'expand-button',
  template: `
    <button class="sb-wrapper sb-more sb-show-icon"
            [style.fontSize.px]="size"
            (click)="toggle.emit(!expanded)">

      <div class="sb-inner">
        <div class="sb-content">
          <div class="sb-icon">
            <fa-icon [icon]="icon[expanded]"></fa-icon>
          </div>
        </div>
      </div>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class ExpandButtonComponent {

  icon: any = {
    true: faMinus,
    false: faEllipsisH
  };
  @Input() expanded: string;
  @Input() size: number;
  @Output() toggle = new EventEmitter();
}
