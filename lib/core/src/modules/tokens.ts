import { InjectionToken } from '@angular/core';
import { ShareButtonsMeta, ShareButtonsOptions } from '../models/share.models';

export const OPTIONS = new InjectionToken<ShareButtonsOptions>('OPTIONS');
export const BUTTONS_META = new InjectionToken<ShareButtonsMeta>('BUTTONS_META');
