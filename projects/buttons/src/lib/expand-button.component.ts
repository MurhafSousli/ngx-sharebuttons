import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'expand-button',
  template: `
    <button class="sb-wrapper sb-expand sb-show-icon"
            [style.fontSize.px]="size"
            (click)="toggle.emit(!expanded)">

      <div class="sb-inner">
        <div class="sb-content">
          <div class="sb-icon">
            <fa-icon [icon]="expanded ? lessIcon : moreIcon"></fa-icon>
          </div>
        </div>
      </div>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class ExpandButtonComponent {

  @Input() moreIcon: string | string[];
  @Input() lessIcon: string | string[];
  @Input() expanded: string;
  @Input() size: number;
  @Output() toggle = new EventEmitter();

  constructor(el: ElementRef) {
    el.nativeElement.style.setProperty('--button-color', '#FF6651');
  }
}
