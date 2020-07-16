import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { SharePopupService } from './share-popup.service';

// import { ShareService } from '../../src/public-api';
import { ShareService } from 'ngx-sharebuttons';

@Component({
  selector: 'share-popup-button',
  template: `
    <div class="sb-button sb-{{theme}}">
      <button shareButtonsPopup
              class="sb-wrapper"
              [theme]="theme"
              [include]="include"
              [exclude]="exclude"
              [show]="show"
              [url]="url"
              [showIcon]="showIcon"
              [showText]="showText"
              [size]="size"
              [tags]="tags"
              [autoSetMeta]="autoSetMeta"
              [title]="title"
              [description]="description"
              [image]="image"
              (closed)="closed.emit($event)"
              (opened)="opened.emit($event)">
        <div class="sb-content">

          <div *ngIf="showIcon" class="sb-icon">
            <fa-icon [icon]="icon" [fixedWidth]="true"></fa-icon>
          </div>

          <div *ngIf="showText" class="sb-text">
            {{ text }}
          </div>

        </div>
      </button>
    </div>
  `,
  styleUrls: ['./share-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharePopupComponent {

  @Input() theme: string = this._share.config.theme;

  @Input() icon: string | string[] = ['fas', 'share'];

  @Input() text: string = 'Share';

  @Input() include!: string[];

  @Input() exclude!: string[];

  @Input() closeIcon: string | string[] = ['fas', 'times-circle'];

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

  @Input() show: number;

  /** Show buttons icons */
  @Input() showIcon = true;

  /** Show buttons text */
  @Input() showText = false;

  /** Buttons size */
  @Input() size = 0;

  /** A flag that indicates if the button's click is disabled */
  @Input() disabled: boolean;

  @Input() hasBackdrop = true;

  @Input() backdropClass: string;

  /** Share dialog opened event */
  @Output() opened = new EventEmitter<string>();

  /** Share dialog closed event */
  @Output() closed = new EventEmitter<string>();

  // Stream that emits when the share popup is closed
  @Output() popupClosed = new EventEmitter<void>();

  constructor(private _sharePopup: SharePopupService, private _share: ShareService) {
  }
}
