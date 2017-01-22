import {
    Component,
    AfterViewInit,
    Input,
    Output,
    EventEmitter,
    Renderer,
    ViewChild,
    ElementRef,
    ChangeDetectionStrategy
} from '@angular/core';

import { ShareButtonsService } from '../../service/share-buttons.service';
import { ShareButton, ShareArgs, ShareProvider } from '../../helpers';


@Component({
    selector: 'share-button',
    template: `<button  #btn (click)='share()'></button>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareButtonComponent implements AfterViewInit {

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

    @ViewChild('btn') btn: ElementRef;

    constructor(private sbService: ShareButtonsService,
        private renderer: Renderer,
        private elementRef: ElementRef) {
    }

    ngAfterViewInit() {
        /** Validate URL */
        this.url = this.sbService.validateUrl(this.url);

        /** Set button template */
        this.renderer.setElementProperty(this.btn.nativeElement, 'innerHTML', this.button.template);

        /** Set buttons classes */
        let classes = this.button.classes.match(/\S+/g) || [];
        classes.map((btnClass) => this.renderer.setElementClass(this.btn.nativeElement, btnClass, true));

        /** Add share count if enabled */
        if (this.count) {
            this.sbService.count(this.button.provider, this.url)
                .subscribe(shareCount => {
                    if (shareCount) {
                        let counter = this.renderer.createElement(this.elementRef.nativeElement, 'span');
                        this.renderer.setElementClass(counter, 'sb-button-count', true);
                        this.renderer.setElementProperty(counter, 'textContent', this.nFormatter(shareCount, 1));
                        this.countOuter.emit(shareCount);
                    }
                });
        }
    }


    /** Open share window */
    share() {
        let args = new ShareArgs(this.url, this.title, this.description, this.image, this.tags);
        this.sbService.share(this.button.provider, args, this.popUpClosed);
    }


    nFormatter(num, digits) {
        let si = [
            { value: 1E18, symbol: 'E' },
            { value: 1E15, symbol: 'P' },
            { value: 1E12, symbol: 'T' },
            { value: 1E9, symbol: 'G' },
            { value: 1E6, symbol: 'M' },
            { value: 1E3, symbol: 'K' }
        ], rx = /\.0+$|(\.[0-9]*[1-9])0+$/, i;
        for (i = 0; i < si.length; i++) {
            if (num >= si[i].value) {
                return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
            }
        }
        return num.toFixed(digits).replace(rx, '$1');
    }
}

