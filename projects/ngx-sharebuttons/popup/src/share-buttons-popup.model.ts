import { EventEmitter, InjectionToken } from '@angular/core';

export interface SharePopupOptions {
  show: number;
  theme: string;
  include: string[];
  exclude: string[];
  url: string;
  title: string;
  description: string;
  image: string;
  tags: string;
  autoSetMeta: boolean;
  showIcon: boolean;
  showText: boolean;
  disabled: boolean;
  opened: EventEmitter<string>;
  closed: EventEmitter<string>;
  closeIcon?: string | string[];
  closeClick: EventEmitter<void>;
  hasBackdrop?: boolean;
  backdropClass?: string;
}

export const SHARE_POPUP_OPTIONS = new InjectionToken<SharePopupOptions>('SHARE_POPUP_OPTIONS');
