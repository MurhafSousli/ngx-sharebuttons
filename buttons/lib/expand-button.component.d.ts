import { ElementRef, EventEmitter } from '@angular/core';
export declare class ExpandButtonComponent {
    moreIcon: string | string[];
    lessIcon: string | string[];
    expanded: string;
    size: number;
    toggle: EventEmitter<{}>;
    constructor(el: ElementRef);
}
