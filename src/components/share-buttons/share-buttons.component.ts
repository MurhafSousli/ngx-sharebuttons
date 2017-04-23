import {
    Component,
    OnInit,
    OnChanges,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    Input,
    Output,
    EventEmitter,
    SimpleChanges,
} from '@angular/core';
import { ShareButton, ShareProvider } from '../../helpers/index';

@Component({
    selector: 'share-buttons',
    templateUrl: './share-buttons.component.html',
    styleUrls: ['./share-buttons.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareButtonsComponent implements OnInit, OnChanges {

    /** Share link args */
    @Input() url: string;
    @Input() title: string;
    @Input() description: string;
    @Input() image: string;
    @Input() tags: string;

    /** Show count on share-buttons, disabled by default */
    @Input() showCount: boolean = false;
    /** Indicates weather default style is applied to the buttons */
    @Input() defaultStyle: boolean = true;
    /** Add default class to all buttons */
    @Input() buttonClass: string = '';

    /** Buttons default templates */
    @Input() facebook: any = '<i class="fa fa-facebook"></i>';
    @Input() twitter: any = '<i class="fa fa-twitter"></i>';
    @Input() linkedIn: any = '<i class="fa fa-linkedin"></i>';
    @Input() tumblr: any = '<i class="fa fa-tumblr"></i>';
    @Input() google: any = '<i class="fa fa-google-plus"></i>';
    @Input() pinterest: any = '<i class="fa fa-pinterest-p"></i>';
    @Input() stumbleUpOn: any = '<i class="fa fa-stumbleupon"></i>';
    @Input() reddit: any = '<i class="fa fa-reddit-alien"></i>';
    @Input() whatsApp: any = '<i class="fa fa-whatsapp"></i>';

    @Output() count = new EventEmitter<number>();
    @Output() popUpClosed = new EventEmitter<ShareProvider>();

    /** Share buttons to be displayed   */
    buttons: ShareButton[];

    /** Total Count: the sum of all buttons share count */
    tCount: number = 0;

    ngOnInit() {
        this.buttons = [];
        if (this.facebook) {
            this.buttons.push(new ShareButton(
                ShareProvider.FACEBOOK,
                this.facebook,
                `facebook ${this.buttonClass}`
            ));
        }
        if (this.twitter) {
            this.buttons.push(new ShareButton(
                ShareProvider.TWITTER,
                this.twitter,
                `twitter ${this.buttonClass}`
            ));
        }
        if (this.google) {
            this.buttons.push(new ShareButton(
                ShareProvider.GOOGLEPLUS,
                this.google,
                `googleplus ${this.buttonClass}`
            ));
        }
        if (this.pinterest) {
            this.buttons.push(new ShareButton(
                ShareProvider.PINTEREST,
                this.pinterest,
                `pinterest ${this.buttonClass}`
            ));
        }
        if (this.linkedIn) {
            this.buttons.push(new ShareButton(
                ShareProvider.LINKEDIN,
                this.linkedIn,
                `linkedin ${this.buttonClass}`
            ));
        }
        if (this.tumblr) {
            this.buttons.push(new ShareButton(
                ShareProvider.TUMBLR,
                this.tumblr,
                `tumblr ${this.buttonClass}`
            ));
        }
        if (this.reddit) {
            this.buttons.push(new ShareButton(
                ShareProvider.REDDIT,
                this.reddit,
                `reddit ${this.buttonClass}`
            ));
        }
        if (this.stumbleUpOn) {
            this.buttons.push(new ShareButton(
                ShareProvider.STUMBLEUPON,
                this.stumbleUpOn,
                `stumbleupon ${this.buttonClass}`
            ));
        }

        if (this.whatsApp) {
            this.buttons.push(new ShareButton(
                ShareProvider.WHATSAPP,
                this.whatsApp,
                `whatsapp ${this.buttonClass}`
            ));
        }
    }

    /** Reset total count on URL changes */
    ngOnChanges(changes: SimpleChanges) {
        if (changes['url']) {
            let currUrl = changes['url'].currentValue;
            let prevUrl = changes['url'].previousValue;
            if (currUrl && currUrl !== prevUrl) {
                this.tCount = 0;
            }
        }
    }

    /** Sum all buttons count & emits total */
    counter(count: number) {
        this.count.emit(count);
    }

    /** emits closed button type: so user can tell which button has been clicked */
    shareClosed(provider: ShareProvider) {
        this.popUpClosed.emit(provider);
    }
}
