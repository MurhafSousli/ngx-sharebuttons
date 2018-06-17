import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, NgModule } from '@angular/core';
import { ShareButtons, CONFIG } from '@ngx-share/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ShareButtonModule } from '@ngx-share/button';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ShareButtonsComponent {
    /**
     * @param {?} _share
     */
    constructor(_share) {
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
    /**
     * @param {?} includedButtons
     * @return {?}
     */
    set includedButtons(includedButtons) {
        this.updateState({ includedButtons });
    }
    /**
     * @param {?} excludedButtons
     * @return {?}
     */
    set excludedButtons(excludedButtons) {
        this.updateState({ excludedButtons });
    }
    /**
     * @param {?} shownCount
     * @return {?}
     */
    set shownButtons(shownCount) {
        this.updateState({ shownCount });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.state$ = this._stateWorker$.pipe(map((state) => {
            // Use component include buttons, otherwise fallback to global include buttons
            const /** @type {?} */ includedButtons = state.includedButtons.length ? state.includedButtons : state.userButtons;
            const /** @type {?} */ userButtons = includedButtons.filter((btn) => state.excludedButtons.indexOf(btn) < 0);
            const /** @type {?} */ selectedButtons = userButtons.slice(0, state.expanded ? userButtons.length : state.shownCount);
            return {
                userButtons,
                selectedButtons,
                expanded: state.expanded,
                shownCount: state.shownCount,
                moreIcon: state.moreIcon,
                lessIcon: state.lessIcon
            };
        }));
        /** Subscribe to share buttons config changes, This updates the component whenever a new button is added */
        this._configSub$ = this._share.config$.subscribe((config) => {
            // Use global include buttons, otherwise fallback to all buttons
            const /** @type {?} */ includedButtons = config.options.include.length ? config.options.include : Object.keys(config.prop);
            const /** @type {?} */ userButtons = includedButtons.filter((btn) => config.options.exclude.indexOf(btn) < 0);
            this.updateState({
                userButtons,
                expanded: false,
                moreIcon: config.options.moreButtonIcon,
                lessIcon: config.options.lessButtonIcon
            });
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._configSub$) {
            this._configSub$.unsubscribe();
        }
        this._stateWorker$.complete();
    }
    /**
     * @param {?} state
     * @return {?}
     */
    updateState(state) {
        this._stateWorker$.next(Object.assign({}, this._stateWorker$.getValue(), state));
    }
}
ShareButtonsComponent.decorators = [
    { type: Component, args: [{
                selector: 'share-buttons',
                template: `<div *ngIf="state$ | async; let state" class="sb-group sb-{{theme}}">

  <share-button *ngFor="let button of state.selectedButtons"
                [button]="button"
                [theme]="theme"
                [url]="url"
                [title]="title"
                [description]="description"
                [image]="image"
                [tags]="tags"
                [autoSetMeta]="autoSetMeta"
                [showCount]="showCount"
                [showIcon]="showIcon"
                [showText]="showText"
                [size]="size"
                (opened)="opened.emit($event)"
                (closed)="closed.emit($event)"
                (count)="count.emit($event)"></share-button>

  <div class="sb-button sb-{{theme}}">

    <expand-button *ngIf="state.shownCount < state.userButtons.length"
                   [expanded]="state.expanded"
                   [moreIcon]="state.moreIcon"
                   [lessIcon]="state.lessIcon"
                   [size]="(1 + size/20) * 14"
                   (toggle)="updateState({expanded: $event})">
    </expand-button>

  </div>
</div>
`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false
            },] },
];
/** @nocollapse */
ShareButtonsComponent.ctorParameters = () => [
    { type: ShareButtons }
];
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
class ExpandButtonComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.toggle = new EventEmitter();
        el.nativeElement.style.setProperty('--button-color', '#FF6651');
    }
}
ExpandButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'expand-button',
                template: `
    <button class="sb-wrapper sb-expand sb-show-icon"
            [style.fontSize.px]="size"
            (click)="toggle.emit(!expanded)">

      <div class="sb-inner">
        <div class="sb-content">
          <div class="sb-icon">
            <fa-icon [icon]="expanded ? lessIcon : moreIcon"></fa-icon>
          </div>
        </div>
      </div>
    </button>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false
            },] },
];
/** @nocollapse */
ExpandButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
ExpandButtonComponent.propDecorators = {
    moreIcon: [{ type: Input }],
    lessIcon: [{ type: Input }],
    expanded: [{ type: Input }],
    size: [{ type: Input }],
    toggle: [{ type: Output }]
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
class ShareButtonsModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: ShareButtonsModule,
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
ShareButtonsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ShareButtonsComponent,
                    ExpandButtonComponent
                ],
                imports: [
                    HttpClientModule,
                    ShareButtonModule,
                    CommonModule
                ],
                exports: [
                    ShareButtonModule,
                    ShareButtonsComponent
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

export { ShareButtonsFactory, ShareButtonsModule, ShareButtonsComponent, ExpandButtonComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNoYXJlLWJ1dHRvbnMuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BuZ3gtc2hhcmUvYnV0dG9ucy9saWIvc2hhcmUtYnV0dG9ucy5jb21wb25lbnQudHMiLCJuZzovL0BuZ3gtc2hhcmUvYnV0dG9ucy9saWIvZXhwYW5kLWJ1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0BuZ3gtc2hhcmUvYnV0dG9ucy9saWIvc2hhcmUtYnV0dG9ucy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIE9uRGVzdHJveSwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbnMsIFNoYXJlQnV0dG9uc0NvbmZpZyB9IGZyb20gJ0BuZ3gtc2hhcmUvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uc1N0YXRlIHtcclxuICBpbmNsdWRlZEJ1dHRvbnM/OiBzdHJpbmdbXTtcclxuICBleGNsdWRlZEJ1dHRvbnM/OiBzdHJpbmdbXTtcclxuICB1c2VyQnV0dG9ucz86IHN0cmluZ1tdO1xyXG4gIHNlbGVjdGVkQnV0dG9ucz86IHN0cmluZ1tdO1xyXG4gIGV4cGFuZGVkPzogYm9vbGVhbjtcclxuICBzaG93bkNvdW50PzogbnVtYmVyO1xyXG4gIG1vcmVJY29uPzogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgbGVzc0ljb24/OiBzdHJpbmcgfCBzdHJpbmdbXTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzaGFyZS1idXR0b25zJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJzdGF0ZSQgfCBhc3luYzsgbGV0IHN0YXRlXCIgY2xhc3M9XCJzYi1ncm91cCBzYi17e3RoZW1lfX1cIj5cclxuXHJcbiAgPHNoYXJlLWJ1dHRvbiAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIHN0YXRlLnNlbGVjdGVkQnV0dG9uc1wiXHJcbiAgICAgICAgICAgICAgICBbYnV0dG9uXT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBbdGhlbWVdPVwidGhlbWVcIlxyXG4gICAgICAgICAgICAgICAgW3VybF09XCJ1cmxcIlxyXG4gICAgICAgICAgICAgICAgW3RpdGxlXT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl09XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICBbaW1hZ2VdPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgW3RhZ3NdPVwidGFnc1wiXHJcbiAgICAgICAgICAgICAgICBbYXV0b1NldE1ldGFdPVwiYXV0b1NldE1ldGFcIlxyXG4gICAgICAgICAgICAgICAgW3Nob3dDb3VudF09XCJzaG93Q291bnRcIlxyXG4gICAgICAgICAgICAgICAgW3Nob3dJY29uXT1cInNob3dJY29uXCJcclxuICAgICAgICAgICAgICAgIFtzaG93VGV4dF09XCJzaG93VGV4dFwiXHJcbiAgICAgICAgICAgICAgICBbc2l6ZV09XCJzaXplXCJcclxuICAgICAgICAgICAgICAgIChvcGVuZWQpPVwib3BlbmVkLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAoY2xvc2VkKT1cImNsb3NlZC5lbWl0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgKGNvdW50KT1cImNvdW50LmVtaXQoJGV2ZW50KVwiPjwvc2hhcmUtYnV0dG9uPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwic2ItYnV0dG9uIHNiLXt7dGhlbWV9fVwiPlxyXG5cclxuICAgIDxleHBhbmQtYnV0dG9uICpuZ0lmPVwic3RhdGUuc2hvd25Db3VudCA8IHN0YXRlLnVzZXJCdXR0b25zLmxlbmd0aFwiXHJcbiAgICAgICAgICAgICAgICAgICBbZXhwYW5kZWRdPVwic3RhdGUuZXhwYW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgW21vcmVJY29uXT1cInN0YXRlLm1vcmVJY29uXCJcclxuICAgICAgICAgICAgICAgICAgIFtsZXNzSWNvbl09XCJzdGF0ZS5sZXNzSWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICBbc2l6ZV09XCIoMSArIHNpemUvMjApICogMTRcIlxyXG4gICAgICAgICAgICAgICAgICAgKHRvZ2dsZSk9XCJ1cGRhdGVTdGF0ZSh7ZXhwYW5kZWQ6ICRldmVudH0pXCI+XHJcbiAgICA8L2V4cGFuZC1idXR0b24+XHJcblxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVCdXR0b25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBzdGF0ZSQ6IE9ic2VydmFibGU8QnV0dG9uc1N0YXRlPjtcclxuICBwcml2YXRlIF9zdGF0ZVdvcmtlciQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEJ1dHRvbnNTdGF0ZT4oe1xyXG4gICAgaW5jbHVkZWRCdXR0b25zOiBbXSxcclxuICAgIGV4Y2x1ZGVkQnV0dG9uczogW10sXHJcbiAgICB1c2VyQnV0dG9uczogW10sXHJcbiAgICBzZWxlY3RlZEJ1dHRvbnM6IFtdLFxyXG4gICAgZXhwYW5kZWQ6IHRydWUsXHJcbiAgICBzaG93bkNvdW50OiBPYmplY3Qua2V5cyh0aGlzLl9zaGFyZS5jb25maWcucHJvcCkubGVuZ3RoXHJcbiAgfSk7XHJcblxyXG4gIHByaXZhdGUgX2NvbmZpZ1N1YiQ6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgQElucHV0KCkgdGhlbWUgPSB0aGlzLl9zaGFyZS50aGVtZTtcclxuXHJcbiAgQElucHV0KCdpbmNsdWRlJykgc2V0IGluY2x1ZGVkQnV0dG9ucyhpbmNsdWRlZEJ1dHRvbnM6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtpbmNsdWRlZEJ1dHRvbnN9KTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZXhjbHVkZScpIHNldCBleGNsdWRlZEJ1dHRvbnMoZXhjbHVkZWRCdXR0b25zOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7ZXhjbHVkZWRCdXR0b25zfSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ3Nob3cnKSBzZXQgc2hvd25CdXR0b25zKHNob3duQ291bnQ6IG51bWJlcikge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7c2hvd25Db3VudH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNoYXJlIG1ldGEgdGFncyAqL1xyXG4gIEBJbnB1dCgpIHVybDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBASW5wdXQoKSBpbWFnZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRhZ3M6IHN0cmluZztcclxuXHJcbiAgLyoqIFNldCBtZXRhIHRhZ3MgZnJvbSBkb2N1bWVudCBoZWFkLCB1c2VmdWwgd2hlbiBTRU8gaXMgc3VwcG9ydGVkICovXHJcbiAgQElucHV0KCkgYXV0b1NldE1ldGE6IGJvb2xlYW47XHJcblxyXG4gIC8qKiBTaG93IGJ1dHRvbnMgaWNvbiAqL1xyXG4gIEBJbnB1dCgpIHNob3dJY29uID0gdHJ1ZTtcclxuXHJcbiAgLyoqIFNob3cgYnV0dG9ucyBuYW1lICovXHJcbiAgQElucHV0KCkgc2hvd1RleHQgPSBmYWxzZTtcclxuXHJcbiAgLyoqIFNob3cgYnV0dG9ucyBzaGFyZSBjb3VudCAqL1xyXG4gIEBJbnB1dCgpIHNob3dDb3VudCA9IGZhbHNlO1xyXG5cclxuICAvKiogQnV0dG9ucyBzaXplICovXHJcbiAgQElucHV0KCkgc2l6ZSA9IDA7XHJcblxyXG4gIC8qKiBTaGFyZSBjb3VudCBldmVudCAqL1xyXG4gIEBPdXRwdXQoKSBjb3VudCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICAvKiogU2hhcmUgZGlhbG9nIG9wZW5lZCBldmVudCAqL1xyXG4gIEBPdXRwdXQoKSBvcGVuZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgLyoqIFNoYXJlIGRpYWxvZyBjbG9zZWQgZXZlbnQgKi9cclxuICBAT3V0cHV0KCkgY2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NoYXJlOiBTaGFyZUJ1dHRvbnMpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zdGF0ZSQgPSB0aGlzLl9zdGF0ZVdvcmtlciQucGlwZShcclxuICAgICAgbWFwKChzdGF0ZTogQnV0dG9uc1N0YXRlKSA9PiB7XHJcbiAgICAgICAgLy8gVXNlIGNvbXBvbmVudCBpbmNsdWRlIGJ1dHRvbnMsIG90aGVyd2lzZSBmYWxsYmFjayB0byBnbG9iYWwgaW5jbHVkZSBidXR0b25zXHJcbiAgICAgICAgY29uc3QgaW5jbHVkZWRCdXR0b25zID0gc3RhdGUuaW5jbHVkZWRCdXR0b25zLmxlbmd0aCA/IHN0YXRlLmluY2x1ZGVkQnV0dG9ucyA6IHN0YXRlLnVzZXJCdXR0b25zO1xyXG4gICAgICAgIGNvbnN0IHVzZXJCdXR0b25zID0gaW5jbHVkZWRCdXR0b25zLmZpbHRlcigoYnRuKSA9PiBzdGF0ZS5leGNsdWRlZEJ1dHRvbnMuaW5kZXhPZihidG4pIDwgMCk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRCdXR0b25zID0gdXNlckJ1dHRvbnMuc2xpY2UoMCwgc3RhdGUuZXhwYW5kZWQgPyB1c2VyQnV0dG9ucy5sZW5ndGggOiBzdGF0ZS5zaG93bkNvdW50KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdXNlckJ1dHRvbnMsXHJcbiAgICAgICAgICBzZWxlY3RlZEJ1dHRvbnMsXHJcbiAgICAgICAgICBleHBhbmRlZDogc3RhdGUuZXhwYW5kZWQsXHJcbiAgICAgICAgICBzaG93bkNvdW50OiBzdGF0ZS5zaG93bkNvdW50LFxyXG4gICAgICAgICAgbW9yZUljb246IHN0YXRlLm1vcmVJY29uLFxyXG4gICAgICAgICAgbGVzc0ljb246IHN0YXRlLmxlc3NJY29uXHJcbiAgICAgICAgfTtcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgLyoqIFN1YnNjcmliZSB0byBzaGFyZSBidXR0b25zIGNvbmZpZyBjaGFuZ2VzLCBUaGlzIHVwZGF0ZXMgdGhlIGNvbXBvbmVudCB3aGVuZXZlciBhIG5ldyBidXR0b24gaXMgYWRkZWQgKi9cclxuICAgIHRoaXMuX2NvbmZpZ1N1YiQgPSB0aGlzLl9zaGFyZS5jb25maWckLnN1YnNjcmliZSgoY29uZmlnOiBTaGFyZUJ1dHRvbnNDb25maWcpID0+IHtcclxuICAgICAgLy8gVXNlIGdsb2JhbCBpbmNsdWRlIGJ1dHRvbnMsIG90aGVyd2lzZSBmYWxsYmFjayB0byBhbGwgYnV0dG9uc1xyXG4gICAgICBjb25zdCBpbmNsdWRlZEJ1dHRvbnMgPSBjb25maWcub3B0aW9ucy5pbmNsdWRlLmxlbmd0aCA/IGNvbmZpZy5vcHRpb25zLmluY2x1ZGUgOiBPYmplY3Qua2V5cyhjb25maWcucHJvcCk7XHJcbiAgICAgIGNvbnN0IHVzZXJCdXR0b25zID0gaW5jbHVkZWRCdXR0b25zLmZpbHRlcigoYnRuKSA9PiBjb25maWcub3B0aW9ucy5leGNsdWRlLmluZGV4T2YoYnRuKSA8IDApO1xyXG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgICB1c2VyQnV0dG9ucyxcclxuICAgICAgICBleHBhbmRlZDogZmFsc2UsXHJcbiAgICAgICAgbW9yZUljb246IGNvbmZpZy5vcHRpb25zLm1vcmVCdXR0b25JY29uLFxyXG4gICAgICAgIGxlc3NJY29uOiBjb25maWcub3B0aW9ucy5sZXNzQnV0dG9uSWNvblxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5fY29uZmlnU3ViJCkge1xyXG4gICAgICB0aGlzLl9jb25maWdTdWIkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zdGF0ZVdvcmtlciQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVN0YXRlKHN0YXRlOiBCdXR0b25zU3RhdGUpIHtcclxuICAgIHRoaXMuX3N0YXRlV29ya2VyJC5uZXh0KHsuLi50aGlzLl9zdGF0ZVdvcmtlciQuZ2V0VmFsdWUoKSwgLi4uc3RhdGV9KTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogRXhwbGFuYXRpb24gb2YgdGhlIGFib3ZlIGNvZGU6XHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gSW5jbHVkZSBidXR0b25zOiBpbmNsdWRlcyBvbmx5IHdhbnRlZCBidXR0b25zIGFuZCBleGNsdWRlcyB0aGUgcmVzdFxyXG4gRXhjbHVkZSBidXR0b25zOiBleGNsdWRlcyBvbmx5IHRoZSB1bndhbnRlZCBidXR0b25zXHJcbiBVc2VyIGJ1dHRvbnMgPSBJbmNsdWRlIGJ1dHRvbnMgLSBleGNsdWRlIGJ1dHRvbnNcclxuIFNlbGVjdGVkIEJ1dHRvbnMgPSBVc2VyIGJ1dHRvbnMgW3Nob3duIG51bWJlcl1cclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gV2h5IGRvIHdlIHVzZSBib3RoIGluY2x1ZGUgYW5kIGV4Y2x1ZGUgaW5wdXRzP1xyXG5cclxuIEJlY2F1c2UgaXQgaXMgZWFzaWVyIGZvciB1c2VycyB3aG8gd2FudCB0byBkaXNhYmxlIG9uZSBidXR0b24gdG8gdXNlIFtleGNsdWRlXSBpbnB1dCBpbnN0ZWFkIG9mIHdyaXRpbmcgYW4gYXJyYXkgb2YgYWxsIGluY2x1ZGVkIGJ1dHRvbnNcclxuIEFuZCBpdCBpcyBlYXNpZXIgZm9yIHVzZXJzIHdobyB3YW50IHRvIGVuYWJsZSBvbmx5IG9uZSBidXR0b24gdG8gdXNlIFtpbmNsdWRlXSBpbnB1dCBpbnN0ZWFkIG9mIHdyaXRpbmcgYW4gYXJyYXkgb2YgYWxsIGV4Y2x1ZGVkIGJ1dHRvbnNcclxuICovXHJcbiIsImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdleHBhbmQtYnV0dG9uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInNiLXdyYXBwZXIgc2ItZXhwYW5kIHNiLXNob3ctaWNvblwiXHJcbiAgICAgICAgICAgIFtzdHlsZS5mb250U2l6ZS5weF09XCJzaXplXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZS5lbWl0KCFleHBhbmRlZClcIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzYi1pbm5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzYi1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2ItaWNvblwiPlxyXG4gICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJleHBhbmRlZCA/IGxlc3NJY29uIDogbW9yZUljb25cIj48L2ZhLWljb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2J1dHRvbj5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHBhbmRCdXR0b25Db21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBtb3JlSWNvbjogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgQElucHV0KCkgbGVzc0ljb246IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIGV4cGFuZGVkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2l6ZTogbnVtYmVyO1xyXG4gIEBPdXRwdXQoKSB0b2dnbGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmKSB7XHJcbiAgICBlbC5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWJ1dHRvbi1jb2xvcicsICcjRkY2NjUxJyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbnMsIFNoYXJlQnV0dG9uc0NvbmZpZywgQ09ORklHIH0gZnJvbSAnQG5neC1zaGFyZS9jb3JlJztcclxuaW1wb3J0IHsgU2hhcmVCdXR0b25Nb2R1bGUgfSBmcm9tICdAbmd4LXNoYXJlL2J1dHRvbic7XHJcblxyXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbnNDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlLWJ1dHRvbnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXhwYW5kQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9leHBhbmQtYnV0dG9uLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2hhcmVCdXR0b25zRmFjdG9yeShjb25maWc6IFNoYXJlQnV0dG9uc0NvbmZpZykge1xyXG4gIHJldHVybiBuZXcgU2hhcmVCdXR0b25zKGNvbmZpZyk7XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBTaGFyZUJ1dHRvbnNDb21wb25lbnQsXHJcbiAgICBFeHBhbmRCdXR0b25Db21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBTaGFyZUJ1dHRvbk1vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgU2hhcmVCdXR0b25Nb2R1bGUsXHJcbiAgICBTaGFyZUJ1dHRvbnNDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZUJ1dHRvbnNNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IFNoYXJlQnV0dG9uc0NvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFNoYXJlQnV0dG9uc01vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge3Byb3ZpZGU6IENPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ30sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogU2hhcmVCdXR0b25zLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogU2hhcmVCdXR0b25zRmFjdG9yeSxcclxuICAgICAgICAgIGRlcHM6IFtDT05GSUddXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7SUFnSEUsWUFBb0IsTUFBb0I7UUFBcEIsV0FBTSxHQUFOLE1BQU0sQ0FBYzs2QkF4RGhCLElBQUksZUFBZSxDQUFlO1lBQ3hELGVBQWUsRUFBRSxFQUFFO1lBQ25CLGVB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