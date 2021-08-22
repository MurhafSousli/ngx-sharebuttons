import {
  Component,
  Input,
  Output,
  OnInit,
  OnChanges,
  OnDestroy,
  EventEmitter,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { ShareService, ShareButtonsConfig, SHARE_BUTTONS } from 'ngx-sharebuttons';

interface ButtonsState {
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
  templateUrl: './share-buttons.html',
  styleUrls: ['./share-buttons.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareButtons implements OnInit, OnChanges, OnDestroy {

  state$: Observable<ButtonsState>;
  private _state$ = new BehaviorSubject<ButtonsState>({
    includedButtons: [],
    excludedButtons: [],
    userButtons: [],
    selectedButtons: [],
    expanded: true,
    shownCount: Object.keys(SHARE_BUTTONS).length
  });

  private _configSub$ = Subscription.EMPTY;

  @Input() theme = this._share.config.theme;

  /** Array of included buttons */
  @Input() include: string[];

  /** Array of excluded buttons */
  @Input() exclude: string[];

  /** Numbers of buttons to show */
  @Input() show: number;

  /** The sharing link */
  @Input() url: string;

  /** The title parameter */
  @Input() title: string;

  /** The description parameter */
  @Input() description: string;

  /** The image parameter for sharing on Pinterest */
  @Input() image: string;

  /** The tags parameter for sharing on Twitter and Tumblr */
  @Input() tags: string;

  /** Sets meta tags from document head, useful when SEO is available */
  @Input() autoSetMeta: boolean;

  /** Show buttons icons */
  @Input() showIcon = true;

  /** Show buttons text */
  @Input() showText = false;

  /** Buttons size */
  @Input() size = 0;

  /** A flag that indicates if the button's click is disabled */
  @Input() disabled: boolean;

  /** Share dialog opened event */
  @Output() opened = new EventEmitter<string>();

  /** Share dialog closed event */
  @Output() closed = new EventEmitter<string>();

  constructor(private _share: ShareService) {
  }

  ngOnInit() {
    this.state$ = this._state$.pipe(
      map((state: ButtonsState) => {
        // Use component include buttons, otherwise fallback to global include buttons
        const includedButtons = state.includedButtons && state.includedButtons.length ? state.includedButtons : state.userButtons;
        const userButtons = state.excludedButtons ? includedButtons.filter((btn) => state.excludedButtons.indexOf(btn) < 0) : includedButtons;
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

    // Subscribe to share buttons config changes, This updates the component whenever a new button is added
    this._configSub$ = this._share.config$.subscribe((config: ShareButtonsConfig) => {
      // Use global include buttons, otherwise fallback to all buttons
      const includedButtons = config.include.length ? config.include : Object.keys(SHARE_BUTTONS);
      const userButtons = includedButtons.filter((btn) => config.exclude.indexOf(btn) < 0);
      this.updateState({
        userButtons,
        expanded: false,
        moreIcon: config.moreButtonIcon,
        lessIcon: config.lessButtonIcon
      });
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const shouldUpdate =
      (changes['include'] && changes['include'].currentValue !== changes['include'].previousValue) ||
      (changes['exclude'] && changes['exclude'].currentValue !== changes['exclude'].previousValue) ||
      (changes['show'] && changes['show'].currentValue !== changes['show'].previousValue);

    if (shouldUpdate) {
      this.updateState({
        includedButtons: this.include,
        excludedButtons: this.exclude,
        shownCount: this.show
      });
    }
  }

  ngOnDestroy() {
    this._configSub$.unsubscribe();
    this._state$.complete();
  }

  updateState(state: ButtonsState) {
    this._state$.next({...this._state$.value, ...state});
  }

}

/**
 * Explanation of the above code:
 * ------------------------------
 Include buttons: includes only wanted buttons and excludes the rest
 Exclude buttons: excludes only the unwanted buttons
 User buttons = Include buttons - exclude buttons
 Selected Buttons = User buttons [shown number]
 */
