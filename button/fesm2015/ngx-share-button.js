import { Component, Input, Output, ViewChild, HostBinding, EventEmitter, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { ShareButtons, ShareButtonDirective, ShareModule, CONFIG } from '@ngx-share/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ShareButtonComponent {
    /**
     * @param {?} share
     */
    constructor(share) {
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
    /**
     * @param {?} button
     * @return {?}
     */
    set createButton(button) {
        this.shareCount = 0;
        this.button = button;
    }
    /**
     * Share URL
     * @param {?} url
     * @return {?}
     */
    set setUrl(url) {
        this.shareCount = 0;
        this.url = url;
    }
    /**
     * Set theme as button class
     * @return {?}
     */
    get buttonClass() {
        return `sb-button sb-${this.theme}`;
    }
    /**
     * @param {?} count
     * @return {?}
     */
    onCount(count) {
        this.shareCount = count;
        this.count.emit(count);
    }
}
ShareButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'share-button',
                template: `<button class="sb-wrapper"
        [shareButton]="button"
        [url]="url"
        [image]="image"
        [title]="title"
        [description]="description"
        [tags]="tags"
        [autoSetMeta]="autoSetMeta"
        [getCount]="showCount"
        (opened)="opened.emit($event)"
        (closed)="closed.emit($event)"
        (count)="onCount($event)"
        [class.sb-show-icon]="showIcon"
        [class.sb-show-text]="showText"
        [class.sb-show-count]="showCount && shareCount"
        [style.fontSize.px]="(1 + size/20) * 14">

  <div class="sb-inner">

    <div class="sb-content">

      <!-- BUTTON ICON -->
      <div *ngIf="showIcon && ref.prop" class="sb-icon">
        <fa-icon [icon]="icon || ref.prop.icon"></fa-icon>
      </div>

      <!-- BUTTON TEXT -->
      <div *ngIf="showText && ref.prop" class="sb-text">
        {{ text || ref.prop.text }}
      </div>

    </div>

    <!-- BUTTON COUNT -->
    <div *ngIf="showCount && shareCount" class="sb-count">
      <span>{{ shareCount | shareCount }}</span>
    </div>

  </div>
</button>
`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false
            },] },
];
/** @nocollapse */
ShareButtonComponent.ctorParameters = () => [
    { type: ShareButtons }
];
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
class ShareButtonModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
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
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { ShareButtonsFactory, ShareButtonModule, ShareButtonComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNoYXJlLWJ1dHRvbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQG5neC1zaGFyZS9idXR0b24vbGliL3NoYXJlLWJ1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0BuZ3gtc2hhcmUvYnV0dG9uL2xpYi9zaGFyZS1idXR0b24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkLCBIb3N0QmluZGluZywgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbnMsIFNoYXJlQnV0dG9uRGlyZWN0aXZlIH0gZnJvbSAnQG5neC1zaGFyZS9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2hhcmUtYnV0dG9uJyxcclxuICB0ZW1wbGF0ZTogYDxidXR0b24gY2xhc3M9XCJzYi13cmFwcGVyXCJcclxuICAgICAgICBbc2hhcmVCdXR0b25dPVwiYnV0dG9uXCJcclxuICAgICAgICBbdXJsXT1cInVybFwiXHJcbiAgICAgICAgW2ltYWdlXT1cImltYWdlXCJcclxuICAgICAgICBbdGl0bGVdPVwidGl0bGVcIlxyXG4gICAgICAgIFtkZXNjcmlwdGlvbl09XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgW3RhZ3NdPVwidGFnc1wiXHJcbiAgICAgICAgW2F1dG9TZXRNZXRhXT1cImF1dG9TZXRNZXRhXCJcclxuICAgICAgICBbZ2V0Q291bnRdPVwic2hvd0NvdW50XCJcclxuICAgICAgICAob3BlbmVkKT1cIm9wZW5lZC5lbWl0KCRldmVudClcIlxyXG4gICAgICAgIChjbG9zZWQpPVwiY2xvc2VkLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgKGNvdW50KT1cIm9uQ291bnQoJGV2ZW50KVwiXHJcbiAgICAgICAgW2NsYXNzLnNiLXNob3ctaWNvbl09XCJzaG93SWNvblwiXHJcbiAgICAgICAgW2NsYXNzLnNiLXNob3ctdGV4dF09XCJzaG93VGV4dFwiXHJcbiAgICAgICAgW2NsYXNzLnNiLXNob3ctY291bnRdPVwic2hvd0NvdW50ICYmIHNoYXJlQ291bnRcIlxyXG4gICAgICAgIFtzdHlsZS5mb250U2l6ZS5weF09XCIoMSArIHNpemUvMjApICogMTRcIj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cInNiLWlubmVyXCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInNiLWNvbnRlbnRcIj5cclxuXHJcbiAgICAgIDwhLS0gQlVUVE9OIElDT04gLS0+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCJzaG93SWNvbiAmJiByZWYucHJvcFwiIGNsYXNzPVwic2ItaWNvblwiPlxyXG4gICAgICAgIDxmYS1pY29uIFtpY29uXT1cImljb24gfHwgcmVmLnByb3AuaWNvblwiPjwvZmEtaWNvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8IS0tIEJVVFRPTiBURVhUIC0tPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwic2hvd1RleHQgJiYgcmVmLnByb3BcIiBjbGFzcz1cInNiLXRleHRcIj5cclxuICAgICAgICB7eyB0ZXh0IHx8IHJlZi5wcm9wLnRleHQgfX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSBCVVRUT04gQ09VTlQgLS0+XHJcbiAgICA8ZGl2ICpuZ0lmPVwic2hvd0NvdW50ICYmIHNoYXJlQ291bnRcIiBjbGFzcz1cInNiLWNvdW50XCI+XHJcbiAgICAgIDxzcGFuPnt7IHNoYXJlQ291bnQgfCBzaGFyZUNvdW50IH19PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG48L2J1dHRvbj5cclxuYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVCdXR0b25Db21wb25lbnQge1xyXG5cclxuICAvKiogU2hhcmUgVVJMICovXHJcbiAgdXJsOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBTaGFyZSBjb3VudCB2YWx1ZSAqL1xyXG4gIHNoYXJlQ291bnQ6IG51bWJlcjtcclxuXHJcbiAgLyoqIEJ1dHRvbiBuYW1lICovXHJcbiAgYnV0dG9uOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgnYnV0dG9uJylcclxuICBzZXQgY3JlYXRlQnV0dG9uKGJ1dHRvbjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNoYXJlQ291bnQgPSAwO1xyXG4gICAgdGhpcy5idXR0b24gPSBidXR0b247XHJcbiAgfVxyXG5cclxuICAvKiogU2hhcmUgVVJMICovXHJcbiAgQElucHV0KCd1cmwnKVxyXG4gIHNldCBzZXRVcmwodXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2hhcmVDb3VudCA9IDA7XHJcbiAgICB0aGlzLnVybCA9IHVybDtcclxuICB9XHJcblxyXG4gIC8qKiBTaGFyZSBtZXRhIHRhZ3MgKi9cclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaW1hZ2U6IHN0cmluZztcclxuICBASW5wdXQoKSB0YWdzOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBTZXQgbWV0YSB0YWdzIGZyb20gZG9jdW1lbnQgaGVhZCwgdXNlZnVsIHdoZW4gU0VPIGlzIHN1cHBvcnRlZCAqL1xyXG4gIEBJbnB1dCgpIGF1dG9TZXRNZXRhOiBib29sZWFuO1xyXG5cclxuICAvKiogU2hvdyBidXR0b24gaWNvbiAqL1xyXG4gIEBJbnB1dCgpIHNob3dJY29uID0gdHJ1ZTtcclxuXHJcbiAgLyoqIFNob3cgYnV0dG9uIHRleHQgKi9cclxuICBASW5wdXQoKSBzaG93VGV4dCA9IGZhbHNlO1xyXG5cclxuICAvKiogQnV0dG9uIHNoYXJlIGNvdW50ICovXHJcbiAgQElucHV0KCkgc2hvd0NvdW50ID0gZmFsc2U7XHJcblxyXG4gIC8qKiBCdXR0b24gY3VzdG9tIHRleHQgKi9cclxuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBCdXR0b24gY3VzdG9tIGljb24gKi9cclxuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBCdXR0b24gc2l6ZSAqL1xyXG4gIEBJbnB1dCgpIHNpemU6IG51bWJlciA9IHRoaXMuc2hhcmUuc2l6ZTtcclxuXHJcbiAgLyoqIEJ1dHRvbiB0aGVtZSAqL1xyXG4gIEBJbnB1dCgpIHRoZW1lOiBzdHJpbmcgPSB0aGlzLnNoYXJlLnRoZW1lO1xyXG5cclxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBzaGFyZSBjb3VudCBpcyBmZXRjaGVkICovXHJcbiAgQE91dHB1dCgpIGNvdW50ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHNoYXJlIGRpYWxvZyBpcyBvcGVuZWQgKi9cclxuICBAT3V0cHV0KCkgb3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHNoYXJlIGRpYWxvZyBpcyBjbG9zZWQgKi9cclxuICBAT3V0cHV0KCkgY2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIC8qKiBTZXQgdGhlbWUgYXMgYnV0dG9uIGNsYXNzICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGdldCBidXR0b25DbGFzcygpIHtcclxuICAgIHJldHVybiBgc2ItYnV0dG9uIHNiLSR7dGhpcy50aGVtZX1gO1xyXG4gIH1cclxuXHJcbiAgLyoqIEdldCBidXR0b24gcHJvcCBmcm9tIFNoYXJlRGlyZWN0aXZlICovXHJcbiAgQFZpZXdDaGlsZChTaGFyZUJ1dHRvbkRpcmVjdGl2ZSkgcmVmOiBTaGFyZUJ1dHRvbkRpcmVjdGl2ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzaGFyZTogU2hhcmVCdXR0b25zKSB7XHJcbiAgfVxyXG5cclxuICBvbkNvdW50KGNvdW50KSB7XHJcbiAgICB0aGlzLnNoYXJlQ291bnQgPSBjb3VudDtcclxuICAgIHRoaXMuY291bnQuZW1pdChjb3VudCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBTaGFyZU1vZHVsZSwgU2hhcmVCdXR0b25zLCBTaGFyZUJ1dHRvbnNDb25maWcsIENPTkZJRyB9IGZyb20gJ0BuZ3gtc2hhcmUvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vc2hhcmUtYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNoYXJlQnV0dG9uc0ZhY3RvcnkoY29uZmlnOiBTaGFyZUJ1dHRvbnNDb25maWcpIHtcclxuICByZXR1cm4gbmV3IFNoYXJlQnV0dG9ucyhjb25maWcpO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgU2hhcmVCdXR0b25Db21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIFNoYXJlTW9kdWxlLFxyXG4gICAgRm9udEF3ZXNvbWVNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFNoYXJlTW9kdWxlLFxyXG4gICAgRm9udEF3ZXNvbWVNb2R1bGUsXHJcbiAgICBTaGFyZUJ1dHRvbkNvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlQnV0dG9uTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBTaGFyZUJ1dHRvbnNDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBTaGFyZUJ1dHRvbk1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge3Byb3ZpZGU6IENPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ30sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogU2hhcmVCdXR0b25zLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogU2hhcmVCdXR0b25zRmFjdG9yeSxcclxuICAgICAgICAgIGRlcHM6IFtDT05GSUddXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7SUF3SEUsWUFBb0IsS0FBbUI7UUFBbkIsVUFBSyxHQUFMLEtBQUssQ0FBYzs7Ozt3QkFyQ25CLElBQUk7Ozs7d0JBR0osS0FBSzs7Ozt5QkFHSixLQUFLOzs7O29CQVNGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTs7OztxQkFHZCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7Ozs7cUJBR3ZCLElBQUksWUFBWSxFQUFVOzs7O3NCQUd6QixJQUFJLFlBQVksRUFBVTs7OztzQkFHMUIsSUFBSSxZQUFZLEVBQVU7S0FXNUM7Ozs7O0lBN0RELElBQ0ksWUFBWSxDQUFDLE1BQWM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7S0FDdEI7Ozs7OztJQUdELElBQ0ksTUFBTSxDQUFDLEdBQVc7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7S0FDaEI7Ozs7O0lBMENELElBQTBCLFdBQVc7UUFDbkMsT0FBTyxnQkFBZ0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ3JDOzs7OztJQVFELE9BQU8sQ0FBQyxLQUFLO1FBQ1gsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEI7OztZQTNIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXdDWDtnQkFDQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjs7OztZQS9DUSxZQUFZOzs7MkJBMkRsQixLQUFLLFNBQUMsUUFBUTtxQkFPZCxLQUFLLFNBQUMsS0FBSztvQkFPWCxLQUFLOzBCQUNMLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLOzBCQUdMLEtBQUs7dUJBR0wsS0FBSzt1QkFHTCxLQUFLO3dCQUdMLEtBQUs7bUJBR0wsS0FBSzttQkFHTCxLQUFLO21CQUdMLEtBQUs7b0JBR0wsS0FBSztvQkFHTCxNQUFNO3FCQUdOLE1BQU07cUJBR04sTUFBTTswQkFHTixXQUFXLFNBQUMsT0FBTztrQkFLbkIsU0FBUyxTQUFDLG9CQUFvQjs7Ozs7OztBQ3RIakM7Ozs7QUFPQSw2QkFBb0MsTUFBMEI7SUFDNUQsT0FBTyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUNqQztBQWlCRDs7Ozs7SUFDRSxPQUFPLE9BQU8sQ0FBQyxNQUEyQjtRQUN4QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUU7Z0JBQ1QsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUM7Z0JBQ25DO29CQUNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixVQUFVLEVBQUUsbUJBQW1CO29CQUMvQixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7aUJBQ2Y7YUFDRjtTQUNGLENBQUM7S0FDSDs7O1lBNUJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osb0JBQW9CO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsV0FBVztvQkFDWCxpQkFBaUI7b0JBQ2pCLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFdBQVc7b0JBQ1gsaUJBQWlCO29CQUNqQixvQkFBb0I7aUJBQ3JCO2FBQ0Y7Ozs7Ozs7Ozs7Ozs7OzsifQ==