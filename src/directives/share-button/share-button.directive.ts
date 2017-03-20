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
import { ShareArgs, ShareProvider, Helper } from '../../helpers/index';

@Directive({
    selector: '[shareButton]'
})
export class ShareButtonDirective implements OnChanges {

    /** Button type e.g. fb, twitter, reddit...etc */
    private provider: ShareProvider;

    @Input() set shareButton(value: string | number) {
        this.provider = Helper.getEnumValue(value, ShareProvider);

        if (typeof this.provider === 'undefined') {
            throw new Error(`[shareButton] must be set to one of the values (numeric or string) of ShareProvider enum: was '${value}'`);
        }
    }


    /** Share Args */
    @Input() sbUrl: string;
    @Input() sbTitle: string;
    @Input() sbDescription: string;
    @Input() sbImage: string;
    @Input() sbTags: string;
    @Input() sbShowCount: boolean;

    /** Output button count to calculate total share counts */
    @Output() sbCount = new EventEmitter<number>();
    /** Output pop up closed*/
    @Output() sbPopUpClosed = new EventEmitter<ShareProvider>();

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
                if (this.sbShowCount) {
                    this.sbService.count(this.provider, this.sbUrl, this.sbCount);
                }
            }
        }
    }

    /** Open share window */
    share() {
        let args = new ShareArgs(this.sbUrl, this.sbTitle, this.sbDescription, this.sbImage, this.sbTags);
        this.sbService.share(this.provider, args, this.sbPopUpClosed);
    }
}
