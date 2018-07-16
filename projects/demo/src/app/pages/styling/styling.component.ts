import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'styling',
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StylingComponent implements OnInit {

  componentCode = `<share-buttons theme="moon"></share-buttons>`;
  stylingCode = `.sb-moon-theme {
  &.sb-group {
    /** ... share buttons container */
  }
  .sb-wrapper { /** ... share button wrapper */
    background-color: var(--button-color);

    .sb-inner { /** ... inner wrapper */
      .sb-content { /** ... content wrapper */
        .sb-icon { /** ... icon wrapper */ }
        .sb-text { /** ... text wrapper */ }
       }
      .sb-count { /** ... count wrapper */ }
    }

    // For conditional styles
    &.sb-show-icon.sb-show-text.sb-show-count {
      /** ... Apply when icon, text and count are shown */
      .sb-icon { /** ... icon wrapper */ }
      .sb-text { /** ... text wrapper */ }
    }
  }
}`;

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Styling Guide');
  }

}
