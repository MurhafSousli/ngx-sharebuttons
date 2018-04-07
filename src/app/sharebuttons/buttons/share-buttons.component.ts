import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy
} from '@angular/core';
import { ShareButtons, ShareButtonsConfig } from '../core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators/map';

export interface ButtonsState {
  includedButtons?: string[];
  excludedButtons?: string[];
  userButtons?: string[];
  selectedButtons?: string[];
  expanded?: boolean;
  shownCount?: number;
}

@Component({
  selector: 'share-buttons',
  templateUrl: './share-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class ShareButtonsComponent implements OnInit, OnDestroy {

  configSub$: Subscription;
  state$: Observable<ButtonsState>;
  stateWorker$ = new BehaviorSubject<ButtonsState>({
    includedButtons: [],
    excludedButtons: [],
    userButtons: [],
    selectedButtons: [],
    expanded: true,
    shownCount: Object.keys(this.share.config.prop).length
  });

  @Input() theme = this.share.theme;

  @Input('include') set includedButtons(includedButtons: string[]) {
    this.updateState({includedButtons});
  }

  @Input('exclude') set excludedButtons(excludedButtons: string[]) {
    this.updateState({excludedButtons});
  }

  @Input('show') set shownButtons(shownCount: number) {
    this.updateState({shownCount});
  }

  /** Share meta tags */
  @Input() url: string;
  @Input() title: string;
  @Input() description: string;
  @Input() image: string;
  @Input() tags: string;

  /** Set meta tags from document head, useful when SEO is supported */
  @Input() autoSetMeta: boolean;

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
    this.state$ = this.stateWorker$.pipe(
      map((state: ButtonsState) => {
        // Use component include buttons, otherwise fallback to global include buttons
        const includedButtons = state.includedButtons.length ? state.includedButtons : state.userButtons;
        const userButtons = includedButtons.filter((btn) => state.excludedButtons.indexOf(btn) < 0);
        const selectedButtons = userButtons.slice(0, state.expanded ? userButtons.length : state.shownCount);
        return {
          userButtons,
          selectedButtons,
          expanded: state.expanded,
          shownCount: state.shownCount
        };
      })
    );

    /** Subscribe to share buttons config changes, This updates the component whenever a new button is added */
    this.configSub$ = this.share.config$.subscribe((config: ShareButtonsConfig) => {
      // Use global include buttons, otherwise fallback to all buttons
      const includedButtons = config.options.include.length ? config.options.include : Object.keys(config.prop);
      const userButtons = includedButtons.filter((btn) => config.options.exclude.indexOf(btn) < 0);
      this.updateState({
        userButtons,
        expanded: false
      });
    });
  }

  updateState(state: ButtonsState) {
    this.stateWorker$.next({...this.stateWorker$.getValue(), ...state});
  }

  ngOnDestroy() {
    if (this.configSub$) {
      this.configSub$.unsubscribe();
    }
  }

}

/**
 * Explanation of the above code:
 * ------------------------------
 Include buttons: includes only wanted buttons and excludes the rest
 Exclude buttons: excludes only the unwanted buttons
 User buttons = Include buttons - exclude buttons
 Selected Buttons = User buttons [shown number]

 =====================================================================================

 Why do we use both include and exclude inputs?

 Because it is easier for users who want to disable one button to use [exclude] input instead of writing an array of all included buttons
 And it is easier for users who want to enable only one button to use [include] input instead of writing an array of all excluded buttons
 */
