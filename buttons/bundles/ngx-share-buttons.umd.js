(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngx-share/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@angular/common/http'), require('@ngx-share/button')) :
    typeof define === 'function' && define.amd ? define('@ngx-share/buttons', ['exports', '@angular/core', '@ngx-share/core', 'rxjs', 'rxjs/operators', '@angular/common', '@angular/common/http', '@ngx-share/button'], factory) :
    (factory((global['ngx-share'] = global['ngx-share'] || {}, global['ngx-share'].buttons = {}),global.ng.core,null,global.rxjs,global.rxjs.operators,global.ng.common,global.ng.common.http,null));
}(this, (function (exports,core,core$1,rxjs,operators,common,http,button) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ShareButtonsComponent = (function () {
        function ShareButtonsComponent(_share) {
            this._share = _share;
            this._stateWorker$ = new rxjs.BehaviorSubject({
                includedButtons: [],
                excludedButtons: [],
                userButtons: [],
                selectedButtons: [],
                expanded: true,
                shownCount: Object.keys(this._share.config.prop).length
            });
            this.theme = this._share.theme;
            /**
             * Show buttons icon
             */
            this.showIcon = true;
            /**
             * Show buttons name
             */
            this.showText = false;
            /**
             * Show buttons share count
             */
            this.showCount = false;
            /**
             * Buttons size
             */
            this.size = 0;
            /**
             * Share count event
             */
            this.count = new core.EventEmitter();
            /**
             * Share dialog opened event
             */
            this.opened = new core.EventEmitter();
            /**
             * Share dialog closed event
             */
            this.closed = new core.EventEmitter();
        }
        Object.defineProperty(ShareButtonsComponent.prototype, "includedButtons", {
            set: /**
             * @param {?} includedButtons
             * @return {?}
             */ function (includedButtons) {
                this.updateState({ includedButtons: includedButtons });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShareButtonsComponent.prototype, "excludedButtons", {
            set: /**
             * @param {?} excludedButtons
             * @return {?}
             */ function (excludedButtons) {
                this.updateState({ excludedButtons: excludedButtons });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShareButtonsComponent.prototype, "shownButtons", {
            set: /**
             * @param {?} shownCount
             * @return {?}
             */ function (shownCount) {
                this.updateState({ shownCount: shownCount });
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ShareButtonsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.state$ = this._stateWorker$.pipe(operators.map(function (state) {
                    // Use component include buttons, otherwise fallback to global include buttons
                    var /** @type {?} */ includedButtons = state.includedButtons.length ? state.includedButtons : state.userButtons;
                    var /** @type {?} */ userButtons = includedButtons.filter(function (btn) { return state.excludedButtons.indexOf(btn) < 0; });
                    var /** @type {?} */ selectedButtons = userButtons.slice(0, state.expanded ? userButtons.length : state.shownCount);
                    return {
                        userButtons: userButtons,
                        selectedButtons: selectedButtons,
                        expanded: state.expanded,
                        shownCount: state.shownCount,
                        moreIcon: state.moreIcon,
                        lessIcon: state.lessIcon
                    };
                }));
                /** Subscribe to share buttons config changes, This updates the component whenever a new button is added */
                this._configSub$ = this._share.config$.subscribe(function (config) {
                    // Use global include buttons, otherwise fallback to all buttons
                    var /** @type {?} */ includedButtons = config.options.include.length ? config.options.include : Object.keys(config.prop);
                    var /** @type {?} */ userButtons = includedButtons.filter(function (btn) { return config.options.exclude.indexOf(btn) < 0; });
                    _this.updateState({
                        userButtons: userButtons,
                        expanded: false,
                        moreIcon: config.options.moreButtonIcon,
                        lessIcon: config.options.lessButtonIcon
                    });
                });
            };
        /**
         * @return {?}
         */
        ShareButtonsComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this._configSub$) {
                    this._configSub$.unsubscribe();
                }
                this._stateWorker$.complete();
            };
        /**
         * @param {?} state
         * @return {?}
         */
        ShareButtonsComponent.prototype.updateState = /**
         * @param {?} state
         * @return {?}
         */
            function (state) {
                this._stateWorker$.next(__assign({}, this._stateWorker$.getValue(), state));
            };
        ShareButtonsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'share-buttons',
                        template: "<div *ngIf=\"state$ | async; let state\" class=\"sb-group sb-{{theme}}\">\n\n  <share-button *ngFor=\"let button of state.selectedButtons\"\n                [button]=\"button\"\n                [theme]=\"theme\"\n                [url]=\"url\"\n                [title]=\"title\"\n                [description]=\"description\"\n                [image]=\"image\"\n                [tags]=\"tags\"\n                [autoSetMeta]=\"autoSetMeta\"\n                [showCount]=\"showCount\"\n                [showIcon]=\"showIcon\"\n                [showText]=\"showText\"\n                [size]=\"size\"\n                (opened)=\"opened.emit($event)\"\n                (closed)=\"closed.emit($event)\"\n                (count)=\"count.emit($event)\"></share-button>\n\n  <div class=\"sb-button sb-{{theme}}\">\n\n    <expand-button *ngIf=\"state.shownCount < state.userButtons.length\"\n                   [expanded]=\"state.expanded\"\n                   [moreIcon]=\"state.moreIcon\"\n                   [lessIcon]=\"state.lessIcon\"\n                   [size]=\"(1 + size/20) * 14\"\n                   (toggle)=\"updateState({expanded: $event})\">\n    </expand-button>\n\n  </div>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false
                    },] },
        ];
        /** @nocollapse */
        ShareButtonsComponent.ctorParameters = function () {
            return [
                { type: core$1.ShareButtons }
            ];
        };
        ShareButtonsComponent.propDecorators = {
            theme: [{ type: core.Input }],
            includedButtons: [{ type: core.Input, args: ['include',] }],
            excludedButtons: [{ type: core.Input, args: ['exclude',] }],
            shownButtons: [{ type: core.Input, args: ['show',] }],
            url: [{ type: core.Input }],
            title: [{ type: core.Input }],
            description: [{ type: core.Input }],
            image: [{ type: core.Input }],
            tags: [{ type: core.Input }],
            autoSetMeta: [{ type: core.Input }],
            showIcon: [{ type: core.Input }],
            showText: [{ type: core.Input }],
            showCount: [{ type: core.Input }],
            size: [{ type: core.Input }],
            count: [{ type: core.Output }],
            opened: [{ type: core.Output }],
            closed: [{ type: core.Output }]
        };
        return ShareButtonsComponent;
    }());
    /**
     * Explanation of the above code:
     * ------------------------------
     Include buttons: includes only wanted buttons and excludes the rest
     Exclude buttons: excludes only the unwanted buttons
     User buttons = Include buttons - exclude buttons
     Selected Buttons = User buttons [shown number]

     =====================================================================================

     Why do we use both include and exclude inputs?

     Because it is easier for users who want to disable one button to use [exclude] input instead of writing an array of all included buttons
     And it is easier for users who want to enable only one button to use [include] input instead of writing an array of all excluded buttons
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ExpandButtonComponent = (function () {
        function ExpandButtonComponent(el) {
            this.toggle = new core.EventEmitter();
            el.nativeElement.style.setProperty('--button-color', '#FF6651');
        }
        ExpandButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'expand-button',
                        template: "\n    <button class=\"sb-wrapper sb-expand sb-show-icon\"\n            [style.fontSize.px]=\"size\"\n            (click)=\"toggle.emit(!expanded)\">\n\n      <div class=\"sb-inner\">\n        <div class=\"sb-content\">\n          <div class=\"sb-icon\">\n            <fa-icon [icon]=\"expanded ? lessIcon : moreIcon\"></fa-icon>\n          </div>\n        </div>\n      </div>\n    </button>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false
                    },] },
        ];
        /** @nocollapse */
        ExpandButtonComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        ExpandButtonComponent.propDecorators = {
            moreIcon: [{ type: core.Input }],
            lessIcon: [{ type: core.Input }],
            expanded: [{ type: core.Input }],
            size: [{ type: core.Input }],
            toggle: [{ type: core.Output }]
        };
        return ExpandButtonComponent;
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
    var ShareButtonsModule = (function () {
        function ShareButtonsModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        ShareButtonsModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
            function (config) {
                return {
                    ngModule: ShareButtonsModule,
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
        ShareButtonsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            ShareButtonsComponent,
                            ExpandButtonComponent
                        ],
                        imports: [
                            http.HttpClientModule,
                            button.ShareButtonModule,
                            common.CommonModule
                        ],
                        exports: [
                            button.ShareButtonModule,
                            ShareButtonsComponent
                        ]
                    },] },
        ];
        return ShareButtonsModule;
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
    exports.ShareButtonsModule = ShareButtonsModule;
    exports.ShareButtonsComponent = ShareButtonsComponent;
    exports.ɵa = ExpandButtonComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNoYXJlLWJ1dHRvbnMudW1kLmpzLm1hcCIsInNvdXJjZXMiOltudWxsLCJuZzovL0BuZ3gtc2hhcmUvYnV0dG9ucy9saWIvc2hhcmUtYnV0dG9ucy5jb21wb25lbnQudHMiLCJuZzovL0BuZ3gtc2hhcmUvYnV0dG9ucy9saWIvZXhwYW5kLWJ1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0BuZ3gtc2hhcmUvYnV0dG9ucy9saWIvc2hhcmUtYnV0dG9ucy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBPbkRlc3Ryb3ksIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2hhcmVCdXR0b25zLCBTaGFyZUJ1dHRvbnNDb25maWcgfSBmcm9tICdAbmd4LXNoYXJlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvbnNTdGF0ZSB7XHJcbiAgaW5jbHVkZWRCdXR0b25zPzogc3RyaW5nW107XHJcbiAgZXhjbHVkZWRCdXR0b25zPzogc3RyaW5nW107XHJcbiAgdXNlckJ1dHRvbnM/OiBzdHJpbmdbXTtcclxuICBzZWxlY3RlZEJ1dHRvbnM/OiBzdHJpbmdbXTtcclxuICBleHBhbmRlZD86IGJvb2xlYW47XHJcbiAgc2hvd25Db3VudD86IG51bWJlcjtcclxuICBtb3JlSWNvbj86IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gIGxlc3NJY29uPzogc3RyaW5nIHwgc3RyaW5nW107XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2hhcmUtYnV0dG9ucycsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwic3RhdGUkIHwgYXN5bmM7IGxldCBzdGF0ZVwiIGNsYXNzPVwic2ItZ3JvdXAgc2Ite3t0aGVtZX19XCI+XHJcblxyXG4gIDxzaGFyZS1idXR0b24gKm5nRm9yPVwibGV0IGJ1dHRvbiBvZiBzdGF0ZS5zZWxlY3RlZEJ1dHRvbnNcIlxyXG4gICAgICAgICAgICAgICAgW2J1dHRvbl09XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgW3RoZW1lXT1cInRoZW1lXCJcclxuICAgICAgICAgICAgICAgIFt1cmxdPVwidXJsXCJcclxuICAgICAgICAgICAgICAgIFt0aXRsZV09XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgW2ltYWdlXT1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgIFt0YWdzXT1cInRhZ3NcIlxyXG4gICAgICAgICAgICAgICAgW2F1dG9TZXRNZXRhXT1cImF1dG9TZXRNZXRhXCJcclxuICAgICAgICAgICAgICAgIFtzaG93Q291bnRdPVwic2hvd0NvdW50XCJcclxuICAgICAgICAgICAgICAgIFtzaG93SWNvbl09XCJzaG93SWNvblwiXHJcbiAgICAgICAgICAgICAgICBbc2hvd1RleHRdPVwic2hvd1RleHRcIlxyXG4gICAgICAgICAgICAgICAgW3NpemVdPVwic2l6ZVwiXHJcbiAgICAgICAgICAgICAgICAob3BlbmVkKT1cIm9wZW5lZC5lbWl0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgKGNsb3NlZCk9XCJjbG9zZWQuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIChjb3VudCk9XCJjb3VudC5lbWl0KCRldmVudClcIj48L3NoYXJlLWJ1dHRvbj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cInNiLWJ1dHRvbiBzYi17e3RoZW1lfX1cIj5cclxuXHJcbiAgICA8ZXhwYW5kLWJ1dHRvbiAqbmdJZj1cInN0YXRlLnNob3duQ291bnQgPCBzdGF0ZS51c2VyQnV0dG9ucy5sZW5ndGhcIlxyXG4gICAgICAgICAgICAgICAgICAgW2V4cGFuZGVkXT1cInN0YXRlLmV4cGFuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgIFttb3JlSWNvbl09XCJzdGF0ZS5tb3JlSWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICBbbGVzc0ljb25dPVwic3RhdGUubGVzc0ljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgW3NpemVdPVwiKDEgKyBzaXplLzIwKSAqIDE0XCJcclxuICAgICAgICAgICAgICAgICAgICh0b2dnbGUpPVwidXBkYXRlU3RhdGUoe2V4cGFuZGVkOiAkZXZlbnR9KVwiPlxyXG4gICAgPC9leHBhbmQtYnV0dG9uPlxyXG5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlQnV0dG9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgc3RhdGUkOiBPYnNlcnZhYmxlPEJ1dHRvbnNTdGF0ZT47XHJcbiAgcHJpdmF0ZSBfc3RhdGVXb3JrZXIkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxCdXR0b25zU3RhdGU+KHtcclxuICAgIGluY2x1ZGVkQnV0dG9uczogW10sXHJcbiAgICBleGNsdWRlZEJ1dHRvbnM6IFtdLFxyXG4gICAgdXNlckJ1dHRvbnM6IFtdLFxyXG4gICAgc2VsZWN0ZWRCdXR0b25zOiBbXSxcclxuICAgIGV4cGFuZGVkOiB0cnVlLFxyXG4gICAgc2hvd25Db3VudDogT2JqZWN0LmtleXModGhpcy5fc2hhcmUuY29uZmlnLnByb3ApLmxlbmd0aFxyXG4gIH0pO1xyXG5cclxuICBwcml2YXRlIF9jb25maWdTdWIkOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIEBJbnB1dCgpIHRoZW1lID0gdGhpcy5fc2hhcmUudGhlbWU7XHJcblxyXG4gIEBJbnB1dCgnaW5jbHVkZScpIHNldCBpbmNsdWRlZEJ1dHRvbnMoaW5jbHVkZWRCdXR0b25zOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7aW5jbHVkZWRCdXR0b25zfSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2V4Y2x1ZGUnKSBzZXQgZXhjbHVkZWRCdXR0b25zKGV4Y2x1ZGVkQnV0dG9uczogc3RyaW5nW10pIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoe2V4Y2x1ZGVkQnV0dG9uc30pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdzaG93Jykgc2V0IHNob3duQnV0dG9ucyhzaG93bkNvdW50OiBudW1iZXIpIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoe3Nob3duQ291bnR9KTtcclxuICB9XHJcblxyXG4gIC8qKiBTaGFyZSBtZXRhIHRhZ3MgKi9cclxuICBASW5wdXQoKSB1cmw6IHN0cmluZztcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaW1hZ2U6IHN0cmluZztcclxuICBASW5wdXQoKSB0YWdzOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBTZXQgbWV0YSB0YWdzIGZyb20gZG9jdW1lbnQgaGVhZCwgdXNlZnVsIHdoZW4gU0VPIGlzIHN1cHBvcnRlZCAqL1xyXG4gIEBJbnB1dCgpIGF1dG9TZXRNZXRhOiBib29sZWFuO1xyXG5cclxuICAvKiogU2hvdyBidXR0b25zIGljb24gKi9cclxuICBASW5wdXQoKSBzaG93SWNvbiA9IHRydWU7XHJcblxyXG4gIC8qKiBTaG93IGJ1dHRvbnMgbmFtZSAqL1xyXG4gIEBJbnB1dCgpIHNob3dUZXh0ID0gZmFsc2U7XHJcblxyXG4gIC8qKiBTaG93IGJ1dHRvbnMgc2hhcmUgY291bnQgKi9cclxuICBASW5wdXQoKSBzaG93Q291bnQgPSBmYWxzZTtcclxuXHJcbiAgLyoqIEJ1dHRvbnMgc2l6ZSAqL1xyXG4gIEBJbnB1dCgpIHNpemUgPSAwO1xyXG5cclxuICAvKiogU2hhcmUgY291bnQgZXZlbnQgKi9cclxuICBAT3V0cHV0KCkgY291bnQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgLyoqIFNoYXJlIGRpYWxvZyBvcGVuZWQgZXZlbnQgKi9cclxuICBAT3V0cHV0KCkgb3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIC8qKiBTaGFyZSBkaWFsb2cgY2xvc2VkIGV2ZW50ICovXHJcbiAgQE91dHB1dCgpIGNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaGFyZTogU2hhcmVCdXR0b25zKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3RhdGUkID0gdGhpcy5fc3RhdGVXb3JrZXIkLnBpcGUoXHJcbiAgICAgIG1hcCgoc3RhdGU6IEJ1dHRvbnNTdGF0ZSkgPT4ge1xyXG4gICAgICAgIC8vIFVzZSBjb21wb25lbnQgaW5jbHVkZSBidXR0b25zLCBvdGhlcndpc2UgZmFsbGJhY2sgdG8gZ2xvYmFsIGluY2x1ZGUgYnV0dG9uc1xyXG4gICAgICAgIGNvbnN0IGluY2x1ZGVkQnV0dG9ucyA9IHN0YXRlLmluY2x1ZGVkQnV0dG9ucy5sZW5ndGggPyBzdGF0ZS5pbmNsdWRlZEJ1dHRvbnMgOiBzdGF0ZS51c2VyQnV0dG9ucztcclxuICAgICAgICBjb25zdCB1c2VyQnV0dG9ucyA9IGluY2x1ZGVkQnV0dG9ucy5maWx0ZXIoKGJ0bikgPT4gc3RhdGUuZXhjbHVkZWRCdXR0b25zLmluZGV4T2YoYnRuKSA8IDApO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQnV0dG9ucyA9IHVzZXJCdXR0b25zLnNsaWNlKDAsIHN0YXRlLmV4cGFuZGVkID8gdXNlckJ1dHRvbnMubGVuZ3RoIDogc3RhdGUuc2hvd25Db3VudCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHVzZXJCdXR0b25zLFxyXG4gICAgICAgICAgc2VsZWN0ZWRCdXR0b25zLFxyXG4gICAgICAgICAgZXhwYW5kZWQ6IHN0YXRlLmV4cGFuZGVkLFxyXG4gICAgICAgICAgc2hvd25Db3VudDogc3RhdGUuc2hvd25Db3VudCxcclxuICAgICAgICAgIG1vcmVJY29uOiBzdGF0ZS5tb3JlSWNvbixcclxuICAgICAgICAgIGxlc3NJY29uOiBzdGF0ZS5sZXNzSWNvblxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIC8qKiBTdWJzY3JpYmUgdG8gc2hhcmUgYnV0dG9ucyBjb25maWcgY2hhbmdlcywgVGhpcyB1cGRhdGVzIHRoZSBjb21wb25lbnQgd2hlbmV2ZXIgYSBuZXcgYnV0dG9uIGlzIGFkZGVkICovXHJcbiAgICB0aGlzLl9jb25maWdTdWIkID0gdGhpcy5fc2hhcmUuY29uZmlnJC5zdWJzY3JpYmUoKGNvbmZpZzogU2hhcmVCdXR0b25zQ29uZmlnKSA9PiB7XHJcbiAgICAgIC8vIFVzZSBnbG9iYWwgaW5jbHVkZSBidXR0b25zLCBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYWxsIGJ1dHRvbnNcclxuICAgICAgY29uc3QgaW5jbHVkZWRCdXR0b25zID0gY29uZmlnLm9wdGlvbnMuaW5jbHVkZS5sZW5ndGggPyBjb25maWcub3B0aW9ucy5pbmNsdWRlIDogT2JqZWN0LmtleXMoY29uZmlnLnByb3ApO1xyXG4gICAgICBjb25zdCB1c2VyQnV0dG9ucyA9IGluY2x1ZGVkQnV0dG9ucy5maWx0ZXIoKGJ0bikgPT4gY29uZmlnLm9wdGlvbnMuZXhjbHVkZS5pbmRleE9mKGJ0bikgPCAwKTtcclxuICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgdXNlckJ1dHRvbnMsXHJcbiAgICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxyXG4gICAgICAgIG1vcmVJY29uOiBjb25maWcub3B0aW9ucy5tb3JlQnV0dG9uSWNvbixcclxuICAgICAgICBsZXNzSWNvbjogY29uZmlnLm9wdGlvbnMubGVzc0J1dHRvbkljb25cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuX2NvbmZpZ1N1YiQpIHtcclxuICAgICAgdGhpcy5fY29uZmlnU3ViJC51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc3RhdGVXb3JrZXIkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTdGF0ZShzdGF0ZTogQnV0dG9uc1N0YXRlKSB7XHJcbiAgICB0aGlzLl9zdGF0ZVdvcmtlciQubmV4dCh7Li4udGhpcy5fc3RhdGVXb3JrZXIkLmdldFZhbHVlKCksIC4uLnN0YXRlfSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEV4cGxhbmF0aW9uIG9mIHRoZSBhYm92ZSBjb2RlOlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuIEluY2x1ZGUgYnV0dG9uczogaW5jbHVkZXMgb25seSB3YW50ZWQgYnV0dG9ucyBhbmQgZXhjbHVkZXMgdGhlIHJlc3RcclxuIEV4Y2x1ZGUgYnV0dG9uczogZXhjbHVkZXMgb25seSB0aGUgdW53YW50ZWQgYnV0dG9uc1xyXG4gVXNlciBidXR0b25zID0gSW5jbHVkZSBidXR0b25zIC0gZXhjbHVkZSBidXR0b25zXHJcbiBTZWxlY3RlZCBCdXR0b25zID0gVXNlciBidXR0b25zIFtzaG93biBudW1iZXJdXHJcblxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuIFdoeSBkbyB3ZSB1c2UgYm90aCBpbmNsdWRlIGFuZCBleGNsdWRlIGlucHV0cz9cclxuXHJcbiBCZWNhdXNlIGl0IGlzIGVhc2llciBmb3IgdXNlcnMgd2hvIHdhbnQgdG8gZGlzYWJsZSBvbmUgYnV0dG9uIHRvIHVzZSBbZXhjbHVkZV0gaW5wdXQgaW5zdGVhZCBvZiB3cml0aW5nIGFuIGFycmF5IG9mIGFsbCBpbmNsdWRlZCBidXR0b25zXHJcbiBBbmQgaXQgaXMgZWFzaWVyIGZvciB1c2VycyB3aG8gd2FudCB0byBlbmFibGUgb25seSBvbmUgYnV0dG9uIHRvIHVzZSBbaW5jbHVkZV0gaW5wdXQgaW5zdGVhZCBvZiB3cml0aW5nIGFuIGFycmF5IG9mIGFsbCBleGNsdWRlZCBidXR0b25zXHJcbiAqL1xyXG4iLCJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZXhwYW5kLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxidXR0b24gY2xhc3M9XCJzYi13cmFwcGVyIHNiLWV4cGFuZCBzYi1zaG93LWljb25cIlxyXG4gICAgICAgICAgICBbc3R5bGUuZm9udFNpemUucHhdPVwic2l6ZVwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGUuZW1pdCghZXhwYW5kZWQpXCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2ItaW5uZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2ItY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNiLWljb25cIj5cclxuICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZXhwYW5kZWQgPyBsZXNzSWNvbiA6IG1vcmVJY29uXCI+PC9mYS1pY29uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9idXR0b24+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhwYW5kQnV0dG9uQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgbW9yZUljb246IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIGxlc3NJY29uOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICBASW5wdXQoKSBleHBhbmRlZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNpemU6IG51bWJlcjtcclxuICBAT3V0cHV0KCkgdG9nZ2xlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikge1xyXG4gICAgZWwubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1idXR0b24tY29sb3InLCAnI0ZGNjY1MScpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgU2hhcmVCdXR0b25zLCBTaGFyZUJ1dHRvbnNDb25maWcsIENPTkZJRyB9IGZyb20gJ0BuZ3gtc2hhcmUvY29yZSc7XHJcbmltcG9ydCB7IFNoYXJlQnV0dG9uTW9kdWxlIH0gZnJvbSAnQG5neC1zaGFyZS9idXR0b24nO1xyXG5cclxuaW1wb3J0IHsgU2hhcmVCdXR0b25zQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZS1idXR0b25zLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEV4cGFuZEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vZXhwYW5kLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNoYXJlQnV0dG9uc0ZhY3RvcnkoY29uZmlnOiBTaGFyZUJ1dHRvbnNDb25maWcpIHtcclxuICByZXR1cm4gbmV3IFNoYXJlQnV0dG9ucyhjb25maWcpO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgU2hhcmVCdXR0b25zQ29tcG9uZW50LFxyXG4gICAgRXhwYW5kQnV0dG9uQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgU2hhcmVCdXR0b25Nb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFNoYXJlQnV0dG9uTW9kdWxlLFxyXG4gICAgU2hhcmVCdXR0b25zQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVCdXR0b25zTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBTaGFyZUJ1dHRvbnNDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBTaGFyZUJ1dHRvbnNNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtwcm92aWRlOiBDT05GSUcsIHVzZVZhbHVlOiBjb25maWd9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IFNoYXJlQnV0dG9ucyxcclxuICAgICAgICAgIHVzZUZhY3Rvcnk6IFNoYXJlQnV0dG9uc0ZhY3RvcnksXHJcbiAgICAgICAgICBkZXBzOiBbQ09ORklHXVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJlaGF2aW9yU3ViamVjdCIsIkV2ZW50RW1pdHRlciIsIm1hcCIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiU2hhcmVCdXR0b25zIiwiSW5wdXQiLCJPdXRwdXQiLCJFbGVtZW50UmVmIiwiQ09ORklHIiwiTmdNb2R1bGUiLCJIdHRwQ2xpZW50TW9kdWxlIiwiU2hhcmVCdXR0b25Nb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLElBWU8sSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxrQkFBa0IsQ0FBQztRQUN0RCxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqRCxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztnQkFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEY7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUMsQ0FBQTs7Ozs7OztRQ2dGQywrQkFBb0IsTUFBb0I7WUFBcEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztpQ0F4RGhCLElBQUlBLG9CQUFlLENBQWU7Z0JBQ3hELGVBQWUs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