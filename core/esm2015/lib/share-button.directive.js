/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input, Output, HostListener, Inject, EventEmitter, ElementRef, Renderer2, ChangeDetectorRef, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { of, EMPTY } from 'rxjs';
import { tap, filter, switchMap, map, take, catchError } from 'rxjs/operators';
import { ShareButtons } from './share.service';
import { getMetaContent, getOS, getValidUrl } from './utils';
export class ShareButtonDirective {
    /**
     * @param {?} shareService
     * @param {?} http
     * @param {?} renderer
     * @param {?} cd
     * @param {?} el
     * @param {?} platform
     */
    constructor(shareService, http, renderer, cd, el, platform) {
        this.shareService = shareService;
        this.http = http;
        this.renderer = renderer;
        this.cd = cd;
        this.el = el;
        this.platform = platform;
        /**
         * Get share count
         */
        this.getCount = false;
        /**
         * Set meta tags from document head, useful when SEO is supported
         */
        this.autoSetMeta = this.shareService.autoSetMeta;
        /**
         * Meta tags inputs - initialized from the global options
         */
        this.url = this.shareService.url;
        this.title = this.shareService.title;
        this.description = this.shareService.description;
        this.image = this.shareService.image;
        this.tags = this.shareService.tags;
        /**
         * Stream that emits when share count is fetched
         */
        this.count = new EventEmitter();
        /**
         * Stream that emits when share dialog is opened
         */
        this.opened = new EventEmitter();
        /**
         * Stream that emits when share dialog is closed
         */
        this.closed = new EventEmitter();
    }
    /**
     * Share link on element click
     * @return {?}
     */
    onClick() {
        if (isPlatformBrowser(this.platform)) {
            const /** @type {?} */ metaTags = this.autoSetMeta ? {
                url: this.url,
                title: this.title || getMetaContent('og:title'),
                description: this.description || getMetaContent('og:description'),
                image: this.image || getMetaContent('og:image'),
                via: this.shareService.twitterAccount || getMetaContent('twitter:site'),
                tags: this.tags,
            } : {
                url: this.url,
                title: this.title,
                description: this.description,
                image: this.image,
                tags: this.tags,
                via: this.shareService.twitterAccount,
            };
            const /** @type {?} */ ref = {
                cd: this.cd,
                renderer: this.renderer,
                prop: this.prop,
                el: this.el.nativeElement,
                os: getOS(),
                metaTags
            };
            // Share the link
            of(ref).pipe(...this.prop.share.operators, tap((sharerURL) => this.share(sharerURL)), take(1)).subscribe();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (isPlatformBrowser(this.platform)) {
            if (changes['shareButton'] && (changes['shareButton'].firstChange || changes['shareButton'].previousValue !== this.shareButton)) {
                this.createShareButton(this.shareButton);
            }
            if (!this.url || (changes['url'] && changes['url'].previousValue !== this.url)) {
                of(null).pipe(map(() => {
                    this.url = getValidUrl(this.autoSetMeta ? this.url || getMetaContent('og:url') : this.url, window.location.href);
                    return this.url;
                }), filter(() => this.prop.count && this.getCount), switchMap((url) => this.shareCount(url)), tap((shareCount) => this.count.emit(shareCount)), take(1)).subscribe();
            }
        }
    }
    /**
     * Open sharing dialog
     * @param {?} url - Share URL
     * @return {?}
     */
    share(url) {
        if (url) {
            // GA Tracking
            if (this.shareService.gaTracking && typeof ga !== 'undefined') {
                ga('send', 'social', this.prop.type, 'click', this.url);
            }
            // Emit when share dialog is opened
            this.opened.emit(this.prop.type);
            const /** @type {?} */ popUp = window.open(url, 'newwindow', this.shareService.windowSize);
            // Emit when share dialog is closed
            if (popUp) {
                const /** @type {?} */ pollTimer = window.setInterval(() => {
                    if (popUp.closed) {
                        window.clearInterval(pollTimer);
                        this.closed.emit(this.prop.type);
                    }
                }, 200);
            }
        }
    }
    /**
     * Get link share count
     * @param {?} url - Share URL
     * @return {?} Share count
     */
    shareCount(url) {
        if (this.prop.count.request === 'jsonp') {
            return this.http.jsonp(this.prop.count.url + url, 'callback').pipe(...this.prop.count.operators, catchError(() => EMPTY));
        }
        else {
            return this.http.get(this.prop.count.url + url, this.prop.count.args).pipe(...this.prop.count.operators, catchError(() => EMPTY));
        }
    }
    /**
     * @param {?} buttonsName
     * @return {?}
     */
    createShareButton(buttonsName) {
        const /** @type {?} */ button = Object.assign({}, this.shareService.prop[buttonsName]);
        if (button) {
            // Set share button properties
            this.prop = button;
            // Remove previous button class
            this.renderer.removeClass(this.el.nativeElement, `sb-${this._buttonClass}`);
            // Add new button class
            this.renderer.addClass(this.el.nativeElement, `sb-${button.type}`);
            // Set button css color variable
            this.el.nativeElement.style.setProperty('--button-color', this.prop.color);
            // Keep a copy of the class for future replacement
            this._buttonClass = button.type;
            // Set aria-label attribute
            this.renderer.setAttribute(this.el.nativeElement, 'aria-label', button.ariaLabel || button.text);
        }
        else {
            throw new Error(`[ShareButtons]: The share button '${buttonsName}' does not exist!`);
        }
    }
}
ShareButtonDirective.decorators = [
    { type: Directive, args: [{
                selector: '[shareButton]'
            },] },
];
/** @nocollapse */
ShareButtonDirective.ctorParameters = () => [
    { type: ShareButtons },
    { type: HttpClient },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
ShareButtonDirective.propDecorators = {
    shareButton: [{ type: Input }],
    getCount: [{ type: Input }],
    autoSetMeta: [{ type: Input }],
    url: [{ type: Input }],
    title: [{ type: Input }],
    description: [{ type: Input }],
    image: [{ type: Input }],
    tags: [{ type: Input }],
    count: [{ type: Output }],
    opened: [{ type: Output }],
    closed: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
function ShareButtonDirective_tsickle_Closure_declarations() {
    /**
     * A ref to button class - used to remove previous class when the button type is changed
     * @type {?}
     */
    ShareButtonDirective.prototype._buttonClass;
    /**
     * Button properties
     * @type {?}
     */
    ShareButtonDirective.prototype.prop;
    /**
     * Share button type
     * @type {?}
     */
    ShareButtonDirective.prototype.shareButton;
    /**
     * Get share count
     * @type {?}
     */
    ShareButtonDirective.prototype.getCount;
    /**
     * Set meta tags from document head, useful when SEO is supported
     * @type {?}
     */
    ShareButtonDirective.prototype.autoSetMeta;
    /**
     * Meta tags inputs - initialized from the global options
     * @type {?}
     */
    ShareButtonDirective.prototype.url;
    /** @type {?} */
    ShareButtonDirective.prototype.title;
    /** @type {?} */
    ShareButtonDirective.prototype.description;
    /** @type {?} */
    ShareButtonDirective.prototype.image;
    /** @type {?} */
    ShareButtonDirective.prototype.tags;
    /**
     * Stream that emits when share count is fetched
     * @type {?}
     */
    ShareButtonDirective.prototype.count;
    /**
     * Stream that emits when share dialog is opened
     * @type {?}
     */
    ShareButtonDirective.prototype.opened;
    /**
     * Stream that emits when share dialog is closed
     * @type {?}
     */
    ShareButtonDirective.prototype.closed;
    /** @type {?} */
    ShareButtonDirective.prototype.shareService;
    /** @type {?} */
    ShareButtonDirective.prototype.http;
    /** @type {?} */
    ShareButtonDirective.prototype.renderer;
    /** @type {?} */
    ShareButtonDirective.prototype.cd;
    /** @type {?} */
    ShareButtonDirective.prototype.el;
    /** @type {?} */
    ShareButtonDirective.prototype.platform;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZS1idXR0b24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLE1BQU0sRUFHTixZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQWMsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBUTdELE1BQU07Ozs7Ozs7OztJQWlDSixZQUFvQixZQUEwQixFQUMxQixNQUNELFVBQ0EsSUFDQyxJQUNxQixRQUFnQjtRQUxyQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixTQUFJLEdBQUosSUFBSTtRQUNMLGFBQVEsR0FBUixRQUFRO1FBQ1IsT0FBRSxHQUFGLEVBQUU7UUFDRCxPQUFFLEdBQUYsRUFBRTtRQUNtQixhQUFRLEdBQVIsUUFBUSxDQUFROzs7O3dCQTFCckMsS0FBSzs7OzsyQkFHTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVc7Ozs7bUJBR3RDLElBQUksQ0FBQyxZ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LFVBQVU7WUFMakIsU0FBUztZQUNULGlCQUFpQjtZQUZqQixVQUFVO1lBMkR5QyxNQUFNLHVCQUE1QyxNQUFNLFNBQUMsV0FBVzs7OzBCQTdCOUIsS0FBSzt1QkFHTCxLQUFLOzBCQUdMLEtBQUs7a0JBR0wsS0FBSztvQkFDTCxLQUFLOzBCQUNMLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLO29CQUdMLE1BQU07cUJBR04sTUFBTTtxQkFHTixNQUFNO3NCQVdOLFlBQVksU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbmplY3QsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIFBMQVRGT1JNX0lEXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBFTVBUWSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAsIGZpbHRlciwgc3dpdGNoTWFwLCBtYXAsIHRha2UsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbnMgfSBmcm9tICcuL3NoYXJlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJU2hhcmVCdXR0b24sIFNoYXJlQnV0dG9uUmVmIH0gZnJvbSAnLi9zaGFyZS5tb2RlbHMnO1xyXG5pbXBvcnQgeyBnZXRNZXRhQ29udGVudCwgZ2V0T1MsIGdldFZhbGlkVXJsIH0gZnJvbSAnLi91dGlscyc7XHJcblxyXG4vKiogR29vZ2xlIGFuYWx5dGljcyByZWYgKi9cclxuZGVjbGFyZSBjb25zdCBnYTogRnVuY3Rpb247XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tzaGFyZUJ1dHRvbl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZUJ1dHRvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblxyXG4gIC8qKiBBIHJlZiB0byBidXR0b24gY2xhc3MgLSB1c2VkIHRvIHJlbW92ZSBwcmV2aW91cyBjbGFzcyB3aGVuIHRoZSBidXR0b24gdHlwZSBpcyBjaGFuZ2VkICovXHJcbiAgcHJpdmF0ZSBfYnV0dG9uQ2xhc3M6IHN0cmluZztcclxuXHJcbiAgLyoqIEJ1dHRvbiBwcm9wZXJ0aWVzICovXHJcbiAgcHJvcDogSVNoYXJlQnV0dG9uO1xyXG5cclxuICAvKiogU2hhcmUgYnV0dG9uIHR5cGUgKi9cclxuICBASW5wdXQoKSBzaGFyZUJ1dHRvbjogc3RyaW5nO1xyXG5cclxuICAvKiogR2V0IHNoYXJlIGNvdW50ICovXHJcbiAgQElucHV0KCkgZ2V0Q291bnQgPSBmYWxzZTtcclxuXHJcbiAgLyoqIFNldCBtZXRhIHRhZ3MgZnJvbSBkb2N1bWVudCBoZWFkLCB1c2VmdWwgd2hlbiBTRU8gaXMgc3VwcG9ydGVkICovXHJcbiAgQElucHV0KCkgYXV0b1NldE1ldGE6IGJvb2xlYW4gPSB0aGlzLnNoYXJlU2VydmljZS5hdXRvU2V0TWV0YTtcclxuXHJcbiAgLyoqIE1ldGEgdGFncyBpbnB1dHMgLSBpbml0aWFsaXplZCBmcm9tIHRoZSBnbG9iYWwgb3B0aW9ucyAqL1xyXG4gIEBJbnB1dCgpIHVybDogc3RyaW5nID0gdGhpcy5zaGFyZVNlcnZpY2UudXJsO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSB0aGlzLnNoYXJlU2VydmljZS50aXRsZTtcclxuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nID0gdGhpcy5zaGFyZVNlcnZpY2UuZGVzY3JpcHRpb247XHJcbiAgQElucHV0KCkgaW1hZ2U6IHN0cmluZyA9IHRoaXMuc2hhcmVTZXJ2aWNlLmltYWdlO1xyXG4gIEBJbnB1dCgpIHRhZ3M6IHN0cmluZyA9IHRoaXMuc2hhcmVTZXJ2aWNlLnRhZ3M7XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHNoYXJlIGNvdW50IGlzIGZldGNoZWQgKi9cclxuICBAT3V0cHV0KCkgY291bnQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gc2hhcmUgZGlhbG9nIGlzIG9wZW5lZCAqL1xyXG4gIEBPdXRwdXQoKSBvcGVuZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gc2hhcmUgZGlhbG9nIGlzIGNsb3NlZCAqL1xyXG4gIEBPdXRwdXQoKSBjbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzaGFyZVNlcnZpY2U6IFNoYXJlQnV0dG9ucyxcclxuICAgICAgICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgICAgICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgICAgICAgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm06IE9iamVjdCkge1xyXG4gIH1cclxuXHJcbiAgLyoqIFNoYXJlIGxpbmsgb24gZWxlbWVudCBjbGljayAqL1xyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBvbkNsaWNrKCkge1xyXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm0pKSB7XHJcbiAgICAgIGNvbnN0IG1ldGFUYWdzID0gdGhpcy5hdXRvU2V0TWV0YSA/IHtcclxuICAgICAgICB1cmw6IHRoaXMudXJsLFxyXG4gICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlIHx8IGdldE1ldGFDb250ZW50KCdvZzp0aXRsZScpLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uIHx8IGdldE1ldGFDb250ZW50KCdvZzpkZXNjcmlwdGlvbicpLFxyXG4gICAgICAgIGltYWdlOiB0aGlzLmltYWdlIHx8IGdldE1ldGFDb250ZW50KCdvZzppbWFnZScpLFxyXG4gICAgICAgIHZpYTogdGhpcy5zaGFyZVNlcnZpY2UudHdpdHRlckFjY291bnQgfHwgZ2V0TWV0YUNvbnRlbnQoJ3R3aXR0ZXI6c2l0ZScpLFxyXG4gICAgICAgIHRhZ3M6IHRoaXMudGFncyxcclxuICAgICAgfSA6IHtcclxuICAgICAgICB1cmw6IHRoaXMudXJsLFxyXG4gICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxyXG4gICAgICAgIHRhZ3M6IHRoaXMudGFncyxcclxuICAgICAgICB2aWE6IHRoaXMuc2hhcmVTZXJ2aWNlLnR3aXR0ZXJBY2NvdW50LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVmOiBTaGFyZUJ1dHRvblJlZiA9IHtcclxuICAgICAgICBjZDogdGhpcy5jZCxcclxuICAgICAgICByZW5kZXJlcjogdGhpcy5yZW5kZXJlcixcclxuICAgICAgICBwcm9wOiB0aGlzLnByb3AsXHJcbiAgICAgICAgZWw6IHRoaXMuZWwubmF0aXZlRWxlbWVudCxcclxuICAgICAgICBvczogZ2V0T1MoKSxcclxuICAgICAgICBtZXRhVGFnc1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gU2hhcmUgdGhlIGxpbmtcclxuICAgICAgb2YocmVmKS5waXBlKFxyXG4gICAgICAgIC4uLnRoaXMucHJvcC5zaGFyZS5vcGVyYXRvcnMsXHJcbiAgICAgICAgdGFwKChzaGFyZXJVUkw6IGFueSkgPT4gdGhpcy5zaGFyZShzaGFyZXJVUkwpKSxcclxuICAgICAgICB0YWtlKDEpXHJcbiAgICAgICkuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybSkpIHtcclxuXHJcbiAgICAgIGlmIChjaGFuZ2VzWydzaGFyZUJ1dHRvbiddICYmIChjaGFuZ2VzWydzaGFyZUJ1dHRvbiddLmZpcnN0Q2hhbmdlIHx8IGNoYW5nZXNbJ3NoYXJlQnV0dG9uJ10ucHJldmlvdXNWYWx1ZSAhPT0gdGhpcy5zaGFyZUJ1dHRvbikpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZVNoYXJlQnV0dG9uKHRoaXMuc2hhcmVCdXR0b24pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXRoaXMudXJsIHx8IChjaGFuZ2VzWyd1cmwnXSAmJiBjaGFuZ2VzWyd1cmwnXS5wcmV2aW91c1ZhbHVlICE9PSB0aGlzLnVybCkpIHtcclxuICAgICAgICBvZihudWxsKS5waXBlKFxyXG4gICAgICAgICAgbWFwKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cmwgPSBnZXRWYWxpZFVybCh0aGlzLmF1dG9TZXRNZXRhID8gdGhpcy51cmwgfHwgZ2V0TWV0YUNvbnRlbnQoJ29nOnVybCcpIDogdGhpcy51cmwsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5wcm9wLmNvdW50ICYmIHRoaXMuZ2V0Q291bnQpLFxyXG4gICAgICAgICAgc3dpdGNoTWFwKCh1cmw6IHN0cmluZykgPT4gdGhpcy5zaGFyZUNvdW50KHVybCkpLFxyXG4gICAgICAgICAgdGFwKChzaGFyZUNvdW50OiBudW1iZXIpID0+IHRoaXMuY291bnQuZW1pdChzaGFyZUNvdW50KSksXHJcbiAgICAgICAgICB0YWtlKDEpXHJcbiAgICAgICAgKS5zdWJzY3JpYmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3BlbiBzaGFyaW5nIGRpYWxvZ1xyXG4gICAqIEBwYXJhbSB1cmwgLSBTaGFyZSBVUkxcclxuICAgKi9cclxuICBzaGFyZSh1cmw6IHN0cmluZykge1xyXG4gICAgaWYgKHVybCkge1xyXG5cclxuICAgICAgLy8gR0EgVHJhY2tpbmdcclxuICAgICAgaWYgKHRoaXMuc2hhcmVTZXJ2aWNlLmdhVHJhY2tpbmcgJiYgdHlwZW9mIGdhICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGdhKCdzZW5kJywgJ3NvY2lhbCcsIHRoaXMucHJvcC50eXBlLCAnY2xpY2snLCB0aGlzLnVybCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEVtaXQgd2hlbiBzaGFyZSBkaWFsb2cgaXMgb3BlbmVkXHJcbiAgICAgIHRoaXMub3BlbmVkLmVtaXQodGhpcy5wcm9wLnR5cGUpO1xyXG5cclxuICAgICAgY29uc3QgcG9wVXAgPSB3aW5kb3cub3Blbih1cmwsICduZXd3aW5kb3cnLCB0aGlzLnNoYXJlU2VydmljZS53aW5kb3dTaXplKTtcclxuXHJcbiAgICAgIC8vIEVtaXQgd2hlbiBzaGFyZSBkaWFsb2cgaXMgY2xvc2VkXHJcbiAgICAgIGlmIChwb3BVcCkge1xyXG4gICAgICAgIGNvbnN0IHBvbGxUaW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAocG9wVXAuY2xvc2VkKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHBvbGxUaW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VkLmVtaXQodGhpcy5wcm9wLnR5cGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIDIwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBsaW5rIHNoYXJlIGNvdW50XHJcbiAgICogQHBhcmFtIHVybCAtIFNoYXJlIFVSTFxyXG4gICAqIEByZXR1cm5zIFNoYXJlIGNvdW50XHJcbiAgICovXHJcbiAgc2hhcmVDb3VudCh1cmw6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcblxyXG4gICAgaWYgKHRoaXMucHJvcC5jb3VudC5yZXF1ZXN0ID09PSAnanNvbnAnKSB7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmpzb25wPGFueT4odGhpcy5wcm9wLmNvdW50LnVybCArIHVybCwgJ2NhbGxiYWNrJykucGlwZShcclxuICAgICAgICAuLi50aGlzLnByb3AuY291bnQub3BlcmF0b3JzLFxyXG4gICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gRU1QVFkpLFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5wcm9wLmNvdW50LnVybCArIHVybCwgdGhpcy5wcm9wLmNvdW50LmFyZ3MpLnBpcGUoXHJcbiAgICAgICAgLi4udGhpcy5wcm9wLmNvdW50Lm9wZXJhdG9ycyxcclxuICAgICAgICBjYXRjaEVycm9yKCgpID0+IEVNUFRZKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgY3JlYXRlU2hhcmVCdXR0b24oYnV0dG9uc05hbWU6IHN0cmluZykge1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IHsuLi50aGlzLnNoYXJlU2VydmljZS5wcm9wW2J1dHRvbnNOYW1lXX07XHJcblxyXG4gICAgaWYgKGJ1dHRvbikge1xyXG4gICAgICAvLyBTZXQgc2hhcmUgYnV0dG9uIHByb3BlcnRpZXNcclxuICAgICAgdGhpcy5wcm9wID0gYnV0dG9uO1xyXG5cclxuICAgICAgLy8gUmVtb3ZlIHByZXZpb3VzIGJ1dHRvbiBjbGFzc1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgYHNiLSR7dGhpcy5fYnV0dG9uQ2xhc3N9YCk7XHJcblxyXG4gICAgICAvLyBBZGQgbmV3IGJ1dHRvbiBjbGFzc1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgYHNiLSR7YnV0dG9uLnR5cGV9YCk7XHJcblxyXG4gICAgICAvLyBTZXQgYnV0dG9uIGNzcyBjb2xvciB2YXJpYWJsZVxyXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYnV0dG9uLWNvbG9yJywgdGhpcy5wcm9wLmNvbG9yKTtcclxuXHJcbiAgICAgIC8vIEtlZXAgYSBjb3B5IG9mIHRoZSBjbGFzcyBmb3IgZnV0dXJlIHJlcGxhY2VtZW50XHJcbiAgICAgIHRoaXMuX2J1dHRvbkNsYXNzID0gYnV0dG9uLnR5cGU7XHJcblxyXG4gICAgICAvLyBTZXQgYXJpYS1sYWJlbCBhdHRyaWJ1dGVcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYXJpYS1sYWJlbCcsIGJ1dHRvbi5hcmlhTGFiZWwgfHwgYnV0dG9uLnRleHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbU2hhcmVCdXR0b25zXTogVGhlIHNoYXJlIGJ1dHRvbiAnJHtidXR0b25zTmFtZX0nIGRvZXMgbm90IGV4aXN0IWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19