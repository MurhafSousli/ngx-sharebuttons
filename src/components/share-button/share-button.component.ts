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

import {ShareButton} from "../../helpers/share-buttons.class";
import {ShareButtonsService} from "../../service/share-buttons.service";

@Component({
    selector: 'share-button',
    templateUrl: 'share-button.component.html'
})
export class ShareButtonComponent implements AfterViewInit {

    /** Share URL */
    @Input() url: string;
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
        window.open(this.button.sharer + this.url, 'newwindow', this.sbService.windowAttr());
    }

}

