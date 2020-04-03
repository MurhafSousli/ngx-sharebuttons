import { Component, Input, AfterViewInit, AfterContentChecked, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subject, Subscription, of } from 'rxjs';
import { tap, take, switchMap, debounceTime, delay, distinctUntilChanged, filter } from 'rxjs/operators';
import { LocalStorage } from '@ngx-pwa/local-storage';

import { ShareService, SHARE_BUTTONS } from '../../../../../ngx-sharebuttons/src/public-api';

import { CodeDialogComponent } from '../code-dialog/code-dialog.component';

@Component({
  selector: 'lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabComponent implements AfterViewInit, AfterContentChecked, OnDestroy {

  config = {
    updateDate: '30032018',
    url: 'https://twitter.com/',
    title: undefined,
    description: undefined,
    tags: undefined,
    image: undefined,
    showIcon: true,
    showText: false,
    showCount: false,
    autoSetMeta: false,
    /** Selected single button */
    button: 'facebook',
    /** Selected buttons */
    include: Object.keys(SHARE_BUTTONS),
    allButtons: Object.keys(SHARE_BUTTONS),
    exclude: [],
    theme: 'modern-dark',
    themes: [
      'default',
      'material-light',
      'material-dark',
      'classic-light',
      'classic-dark',
      'modern-light',
      'modern-dark',
      'circles-dark',
      'circles-light',
      'outline'
    ],
    show: 5,
    size: 0
  };
  prevConfig = {...this.config};

  /** Check if config is loaded from localstorage */
  ready = false;

  urlControl = new FormControl();
  urlSub: Subscription;
  saveSub = new Subject();

  opened: string;
  closed: string;
  count: number;
  closedChanged = new Subject();
  openedChanged = new Subject();
  countChanged = new Subject();

  /** Lab for a single share buttons or for share buttons container */
  @Input() component;

  constructor(private share: ShareService, private dialog: MatDialog, private cd: ChangeDetectorRef, protected localStorage: LocalStorage) {
  }

  onCountChanged(e) {
    this.count = e;
    this.countChanged.next(true);
    of(e).pipe(
      delay(800),
      take(1),
      tap(() => this.countChanged.next(false))
    ).subscribe();
  }

  onOpenedChanged(e) {
    this.opened = e;
    this.openedChanged.next(true);
    of(e).pipe(
      delay(800),
      take(1),
      tap(() => this.openedChanged.next(false))
    ).subscribe();
  }

  onClosedChanged(e) {
    this.closed = e;
    this.closedChanged.next(true);
    of(e).pipe(
      delay(800),
      take(1),
      tap(() => this.closedChanged.next(false))
    ).subscribe();
  }

  showCode() {

    let code = `<${this.component}`;

    if (this.config.theme) {
      code += ` [theme]="'${this.config.theme}'"`;
    }

    if (this.component === 'share-button') {
      code += `\n [button]="'${this.config.button}'"`;
    } else {

      if (this.config.include.length !== this.share.config.include.length) {
        code += `\n [include]="[${this.config.include.map(btn => `'${btn}'`)}]"`;
      }

      if (this.config.exclude.length) {
        code += `\n [exclude]="[${this.config.exclude.map(btn => `'${btn}'`)}]"`;
      }

      if (this.config.show) {
        code += `\n [show]="${this.config.show}"`;
      }
    }

    if (!this.config.showIcon) {
      code += `\n [showIcon]="${this.config.showIcon}"`;
    }

    if (this.config.showText) {
      code += `\n [showText]="${this.config.showText}"`;
    }

    if (this.config.showCount) {
      code += `\n [showCount]="${this.config.showCount}"`;
    }

    if (this.config.size) {
      code += `\n [size]="${this.config.size}"`;
    }

    if (this.config.url) {
      code += `\n [url]="'${this.config.url}'"`;
    }

    if (this.config.title) {
      code += `\n [title]="'${this.config.title}'"`;
    }

    if (this.config.description) {
      code += `\n [description]="'${this.config.description}'"`;
    }

    if (this.config.image) {
      code += `\n [image]="'${this.config.image}'"`;
    }

    if (this.config.tags) {
      code += `\n [tags]="'${this.config.tags}'"`;
    }

    if (!this.config.autoSetMeta) {
      code += `\n [autoSetMeta]="${this.config.autoSetMeta}"`;
    }

    code += `\n></${this.component}>`;


    this.dialog.open(CodeDialogComponent, {
      width: '600px',
      height: '300px',
      autoFocus: false,
      panelClass: 'code-dialog',
      data: code
    });

  }

  getMax() {
    return this.config.include.filter((btn) => this.config.exclude.indexOf(btn) < 0).length;
  }

  ngAfterViewInit() {
    this.urlSub = this.urlControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap((text: string) => {
        this.config = {...this.config, url: text};
        this.cd.markForCheck();
      })
    ).subscribe();

    this.saveSub.pipe(
      filter(() => JSON.stringify(this.config) !== JSON.stringify(this.prevConfig)),
      switchMap(() => {
        this.prevConfig = {...this.config};
        return this.localStorage.setItem('labConfig', this.config);
      })
    ).subscribe();

    this.localStorage.getItem('labConfig').pipe(
      tap((config: any) => {
        this.config = {...this.config, ...config};
        this.prevConfig = {...this.config};
      })
    ).subscribe(() => {
      this.ready = true;
      this.cd.markForCheck();
    });
  }

  ngAfterContentChecked() {

    this.saveSub.next();
  }

  ngOnDestroy() {
    if (this.urlSub) {
      this.urlSub.unsubscribe();
    }
    if (this.saveSub) {
      this.saveSub.unsubscribe();
    }
  }
}
