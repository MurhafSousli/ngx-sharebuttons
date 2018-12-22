import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  host: {
    'class': 'page'
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
    // Inner wrapper
    .sb-inner {
      // Content wrapper
      .sb-content {
        // Icon wrapper
        .sb-icon {
        }
        // Text wrapper
        .sb-text {
        }
      }
      // Count wrapper
      .sb-count {
      }
    }

    // For conditional styles
    // E.g. Apply when icon, text and count are shown
    &.sb-show-icon.sb-show-text.sb-show-count {
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
