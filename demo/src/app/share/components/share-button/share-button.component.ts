import {
    Component,
    AfterViewInit,
    Input,
    Output,
    EventEmitter,
    Renderer,
    ElementRef,
    ChangeDetectionStrategy
} from '@angular/core';

import {ShareButton, ShareArgs} from '../../classes/share-buttons.class';
import {ShareButtonsService} from '../../services/share-buttons.service';
import {WindowService} from '../../services/window.service';
import {ShareProvider} from '../../helpers/share-provider.enum';
import {Helper} from '../../helpers/share.helper';

@Component({
    selector: 'share-button',
    template: ``,
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

    window: Window;
    self: HTMLElement;
    btn: HTMLElement;

    constructor(private sbService: ShareButtonsService,
                private renderer: Renderer,
                elementRef: ElementRef,
                window: WindowService) {
        this.window = window.nativeWindow;
        this.self = elementRef.nativeElement;
    }

    ngAfterViewInit() {
        /** Validate URL */
        this.url = Helper.validateUrl(this.url, this.window);
        /** Add share button */
        this.shareButton();
        /** Add share count if enabled */
        if (this.count) {
            this.shareCount();
        }
    }

    /** Open share window */
    share = () => {
        let shareArgs = new ShareArgs(this.url, this.title, this.description, this.image, this.tags);

        let popUp = this.window.open(this.sbService.share(this.button.provider, shareArgs), 'newwindow', this.sbService.windowAttr());

        let pollTimer = this.window.setInterval(() => {
            if (popUp.closed !== false) { // !== is required for compatibility with Opera
                this.window.clearInterval(pollTimer);
                this.popUpClosed.emit(this.button.provider);
            }
        }, 200);
    };

    shareButton() {
        this.btn = this.renderer.createElement(this.self, 'button');
        this.renderer.setElementProperty(this.btn, 'innerHTML', this.button.template);
        this.renderer.setElementAttribute(this.btn, 'class', this.button.classes);
        this.renderer.setElementProperty(this.btn, 'onclick', this.share);
    }

    shareCount() {
        this.sbService.count(this.button.provider, this.url)
            .subscribe(shareCount => {
                if (shareCount) {
                    let counter = this.renderer.createElement(this.self, 'span');
                    this.renderer.setElementClass(counter, 'sb-button-count', true);
                    this.renderer.setElementProperty(counter, 'textContent', Helper.nFormatter(shareCount, 1));
                    this.countOuter.emit(shareCount);
                }
            });
    }
}

