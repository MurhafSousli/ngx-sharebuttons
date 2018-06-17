/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ShareButtons } from './share.service';
import { ShareButtonDirective } from './share-button.directive';
import { ShareCountPipe } from './share-count.pipe';
import { CONFIG } from './share.tokens';
/**
 * @param {?} config
 * @return {?}
 */
export function ShareButtonsFactory(config) {
    return new ShareButtons(config);
}
var ShareModule = /** @class */ (function () {
    function ShareModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    ShareModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: ShareModule,
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
    ShareModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ShareButtonDirective,
                        ShareCountPipe
                    ],
                    exports: [
                        ShareButtonDirective,
                        ShareCountPipe
                    ]
                },] },
    ];
    return ShareModule;
}());
export { ShareModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1zaGFyZS9jb3JlLyIsInNvdXJjZXMiOlsibGliL3NoYXJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRXhDLE1BQU0sOEJBQThCLE1BQTBCO0lBQzVELE1BQU0sQ0FBQyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUNqQzs7Ozs7Ozs7SUFhUSxtQkFBTzs7OztJQUFkLFVBQWUsTUFBMkI7UUFDeEMsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFO2dCQUNULEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDO2dCQUNuQztvQkFDRSxPQUFPLEVBQUUsWUFBWTtvQkFDckIsVUFBVSxFQUFFLG1CQUFtQjtvQkFDL0IsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO2lCQUNmO2FBQ0Y7U0FDRixDQUFDO0tBQ0g7O2dCQXZCRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLG9CQUFvQjt3QkFDcEIsY0FBYztxQkFDZjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asb0JBQW9CO3dCQUNwQixjQUFjO3FCQUNmO2lCQUNGOztzQkFyQkQ7O1NBc0JhLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU2hhcmVCdXR0b25zIH0gZnJvbSAnLi9zaGFyZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2hhcmVCdXR0b25EaXJlY3RpdmUgfSBmcm9tICcuL3NoYXJlLWJ1dHRvbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBTaGFyZUNvdW50UGlwZSB9IGZyb20gJy4vc2hhcmUtY291bnQucGlwZSc7XHJcbmltcG9ydCB7IFNoYXJlQnV0dG9uc0NvbmZpZyB9IGZyb20gJy4vc2hhcmUubW9kZWxzJztcclxuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9zaGFyZS50b2tlbnMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNoYXJlQnV0dG9uc0ZhY3RvcnkoY29uZmlnOiBTaGFyZUJ1dHRvbnNDb25maWcpIHtcclxuICByZXR1cm4gbmV3IFNoYXJlQnV0dG9ucyhjb25maWcpO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgU2hhcmVCdXR0b25EaXJlY3RpdmUsXHJcbiAgICBTaGFyZUNvdW50UGlwZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgU2hhcmVCdXR0b25EaXJlY3RpdmUsXHJcbiAgICBTaGFyZUNvdW50UGlwZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBTaGFyZUJ1dHRvbnNDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBTaGFyZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge3Byb3ZpZGU6IENPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ30sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogU2hhcmVCdXR0b25zLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogU2hhcmVCdXR0b25zRmFjdG9yeSxcclxuICAgICAgICAgIGRlcHM6IFtDT05GSUddXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=