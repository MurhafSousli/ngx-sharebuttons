import { Inject, InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export const SHARE_BUTTONS_ICONS = new InjectionToken<IconDefinition[]>('SHARE_BUTTONS_ICONS');

@NgModule({
  imports: [
    FontAwesomeModule
  ]
})
export class ShareCustomIconsModule {

  constructor(iconLibrary: FaIconLibrary, @Inject(SHARE_BUTTONS_ICONS) icons) {
    console.log('inject', icons);
    iconLibrary.addIcons(icons);
  }

  static withConfig(icons?: any): ModuleWithProviders<ShareCustomIconsModule> {
    return {
      ngModule: ShareCustomIconsModule,
      providers: [{provide: SHARE_BUTTONS_ICONS, useValue: icons}]
    };
  }
}
