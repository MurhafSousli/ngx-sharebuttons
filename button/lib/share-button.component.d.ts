import { EventEmitter } from '@angular/core';
import { ShareButtons, ShareButtonDirective } from '@ngx-share/core';
export declare class ShareButtonComponent {
    private share;
    /** Share URL */
    url: string;
    /** Share count value */
    shareCount: number;
    /** Button name */
    button: string;
    createButton: string;
    /** Share URL */
    setUrl: string;
    /** Share meta tags */
    title: string;
    description: string;
    image: string;
    tags: string;
    /** Set meta tags from document head, useful when SEO is supported */
    autoSetMeta: boolean;
    /** Show button icon */
    showIcon: boolean;
    /** Show button text */
    showText: boolean;
    /** Button share count */
    showCount: boolean;
    /** Button custom text */
    text: string;
    /** Button custom icon */
    icon: string;
    /** Button size */
    size: number;
    /** Button theme */
    theme: string;
    /** Stream that emits when share count is fetched */
    count: EventEmitter<number>;
    /** Stream that emits when share dialog is opened */
    opened: EventEmitter<string>;
    /** Stream that emits when share dialog is closed */
    closed: EventEmitter<string>;
    /** Set theme as button class */
    readonly buttonClass: string;
    /** Get button prop from ShareDirective */
    ref: ShareButtonDirective;
    constructor(share: ShareButtons);
    onCount(count: any): void;
}
