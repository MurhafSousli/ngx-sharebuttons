import {
  Component,
  Input,
  Output,
  ViewChild,
  HostBinding,
  AfterViewInit,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { ShareService, ShareDirective } from '@ngx-share/core';

@Component({
  selector: 'share-button',
  templateUrl: './share-button.html',
  styleUrls: ['./share-button.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareButton implements AfterViewInit {

  /** The sharing link */
  url: string;

  /** Share count value */
  shareCount: number;

  /** Button name */
  button: string;

  @Input('button') set createButton(button: string) {
    this.shareCount = 0;
    this.button = button;
  }

  /** Set the sharing link */
  @Input('url') set setUrl(url: string) {
    this.shareCount = 0;
    this.url = url;
  }

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

  /** Show button icon */
  @Input() showIcon = true;

  /** Show button text */
  @Input() showText = false;

  /** Show sharing count */
  @Input() showCount = false;

  /** Button custom text */
  @Input() text: string;

  /** Button custom icon */
  @Input() icon: string;

  /** Button size */
  @Input() size: number = this._share.config.size;

  /** Button theme */
  @Input() theme: string = this._share.config.theme;

  /** Stream that emits when share count is fetched */
  @Output() count = new EventEmitter<number>();

  /** Stream that emits when share dialog is opened */
  @Output() opened = new EventEmitter<string>();

  /** Stream that emits when share dialog is closed */
  @Output() closed = new EventEmitter<string>();

  /** Set theme as button class */
  @HostBinding('class') get buttonClass() {
    return `sb-button sb-${this.theme}`;
  }

  @ViewChild(ShareDirective) ref: ShareDirective;

  constructor(private _cd: ChangeDetectorRef,
              private _share: ShareService) {
  }

  ngAfterViewInit() {
    this._cd.detectChanges();
  }

  onCount(count: number) {
    this.shareCount = count;
    this.count.emit(count);
  }

}
