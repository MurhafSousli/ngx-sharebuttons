import { ModuleWithProviders } from '@angular/core';
import { ShareButtons } from './share.service';
import { ShareButtonsConfig } from './share.models';
export declare function ShareButtonsFactory(config: ShareButtonsConfig): ShareButtons;
export declare class ShareModule {
    static forRoot(config?: ShareButtonsConfig): ModuleWithProviders;
}
