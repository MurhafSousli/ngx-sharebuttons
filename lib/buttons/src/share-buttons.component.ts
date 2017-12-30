import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';
import { ShareButtons } from '@ngx-share/core';

@Component({
  selector: 'share-buttons',
  templateUrl: './share-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareButtonsComponent implements OnInit {

  /** Share Buttons array */
  buttons: string[] = [];

  /** Buttons to include */
  includeButtons: string[] = this.share.buttons;

  /** Buttons to exclude */
  excludeButtons: string[] = [];

  /** Number of shown buttons */
  shownButtons = this.includeButtons.length;

  /** Number of included buttons */
  totalButtons;

  /** Disable more/less buttons */
  showAll = false;

  @Input() theme = this.share.theme;

  @Input('include')
  set include(includeButtons: string[]) {
    this.includeButtons = includeButtons;
    this.buttons = this.includeButtons.filter((btn) => this.excludeButtons.indexOf(btn) < 0);
  }

  @Input('exclude')
  set exclude(excludeButtons: string[]) {
    this.excludeButtons = excludeButtons;
    this.buttons = this.includeButtons.filter((btn) => this.excludeButtons.indexOf(btn) < 0);
  }

  @Input('show')
  set setShownButtons(shownCount: number) {
    this.shownButtons = shownCount;
    this.totalButtons = this.buttons.length;
    /** Set showAll to true if shown buttons count = selected buttons count */
    this.showAll = this.shownButtons === this.totalButtons + 1;
  }

  /** Set share URL */
  @Input() url: string;

  /** Share meta tags */
  @Input() title: string;
  @Input() description: string;
  @Input() image: string;
  @Input() tags: string;

  /** Show buttons icon */
  @Input() showIcon = true;

  /** Show buttons name */
  @Input() showText = false;

  /** Show buttons share count */
  @Input() showCount = false;

  /** Buttons size */
  @Input() size = 0;

  /** Share count event */
  @Output() count = new EventEmitter<number>();

  /** Share dialog opened event */
  @Output() opened = new EventEmitter<string>();

  /** Share dialog closed event */
  @Output() closed = new EventEmitter<string>();

  constructor(public share: ShareButtons) {
  }

  ngOnInit() {
    /**  if user didn't select the buttons use all */
    if (!this.excludeButtons.length) {
      this.buttons = this.includeButtons.filter((btn) => this.excludeButtons.indexOf(btn) < 0);
    }
  }

  more() {
    this.totalButtons = this.shownButtons;
    this.shownButtons = this.buttons.length;
    this.showAll = true;
  }

  less() {
    this.shownButtons = this.totalButtons;
    this.showAll = false;
  }

}
