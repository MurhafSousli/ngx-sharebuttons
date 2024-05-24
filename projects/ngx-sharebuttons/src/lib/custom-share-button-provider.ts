import { InjectionToken, Provider } from '@angular/core';
import { IShareButton, IShareButtons } from './share.models';

export const SHARE_BUTTONS_PROP: InjectionToken<IShareButtons> = new InjectionToken<IShareButtons>('SHARE_BUTTONS_PROP');

const customShareButtons: IShareButtons = {};

export function customShareButton(key: string, button: IShareButton): Provider {
  customShareButtons[key] = {
    ...customShareButtons[key],
    ...button
  };
  return {
    provide: SHARE_BUTTONS_PROP,
    useValue: customShareButtons
  }
}
