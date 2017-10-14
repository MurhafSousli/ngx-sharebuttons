import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef,
  QueryList,
  ViewChildren,
  OnInit,
  HostBinding
} from '@angular/core';
import { ShareButtonsService } from '../../services/share-buttons.service';
import { ShareButtonComponent } from '../share-button/share-button.component';

@Component({
  selector: 'share-buttons',
  templateUrl: './share-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareButtonsComponent implements OnInit, OnDestroy {

  /** Share URL */
  url: string;

  /** Share count value */
  shareCount: number;

  /** Share Buttons array */
  buttons: string[] = [];

  /** Buttons to include */
  includeButtons: string[] = this.share.buttons;

  /** Buttons to exclude */
  excludeButtons: string[] = [];

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

  /** Number of buttons to show */
  shownButtons = this.includeButtons.length;
  totalButtons;
  showAll = false;

  @Input('show')
  set setShownButtons(shownCount: number) {
    this.shownButtons = shownCount;
    this.totalButtons = this.buttons.length;
    /** Set showAll to true if shown buttons count = selected buttons count */
    this.showAll = this.shownButtons === this.totalButtons + 1;
  }

  /** Set share URL */
  @Input('url')
  set setUrl(newUrl: string) {
    /** Reset share count on url changes */
    this.shareCount = 0;
    this.url = newUrl;
  }

  /** Share meta tags */
  @Input() title: string;
  @Input() description: string;
  @Input() image: string;
  @Input() tags: string;

  /** Show button icon */
  @Input() showIcon = true;

  /** Show button name */
  @Input() showName = false;

  /** Button size */
  @Input() size: number;

  /** Get and display share count */
  showCount = false;

  @Input('showCount')
  set setShowCount(show: boolean) {
    this.showCount = show;

    if (this.shareComponents) {
      /** Subscribe to count event */
      this.shareComponents.forEach((shareComponent: ShareButtonComponent) => {

        /** Check if sbCount has observers already, don't subscribe again */
        if (!shareComponent.count.observers.length) {

          /** Subscribe to the component count event (only if [showCount]=true) */
          if (show || this.count.observers.length) {
            shareComponent.count.subscribe(count => {
              this.shareCount = count;
              this.count.emit(count);
              this.cd.markForCheck();
            });
          }
        }
      });
    }
  }

  /** Buttons theme */
  theme;

  @Input('theme')
  set setTheme(theme: string) {
    /** Set buttons' theme to override the default theme */
    this.theme = theme;
    /** Set buttons' container theme */
    this.containerClass = 'sb-group sb-' + theme;
  }

  /** Set theme as buttons' container class */
  @HostBinding('class') containerClass = 'sb-group sb-' + this.share.theme;

  /** Share count event */
  @Output() count = new EventEmitter<number>();

  /** Share dialog opened event */
  @Output() opened = new EventEmitter<string>();

  /** Share dialog closed event */
  @Output() closed = new EventEmitter<string>();

  /** Share components ref */
  @ViewChildren(ShareButtonComponent) shareComponents: QueryList<ShareButtonComponent>;

  constructor(private cd: ChangeDetectorRef, public share: ShareButtonsService) {

  }

  ngOnInit() {
    /**  if use didn't select the buttons use all */
    if (!this.excludeButtons.length) {
      this.buttons = this.includeButtons.filter((btn) => this.excludeButtons.indexOf(btn) < 0);
    }
  }

  ngOnDestroy() {
    this.shareComponents.forEach((shareComponent: ShareButtonComponent) => {
      shareComponent.count.unsubscribe();
    });
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
