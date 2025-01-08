import {
  Component,
  Input,
  inject,
  signal,
  OnDestroy,
  AfterViewInit,
  WritableSignal,
  AfterContentChecked,
  ChangeDetectionStrategy
} from '@angular/core';
import { Subject, Subscription, tap, switchMap, filter } from 'rxjs';
import { StorageMap } from '@ngx-pwa/local-storage';

import { defaultOptions, SHARE_BUTTONS } from 'ngx-sharebuttons';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { ShareButtons } from 'ngx-sharebuttons/buttons';
import { ShareButton } from 'ngx-sharebuttons/button';
import { HlCodeComponent } from '../hl-code/hl-code.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lab',
  templateUrl: './lab.component.html',
  styleUrl: './lab.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MaterialModule, CommonModule, FormsModule, ShareButtons, ShareButton, HlCodeComponent]
})
export class LabComponent implements AfterViewInit, AfterContentChecked, OnDestroy {

  protected readonly localStorage: StorageMap = inject(StorageMap);

  showCode: boolean;

  config: any = {
    updateDate: '23052024',
    url: 'https://x.com/',
    title: undefined,
    description: undefined,
    tags: undefined,
    image: undefined,
    showIcon: true,
    showText: false,
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
    show: 5
  };
  prevConfig = { ...this.config };

  /** Check if config is loaded from localstorage */
  ready: WritableSignal<boolean> = signal(false);

  openedChanged: WritableSignal<boolean> = signal(false);

  opened: string;

  urlSub: Subscription;

  saveSub: Subject<void> = new Subject<void>();

  /** Lab for a single share buttons or for share buttons container */
  @Input() component: 'share-buttons' | 'share-button';

  onOpenedChanged(e: string): void {
    this.opened = e;
    this.openedChanged.set(true);
    setTimeout(() => {
      this.openedChanged.set(false)
    }, 800);
  }

  getCode(): string {

    let code: string = `<${ this.component }`;

    if (this.config.theme) {
      code += ` [theme]="'${ this.config.theme }'"`;
    }

    if (this.component === 'share-button') {
      code += `\n [button]="'${ this.config.button }'"`;
    } else {

      if (this.config.include.length !== defaultOptions.include?.length) {
        code += `\n [include]="[${ this.config.include.map(btn => `'${ btn }'`) }]"`;
      }

      if (this.config.exclude.length) {
        code += `\n [exclude]="[${ this.config.exclude.map(btn => `'${ btn }'`) }]"`;
      }

      if (this.config.show) {
        code += `\n [show]="${ this.config.show }"`;
      }
    }

    if (!this.config.showIcon) {
      code += `\n [showIcon]="${ this.config.showIcon }"`;
    }

    if (this.config.showText) {
      code += `\n [showText]="${ this.config.showText }"`;
    }

    if (this.config.url) {
      code += `\n [url]="'${ this.config.url }'"`;
    }

    if (this.config.title) {
      code += `\n [title]="'${ this.config.title }'"`;
    }

    if (this.config.description) {
      code += `\n [description]="'${ this.config.description }'"`;
    }

    if (this.config.image) {
      code += `\n [image]="'${ this.config.image }'"`;
    }

    if (this.config.tags) {
      code += `\n [tags]="'${ this.config.tags }'"`;
    }

    code += `\n></${ this.component }>`;

    return code;
  }

  getMax(): number {
    return this.config.include.filter((btn) => this.config.exclude.indexOf(btn) < 0).length;
  }

  ngAfterViewInit(): void {
    this.saveSub.pipe(
      filter(() => JSON.stringify(this.config) !== JSON.stringify(this.prevConfig)),
      switchMap(() => {
        this.prevConfig = { ...this.config };
        return this.localStorage.set('labConfig', this.config);
      })
    ).subscribe();

    this.localStorage.get('labConfig').pipe(
      tap((config: any) => {
        this.config = { ...this.config, ...config };
        this.prevConfig = { ...this.config };
        this.ready.set(true);
      })
    ).subscribe();
  }

  ngAfterContentChecked(): void {
    this.saveSub.next();
  }

  ngOnDestroy(): void {
    this.urlSub?.unsubscribe();
    this.saveSub?.unsubscribe();
  }
}
