import { AfterViewInit, EventEmitter, Renderer, ElementRef } from '@angular/core';
import { ShareButton } from "../../helpers/share-buttons.class";
import { ShareButtonsService } from "../../service/share-buttons.service";
import { WindowService } from "../../service/window.service";
import { ShareProvider } from "../../helpers/share-provider.enum";
export declare class ShareButtonComponent implements AfterViewInit {
    private sbService;
    private renderer;
    private elementRef;
    /** Share Args */
    url: string;
    title: string;
    description: string;
    image: string;
    tags: string;
    /** Button type e.g. fb, twitter, reddit...etc */
    button: ShareButton;
    /** Show count, disabled by default */
    count: boolean;
    /** Output button count to calculate total share counts */
    countOuter: EventEmitter<number>;
    /** Output pop up closed*/
    popUpClosed: EventEmitter<ShareProvider>;
    btn: ElementRef;
    private window;
    constructor(sbService: ShareButtonsService, renderer: Renderer, elementRef: ElementRef, window: WindowService);
    ngAfterViewInit(): void;
    /** Open share window */
    share(): void;
    nFormatter(num: any, digits: any): any;
}
