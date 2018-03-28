import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'expand-button',
  template: `
    <button class="sb-wrapper sb-more sb-show-icon"
            [style.fontSize.px]="size"
            (click)="toggle.emit(!expanded)">

      <div class="sb-inner">
        <div class="sb-content">
          <div class="sb-icon">
            <i class="fas {{icon[expanded]}}" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class ExpandButtonComponent {

  icon = {
    true: 'fa-minus',
    false: 'fa-ellipsis-h'
  };
  @Input() expanded: boolean;
  @Input() size: number;
  @Output() toggle = new EventEmitter();
}
