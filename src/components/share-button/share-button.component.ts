import {
    Component,
    AfterViewInit,
    Input,
    Output,
    EventEmitter,
    Renderer,
    ViewChild,
    ElementRef
} from '@angular/core';

import {ShareButton, ShareArgs} from "../../helpers/share-buttons.class";
import {ShareButtonsService} from "../../service/share-buttons.service";

@Component({
    selector: 'share-button',
    templateUrl: 'share-button.component.html'
})
export class ShareButtonComponent implements AfterViewInit {

    /** Share Args */
    @Input() url: string;
    @Input() text: string;
    @Input() image: string;
    @Input() hashtags: string[];

    /** Button type e.g. fb, twitter, reddit...etc */
    @Input() button: ShareButton;
    /** Show count, disabled by default */
    @Input() count: boolean = false;
    /** Output button count to calculate total share counts */
    @Output() countOuter = new EventEmitter();

    private sCount: number = 0;
    @ViewChild("btn") btn: ElementRef;

    constructor(private sbService: ShareButtonsService, private renderer: Renderer) {
    }

    ngAfterViewInit() {
        /** If URL is not presented then set the current URL    */
        if (!this.url) {
            this.url = window.location.href;
        }
        this.renderer.setElementProperty(this.btn.nativeElement, 'innerHTML', this.button.template);
        this.renderer.setElementClass(this.btn.nativeElement, this.button.classes, true);

        /** Fet share count if enabled */
        if (this.count) {
            this.sbService.count(this.button.provider, this.url)
                .subscribe(shareCount => {
                    this.sCount = shareCount;
                    this.countOuter.emit(shareCount);
                });
        }
    }

    /** Open share window */
    share() {
        let shareArgs = new ShareArgs(this.url, this.text, this.image, this.hashtags);
        window.open(this.sbService.share(this.button.provider, shareArgs), 'newwindow', this.sbService.windowAttr());
    }

}

