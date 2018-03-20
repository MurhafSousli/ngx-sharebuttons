import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy
} from '@angular/core';
import { ShareButtons } from '../core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators/map';

export interface ButtonsState {
  userButtons?: string[];
  selectedButtons?: string[];
  expanded?: boolean;
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
    userButtons: [],
    selectedButtons: [],
    expanded: true
  });

  @Input() theme = this.share.theme;

  @Input() include: string[] = [];
  @Input() exclude: string[] = [];

  @Input() show = this.include.length;

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
    this.state$ = this.stateWorker$.pipe(
      map((state: ButtonsState) => {
        // Use component include buttons, otherwise fallback to global include buttons
        const includedButtons = this.include.length ? this.include : state.userButtons;
        const userButtons = includedButtons.filter((btn) => this.exclude.indexOf(btn) < 0);
        const selectedButtons = userButtons.slice(0, state.expanded ? userButtons.length : this.show);
        return {
          userButtons,
          selectedButtons,
          expanded: state.expanded
        };
      })
    );

    this.configSub$ = this.share.config$.subscribe((config) => {
      // Use global include buttons, otherwise fallback all buttons
      const includedButtons = config.options.include.length ? config.options.include : Object.keys(config.prop);
      const userButtons = includedButtons.filter((btn) => this.exclude.indexOf(btn) < 0);
      this.stateWorker$.next({
        userButtons,
        expanded: false
      });
    });
  }

  toggle(expanded: boolean) {
    const state = this.stateWorker$.getValue();
    this.stateWorker$.next({...state, expanded});
  }

  ngOnDestroy() {
    if (this.configSub$) {
      this.configSub$.unsubscribe();
    }
  }

}
