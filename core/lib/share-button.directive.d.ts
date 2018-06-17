import { OnChanges, SimpleChanges, EventEmitter, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShareButtons } from './share.service';
import { IShareButton } from './share.models';
export declare class ShareButtonDirective implements OnChanges {
    private shareService;
    private http;
    renderer: Renderer2;
    cd: ChangeDetectorRef;
    private el;
    private platform;
    /** A ref to button class - used to remove previous class when the button type is changed */
    private _buttonClass;
    /** Button properties */
    prop: IShareButton;
    /** Share button type */
    shareButton: string;
    /** Get share count */
    getCount: boolean;
    /** Set meta tags from document head, useful when SEO is supported */
    autoSetMeta: boolean;
    /** Meta tags inputs - initialized from the global options */
    url: string;
    title: string;
    description: string;
    image: string;
    tags: string;
    /** Stream that emits when share count is fetched */
    count: EventEmitter<number>;
    /** Stream that emits when share dialog is opened */
    opened: EventEmitter<string>;
    /** Stream that emits when share dialog is closed */
    closed: EventEmitter<string>;
    constructor(shareService: ShareButtons, http: HttpClient, renderer: Renderer2, cd: ChangeDetectorRef, el: ElementRef, platform: Object);
    /** Share link on element click */
    onClick(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Open sharing dialog
     * @param url - Share URL
     */
    share(url: string): void;
    /**
     * Get link share count
     * @param url - Share URL
     * @returns Share count
     */
    shareCount(url: string): Observable<any>;
    private createShareButton(buttonsName);
}
