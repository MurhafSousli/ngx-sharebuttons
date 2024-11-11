import {
  Component,
  output,
  input,
  ElementRef,
  InputSignal,
  OutputEmitterRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { ShareButtonsConfig } from 'ngx-sharebuttons';

@Component({
  standalone: true,
  selector: 'expand-button',
  template: `
    <button class="sb-wrapper sb-expand sb-show-icon"
            [attr.aria-label]="expand() ? options().lessButtonAriaLabel : options().moreButtonAriaLabel"
            (click)="expandChange.emit(!expand())">

      <div class="sb-content">
        <div class="sb-icon">
          <fa-icon [icon]="expand() ? options().lessButtonIcon : options().moreButtonIcon"/>
        </div>
      </div>
    </button>
  `,
  styleUrl: '../../button/src/share-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FaIconComponent]
})
export class ExpandButton {

  options: InputSignal<ShareButtonsConfig> = input<ShareButtonsConfig>();

  expand: InputSignal<boolean> = input<boolean>();

  expandChange: OutputEmitterRef<boolean> = output<boolean>();

  constructor(el: ElementRef) {
    el.nativeElement.style.setProperty('--button-color', '#FF6651');
  }
}
