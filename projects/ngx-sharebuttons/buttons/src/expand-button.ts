import { Component, Input, Output, EventEmitter, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { ShareButtonsConfig } from 'ngx-sharebuttons';

@Component({
  standalone: true,
  selector: 'expand-button',
  template: `
    <button class="sb-wrapper sb-expand sb-show-icon"
            [attr.aria-label]="expand ? options.lessButtonAriaLabel : options.moreButtonAriaLabel"
            (click)="expandChange.emit(!expand)">

      <div class="sb-content">
        <div class="sb-icon">
          <fa-icon [icon]="expand ? options.lessButtonIcon : options.moreButtonIcon"/>
        </div>
      </div>
    </button>
  `,
  styleUrls: ['../../button/src/share-button.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FaIconComponent]
})
export class ExpandButton {

  @Input() options: ShareButtonsConfig;

  @Input() expand: boolean;

  @Output() expandChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(el: ElementRef) {
    el.nativeElement.style.setProperty('--button-color', '#FF6651');
  }
}
