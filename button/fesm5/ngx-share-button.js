import { Component, Input, Output, ViewChild, HostBinding, EventEmitter, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { ShareButtons, ShareButtonDirective, ShareModule, CONFIG } from '@ngx-share/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ShareButtonComponent = /** @class */ (function () {
    function ShareButtonComponent(share) {
        this.share = share;
        /**
         * Show button icon
         */
        this.showIcon = true;
        /**
         * Show button text
         */
        this.showText = false;
        /**
         * Button share count
         */
        this.showCount = false;
        /**
         * Button size
         */
        this.size = this.share.size;
        /**
         * Button theme
         */
        this.theme = this.share.theme;
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
    Object.defineProperty(ShareButtonComponent.prototype, "createButton", {
        set: /**
         * @param {?} button
         * @return {?}
         */
        function (button) {
            this.shareCount = 0;
            this.button = button;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtonComponent.prototype, "setUrl", {
        /** Share URL */
        set: /**
         * Share URL
         * @param {?} url
         * @return {?}
         */
        function (url) {
            this.shareCount = 0;
            this.url = url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtonComponent.prototype, "buttonClass", {
        /** Set theme as button class */
        get: /**
         * Set theme as button class
         * @return {?}
         */
        function () {
            return "sb-button sb-" + this.theme;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} count
     * @return {?}
     */
    ShareButtonComponent.prototype.onCount = /**
     * @param {?} count
     * @return {?}
     */
    function (count) {
        this.shareCount = count;
        this.count.emit(count);
    };
    ShareButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'share-button',
                    template: "<button class=\"sb-wrapper\"\n        [shareButton]=\"button\"\n        [url]=\"url\"\n        [image]=\"image\"\n        [title]=\"title\"\n        [description]=\"description\"\n        [tags]=\"tags\"\n        [autoSetMeta]=\"autoSetMeta\"\n        [getCount]=\"showCount\"\n        (opened)=\"opened.emit($event)\"\n        (closed)=\"closed.emit($event)\"\n        (count)=\"onCount($event)\"\n        [class.sb-show-icon]=\"showIcon\"\n        [class.sb-show-text]=\"showText\"\n        [class.sb-show-count]=\"showCount && shareCount\"\n        [style.fontSize.px]=\"(1 + size/20) * 14\">\n\n  <div class=\"sb-inner\">\n\n    <div class=\"sb-content\">\n\n      <!-- BUTTON ICON -->\n      <div *ngIf=\"showIcon && ref.prop\" class=\"sb-icon\">\n        <fa-icon [icon]=\"icon || ref.prop.icon\"></fa-icon>\n      </div>\n\n      <!-- BUTTON TEXT -->\n      <div *ngIf=\"showText && ref.prop\" class=\"sb-text\">\n        {{ text || ref.prop.text }}\n      </div>\n\n    </div>\n\n    <!-- BUTTON COUNT -->\n    <div *ngIf=\"showCount && shareCount\" class=\"sb-count\">\n      <span>{{ shareCount | shareCount }}</span>\n    </div>\n\n  </div>\n</button>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false
                },] },
    ];
    /** @nocollapse */
    ShareButtonComponent.ctorParameters = function () { return [
        { type: ShareButtons }
    ]; };
    ShareButtonComponent.propDecorators = {
        createButton: [{ type: Input, args: ['button',] }],
        setUrl: [{ type: Input, args: ['url',] }],
        title: [{ type: Input }],
        description: [{ type: Input }],
        image: [{ type: Input }],
        tags: [{ type: Input }],
        autoSetMeta: [{ type: Input }],
        showIcon: [{ type: Input }],
        showText: [{ type: Input }],
        showCount: [{ type: Input }],
        text: [{ type: Input }],
        icon: [{ type: Input }],
        size: [{ type: Input }],
        theme: [{ type: Input }],
        count: [{ type: Output }],
        opened: [{ type: Output }],
        closed: [{ type: Output }],
        buttonClass: [{ type: HostBinding, args: ['class',] }],
        ref: [{ type: ViewChild, args: [ShareButtonDirective,] }]
    };
    return ShareButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function ShareButtonsFactory(config) {
    return new ShareButtons(config);
}
var ShareButtonModule = /** @class */ (function () {
    function ShareButtonModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    ShareButtonModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: ShareButtonModule,
            providers: [
                { provide: CONFIG, useValue: config },
                {
                    provide: ShareButtons,
                    useFactory: ShareButtonsFactory,
                    deps: [CONFIG]
                }
            ]
        };
    };
    ShareButtonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ShareButtonComponent
                    ],
                    imports: [
                        ShareModule,
                        FontAwesomeModule,
                        CommonModule
                    ],
                    exports: [
                        ShareModule,
                        FontAwesomeModule,
                        ShareButtonComponent
                    ]
                },] },
    ];
    return ShareButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { ShareButtonsFactory, ShareButtonModule, ShareButtonComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNoYXJlLWJ1dHRvbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQG5neC1zaGFyZS9idXR0b24vbGliL3NoYXJlLWJ1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0BuZ3gtc2hhcmUvYnV0dG9uL2xpYi9zaGFyZS1idXR0b24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkLCBIb3N0QmluZGluZywgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbnMsIFNoYXJlQnV0dG9uRGlyZWN0aXZlIH0gZnJvbSAnQG5neC1zaGFyZS9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2hhcmUtYnV0dG9uJyxcclxuICB0ZW1wbGF0ZTogYDxidXR0b24gY2xhc3M9XCJzYi13cmFwcGVyXCJcclxuICAgICAgICBbc2hhcmVCdXR0b25dPVwiYnV0dG9uXCJcclxuICAgICAgICBbdXJsXT1cInVybFwiXHJcbiAgICAgICAgW2ltYWdlXT1cImltYWdlXCJcclxuICAgICAgICBbdGl0bGVdPVwidGl0bGVcIlxyXG4gICAgICAgIFtkZXNjcmlwdGlvbl09XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgW3RhZ3NdPVwidGFnc1wiXHJcbiAgICAgICAgW2F1dG9TZXRNZXRhXT1cImF1dG9TZXRNZXRhXCJcclxuICAgICAgICBbZ2V0Q291bnRdPVwic2hvd0NvdW50XCJcclxuICAgICAgICAob3BlbmVkKT1cIm9wZW5lZC5lbWl0KCRldmVudClcIlxyXG4gICAgICAgIChjbG9zZWQpPVwiY2xvc2VkLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgKGNvdW50KT1cIm9uQ291bnQoJGV2ZW50KVwiXHJcbiAgICAgICAgW2NsYXNzLnNiLXNob3ctaWNvbl09XCJzaG93SWNvblwiXHJcbiAgICAgICAgW2NsYXNzLnNiLXNob3ctdGV4dF09XCJzaG93VGV4dFwiXHJcbiAgICAgICAgW2NsYXNzLnNiLXNob3ctY291bnRdPVwic2hvd0NvdW50ICYmIHNoYXJlQ291bnRcIlxyXG4gICAgICAgIFtzdHlsZS5mb250U2l6ZS5weF09XCIoMSArIHNpemUvMjApICogMTRcIj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cInNiLWlubmVyXCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInNiLWNvbnRlbnRcIj5cclxuXHJcbiAgICAgIDwhLS0gQlVUVE9OIElDT04gLS0+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCJzaG93SWNvbiAmJiByZWYucHJvcFwiIGNsYXNzPVwic2ItaWNvblwiPlxyXG4gICAgICAgIDxmYS1pY29uIFtpY29uXT1cImljb24gfHwgcmVmLnByb3AuaWNvblwiPjwvZmEtaWNvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8IS0tIEJVVFRPTiBURVhUIC0tPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwic2hvd1RleHQgJiYgcmVmLnByb3BcIiBjbGFzcz1cInNiLXRleHRcIj5cclxuICAgICAgICB7eyB0ZXh0IHx8IHJlZi5wcm9wLnRleHQgfX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSBCVVRUT04gQ09VTlQgLS0+XHJcbiAgICA8ZGl2ICpuZ0lmPVwic2hvd0NvdW50ICYmIHNoYXJlQ291bnRcIiBjbGFzcz1cInNiLWNvdW50XCI+XHJcbiAgICAgIDxzcGFuPnt7IHNoYXJlQ291bnQgfCBzaGFyZUNvdW50IH19PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG48L2J1dHRvbj5cclxuYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVCdXR0b25Db21wb25lbnQge1xyXG5cclxuICAvKiogU2hhcmUgVVJMICovXHJcbiAgdXJsOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBTaGFyZSBjb3VudCB2YWx1ZSAqL1xyXG4gIHNoYXJlQ291bnQ6IG51bWJlcjtcclxuXHJcbiAgLyoqIEJ1dHRvbiBuYW1lICovXHJcbiAgYnV0dG9uOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgnYnV0dG9uJylcclxuICBzZXQgY3JlYXRlQnV0dG9uKGJ1dHRvbjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNoYXJlQ291bnQgPSAwO1xyXG4gICAgdGhpcy5idXR0b24gPSBidXR0b247XHJcbiAgfVxyXG5cclxuICAvKiogU2hhcmUgVVJMICovXHJcbiAgQElucHV0KCd1cmwnKVxyXG4gIHNldCBzZXRVcmwodXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2hhcmVDb3VudCA9IDA7XHJcbiAgICB0aGlzLnVybCA9IHVybDtcclxuICB9XHJcblxyXG4gIC8qKiBTaGFyZSBtZXRhIHRhZ3MgKi9cclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaW1hZ2U6IHN0cmluZztcclxuICBASW5wdXQoKSB0YWdzOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBTZXQgbWV0YSB0YWdzIGZyb20gZG9jdW1lbnQgaGVhZCwgdXNlZnVsIHdoZW4gU0VPIGlzIHN1cHBvcnRlZCAqL1xyXG4gIEBJbnB1dCgpIGF1dG9TZXRNZXRhOiBib29sZWFuO1xyXG5cclxuICAvKiogU2hvdyBidXR0b24gaWNvbiAqL1xyXG4gIEBJbnB1dCgpIHNob3dJY29uID0gdHJ1ZTtcclxuXHJcbiAgLyoqIFNob3cgYnV0dG9uIHRleHQgKi9cclxuICBASW5wdXQoKSBzaG93VGV4dCA9IGZhbHNlO1xyXG5cclxuICAvKiogQnV0dG9uIHNoYXJlIGNvdW50ICovXHJcbiAgQElucHV0KCkgc2hvd0NvdW50ID0gZmFsc2U7XHJcblxyXG4gIC8qKiBCdXR0b24gY3VzdG9tIHRleHQgKi9cclxuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBCdXR0b24gY3VzdG9tIGljb24gKi9cclxuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBCdXR0b24gc2l6ZSAqL1xyXG4gIEBJbnB1dCgpIHNpemU6IG51bWJlciA9IHRoaXMuc2hhcmUuc2l6ZTtcclxuXHJcbiAgLyoqIEJ1dHRvbiB0aGVtZSAqL1xyXG4gIEBJbnB1dCgpIHRoZW1lOiBzdHJpbmcgPSB0aGlzLnNoYXJlLnRoZW1lO1xyXG5cclxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBzaGFyZSBjb3VudCBpcyBmZXRjaGVkICovXHJcbiAgQE91dHB1dCgpIGNvdW50ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHNoYXJlIGRpYWxvZyBpcyBvcGVuZWQgKi9cclxuICBAT3V0cHV0KCkgb3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHNoYXJlIGRpYWxvZyBpcyBjbG9zZWQgKi9cclxuICBAT3V0cHV0KCkgY2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIC8qKiBTZXQgdGhlbWUgYXMgYnV0dG9uIGNsYXNzICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGdldCBidXR0b25DbGFzcygpIHtcclxuICAgIHJldHVybiBgc2ItYnV0dG9uIHNiLSR7dGhpcy50aGVtZX1gO1xyXG4gIH1cclxuXHJcbiAgLyoqIEdldCBidXR0b24gcHJvcCBmcm9tIFNoYXJlRGlyZWN0aXZlICovXHJcbiAgQFZpZXdDaGlsZChTaGFyZUJ1dHRvbkRpcmVjdGl2ZSkgcmVmOiBTaGFyZUJ1dHRvbkRpcmVjdGl2ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzaGFyZTogU2hhcmVCdXR0b25zKSB7XHJcbiAgfVxyXG5cclxuICBvbkNvdW50KGNvdW50KSB7XHJcbiAgICB0aGlzLnNoYXJlQ291bnQgPSBjb3VudDtcclxuICAgIHRoaXMuY291bnQuZW1pdChjb3VudCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBTaGFyZU1vZHVsZSwgU2hhcmVCdXR0b25zLCBTaGFyZUJ1dHRvbnNDb25maWcsIENPTkZJRyB9IGZyb20gJ0BuZ3gtc2hhcmUvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vc2hhcmUtYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNoYXJlQnV0dG9uc0ZhY3RvcnkoY29uZmlnOiBTaGFyZUJ1dHRvbnNDb25maWcpIHtcclxuICByZXR1cm4gbmV3IFNoYXJlQnV0dG9ucyhjb25maWcpO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgU2hhcmVCdXR0b25Db21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIFNoYXJlTW9kdWxlLFxyXG4gICAgRm9udEF3ZXNvbWVNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFNoYXJlTW9kdWxlLFxyXG4gICAgRm9udEF3ZXNvbWVNb2R1bGUsXHJcbiAgICBTaGFyZUJ1dHRvbkNvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlQnV0dG9uTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBTaGFyZUJ1dHRvbnNDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBTaGFyZUJ1dHRvbk1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge3Byb3ZpZGU6IENPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ30sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogU2hhcmVCdXR0b25zLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogU2hhcmVCdXR0b25zRmFjdG9yeSxcclxuICAgICAgICAgIGRlcHM6IFtDT05GSUddXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7SUF3SEUsOEJBQW9CLEtBQW1CO1FBQW5CLFVBQUssR0FBTCxLQUFLLENBQWM7Ozs7d0JBckNuQixJQUFJOzs7O3dCQUdKLEtBQUs7Ozs7eUJBR0osS0FBSzs7OztvQkFTRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7Ozs7cUJBR2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLOzs7O3FCQUd2QixJQUFJLFlBQVksRUFBVTs7OztzQkFHekIsSUFBSSxZQUFZLEVBQVU7Ozs7c0JBRzFCLElBQUksWUFBWSxFQUFVO0tBVzVDO0lBN0RELHNCQUNJLDhDQUFZOzs7OztRQURoQixVQUNpQixNQUFjO1lBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3RCOzs7T0FBQTtJQUdELHNCQUNJLHdDQUFNOzs7Ozs7O1FBRFYsVUFDVyxHQUFXO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ2hCOzs7T0FBQTtJQTBDRCxzQkFBMEIsNkNBQVc7Ozs7OztRQUFyQztZQUNFLE9BQU8sa0JBQWdCLElBQUksQ0FBQyxLQUFPLENBQUM7U0FDckM7OztPQUFBOzs7OztJQVFELHNDQUFPOzs7O0lBQVAsVUFBUSxLQUFLO1FBQ1gsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEI7O2dCQTNIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSw4b0NBd0NYO29CQUNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7OztnQkEvQ1EsWUFBWTs7OytCQTJEbEIsS0FBSyxTQUFDLFFBQVE7eUJBT2QsS0FBSyxTQUFDLEtBQUs7d0JBT1gsS0FBSzs4QkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzs4QkFHTCxLQUFLOzJCQUdMLEtBQUs7MkJBR0wsS0FBSzs0QkFHTCxLQUFLO3VCQUdMLEtBQUs7dUJBR0wsS0FBSzt1QkFHTCxLQUFLO3dCQUdMLEtBQUs7d0JBR0wsTUFBTTt5QkFHTixNQUFNO3lCQUdOLE1BQU07OEJBR04sV0FBVyxTQUFDLE9BQU87c0JBS25CLFNBQVMsU0FBQyxvQkFBb0I7OytCQXRIakM7Ozs7Ozs7QUNBQTs7OztBQU9BLDZCQUFvQyxNQUEwQjtJQUM1RCxPQUFPLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQ2pDOzs7Ozs7OztJQWtCUSx5QkFBTzs7OztJQUFkLFVBQWUsTUFBMkI7UUFDeEMsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFO2dCQUNULEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDO2dCQUNuQztvQkFDRSxPQUFPLEVBQUUsWUFBWTtvQkFDckIsVUFBVSxFQUFFLG1CQUFtQjtvQkFDL0IsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO2lCQUNmO2FBQ0Y7U0FDRixDQUFDO0tBQ0g7O2dCQTVCRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFdBQVc7d0JBQ1gsaUJBQWlCO3dCQUNqQixZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLGlCQUFpQjt3QkFDakIsb0JBQW9CO3FCQUNyQjtpQkFDRjs7NEJBekJEOzs7Ozs7Ozs7Ozs7Ozs7In0=