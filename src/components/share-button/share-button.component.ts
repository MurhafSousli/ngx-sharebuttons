import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ShareButton } from '../../helpers';

@Component({
    selector: 'share-button',
    templateUrl: './share-button.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareButtonComponent {

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
    @Output() count$ = new EventEmitter<number>();
    /** Output pop up closed*/
    @Output() closed$ = new EventEmitter<string>();

    /** Share count for this button */
    shareCount: number;

    counter(count: number) {
        this.shareCount = count;
        this.count$.emit(count);
    }

}
