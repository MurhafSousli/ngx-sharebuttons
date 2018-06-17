/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, ViewChild, HostBinding, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ShareButtons, ShareButtonDirective } from '@ngx-share/core';
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
export { ShareButtonComponent };
function ShareButtonComponent_tsickle_Closure_declarations() {
    /**
     * Share URL
     * @type {?}
     */
    ShareButtonComponent.prototype.url;
    /**
     * Share count value
     * @type {?}
     */
    ShareButtonComponent.prototype.shareCount;
    /**
     * Button name
     * @type {?}
     */
    ShareButtonComponent.prototype.button;
    /**
     * Share meta tags
     * @type {?}
     */
    ShareButtonComponent.prototype.title;
    /** @type {?} */
    ShareButtonComponent.prototype.description;
    /** @type {?} */
    ShareButtonComponent.prototype.image;
    /** @type {?} */
    ShareButtonComponent.prototype.tags;
    /**
     * Set meta tags from document head, useful when SEO is supported
     * @type {?}
     */
    ShareButtonComponent.prototype.autoSetMeta;
    /**
     * Show button icon
     * @type {?}
     */
    ShareButtonComponent.prototype.showIcon;
    /**
     * Show button text
     * @type {?}
     */
    ShareButtonComponent.prototype.showText;
    /**
     * Button share count
     * @type {?}
     */
    ShareButtonComponent.prototype.showCount;
    /**
     * Button custom text
     * @type {?}
     */
    ShareButtonComponent.prototype.text;
    /**
     * Button custom icon
     * @type {?}
     */
    ShareButtonComponent.prototype.icon;
    /**
     * Button size
     * @type {?}
     */
    ShareButtonComponent.prototype.size;
    /**
     * Button theme
     * @type {?}
     */
    ShareButtonComponent.prototype.theme;
    /**
     * Stream that emits when share count is fetched
     * @type {?}
     */
    ShareButtonComponent.prototype.count;
    /**
     * Stream that emits when share dialog is opened
     * @type {?}
     */
    ShareButtonComponent.prototype.opened;
    /**
     * Stream that emits when share dialog is closed
     * @type {?}
     */
    ShareButtonComponent.prototype.closed;
    /**
     * Get button prop from ShareDirective
     * @type {?}
     */
    ShareButtonComponent.prototype.ref;
    /** @type {?} */
    ShareButtonComponent.prototype.share;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvYnV0dG9uLyIsInNvdXJjZXMiOlsibGliL3NoYXJlLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4SCxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBdUhuRSw4QkFBb0IsS0FBbUI7UUFBbkIsVUFBSyxHQUFMLEtBQUssQ0FBYzs7Ozt3QkFyQ25CLElBQUk7Ozs7d0JBR0osS0FBSzs7Ozt5QkFHSixLQUFLOzs7O29CQVNGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTs7OztxQkFHZCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7Ozs7cUJBR3ZCLElBQUksWUFBWSxFQUFVOzs7O3NCQUd6QixJQUFJLFlBQVksRUFBVTs7OztzQkFHMUIsSUFBSSxZQUFZLEVBQVU7S0FXNUM7SUE3REQsc0JBQ0ksOENBQVk7Ozs7O1FBRGhCLFVBQ2lCLE1BQWM7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDdEI7OztPQUFBO0lBR0Qsc0JBQ0ksd0NBQU07UUFGVixnQkFBZ0I7Ozs7OztRQUNoQixVQUNXLEdBQVc7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDaEI7OztPQUFBO0lBMENELHNCQUEwQiw2Q0FBVztRQURyQyxnQ0FBZ0M7Ozs7O1FBQ2hDO1lBQ0UsTUFBTSxDQUFDLGtCQUFnQixJQUFJLENBQUMsS0FBTyxDQUFDO1NBQ3JDOzs7T0FBQTs7Ozs7SUFRRCxzQ0FBTzs7OztJQUFQLFVBQVEsS0FBSztRQUNYLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3hCOztnQkEzSEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsOG9DQXdDWDtvQkFDQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7Ozs7Z0JBL0NRLFlBQVk7OzsrQkEyRGxCLEtBQUssU0FBQyxRQUFRO3lCQU9kLEtBQUssU0FBQyxLQUFLO3dCQU9YLEtBQUs7OEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7OEJBR0wsS0FBSzsyQkFHTCxLQUFLOzJCQUdMLEtBQUs7NEJBR0wsS0FBSzt1QkFHTCxLQUFLO3VCQUdMLEtBQUs7dUJBR0wsS0FBSzt3QkFHTCxLQUFLO3dCQUdMLE1BQU07eUJBR04sTUFBTTt5QkFHTixNQUFNOzhCQUdOLFdBQVcsU0FBQyxPQUFPO3NCQUtuQixTQUFTLFNBQUMsb0JBQW9COzsrQkF0SGpDOztTQWlEYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCwgSG9zdEJpbmRpbmcsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2hhcmVCdXR0b25zLCBTaGFyZUJ1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJ0BuZ3gtc2hhcmUvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NoYXJlLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGU6IGA8YnV0dG9uIGNsYXNzPVwic2Itd3JhcHBlclwiXHJcbiAgICAgICAgW3NoYXJlQnV0dG9uXT1cImJ1dHRvblwiXHJcbiAgICAgICAgW3VybF09XCJ1cmxcIlxyXG4gICAgICAgIFtpbWFnZV09XCJpbWFnZVwiXHJcbiAgICAgICAgW3RpdGxlXT1cInRpdGxlXCJcclxuICAgICAgICBbZGVzY3JpcHRpb25dPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIFt0YWdzXT1cInRhZ3NcIlxyXG4gICAgICAgIFthdXRvU2V0TWV0YV09XCJhdXRvU2V0TWV0YVwiXHJcbiAgICAgICAgW2dldENvdW50XT1cInNob3dDb3VudFwiXHJcbiAgICAgICAgKG9wZW5lZCk9XCJvcGVuZWQuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgICAoY2xvc2VkKT1cImNsb3NlZC5lbWl0KCRldmVudClcIlxyXG4gICAgICAgIChjb3VudCk9XCJvbkNvdW50KCRldmVudClcIlxyXG4gICAgICAgIFtjbGFzcy5zYi1zaG93LWljb25dPVwic2hvd0ljb25cIlxyXG4gICAgICAgIFtjbGFzcy5zYi1zaG93LXRleHRdPVwic2hvd1RleHRcIlxyXG4gICAgICAgIFtjbGFzcy5zYi1zaG93LWNvdW50XT1cInNob3dDb3VudCAmJiBzaGFyZUNvdW50XCJcclxuICAgICAgICBbc3R5bGUuZm9udFNpemUucHhdPVwiKDEgKyBzaXplLzIwKSAqIDE0XCI+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJzYi1pbm5lclwiPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJzYi1jb250ZW50XCI+XHJcblxyXG4gICAgICA8IS0tIEJVVFRPTiBJQ09OIC0tPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwic2hvd0ljb24gJiYgcmVmLnByb3BcIiBjbGFzcz1cInNiLWljb25cIj5cclxuICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJpY29uIHx8IHJlZi5wcm9wLmljb25cIj48L2ZhLWljb24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPCEtLSBCVVRUT04gVEVYVCAtLT5cclxuICAgICAgPGRpdiAqbmdJZj1cInNob3dUZXh0ICYmIHJlZi5wcm9wXCIgY2xhc3M9XCJzYi10ZXh0XCI+XHJcbiAgICAgICAge3sgdGV4dCB8fCByZWYucHJvcC50ZXh0IH19XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0gQlVUVE9OIENPVU5UIC0tPlxyXG4gICAgPGRpdiAqbmdJZj1cInNob3dDb3VudCAmJiBzaGFyZUNvdW50XCIgY2xhc3M9XCJzYi1jb3VudFwiPlxyXG4gICAgICA8c3Bhbj57eyBzaGFyZUNvdW50IHwgc2hhcmVDb3VudCB9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICA8L2Rpdj5cclxuPC9idXR0b24+XHJcbmAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlQnV0dG9uQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqIFNoYXJlIFVSTCAqL1xyXG4gIHVybDogc3RyaW5nO1xyXG5cclxuICAvKiogU2hhcmUgY291bnQgdmFsdWUgKi9cclxuICBzaGFyZUNvdW50OiBudW1iZXI7XHJcblxyXG4gIC8qKiBCdXR0b24gbmFtZSAqL1xyXG4gIGJ1dHRvbjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoJ2J1dHRvbicpXHJcbiAgc2V0IGNyZWF0ZUJ1dHRvbihidXR0b246IHN0cmluZykge1xyXG4gICAgdGhpcy5zaGFyZUNvdW50ID0gMDtcclxuICAgIHRoaXMuYnV0dG9uID0gYnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNoYXJlIFVSTCAqL1xyXG4gIEBJbnB1dCgndXJsJylcclxuICBzZXQgc2V0VXJsKHVybDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNoYXJlQ291bnQgPSAwO1xyXG4gICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgfVxyXG5cclxuICAvKiogU2hhcmUgbWV0YSB0YWdzICovXHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGltYWdlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGFnczogc3RyaW5nO1xyXG5cclxuICAvKiogU2V0IG1ldGEgdGFncyBmcm9tIGRvY3VtZW50IGhlYWQsIHVzZWZ1bCB3aGVuIFNFTyBpcyBzdXBwb3J0ZWQgKi9cclxuICBASW5wdXQoKSBhdXRvU2V0TWV0YTogYm9vbGVhbjtcclxuXHJcbiAgLyoqIFNob3cgYnV0dG9uIGljb24gKi9cclxuICBASW5wdXQoKSBzaG93SWNvbiA9IHRydWU7XHJcblxyXG4gIC8qKiBTaG93IGJ1dHRvbiB0ZXh0ICovXHJcbiAgQElucHV0KCkgc2hvd1RleHQgPSBmYWxzZTtcclxuXHJcbiAgLyoqIEJ1dHRvbiBzaGFyZSBjb3VudCAqL1xyXG4gIEBJbnB1dCgpIHNob3dDb3VudCA9IGZhbHNlO1xyXG5cclxuICAvKiogQnV0dG9uIGN1c3RvbSB0ZXh0ICovXHJcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xyXG5cclxuICAvKiogQnV0dG9uIGN1c3RvbSBpY29uICovXHJcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xyXG5cclxuICAvKiogQnV0dG9uIHNpemUgKi9cclxuICBASW5wdXQoKSBzaXplOiBudW1iZXIgPSB0aGlzLnNoYXJlLnNpemU7XHJcblxyXG4gIC8qKiBCdXR0b24gdGhlbWUgKi9cclxuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nID0gdGhpcy5zaGFyZS50aGVtZTtcclxuXHJcbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gc2hhcmUgY291bnQgaXMgZmV0Y2hlZCAqL1xyXG4gIEBPdXRwdXQoKSBjb3VudCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBzaGFyZSBkaWFsb2cgaXMgb3BlbmVkICovXHJcbiAgQE91dHB1dCgpIG9wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBzaGFyZSBkaWFsb2cgaXMgY2xvc2VkICovXHJcbiAgQE91dHB1dCgpIGNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICAvKiogU2V0IHRoZW1lIGFzIGJ1dHRvbiBjbGFzcyAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBnZXQgYnV0dG9uQ2xhc3MoKSB7XHJcbiAgICByZXR1cm4gYHNiLWJ1dHRvbiBzYi0ke3RoaXMudGhlbWV9YDtcclxuICB9XHJcblxyXG4gIC8qKiBHZXQgYnV0dG9uIHByb3AgZnJvbSBTaGFyZURpcmVjdGl2ZSAqL1xyXG4gIEBWaWV3Q2hpbGQoU2hhcmVCdXR0b25EaXJlY3RpdmUpIHJlZjogU2hhcmVCdXR0b25EaXJlY3RpdmU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2hhcmU6IFNoYXJlQnV0dG9ucykge1xyXG4gIH1cclxuXHJcbiAgb25Db3VudChjb3VudCkge1xyXG4gICAgdGhpcy5zaGFyZUNvdW50ID0gY291bnQ7XHJcbiAgICB0aGlzLmNvdW50LmVtaXQoY291bnQpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19