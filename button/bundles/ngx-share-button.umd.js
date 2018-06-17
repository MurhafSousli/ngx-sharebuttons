(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngx-share/core'), require('@angular/common'), require('@fortawesome/angular-fontawesome')) :
    typeof define === 'function' && define.amd ? define('@ngx-share/button', ['exports', '@angular/core', '@ngx-share/core', '@angular/common', '@fortawesome/angular-fontawesome'], factory) :
    (factory((global['ngx-share'] = global['ngx-share'] || {}, global['ngx-share'].button = {}),global.ng.core,null,global.ng.common,null));
}(this, (function (exports,core,core$1,common,angularFontawesome) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ShareButtonComponent = (function () {
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
            this.count = new core.EventEmitter();
            /**
             * Stream that emits when share dialog is opened
             */
            this.opened = new core.EventEmitter();
            /**
             * Stream that emits when share dialog is closed
             */
            this.closed = new core.EventEmitter();
        }
        Object.defineProperty(ShareButtonComponent.prototype, "createButton", {
            set: /**
             * @param {?} button
             * @return {?}
             */ function (button) {
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
             */ function (url) {
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
             */ function () {
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
            { type: core.Component, args: [{
                        selector: 'share-button',
                        template: "<button class=\"sb-wrapper\"\n        [shareButton]=\"button\"\n        [url]=\"url\"\n        [image]=\"image\"\n        [title]=\"title\"\n        [description]=\"description\"\n        [tags]=\"tags\"\n        [autoSetMeta]=\"autoSetMeta\"\n        [getCount]=\"showCount\"\n        (opened)=\"opened.emit($event)\"\n        (closed)=\"closed.emit($event)\"\n        (count)=\"onCount($event)\"\n        [class.sb-show-icon]=\"showIcon\"\n        [class.sb-show-text]=\"showText\"\n        [class.sb-show-count]=\"showCount && shareCount\"\n        [style.fontSize.px]=\"(1 + size/20) * 14\">\n\n  <div class=\"sb-inner\">\n\n    <div class=\"sb-content\">\n\n      <!-- BUTTON ICON -->\n      <div *ngIf=\"showIcon && ref.prop\" class=\"sb-icon\">\n        <fa-icon [icon]=\"icon || ref.prop.icon\"></fa-icon>\n      </div>\n\n      <!-- BUTTON TEXT -->\n      <div *ngIf=\"showText && ref.prop\" class=\"sb-text\">\n        {{ text || ref.prop.text }}\n      </div>\n\n    </div>\n\n    <!-- BUTTON COUNT -->\n    <div *ngIf=\"showCount && shareCount\" class=\"sb-count\">\n      <span>{{ shareCount | shareCount }}</span>\n    </div>\n\n  </div>\n</button>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false
                    },] },
        ];
        /** @nocollapse */
        ShareButtonComponent.ctorParameters = function () {
            return [
                { type: core$1.ShareButtons }
            ];
        };
        ShareButtonComponent.propDecorators = {
            createButton: [{ type: core.Input, args: ['button',] }],
            setUrl: [{ type: core.Input, args: ['url',] }],
            title: [{ type: core.Input }],
            description: [{ type: core.Input }],
            image: [{ type: core.Input }],
            tags: [{ type: core.Input }],
            autoSetMeta: [{ type: core.Input }],
            showIcon: [{ type: core.Input }],
            showText: [{ type: core.Input }],
            showCount: [{ type: core.Input }],
            text: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            size: [{ type: core.Input }],
            theme: [{ type: core.Input }],
            count: [{ type: core.Output }],
            opened: [{ type: core.Output }],
            closed: [{ type: core.Output }],
            buttonClass: [{ type: core.HostBinding, args: ['class',] }],
            ref: [{ type: core.ViewChild, args: [core$1.ShareButtonDirective,] }]
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
        return new core$1.ShareButtons(config);
    }
    var ShareButtonModule = (function () {
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
                        { provide: core$1.CONFIG, useValue: config },
                        {
                            provide: core$1.ShareButtons,
                            useFactory: ShareButtonsFactory,
                            deps: [core$1.CONFIG]
                        }
                    ]
                };
            };
        ShareButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            ShareButtonComponent
                        ],
                        imports: [
                            core$1.ShareModule,
                            angularFontawesome.FontAwesomeModule,
                            common.CommonModule
                        ],
                        exports: [
                            core$1.ShareModule,
                            angularFontawesome.FontAwesomeModule,
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

    exports.ShareButtonsFactory = ShareButtonsFactory;
    exports.ShareButtonModule = ShareButtonModule;
    exports.ShareButtonComponent = ShareButtonComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNoYXJlLWJ1dHRvbi51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BuZ3gtc2hhcmUvYnV0dG9uL2xpYi9zaGFyZS1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9Abmd4LXNoYXJlL2J1dHRvbi9saWIvc2hhcmUtYnV0dG9uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCwgSG9zdEJpbmRpbmcsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2hhcmVCdXR0b25zLCBTaGFyZUJ1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJ0BuZ3gtc2hhcmUvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NoYXJlLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGU6IGA8YnV0dG9uIGNsYXNzPVwic2Itd3JhcHBlclwiXHJcbiAgICAgICAgW3NoYXJlQnV0dG9uXT1cImJ1dHRvblwiXHJcbiAgICAgICAgW3VybF09XCJ1cmxcIlxyXG4gICAgICAgIFtpbWFnZV09XCJpbWFnZVwiXHJcbiAgICAgICAgW3RpdGxlXT1cInRpdGxlXCJcclxuICAgICAgICBbZGVzY3JpcHRpb25dPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIFt0YWdzXT1cInRhZ3NcIlxyXG4gICAgICAgIFthdXRvU2V0TWV0YV09XCJhdXRvU2V0TWV0YVwiXHJcbiAgICAgICAgW2dldENvdW50XT1cInNob3dDb3VudFwiXHJcbiAgICAgICAgKG9wZW5lZCk9XCJvcGVuZWQuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgICAoY2xvc2VkKT1cImNsb3NlZC5lbWl0KCRldmVudClcIlxyXG4gICAgICAgIChjb3VudCk9XCJvbkNvdW50KCRldmVudClcIlxyXG4gICAgICAgIFtjbGFzcy5zYi1zaG93LWljb25dPVwic2hvd0ljb25cIlxyXG4gICAgICAgIFtjbGFzcy5zYi1zaG93LXRleHRdPVwic2hvd1RleHRcIlxyXG4gICAgICAgIFtjbGFzcy5zYi1zaG93LWNvdW50XT1cInNob3dDb3VudCAmJiBzaGFyZUNvdW50XCJcclxuICAgICAgICBbc3R5bGUuZm9udFNpemUucHhdPVwiKDEgKyBzaXplLzIwKSAqIDE0XCI+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJzYi1pbm5lclwiPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJzYi1jb250ZW50XCI+XHJcblxyXG4gICAgICA8IS0tIEJVVFRPTiBJQ09OIC0tPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwic2hvd0ljb24gJiYgcmVmLnByb3BcIiBjbGFzcz1cInNiLWljb25cIj5cclxuICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJpY29uIHx8IHJlZi5wcm9wLmljb25cIj48L2ZhLWljb24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPCEtLSBCVVRUT04gVEVYVCAtLT5cclxuICAgICAgPGRpdiAqbmdJZj1cInNob3dUZXh0ICYmIHJlZi5wcm9wXCIgY2xhc3M9XCJzYi10ZXh0XCI+XHJcbiAgICAgICAge3sgdGV4dCB8fCByZWYucHJvcC50ZXh0IH19XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0gQlVUVE9OIENPVU5UIC0tPlxyXG4gICAgPGRpdiAqbmdJZj1cInNob3dDb3VudCAmJiBzaGFyZUNvdW50XCIgY2xhc3M9XCJzYi1jb3VudFwiPlxyXG4gICAgICA8c3Bhbj57eyBzaGFyZUNvdW50IHwgc2hhcmVDb3VudCB9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICA8L2Rpdj5cclxuPC9idXR0b24+XHJcbmAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlQnV0dG9uQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqIFNoYXJlIFVSTCAqL1xyXG4gIHVybDogc3RyaW5nO1xyXG5cclxuICAvKiogU2hhcmUgY291bnQgdmFsdWUgKi9cclxuICBzaGFyZUNvdW50OiBudW1iZXI7XHJcblxyXG4gIC8qKiBCdXR0b24gbmFtZSAqL1xyXG4gIGJ1dHRvbjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoJ2J1dHRvbicpXHJcbiAgc2V0IGNyZWF0ZUJ1dHRvbihidXR0b246IHN0cmluZykge1xyXG4gICAgdGhpcy5zaGFyZUNvdW50ID0gMDtcclxuICAgIHRoaXMuYnV0dG9uID0gYnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNoYXJlIFVSTCAqL1xyXG4gIEBJbnB1dCgndXJsJylcclxuICBzZXQgc2V0VXJsKHVybDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNoYXJlQ291bnQgPSAwO1xyXG4gICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgfVxyXG5cclxuICAvKiogU2hhcmUgbWV0YSB0YWdzICovXHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGltYWdlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGFnczogc3RyaW5nO1xyXG5cclxuICAvKiogU2V0IG1ldGEgdGFncyBmcm9tIGRvY3VtZW50IGhlYWQsIHVzZWZ1bCB3aGVuIFNFTyBpcyBzdXBwb3J0ZWQgKi9cclxuICBASW5wdXQoKSBhdXRvU2V0TWV0YTogYm9vbGVhbjtcclxuXHJcbiAgLyoqIFNob3cgYnV0dG9uIGljb24gKi9cclxuICBASW5wdXQoKSBzaG93SWNvbiA9IHRydWU7XHJcblxyXG4gIC8qKiBTaG93IGJ1dHRvbiB0ZXh0ICovXHJcbiAgQElucHV0KCkgc2hvd1RleHQgPSBmYWxzZTtcclxuXHJcbiAgLyoqIEJ1dHRvbiBzaGFyZSBjb3VudCAqL1xyXG4gIEBJbnB1dCgpIHNob3dDb3VudCA9IGZhbHNlO1xyXG5cclxuICAvKiogQnV0dG9uIGN1c3RvbSB0ZXh0ICovXHJcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xyXG5cclxuICAvKiogQnV0dG9uIGN1c3RvbSBpY29uICovXHJcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xyXG5cclxuICAvKiogQnV0dG9uIHNpemUgKi9cclxuICBASW5wdXQoKSBzaXplOiBudW1iZXIgPSB0aGlzLnNoYXJlLnNpemU7XHJcblxyXG4gIC8qKiBCdXR0b24gdGhlbWUgKi9cclxuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nID0gdGhpcy5zaGFyZS50aGVtZTtcclxuXHJcbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gc2hhcmUgY291bnQgaXMgZmV0Y2hlZCAqL1xyXG4gIEBPdXRwdXQoKSBjb3VudCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBzaGFyZSBkaWFsb2cgaXMgb3BlbmVkICovXHJcbiAgQE91dHB1dCgpIG9wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBzaGFyZSBkaWFsb2cgaXMgY2xvc2VkICovXHJcbiAgQE91dHB1dCgpIGNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICAvKiogU2V0IHRoZW1lIGFzIGJ1dHRvbiBjbGFzcyAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBnZXQgYnV0dG9uQ2xhc3MoKSB7XHJcbiAgICByZXR1cm4gYHNiLWJ1dHRvbiBzYi0ke3RoaXMudGhlbWV9YDtcclxuICB9XHJcblxyXG4gIC8qKiBHZXQgYnV0dG9uIHByb3AgZnJvbSBTaGFyZURpcmVjdGl2ZSAqL1xyXG4gIEBWaWV3Q2hpbGQoU2hhcmVCdXR0b25EaXJlY3RpdmUpIHJlZjogU2hhcmVCdXR0b25EaXJlY3RpdmU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2hhcmU6IFNoYXJlQnV0dG9ucykge1xyXG4gIH1cclxuXHJcbiAgb25Db3VudChjb3VudCkge1xyXG4gICAgdGhpcy5zaGFyZUNvdW50ID0gY291bnQ7XHJcbiAgICB0aGlzLmNvdW50LmVtaXQoY291bnQpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU2hhcmVNb2R1bGUsIFNoYXJlQnV0dG9ucywgU2hhcmVCdXR0b25zQ29uZmlnLCBDT05GSUcgfSBmcm9tICdAbmd4LXNoYXJlL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU2hhcmVCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3NoYXJlLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaGFyZUJ1dHRvbnNGYWN0b3J5KGNvbmZpZzogU2hhcmVCdXR0b25zQ29uZmlnKSB7XHJcbiAgcmV0dXJuIG5ldyBTaGFyZUJ1dHRvbnMoY29uZmlnKTtcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFNoYXJlQnV0dG9uQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBTaGFyZU1vZHVsZSxcclxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBTaGFyZU1vZHVsZSxcclxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxyXG4gICAgU2hhcmVCdXR0b25Db21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZUJ1dHRvbk1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnPzogU2hhcmVCdXR0b25zQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogU2hhcmVCdXR0b25Nb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtwcm92aWRlOiBDT05GSUcsIHVzZVZhbHVlOiBjb25maWd9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IFNoYXJlQnV0dG9ucyxcclxuICAgICAgICAgIHVzZUZhY3Rvcnk6IFNoYXJlQnV0dG9uc0ZhY3RvcnksXHJcbiAgICAgICAgICBkZXBzOiBbQ09ORklHXVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiU2hhcmVCdXR0b25zIiwiSW5wdXQiLCJPdXRwdXQiLCJIb3N0QmluZGluZyIsIlZpZXdDaGlsZCIsIlNoYXJlQnV0dG9uRGlyZWN0aXZlIiwiQ09ORklHIiwiTmdNb2R1bGUiLCJTaGFyZU1vZHVsZSIsIkZvbnRBd2Vzb21lTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUF3SEUsOEJBQW9CLEtBQW1CO1lBQW5CLFVBQUssR0FBTCxLQUFLLENBQWM7Ozs7NEJBckNuQixJQUFJOzs7OzRCQUdKLEtBQUs7Ozs7NkJBR0osS0FBSzs7Ozt3QkFTRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7Ozs7eUJBR2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLOzs7O3lCQUd2QixJQUFJQSxpQkFBWSxFQUFVOzs7OzBCQUd6QixJQUFJQSxpQkFBWSxFQUFVOzs7OzBCQUcxQixJQUFJQSxpQkFBWSxFQUFVO1NBVzVDO1FBN0RELHNCQUNJLDhDQUFZOzs7O2dCQURoQixVQUNpQixNQUFjO2dCQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7YUFDdEI7OztXQUFBO1FBR0Qsc0JBQ0ksd0NBQU07Ozs7OztnQkFEVixVQUNXLEdBQVc7Z0JBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzthQUNoQjs7O1dBQUE7UUEwQ0Qsc0JBQTBCLDZDQUFXOzs7OztnQkFBckM7Z0JBQ0UsT0FBTyxrQkFBZ0IsSUFBSSxDQUFDLEtBQU8sQ0FBQzthQUNyQzs7O1dBQUE7Ozs7O1FBUUQsc0NBQU87Ozs7WUFBUCxVQUFRLEtBQUs7Z0JBQ1gsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hCOztvQkEzSEZDLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLDhvQ0F3Q1g7d0JBQ0MsZUFBZSxFQUFFQyw0QkFBdUIsQ0FBQyxNQUFNO3dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO3FCQUMzQjs7Ozs7d0JBL0NRQyxtQkFBWTs7OzttQ0EyRGxCQyxVQUFLLFNBQUMsUUFBUTs2QkFPZEEsVUFBSyxTQUFDLEtBQUs7NEJBT1hBLFVBQUs7a0NBQ0xBLFVBQUs7NEJBQ0xBLFVBQUs7MkJBQ0xBLFVBQUs7a0NBR0xBLFVBQUs7K0JBR0xBLFVBQUs7K0JBR0xBLFVBQUs7Z0NBR0xBLFVBQUs7MkJBR0xBLFVBQUs7MkJBR0xBLFVBQUs7MkJBR0xBLFVBQUs7NEJBR0xBLFVBQUs7NEJBR0xDLFdBQU07NkJBR05BLFdBQU07NkJBR05BLFdBQU07a0NBR05DLGdCQUFXLFNBQUMsT0FBTzswQkFLbkJDLGNBQVMsU0FBQ0MsMkJBQW9COzttQ0F0SGpDOzs7Ozs7O0FDQUE7Ozs7QUFPQSxpQ0FBb0MsTUFBMEI7UUFDNUQsT0FBTyxJQUFJTCxtQkFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2pDOzs7Ozs7OztRQWtCUSx5QkFBTzs7OztZQUFkLFVBQWUsTUFBMkI7Z0JBQ3hDLE9BQU87b0JBQ0wsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsU0FBUyxFQUFFO3dCQUNULEVBQUMsT0FBTyxFQUFFTSxhQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQzt3QkFDbkM7NEJBQ0UsT0FBTyxFQUFFTixtQkFBWTs0QkFDckIsVUFBVSxFQUFFLG1CQUFtQjs0QkFDL0IsSUFBSSxFQUFFLENBQUNNLGFBQU0sQ0FBQzt5QkFDZjtxQkFDRjtpQkFDRixDQUFDO2FBQ0g7O29CQTVCRkMsYUFBUSxTQUFDO3dCQUNSLFlBQVksRUFBRTs0QkFDWixvQkFBb0I7eUJBQ3JCO3dCQUNELE9BQU8sRUFBRTs0QkFDUEMsa0JBQVc7NEJBQ1hDLG9DQUFpQjs0QkFDakJDLG1CQUFZO3lCQUNiO3dCQUNELE9BQU8sRUFBRTs0QkFDUEYsa0JBQVc7NEJBQ1hDLG9DQUFpQjs0QkFDakIsb0JBQW9CO3lCQUNyQjtxQkFDRjs7Z0NBekJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9