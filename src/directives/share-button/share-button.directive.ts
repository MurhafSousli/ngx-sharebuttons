import {
    Directive,
    OnChanges,
    Input,
    Output,
    HostListener,
    SimpleChanges,
    EventEmitter
} from '@angular/core';

import { ShareButtonsService } from '../../service/share-buttons.service';
import { ShareButton, ShareArgs, ShareProvider, Helper } from '../../helpers';


@Directive({
    selector: '[shareButton]'
})
export class ShareButtonDirective implements OnChanges {

    private _provider: ShareProvider;

    /** Share Args */
    @Input() url: string;
    @Input() title: string;
    @Input() description: string;
    @Input() image: string;
    @Input() tags: string;

    /** Button type e.g. fb, twitter, reddit...etc */
    @Input() button: ShareButton;
    /** Show count, disabled by default */
    @Input() count: boolean = false;
    /** Output button count to calculate total share counts */
    @Output() countOuter = new EventEmitter<number>();

    /** Output pop up closed*/
    @Output() popUpClosed = new EventEmitter<ShareProvider>();

    @HostListener('click') onClick() {
        this.share();
    }

    @Input()
    set shareButton(value: string | number) {

        this._provider = Helper.getEnumValue(value, ShareProvider);

        if (!this._provider) {
            throw new Error('[shareButton] attribute must be set to one of the values (numeric or string) of ShareProvider enum');
        }
    }

    get provider() {
        return this._provider;
    }

    constructor(private sbService: ShareButtonsService) {
    }

    ngOnChanges(changes: SimpleChanges) {
        /** Validate URL */
        this.url = this.sbService.validateUrl(this.url);

        if (changes['url']) {
            let currUrl = changes['url'].currentValue;
            let prevUrl = changes['url'].previousValue;

            if (currUrl && currUrl !== prevUrl) {

                /** Add share count if enabled */
                if (changes['count'] && changes['count'].currentValue) {

                    this.sbService.count(this.provider, this.url)
                        .subscribe(shareCount => {
                            this.countOuter.emit(shareCount);
                        });
                }
            }
        }
    }

    /** Open share window */
    share() {
        let args = new ShareArgs(this.url, this.title, this.description, this.image, this.tags);
        this.sbService.share(this.provider, args, this.popUpClosed);
    }
}
