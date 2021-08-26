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
    // E.g. Apply only when icon, text are shown
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

  cssVariables = `--sb-margin
--sb-min-width
--sb-height
--sb-color
--sb-background
--sb-font-size
--sb-icon-size
--sb-padding
--sb-text-padding
--sb-border
--sb-border-radius
--sb-line-height
--sb-text-shadow
--sb-font-weight
--sb-overflow`;

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Styling Guide');
  }

}
