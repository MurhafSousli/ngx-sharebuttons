import { ModuleWithProviders } from '@angular/core';
import { ShareButtons, ShareButtonsConfig } from '@ngx-share/core';
export declare function ShareButtonsFactory(config: ShareButtonsConfig): ShareButtons;
export declare class ShareButtonModule {
    static forRoot(config?: ShareButtonsConfig): ModuleWithProviders;
}
