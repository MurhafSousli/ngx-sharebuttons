import {NgModule} from '@angular/core';
import {JsonpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {ShareButtonsComponent} from './components/share-buttons/share-buttons.component';
import {ShareButtonComponent} from './components/share-button/share-button.component';
import {ShareButtonsService} from "./service/share-buttons.service";
import {NFormatterPipe} from './helpers/n-formatter.pipe';

import {ShareProvider} from './helpers/share-provider.enum';
import {ShareButton, ShareArgs} from './helpers/share-buttons.class';

@NgModule({
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
        ShareButtonsService
    ],
    exports: [
        ShareButtonsComponent,
        ShareButtonComponent,
        NFormatterPipe
    ]
})
export class ShareButtonsModule {

}

export {
    ShareButtonsComponent,
    ShareButtonComponent,
    ShareProvider,
    ShareButton,
    NFormatterPipe,
    ShareButtonsService,
    ShareArgs
}