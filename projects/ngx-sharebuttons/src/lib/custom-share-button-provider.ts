import { EnvironmentProviders, InjectionToken, makeEnvironmentProviders } from '@angular/core';
import { IShareButton, IShareButtons } from './share.models';
import { SHARE_BUTTONS } from './share.defaults';

export const SHARE_BUTTONS_PROP: InjectionToken<IShareButtons> = new InjectionToken<IShareButtons>('SHARE_BUTTONS_PROP', {
  providedIn: 'root',
  factory: () => SHARE_BUTTONS
});

export function customShareButton(key: string, button: IShareButton): EnvironmentProviders {
  SHARE_BUTTONS[key] = {
    ...SHARE_BUTTONS[key],
    ...button
  };
  return makeEnvironmentProviders([
    {
      provide: SHARE_BUTTONS_PROP,
      useValue: SHARE_BUTTONS
    }
  ]);
}
