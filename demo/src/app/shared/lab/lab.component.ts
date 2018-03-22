import {
  Component,
  Input,
  AfterViewInit,
  AfterContentChecked,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ShareButtons } from '../../share/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { of } from 'rxjs/observable/of';
import { debounceTime, delay, distinctUntilChanged, filter, switchMap, take, tap } from 'rxjs/operators';
import { AsyncLocalStorage } from 'angular-async-local-storage';

import { CodeDialogComponent } from '../code-dialog/code-dialog.component';

@Component({
  selector: 'lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class LabComponent implements AfterViewInit, AfterContentChecked, OnDestroy {

  config = {
    url: 'https://twitter.com/',
    title: '',
    description: '',
    tags: '',
    image: '',
    showIcon: true,
    showText: false,
    showCount: false,
    /** Selected single button */
    button: 'facebook',
    /** Selected buttons */
    include: Object.keys(this.share.prop),
    allButtons: Object.keys(this.share.prop),
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

  constructor(private share: ShareButtons,
              private dialog: MatDialog,
              protected localStorage: AsyncLocalStorage,
              private cd: ChangeDetectorRef) {
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

      if (this.config.include.length !== this.share.config.options.include.length) {
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

    code += `\n></${this.component}>`;


    this.dialog.open(CodeDialogComponent, {
      height: '340px',
      width: '600px',
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
      tap((text: string) => this.config.url = text)
    ).subscribe();

    this.saveSub.pipe(
      filter(() => JSON.stringify(this.config) !== JSON.stringify(this.prevConfig)),
      switchMap(() => {
        this.prevConfig = {...this.config};
        return this.localStorage.setItem('labConfig', this.config);
      })
    ).subscribe();

    this.localStorage.getItem('labConfig').subscribe(config => {
      /** Check if save config themes arrays are identical */
      if (config && JSON.stringify(config.themes) === JSON.stringify(this.config.themes)) {

        this.config = config;
        this.prevConfig = {...config};
        this.cd.markForCheck();
      }
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
