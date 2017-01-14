import {
    Component,
    OnInit,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { ShareButton } from '../../helpers/share-buttons.class';
import { ShareProvider } from '../../helpers/share-provider.enum';

@Component({
    selector: 'share-buttons',
    templateUrl: './share-buttons.component.html',
    styleUrls: ['./share-buttons.component.css'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareButtonsComponent implements OnInit {

    /** Share link args */
    @Input() url: string;
    @Input() title: string;
    @Input() description: string;
    @Input() image: string;
    @Input() tags: string;

    /** Sharing title */
    @Input() shareTitle: string;

    /** Show count on share-buttons, disabled by default */
    @Input() count: boolean = false;

    /** Show total counts for all buttons, disabled by default */
    @Input() totalCount: boolean = false;

    /** Indicates weather default style is applied to the buttons */
    @Input() defaultStyle: boolean = true;

    /** Buttons default templates */
    @Input() facebook: any = '<i class="fa fa-facebook"></i>';
    @Input() twitter: any = '<i class="fa fa-twitter"></i>';
    @Input() linkedIn: any = '<i class="fa fa-linkedin"></i>';
    @Input() tumblr: any = '<i class="fa fa-tumblr"></i>';
    @Input() google: any = '<i class="fa fa-google-plus"></i>';
    @Input() pinterest: any = '<i class="fa fa-pinterest-p"></i>';
    @Input() stumbleUpOn: any = '<i class="fa fa-stumbleupon"></i>';
    @Input() reddit: any = '<i class="fa fa-reddit-alien"></i>';

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
                'facebook'
            ));
        }
        if (this.twitter) {
            this.buttons.push(new ShareButton(
                ShareProvider.TWITTER,
                this.twitter,
                'twitter'
            ));
        }
        if (this.google) {
            this.buttons.push(new ShareButton(
                ShareProvider.GOOGLEPLUS,
                this.google,
                'googleplus'
            ));
        }
        if (this.pinterest) {
            this.buttons.push(new ShareButton(
                ShareProvider.PINTEREST,
                this.pinterest,
                'pinterest'
            ));
        }
        if (this.linkedIn) {
            this.buttons.push(new ShareButton(
                ShareProvider.LINKEDIN,
                this.linkedIn,
                'linkedin'
            ));
        }
        if (this.tumblr) {
            this.buttons.push(new ShareButton(
                ShareProvider.TUMBLR,
                this.tumblr,
                'tumblr'
            ));
        }
        if (this.reddit) {
            this.buttons.push(new ShareButton(
                ShareProvider.REDDIT,
                this.reddit,
                'reddit'
            ));
        }
        if (this.stumbleUpOn) {
            this.buttons.push(new ShareButton(
                ShareProvider.STUMBLEUPON,
                this.stumbleUpOn,
                'stumbleupon'
            ));
        }
    }

    counter(count: number) {
        this.tCount += count;
    }

    popUpClose(provider) {
        this.popUpClosed.emit(provider);
    }
}
