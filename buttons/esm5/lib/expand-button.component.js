/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
var ExpandButtonComponent = /** @class */ (function () {
    function ExpandButtonComponent(el) {
        this.toggle = new EventEmitter();
        el.nativeElement.style.setProperty('--button-color', '#FF6651');
    }
    ExpandButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'expand-button',
                    template: "\n    <button class=\"sb-wrapper sb-expand sb-show-icon\"\n            [style.fontSize.px]=\"size\"\n            (click)=\"toggle.emit(!expanded)\">\n\n      <div class=\"sb-inner\">\n        <div class=\"sb-content\">\n          <div class=\"sb-icon\">\n            <fa-icon [icon]=\"expanded ? lessIcon : moreIcon\"></fa-icon>\n          </div>\n        </div>\n      </div>\n    </button>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false
                },] },
    ];
    /** @nocollapse */
    ExpandButtonComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ExpandButtonComponent.propDecorators = {
        moreIcon: [{ type: Input }],
        lessIcon: [{ type: Input }],
        expanded: [{ type: Input }],
        size: [{ type: Input }],
        toggle: [{ type: Output }]
    };
    return ExpandButtonComponent;
}());
export { ExpandButtonComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2J1dHRvbnMvIiwic291cmNlcyI6WyJsaWIvZXhwYW5kLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQTZCMUcsK0JBQVksRUFBYztzQkFGUCxJQUFJLFlBQVksRUFBRTtRQUduQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDakU7O2dCQTdCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSw2WUFhVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7Ozs7Z0JBcEI0QyxVQUFVOzs7MkJBdUJwRCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLE1BQU07O2dDQTNCVDs7U0FxQmEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2V4cGFuZC1idXR0b24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YnV0dG9uIGNsYXNzPVwic2Itd3JhcHBlciBzYi1leHBhbmQgc2Itc2hvdy1pY29uXCJcclxuICAgICAgICAgICAgW3N0eWxlLmZvbnRTaXplLnB4XT1cInNpemVcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlLmVtaXQoIWV4cGFuZGVkKVwiPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInNiLWlubmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNiLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzYi1pY29uXCI+XHJcbiAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImV4cGFuZGVkID8gbGVzc0ljb24gOiBtb3JlSWNvblwiPjwvZmEtaWNvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYnV0dG9uPlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIEV4cGFuZEJ1dHRvbkNvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIG1vcmVJY29uOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICBASW5wdXQoKSBsZXNzSWNvbjogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgQElucHV0KCkgZXhwYW5kZWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBzaXplOiBudW1iZXI7XHJcbiAgQE91dHB1dCgpIHRvZ2dsZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYpIHtcclxuICAgIGVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYnV0dG9uLWNvbG9yJywgJyNGRjY2NTEnKTtcclxuICB9XHJcbn1cclxuIl19