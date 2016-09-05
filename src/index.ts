import {NgModule} from '@angular/core';

import {ShareButtons} from './share/share.component';
import {ShareButton} from './share/share.model';

@NgModule({
    declarations: [
        ShareButtons
    ],
    exports: [
        ShareButtons
    ]
})
export class ShareModule{

}

export {
    ShareButtons,
    ShareButton
    }