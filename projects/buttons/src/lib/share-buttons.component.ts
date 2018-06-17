import { Component, Input, Output, OnInit, OnDestroy, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ShareButtons, ShareButtonsConfig } from '@ngx-share/core';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ButtonsState {
  includedButtons?: string[];
  excludedButtons?: string[];
  userButtons?: string[];
  selectedButtons?: string[];
  expanded?: boolean;
  shownCount?: number;
  moreIcon?: any;
  lessIcon?: any;
}

@Component({
  selector: 'share-buttons',
  templateUrl: './share-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class ShareButtonsComponent implements OnInit, OnDestroy {

  state$: Observable<ButtonsState>;
  private _stateWorker$ = new BehaviorSubject<ButtonsState>({
    includedButtons: [],
    excludedButtons: [],
    userButtons: [],
    selectedButtons: [],
    expanded: true,
    shownCount: Object.keys(this._share.config.prop).length
  });

  private _configSub$: Subscription;

  @Input() theme = this._share.theme;

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

  constructor(private _share: ShareButtons) {
  }

  ngOnInit() {
    this.state$ = this._stateWorker$.pipe(
      map((state: ButtonsState) => {
        // Use component include buttons, otherwise fallback to global include buttons
        const includedButtons = state.includedButtons.length ? state.includedButtons : state.userButtons;
        const userButtons = includedButtons.filter((btn) => state.excludedButtons.indexOf(btn) < 0);
        const selectedButtons = userButtons.slice(0, state.expanded ? userButtons.length : state.shownCount);
        return {
          userButtons,
          selectedButtons,
          expanded: state.expanded,
          shownCount: state.shownCount,
          moreIcon: state.moreIcon,
          lessIcon: state.lessIcon
        };
      })
    );

    /** Subscribe to share buttons config changes, This updates the component whenever a new button is added */
    this._configSub$ = this._share.config$.subscribe((config: ShareButtonsConfig) => {
      // Use global include buttons, otherwise fallback to all buttons
      const includedButtons = config.options.include.length ? config.options.include : Object.keys(config.prop);
      const userButtons = includedButtons.filter((btn) => config.options.exclude.indexOf(btn) < 0);
      this.updateState({
        userButtons,
        expanded: false,
        moreIcon: config.options.moreButtonIcon,
        lessIcon: config.options.lessButtonIcon
      });
    });
  }

  ngOnDestroy() {
    if (this._configSub$) {
      this._configSub$.unsubscribe();
    }
    this._stateWorker$.complete();
  }

  updateState(state: ButtonsState) {
    this._stateWorker$.next({...this._stateWorker$.getValue(), ...state});
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
