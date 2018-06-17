/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, ViewChild, HostBinding, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ShareButtons, ShareButtonDirective } from '@ngx-share/core';
export class ShareButtonComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvYnV0dG9uLyIsInNvdXJjZXMiOlsibGliL3NoYXJlLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4SCxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFnRHJFLE1BQU07Ozs7SUF1RUosWUFBb0IsS0FBbUI7UUFBbkIsVUFBSyxHQUFMLEtBQUssQ0FBYzs7Ozt3QkFyQ25CLElBQUk7Ozs7d0JBR0osS0FBSzs7Ozt5QkFHSixLQUFLOzs7O29CQVNGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTs7OztxQkFHZCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7Ozs7cUJBR3ZCLElBQUksWUFBWSxFQUFVOzs7O3NCQUd6QixJQUFJLFlBQVksRUFBVTs7OztzQkFHMUIsSUFBSSxZQUFZLEVBQVU7S0FXNUM7Ozs7O0lBN0RELElBQ0ksWUFBWSxDQUFDLE1BQWM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7S0FDdEI7Ozs7OztJQUdELElBQ0ksTUFBTSxDQUFDLEdBQVc7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7S0FDaEI7Ozs7O0lBMENELElBQTBCLFdBQVc7UUFDbkMsTUFBTSxDQUFDLGdCQUFnQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDckM7Ozs7O0lBUUQsT0FBTyxDQUFDLEtBQUs7UUFDWCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN4Qjs7O1lBM0hGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBd0NYO2dCQUNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO2FBQzNCOzs7O1lBL0NRLFlBQVk7OzsyQkEyRGxCLEtBQUssU0FBQyxRQUFRO3FCQU9kLEtBQUssU0FBQyxLQUFLO29CQU9YLEtBQUs7MEJBQ0wsS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7MEJBR0wsS0FBSzt1QkFHTCxLQUFLO3VCQUdMLEtBQUs7d0JBR0wsS0FBSzttQkFHTCxLQUFLO21CQUdMLEtBQUs7bUJBR0wsS0FBSztvQkFHTCxLQUFLO29CQUdMLE1BQU07cUJBR04sTUFBTTtxQkFHTixNQUFNOzBCQUdOLFdBQVcsU0FBQyxPQUFPO2tCQUtuQixTQUFTLFNBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQsIEhvc3RCaW5kaW5nLCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNoYXJlQnV0dG9ucywgU2hhcmVCdXR0b25EaXJlY3RpdmUgfSBmcm9tICdAbmd4LXNoYXJlL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzaGFyZS1idXR0b24nLFxyXG4gIHRlbXBsYXRlOiBgPGJ1dHRvbiBjbGFzcz1cInNiLXdyYXBwZXJcIlxyXG4gICAgICAgIFtzaGFyZUJ1dHRvbl09XCJidXR0b25cIlxyXG4gICAgICAgIFt1cmxdPVwidXJsXCJcclxuICAgICAgICBbaW1hZ2VdPVwiaW1hZ2VcIlxyXG4gICAgICAgIFt0aXRsZV09XCJ0aXRsZVwiXHJcbiAgICAgICAgW2Rlc2NyaXB0aW9uXT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICBbdGFnc109XCJ0YWdzXCJcclxuICAgICAgICBbYXV0b1NldE1ldGFdPVwiYXV0b1NldE1ldGFcIlxyXG4gICAgICAgIFtnZXRDb3VudF09XCJzaG93Q291bnRcIlxyXG4gICAgICAgIChvcGVuZWQpPVwib3BlbmVkLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgKGNsb3NlZCk9XCJjbG9zZWQuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgICAoY291bnQpPVwib25Db3VudCgkZXZlbnQpXCJcclxuICAgICAgICBbY2xhc3Muc2Itc2hvdy1pY29uXT1cInNob3dJY29uXCJcclxuICAgICAgICBbY2xhc3Muc2Itc2hvdy10ZXh0XT1cInNob3dUZXh0XCJcclxuICAgICAgICBbY2xhc3Muc2Itc2hvdy1jb3VudF09XCJzaG93Q291bnQgJiYgc2hhcmVDb3VudFwiXHJcbiAgICAgICAgW3N0eWxlLmZvbnRTaXplLnB4XT1cIigxICsgc2l6ZS8yMCkgKiAxNFwiPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwic2ItaW5uZXJcIj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwic2ItY29udGVudFwiPlxyXG5cclxuICAgICAgPCEtLSBCVVRUT04gSUNPTiAtLT5cclxuICAgICAgPGRpdiAqbmdJZj1cInNob3dJY29uICYmIHJlZi5wcm9wXCIgY2xhc3M9XCJzYi1pY29uXCI+XHJcbiAgICAgICAgPGZhLWljb24gW2ljb25dPVwiaWNvbiB8fCByZWYucHJvcC5pY29uXCI+PC9mYS1pY29uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwhLS0gQlVUVE9OIFRFWFQgLS0+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCJzaG93VGV4dCAmJiByZWYucHJvcFwiIGNsYXNzPVwic2ItdGV4dFwiPlxyXG4gICAgICAgIHt7IHRleHQgfHwgcmVmLnByb3AudGV4dCB9fVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIEJVVFRPTiBDT1VOVCAtLT5cclxuICAgIDxkaXYgKm5nSWY9XCJzaG93Q291bnQgJiYgc2hhcmVDb3VudFwiIGNsYXNzPVwic2ItY291bnRcIj5cclxuICAgICAgPHNwYW4+e3sgc2hhcmVDb3VudCB8IHNoYXJlQ291bnQgfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcbjwvYnV0dG9uPlxyXG5gLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZUJ1dHRvbkNvbXBvbmVudCB7XHJcblxyXG4gIC8qKiBTaGFyZSBVUkwgKi9cclxuICB1cmw6IHN0cmluZztcclxuXHJcbiAgLyoqIFNoYXJlIGNvdW50IHZhbHVlICovXHJcbiAgc2hhcmVDb3VudDogbnVtYmVyO1xyXG5cclxuICAvKiogQnV0dG9uIG5hbWUgKi9cclxuICBidXR0b246IHN0cmluZztcclxuXHJcbiAgQElucHV0KCdidXR0b24nKVxyXG4gIHNldCBjcmVhdGVCdXR0b24oYnV0dG9uOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2hhcmVDb3VudCA9IDA7XHJcbiAgICB0aGlzLmJ1dHRvbiA9IGJ1dHRvbjtcclxuICB9XHJcblxyXG4gIC8qKiBTaGFyZSBVUkwgKi9cclxuICBASW5wdXQoJ3VybCcpXHJcbiAgc2V0IHNldFVybCh1cmw6IHN0cmluZykge1xyXG4gICAgdGhpcy5zaGFyZUNvdW50ID0gMDtcclxuICAgIHRoaXMudXJsID0gdXJsO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNoYXJlIG1ldGEgdGFncyAqL1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBASW5wdXQoKSBpbWFnZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRhZ3M6IHN0cmluZztcclxuXHJcbiAgLyoqIFNldCBtZXRhIHRhZ3MgZnJvbSBkb2N1bWVudCBoZWFkLCB1c2VmdWwgd2hlbiBTRU8gaXMgc3VwcG9ydGVkICovXHJcbiAgQElucHV0KCkgYXV0b1NldE1ldGE6IGJvb2xlYW47XHJcblxyXG4gIC8qKiBTaG93IGJ1dHRvbiBpY29uICovXHJcbiAgQElucHV0KCkgc2hvd0ljb24gPSB0cnVlO1xyXG5cclxuICAvKiogU2hvdyBidXR0b24gdGV4dCAqL1xyXG4gIEBJbnB1dCgpIHNob3dUZXh0ID0gZmFsc2U7XHJcblxyXG4gIC8qKiBCdXR0b24gc2hhcmUgY291bnQgKi9cclxuICBASW5wdXQoKSBzaG93Q291bnQgPSBmYWxzZTtcclxuXHJcbiAgLyoqIEJ1dHRvbiBjdXN0b20gdGV4dCAqL1xyXG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcclxuXHJcbiAgLyoqIEJ1dHRvbiBjdXN0b20gaWNvbiAqL1xyXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcclxuXHJcbiAgLyoqIEJ1dHRvbiBzaXplICovXHJcbiAgQElucHV0KCkgc2l6ZTogbnVtYmVyID0gdGhpcy5zaGFyZS5zaXplO1xyXG5cclxuICAvKiogQnV0dG9uIHRoZW1lICovXHJcbiAgQElucHV0KCkgdGhlbWU6IHN0cmluZyA9IHRoaXMuc2hhcmUudGhlbWU7XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHNoYXJlIGNvdW50IGlzIGZldGNoZWQgKi9cclxuICBAT3V0cHV0KCkgY291bnQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gc2hhcmUgZGlhbG9nIGlzIG9wZW5lZCAqL1xyXG4gIEBPdXRwdXQoKSBvcGVuZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gc2hhcmUgZGlhbG9nIGlzIGNsb3NlZCAqL1xyXG4gIEBPdXRwdXQoKSBjbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgLyoqIFNldCB0aGVtZSBhcyBidXR0b24gY2xhc3MgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgZ2V0IGJ1dHRvbkNsYXNzKCkge1xyXG4gICAgcmV0dXJuIGBzYi1idXR0b24gc2ItJHt0aGlzLnRoZW1lfWA7XHJcbiAgfVxyXG5cclxuICAvKiogR2V0IGJ1dHRvbiBwcm9wIGZyb20gU2hhcmVEaXJlY3RpdmUgKi9cclxuICBAVmlld0NoaWxkKFNoYXJlQnV0dG9uRGlyZWN0aXZlKSByZWY6IFNoYXJlQnV0dG9uRGlyZWN0aXZlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNoYXJlOiBTaGFyZUJ1dHRvbnMpIHtcclxuICB9XHJcblxyXG4gIG9uQ291bnQoY291bnQpIHtcclxuICAgIHRoaXMuc2hhcmVDb3VudCA9IGNvdW50O1xyXG4gICAgdGhpcy5jb3VudC5lbWl0KGNvdW50KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==