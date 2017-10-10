import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnDestroy,
  ViewChild,
  ChangeDetectorRef,
  ElementRef,
  HostBinding
} from '@angular/core';

import { ShareButtonDirective } from '../../directives/share-button.directive';
import { ShareButtonsService } from '../../services/share-buttons.service';

@Component({
  selector: 'share-button',
  templateUrl: './share-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareButtonComponent implements OnDestroy {

  /** Share URL */
  url: string;

  /** Share count value */
  shareCount: number;

  /** Button name e.g. fb, twitter, reddit...etc */
  button: string;

  @Input('button')
  set createButton(button: string) {
    this.shareCount = 0;
    this.button = button;
  }

  /** on set share URL */
  @Input('url')
  set setUrl(newUrl: string) {
    /** Reset share count when url changes */
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
  @Input() size = this.share.size;

  /** Get and display share count */
  showCount = false;

  @Input('showCount')
  set setShowCount(show: boolean) {
    this.showCount = show;
    /** Subscribe to count event */

    /** Check if sbCount has observers already, don't subscribe again */
    if (!this.shareDirective.sbCount.observers.length) {

      /** Subscribe to the directive count's event only if 'show' is true or 'sbCount' has observers */
      if (this.showCount || this.count.observers.length) {
        this.shareDirective.sbCount.subscribe(count => {
          this.shareCount = count;
          this.count.emit(count);
          this.cd.markForCheck();
        });
      }

    }

  }

  /** Button theme */
  @Input('theme')
  set setTheme(theme: string) {
    this.buttonClass = 'sb-button sb-' + theme;
  }

  /** Set theme as button class */
  @HostBinding('class') buttonClass = 'sb-button sb-' + this.share.theme;

  /** Share count event */
  @Output() count = new EventEmitter<number>();

  /** Share dialog opened event */
  @Output() opened = new EventEmitter<string>();

  /** Share dialog closed event */
  @Output() closed = new EventEmitter<string>();

  /** Share directive ref */
  @ViewChild(ShareButtonDirective)
  shareDirective: ShareButtonDirective;

  /** <ng-content> wrapper, used to add class e.g. sb-default, sb-text, sb-count */
  @ViewChild('template')
  template: ElementRef;

  constructor(private cd: ChangeDetectorRef, private share: ShareButtonsService) {
  }

  ngOnDestroy() {
    this.shareDirective.sbCount.complete();
  }

}
