import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  host: {
    class: 'page'
  },
  selector: 'styling',
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StylingComponent implements OnInit {

  componentCode = `<share-buttons theme="moon"></share-buttons>`;
  stylingCode = `.sb-moon-theme {
  // share button wrapper
  .sb-wrapper {
    // You can get default button color using the CSS variable
    background-color: var(--button-color);
    // Content wrapper
    .sb-content {
      // Icon wrapper
      .sb-icon {
      }
      // Text wrapper
      .sb-text {
      }
    }

    // For conditional styles
    // E.g. Apply when icon, text are shown
    &.sb-show-icon.sb-show-text {
       // Icon wrapper
      .sb-icon {
      }
      // Text wrapper
      .sb-text {
      }
    }
  }
}`;

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Styling Guide');
  }

}
