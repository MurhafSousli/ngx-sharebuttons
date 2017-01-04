import { OnInit, EventEmitter } from '@angular/core';
import { ShareProvider } from "../../helpers/share-provider.enum";
export declare class ShareButtonsComponent implements OnInit {
    /** Share link args */
    url: string;
    title: string;
    description: string;
    image: string;
    tags: string;
    /** Sharing title */
    shareTitle: string;
    /** Show count on share-buttons, disabled by default */
    count: boolean;
    /** Show total counts for all buttons, disabled by default */
    totalCount: boolean;
    /** Indicates weather default style is applied to the buttons */
    defaultStyle: boolean;
    /** Buttons default templates */
    facebook: any;
    twitter: any;
    linkedIn: any;
    tumblr: any;
    google: any;
    pinterest: any;
    stumbleUpOn: any;
    reddit: any;
    popUpClosed: EventEmitter<ShareProvider>;
    /** Share buttons to be displayed   */
    private buttons;
    /** Total Count: the sum of all buttons share count */
    private tCount;
    ngOnInit(): void;
    counter(count: number): void;
    popUpClose(provider: any): void;
}
