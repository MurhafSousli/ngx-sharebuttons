import {
    Directive,
    OnChanges,
    Input,
    Output,
    HostListener,
    SimpleChanges,
    EventEmitter
} from '@angular/core';

import { ShareButtonsService } from '../../services/share-buttons.service';
import { ShareArgs } from '../../helpers';

@Directive({
    selector: '[shareButton]'
})
export class ShareButtonDirective implements OnChanges {

    /** Button type e.g. fb, twitter, reddit...etc */
    @Input() shareButton: string;
    /** Share Args */
    @Input() sbUrl: string;
    @Input() sbTitle: string;
    @Input() sbDesc: string;
    @Input() sbImg: string;
    @Input() sbTags: string;
    @Input() sbCount: boolean;
    /** Output button count to calculate total share counts */
    @Output() sbCount$ = new EventEmitter<number>();
    /** Output pop up closed*/
    @Output() sbClosed$ = new EventEmitter<string>();

    @HostListener('click') onClick() {
        this.share();
    }

    constructor(private sbService: ShareButtonsService) {
    }

    ngOnChanges(changes: SimpleChanges) {
        /** Validate URL */
        this.sbUrl = this.sbService.validateUrl(this.sbUrl);

        if (changes['sbUrl']) {
            let currUrl = changes['sbUrl'].currentValue;
            let prevUrl = changes['sbUrl'].previousValue;

            if (currUrl && currUrl !== prevUrl) {
                /** Add share count if enabled */
                if (this.sbCount) {
                    this.sbService.count(this.shareButton, currUrl, this.sbCount$);
                }
            }
        }
    }

    /** Open share window */
    share() {
        let args = new ShareArgs(this.sbUrl, this.sbTitle, this.sbDesc, this.sbImg, this.sbTags);
        this.sbService.share(this.shareButton, args, this.sbClosed$);
    }
}
