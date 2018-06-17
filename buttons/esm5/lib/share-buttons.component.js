/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ShareButtons } from '@ngx-share/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
/**
 * @record
 */
export function ButtonsState() { }
function ButtonsState_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    ButtonsState.prototype.includedButtons;
    /** @type {?|undefined} */
    ButtonsState.prototype.excludedButtons;
    /** @type {?|undefined} */
    ButtonsState.prototype.userButtons;
    /** @type {?|undefined} */
    ButtonsState.prototype.selectedButtons;
    /** @type {?|undefined} */
    ButtonsState.prototype.expanded;
    /** @type {?|undefined} */
    ButtonsState.prototype.shownCount;
    /** @type {?|undefined} */
    ButtonsState.prototype.moreIcon;
    /** @type {?|undefined} */
    ButtonsState.prototype.lessIcon;
}
var ShareButtonsComponent = /** @class */ (function () {
    function ShareButtonsComponent(_share) {
        this._share = _share;
        this._stateWorker$ = new BehaviorSubject({
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
        this.count = new EventEmitter();
        /**
         * Share dialog opened event
         */
        this.opened = new EventEmitter();
        /**
         * Share dialog closed event
         */
        this.closed = new EventEmitter();
    }
    Object.defineProperty(ShareButtonsComponent.prototype, "includedButtons", {
        set: /**
         * @param {?} includedButtons
         * @return {?}
         */
        function (includedButtons) {
            this.updateState({ includedButtons: includedButtons });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtonsComponent.prototype, "excludedButtons", {
        set: /**
         * @param {?} excludedButtons
         * @return {?}
         */
        function (excludedButtons) {
            this.updateState({ excludedButtons: excludedButtons });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtonsComponent.prototype, "shownButtons", {
        set: /**
         * @param {?} shownCount
         * @return {?}
         */
        function (shownCount) {
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
        this.state$ = this._stateWorker$.pipe(map(function (state) {
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
        this._stateWorker$.next(tslib_1.__assign({}, this._stateWorker$.getValue(), state));
    };
    ShareButtonsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'share-buttons',
                    template: "<div *ngIf=\"state$ | async; let state\" class=\"sb-group sb-{{theme}}\">\n\n  <share-button *ngFor=\"let button of state.selectedButtons\"\n                [button]=\"button\"\n                [theme]=\"theme\"\n                [url]=\"url\"\n                [title]=\"title\"\n                [description]=\"description\"\n                [image]=\"image\"\n                [tags]=\"tags\"\n                [autoSetMeta]=\"autoSetMeta\"\n                [showCount]=\"showCount\"\n                [showIcon]=\"showIcon\"\n                [showText]=\"showText\"\n                [size]=\"size\"\n                (opened)=\"opened.emit($event)\"\n                (closed)=\"closed.emit($event)\"\n                (count)=\"count.emit($event)\"></share-button>\n\n  <div class=\"sb-button sb-{{theme}}\">\n\n    <expand-button *ngIf=\"state.shownCount < state.userButtons.length\"\n                   [expanded]=\"state.expanded\"\n                   [moreIcon]=\"state.moreIcon\"\n                   [lessIcon]=\"state.lessIcon\"\n                   [size]=\"(1 + size/20) * 14\"\n                   (toggle)=\"updateState({expanded: $event})\">\n    </expand-button>\n\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false
                },] },
    ];
    /** @nocollapse */
    ShareButtonsComponent.ctorParameters = function () { return [
        { type: ShareButtons }
    ]; };
    ShareButtonsComponent.propDecorators = {
        theme: [{ type: Input }],
        includedButtons: [{ type: Input, args: ['include',] }],
        excludedButtons: [{ type: Input, args: ['exclude',] }],
        shownButtons: [{ type: Input, args: ['show',] }],
        url: [{ type: Input }],
        title: [{ type: Input }],
        description: [{ type: Input }],
        image: [{ type: Input }],
        tags: [{ type: Input }],
        autoSetMeta: [{ type: Input }],
        showIcon: [{ type: Input }],
        showText: [{ type: Input }],
        showCount: [{ type: Input }],
        size: [{ type: Input }],
        count: [{ type: Output }],
        opened: [{ type: Output }],
        closed: [{ type: Output }]
    };
    return ShareButtonsComponent;
}());
export { ShareButtonsComponent };
function ShareButtonsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ShareButtonsComponent.prototype.state$;
    /** @type {?} */
    ShareButtonsComponent.prototype._stateWorker$;
    /** @type {?} */
    ShareButtonsComponent.prototype._configSub$;
    /** @type {?} */
    ShareButtonsComponent.prototype.theme;
    /**
     * Share meta tags
     * @type {?}
     */
    ShareButtonsComponent.prototype.url;
    /** @type {?} */
    ShareButtonsComponent.prototype.title;
    /** @type {?} */
    ShareButtonsComponent.prototype.description;
    /** @type {?} */
    ShareButtonsComponent.prototype.image;
    /** @type {?} */
    ShareButtonsComponent.prototype.tags;
    /**
     * Set meta tags from document head, useful when SEO is supported
     * @type {?}
     */
    ShareButtonsComponent.prototype.autoSetMeta;
    /**
     * Show buttons icon
     * @type {?}
     */
    ShareButtonsComponent.prototype.showIcon;
    /**
     * Show buttons name
     * @type {?}
     */
    ShareButtonsComponent.prototype.showText;
    /**
     * Show buttons share count
     * @type {?}
     */
    ShareButtonsComponent.prototype.showCount;
    /**
     * Buttons size
     * @type {?}
     */
    ShareButtonsComponent.prototype.size;
    /**
     * Share count event
     * @type {?}
     */
    ShareButtonsComponent.prototype.count;
    /**
     * Share dialog opened event
     * @type {?}
     */
    ShareButtonsComponent.prototype.opened;
    /**
     * Share dialog closed event
     * @type {?}
     */
    ShareButtonsComponent.prototype.closed;
    /** @type {?} */
    ShareButtonsComponent.prototype._share;
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2J1dHRvbnMvIiwic291cmNlcyI6WyJsaWIvc2hhcmUtYnV0dG9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQXFCLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsWUFBWSxFQUFzQixNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFBYyxlQUFlLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBNkduQywrQkFBb0IsTUFBb0I7UUFBcEIsV0FBTSxHQUFOLE1BQU0sQ0FBYzs2QkF4RGhCLElBQUksZUFBZSxDQUFlO1lBQ3hELGVBQWUsRUFBRSxFQUFFO1lBQ25CLGVBQWUsRUFBRSxFQUFFO1lBQ25CLFdBQVcsRUFBRSxFQUFFO1lBQ2YsZUFBZSxFQUFFLEVBQUU7WUFDbkIsUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNO1NBQ3hELENBQUM7cUJBSWUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLOzs7O3dCQXlCZCxJQUFJOzs7O3dCQUdKLEtBQUs7Ozs7eUJBR0osS0FBSzs7OztvQkFHVixDQUFDOzs7O3FCQUdDLElBQUksWUFBWSxFQUFVOzs7O3NCQUd6QixJQUFJLFlBQVksRUFBVTs7OztzQkFHMUIsSUFBSSxZQUFZLEVBQVU7S0FHNUM7SUE1Q0Qsc0JBQXNCLGtEQUFlOzs7OztRQUFyQyxVQUFzQyxlQUF5QjtZQUM3RCxJQUFJLENBQUMsV0FBVyxDQUFD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QUssRUFBRSxDQUFDO0tBQ3ZFOztnQkE1SUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUseXFDQStCWDtvQkFDQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7Ozs7Z0JBbkRRLFlBQVk7Ozt3QkFrRWxCLEtBQUs7a0NBRUwsS0FBSyxTQUFDLFNBQVM7a0NBSWYsS0FBSyxTQUFDLFNBQVM7K0JBSWYsS0FBSyxTQUFDLE1BQU07c0JBS1osS0FBSzt3QkFDTCxLQUFLOzhCQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzhCQUdMLEtBQUs7MkJBR0wsS0FBSzsyQkFHTCxLQUFLOzRCQUdMLEtBQUs7dUJBR0wsS0FBSzt3QkFHTCxNQUFNO3lCQUdOLE1BQU07eUJBR04sTUFBTTs7Z0NBOUdUOztTQXFEYSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIE9uSW5pdCwgT25EZXN0cm95LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNoYXJlQnV0dG9ucywgU2hhcmVCdXR0b25zQ29uZmlnIH0gZnJvbSAnQG5neC1zaGFyZS9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25zU3RhdGUge1xyXG4gIGluY2x1ZGVkQnV0dG9ucz86IHN0cmluZ1tdO1xyXG4gIGV4Y2x1ZGVkQnV0dG9ucz86IHN0cmluZ1tdO1xyXG4gIHVzZXJCdXR0b25zPzogc3RyaW5nW107XHJcbiAgc2VsZWN0ZWRCdXR0b25zPzogc3RyaW5nW107XHJcbiAgZXhwYW5kZWQ/OiBib29sZWFuO1xyXG4gIHNob3duQ291bnQ/OiBudW1iZXI7XHJcbiAgbW9yZUljb24/OiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICBsZXNzSWNvbj86IHN0cmluZyB8IHN0cmluZ1tdO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NoYXJlLWJ1dHRvbnMnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cInN0YXRlJCB8IGFzeW5jOyBsZXQgc3RhdGVcIiBjbGFzcz1cInNiLWdyb3VwIHNiLXt7dGhlbWV9fVwiPlxyXG5cclxuICA8c2hhcmUtYnV0dG9uICpuZ0Zvcj1cImxldCBidXR0b24gb2Ygc3RhdGUuc2VsZWN0ZWRCdXR0b25zXCJcclxuICAgICAgICAgICAgICAgIFtidXR0b25dPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgICAgICAgICAgICBbdXJsXT1cInVybFwiXHJcbiAgICAgICAgICAgICAgICBbdGl0bGVdPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgIFtpbWFnZV09XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBbdGFnc109XCJ0YWdzXCJcclxuICAgICAgICAgICAgICAgIFthdXRvU2V0TWV0YV09XCJhdXRvU2V0TWV0YVwiXHJcbiAgICAgICAgICAgICAgICBbc2hvd0NvdW50XT1cInNob3dDb3VudFwiXHJcbiAgICAgICAgICAgICAgICBbc2hvd0ljb25dPVwic2hvd0ljb25cIlxyXG4gICAgICAgICAgICAgICAgW3Nob3dUZXh0XT1cInNob3dUZXh0XCJcclxuICAgICAgICAgICAgICAgIFtzaXplXT1cInNpemVcIlxyXG4gICAgICAgICAgICAgICAgKG9wZW5lZCk9XCJvcGVuZWQuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIChjbG9zZWQpPVwiY2xvc2VkLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAoY291bnQpPVwiY291bnQuZW1pdCgkZXZlbnQpXCI+PC9zaGFyZS1idXR0b24+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJzYi1idXR0b24gc2Ite3t0aGVtZX19XCI+XHJcblxyXG4gICAgPGV4cGFuZC1idXR0b24gKm5nSWY9XCJzdGF0ZS5zaG93bkNvdW50IDwgc3RhdGUudXNlckJ1dHRvbnMubGVuZ3RoXCJcclxuICAgICAgICAgICAgICAgICAgIFtleHBhbmRlZF09XCJzdGF0ZS5leHBhbmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICBbbW9yZUljb25dPVwic3RhdGUubW9yZUljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgW2xlc3NJY29uXT1cInN0YXRlLmxlc3NJY29uXCJcclxuICAgICAgICAgICAgICAgICAgIFtzaXplXT1cIigxICsgc2l6ZS8yMCkgKiAxNFwiXHJcbiAgICAgICAgICAgICAgICAgICAodG9nZ2xlKT1cInVwZGF0ZVN0YXRlKHtleHBhbmRlZDogJGV2ZW50fSlcIj5cclxuICAgIDwvZXhwYW5kLWJ1dHRvbj5cclxuXHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZUJ1dHRvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIHN0YXRlJDogT2JzZXJ2YWJsZTxCdXR0b25zU3RhdGU+O1xyXG4gIHByaXZhdGUgX3N0YXRlV29ya2VyJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QnV0dG9uc1N0YXRlPih7XHJcbiAgICBpbmNsdWRlZEJ1dHRvbnM6IFtdLFxyXG4gICAgZXhjbHVkZWRCdXR0b25zOiBbXSxcclxuICAgIHVzZXJCdXR0b25zOiBbXSxcclxuICAgIHNlbGVjdGVkQnV0dG9uczogW10sXHJcbiAgICBleHBhbmRlZDogdHJ1ZSxcclxuICAgIHNob3duQ291bnQ6IE9iamVjdC5rZXlzKHRoaXMuX3NoYXJlLmNvbmZpZy5wcm9wKS5sZW5ndGhcclxuICB9KTtcclxuXHJcbiAgcHJpdmF0ZSBfY29uZmlnU3ViJDogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBASW5wdXQoKSB0aGVtZSA9IHRoaXMuX3NoYXJlLnRoZW1lO1xyXG5cclxuICBASW5wdXQoJ2luY2x1ZGUnKSBzZXQgaW5jbHVkZWRCdXR0b25zKGluY2x1ZGVkQnV0dG9uczogc3RyaW5nW10pIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoe2luY2x1ZGVkQnV0dG9uc30pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdleGNsdWRlJykgc2V0IGV4Y2x1ZGVkQnV0dG9ucyhleGNsdWRlZEJ1dHRvbnM6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtleGNsdWRlZEJ1dHRvbnN9KTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnc2hvdycpIHNldCBzaG93bkJ1dHRvbnMoc2hvd25Db3VudDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtzaG93bkNvdW50fSk7XHJcbiAgfVxyXG5cclxuICAvKiogU2hhcmUgbWV0YSB0YWdzICovXHJcbiAgQElucHV0KCkgdXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGltYWdlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGFnczogc3RyaW5nO1xyXG5cclxuICAvKiogU2V0IG1ldGEgdGFncyBmcm9tIGRvY3VtZW50IGhlYWQsIHVzZWZ1bCB3aGVuIFNFTyBpcyBzdXBwb3J0ZWQgKi9cclxuICBASW5wdXQoKSBhdXRvU2V0TWV0YTogYm9vbGVhbjtcclxuXHJcbiAgLyoqIFNob3cgYnV0dG9ucyBpY29uICovXHJcbiAgQElucHV0KCkgc2hvd0ljb24gPSB0cnVlO1xyXG5cclxuICAvKiogU2hvdyBidXR0b25zIG5hbWUgKi9cclxuICBASW5wdXQoKSBzaG93VGV4dCA9IGZhbHNlO1xyXG5cclxuICAvKiogU2hvdyBidXR0b25zIHNoYXJlIGNvdW50ICovXHJcbiAgQElucHV0KCkgc2hvd0NvdW50ID0gZmFsc2U7XHJcblxyXG4gIC8qKiBCdXR0b25zIHNpemUgKi9cclxuICBASW5wdXQoKSBzaXplID0gMDtcclxuXHJcbiAgLyoqIFNoYXJlIGNvdW50IGV2ZW50ICovXHJcbiAgQE91dHB1dCgpIGNvdW50ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIC8qKiBTaGFyZSBkaWFsb2cgb3BlbmVkIGV2ZW50ICovXHJcbiAgQE91dHB1dCgpIG9wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICAvKiogU2hhcmUgZGlhbG9nIGNsb3NlZCBldmVudCAqL1xyXG4gIEBPdXRwdXQoKSBjbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2hhcmU6IFNoYXJlQnV0dG9ucykge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnN0YXRlJCA9IHRoaXMuX3N0YXRlV29ya2VyJC5waXBlKFxyXG4gICAgICBtYXAoKHN0YXRlOiBCdXR0b25zU3RhdGUpID0+IHtcclxuICAgICAgICAvLyBVc2UgY29tcG9uZW50IGluY2x1ZGUgYnV0dG9ucywgb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGdsb2JhbCBpbmNsdWRlIGJ1dHRvbnNcclxuICAgICAgICBjb25zdCBpbmNsdWRlZEJ1dHRvbnMgPSBzdGF0ZS5pbmNsdWRlZEJ1dHRvbnMubGVuZ3RoID8gc3RhdGUuaW5jbHVkZWRCdXR0b25zIDogc3RhdGUudXNlckJ1dHRvbnM7XHJcbiAgICAgICAgY29uc3QgdXNlckJ1dHRvbnMgPSBpbmNsdWRlZEJ1dHRvbnMuZmlsdGVyKChidG4pID0+IHN0YXRlLmV4Y2x1ZGVkQnV0dG9ucy5pbmRleE9mKGJ0bikgPCAwKTtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZEJ1dHRvbnMgPSB1c2VyQnV0dG9ucy5zbGljZSgwLCBzdGF0ZS5leHBhbmRlZCA/IHVzZXJCdXR0b25zLmxlbmd0aCA6IHN0YXRlLnNob3duQ291bnQpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB1c2VyQnV0dG9ucyxcclxuICAgICAgICAgIHNlbGVjdGVkQnV0dG9ucyxcclxuICAgICAgICAgIGV4cGFuZGVkOiBzdGF0ZS5leHBhbmRlZCxcclxuICAgICAgICAgIHNob3duQ291bnQ6IHN0YXRlLnNob3duQ291bnQsXHJcbiAgICAgICAgICBtb3JlSWNvbjogc3RhdGUubW9yZUljb24sXHJcbiAgICAgICAgICBsZXNzSWNvbjogc3RhdGUubGVzc0ljb25cclxuICAgICAgICB9O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICAvKiogU3Vic2NyaWJlIHRvIHNoYXJlIGJ1dHRvbnMgY29uZmlnIGNoYW5nZXMsIFRoaXMgdXBkYXRlcyB0aGUgY29tcG9uZW50IHdoZW5ldmVyIGEgbmV3IGJ1dHRvbiBpcyBhZGRlZCAqL1xyXG4gICAgdGhpcy5fY29uZmlnU3ViJCA9IHRoaXMuX3NoYXJlLmNvbmZpZyQuc3Vic2NyaWJlKChjb25maWc6IFNoYXJlQnV0dG9uc0NvbmZpZykgPT4ge1xyXG4gICAgICAvLyBVc2UgZ2xvYmFsIGluY2x1ZGUgYnV0dG9ucywgb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGFsbCBidXR0b25zXHJcbiAgICAgIGNvbnN0IGluY2x1ZGVkQnV0dG9ucyA9IGNvbmZpZy5vcHRpb25zLmluY2x1ZGUubGVuZ3RoID8gY29uZmlnLm9wdGlvbnMuaW5jbHVkZSA6IE9iamVjdC5rZXlzKGNvbmZpZy5wcm9wKTtcclxuICAgICAgY29uc3QgdXNlckJ1dHRvbnMgPSBpbmNsdWRlZEJ1dHRvbnMuZmlsdGVyKChidG4pID0+IGNvbmZpZy5vcHRpb25zLmV4Y2x1ZGUuaW5kZXhPZihidG4pIDwgMCk7XHJcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJCdXR0b25zLFxyXG4gICAgICAgIGV4cGFuZGVkOiBmYWxzZSxcclxuICAgICAgICBtb3JlSWNvbjogY29uZmlnLm9wdGlvbnMubW9yZUJ1dHRvbkljb24sXHJcbiAgICAgICAgbGVzc0ljb246IGNvbmZpZy5vcHRpb25zLmxlc3NCdXR0b25JY29uXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLl9jb25maWdTdWIkKSB7XHJcbiAgICAgIHRoaXMuX2NvbmZpZ1N1YiQudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIHRoaXMuX3N0YXRlV29ya2VyJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU3RhdGUoc3RhdGU6IEJ1dHRvbnNTdGF0ZSkge1xyXG4gICAgdGhpcy5fc3RhdGVXb3JrZXIkLm5leHQoey4uLnRoaXMuX3N0YXRlV29ya2VyJC5nZXRWYWx1ZSgpLCAuLi5zdGF0ZX0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFeHBsYW5hdGlvbiBvZiB0aGUgYWJvdmUgY29kZTpcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiBJbmNsdWRlIGJ1dHRvbnM6IGluY2x1ZGVzIG9ubHkgd2FudGVkIGJ1dHRvbnMgYW5kIGV4Y2x1ZGVzIHRoZSByZXN0XHJcbiBFeGNsdWRlIGJ1dHRvbnM6IGV4Y2x1ZGVzIG9ubHkgdGhlIHVud2FudGVkIGJ1dHRvbnNcclxuIFVzZXIgYnV0dG9ucyA9IEluY2x1ZGUgYnV0dG9ucyAtIGV4Y2x1ZGUgYnV0dG9uc1xyXG4gU2VsZWN0ZWQgQnV0dG9ucyA9IFVzZXIgYnV0dG9ucyBbc2hvd24gbnVtYmVyXVxyXG5cclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiBXaHkgZG8gd2UgdXNlIGJvdGggaW5jbHVkZSBhbmQgZXhjbHVkZSBpbnB1dHM/XHJcblxyXG4gQmVjYXVzZSBpdCBpcyBlYXNpZXIgZm9yIHVzZXJzIHdobyB3YW50IHRvIGRpc2FibGUgb25lIGJ1dHRvbiB0byB1c2UgW2V4Y2x1ZGVdIGlucHV0IGluc3RlYWQgb2Ygd3JpdGluZyBhbiBhcnJheSBvZiBhbGwgaW5jbHVkZWQgYnV0dG9uc1xyXG4gQW5kIGl0IGlzIGVhc2llciBmb3IgdXNlcnMgd2hvIHdhbnQgdG8gZW5hYmxlIG9ubHkgb25lIGJ1dHRvbiB0byB1c2UgW2luY2x1ZGVdIGlucHV0IGluc3RlYWQgb2Ygd3JpdGluZyBhbiBhcnJheSBvZiBhbGwgZXhjbHVkZWQgYnV0dG9uc1xyXG4gKi9cclxuIl19