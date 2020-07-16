import { Component, Input, Output, ElementRef, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'expand-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button class="sb-wrapper sb-expand sb-show-icon"
            [style.fontSize.px]="size"
            (click)="toggle.emit(!expanded)">

      <div class="sb-content">
        <div class="sb-icon">
          <fa-icon [icon]="expanded ? lessIcon : moreIcon"></fa-icon>
        </div>
      </div>
    </button>
  `
})
export class ExpandButton {

  @Input() moreIcon: any;
  @Input() lessIcon: any;
  @Input() expanded: string;
  @Input() size: number;
  @Output() toggle = new EventEmitter<boolean>();

  constructor(el: ElementRef) {
    el.nativeElement.style.setProperty('--button-color', '#FF6651');
  }
}
