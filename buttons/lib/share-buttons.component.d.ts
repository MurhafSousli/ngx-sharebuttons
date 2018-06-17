import { OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { ShareButtons } from '@ngx-share/core';
import { Observable } from 'rxjs';
export interface ButtonsState {
    includedButtons?: string[];
    excludedButtons?: string[];
    userButtons?: string[];
    selectedButtons?: string[];
    expanded?: boolean;
    shownCount?: number;
    moreIcon?: string | string[];
    lessIcon?: string | string[];
}
export declare class ShareButtonsComponent implements OnInit, OnDestroy {
    private _share;
    state$: Observable<ButtonsState>;
    private _stateWorker$;
    private _configSub$;
    theme: string;
    includedButtons: string[];
    excludedButtons: string[];
    shownButtons: number;
    /** Share meta tags */
    url: string;
    title: string;
    description: string;
    image: string;
    tags: string;
    /** Set meta tags from document head, useful when SEO is supported */
    autoSetMeta: boolean;
    /** Show buttons icon */
    showIcon: boolean;
    /** Show buttons name */
    showText: boolean;
    /** Show buttons share count */
    showCount: boolean;
    /** Buttons size */
    size: number;
    /** Share count event */
    count: EventEmitter<number>;
    /** Share dialog opened event */
    opened: EventEmitter<string>;
    /** Share dialog closed event */
    closed: EventEmitter<string>;
    constructor(_share: ShareButtons);
    ngOnInit(): void;
    ngOnDestroy(): void;
    updateState(state: ButtonsState): void;
}
