/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
export class ExpandButtonComponent {
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
function ExpandButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ExpandButtonComponent.prototype.moreIcon;
    /** @type {?} */
    ExpandButtonComponent.prototype.lessIcon;
    /** @type {?} */
    ExpandButtonComponent.prototype.expanded;
    /** @type {?} */
    ExpandButtonComponent.prototype.size;
    /** @type {?} */
    ExpandButtonComponent.prototype.toggle;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2J1dHRvbnMvIiwic291cmNlcyI6WyJsaWIvZXhwYW5kLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBcUI1RyxNQUFNOzs7O0lBUUosWUFBWSxFQUFjO3NCQUZQLElBQUksWUFBWSxFQUFFO1FBR25DLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsQ0FBQztLQUNqRTs7O1lBN0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0dBYVQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7Ozs7WUFwQjRDLFVBQVU7Ozt1QkF1QnBELEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO21CQUNMLEtBQUs7cUJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdleHBhbmQtYnV0dG9uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInNiLXdyYXBwZXIgc2ItZXhwYW5kIHNiLXNob3ctaWNvblwiXHJcbiAgICAgICAgICAgIFtzdHlsZS5mb250U2l6ZS5weF09XCJzaXplXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZS5lbWl0KCFleHBhbmRlZClcIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzYi1pbm5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzYi1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2ItaWNvblwiPlxyXG4gICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJleHBhbmRlZCA/IGxlc3NJY29uIDogbW9yZUljb25cIj48L2ZhLWljb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2J1dHRvbj5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHBhbmRCdXR0b25Db21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBtb3JlSWNvbjogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgQElucHV0KCkgbGVzc0ljb246IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIGV4cGFuZGVkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2l6ZTogbnVtYmVyO1xyXG4gIEBPdXRwdXQoKSB0b2dnbGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmKSB7XHJcbiAgICBlbC5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWJ1dHRvbi1jb2xvcicsICcjRkY2NjUxJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==