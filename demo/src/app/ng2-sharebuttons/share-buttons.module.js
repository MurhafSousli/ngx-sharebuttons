import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ShareButtonsComponent } from './components/share-buttons/share-buttons.component';
import { ShareButtonComponent } from './components/share-button/share-button.component';
import { ShareButtonsService } from "./service/share-buttons.service";
import { WindowService } from "./service/window.service";
import { NFormatterPipe } from './helpers/n-formatter.pipe';
import { ShareProvider } from './helpers/share-provider.enum';
import { ShareButton, ShareArgs } from './helpers/share-buttons.class';
export var ShareButtonsModule = (function () {
    function ShareButtonsModule() {
    }
    ShareButtonsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ShareButtonsComponent,
                        ShareButtonComponent,
                        NFormatterPipe
                    ],
                    imports: [
                        CommonModule,
                        JsonpModule
                    ],
                    providers: [
                        ShareButtonsService,
                        WindowService
                    ],
                    exports: [
                        ShareButtonsComponent,
                        ShareButtonComponent,
                        NFormatterPipe
                    ]
                },] },
    ];
    /** @nocollapse */
    ShareButtonsModule.ctorParameters = [];
    return ShareButtonsModule;
}());
export { ShareButtonsComponent, ShareButtonComponent, ShareProvider, ShareButton, NFormatterPipe, ShareButtonsService, ShareArgs };
//# sourceMappingURL=share-buttons.module.js.map