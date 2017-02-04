import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';

import { ShareButtonsComponent } from './components/share-buttons/share-buttons.component';
import { ShareButtonComponent } from './components/share-button/share-button.component';
import { ShareButtonDirective } from './directives/share-button/share-button.directive';
import { ShareButtonsService } from './service/share-buttons.service';
import { WindowService } from './service/window.service';
import { NFormatterPipe } from './helpers/n-formatter.pipe';
import { ShareProvider } from './helpers/share-provider.enum';
import { ShareButton, ShareArgs } from './helpers/share-buttons.class';

@NgModule({
    declarations: [
        ShareButtonsComponent,
        ShareButtonComponent,
        ShareButtonDirective,
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
        ShareButtonDirective,
        NFormatterPipe
    ]
})
export class ShareButtonsModule {

}

export {
    ShareButtonsComponent,
    ShareButtonComponent,
    ShareButtonDirective,
    ShareProvider,
    ShareButton,
    NFormatterPipe,
    ShareButtonsService,
    ShareArgs
}
