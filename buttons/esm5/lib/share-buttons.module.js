/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ShareButtons, CONFIG } from '@ngx-share/core';
import { ShareButtonModule } from '@ngx-share/button';
import { ShareButtonsComponent } from './share-buttons.component';
import { ExpandButtonComponent } from './expand-button.component';
/**
 * @param {?} config
 * @return {?}
 */
export function ShareButtonsFactory(config) {
    return new ShareButtons(config);
}
var ShareButtonsModule = /** @class */ (function () {
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
                { provide: CONFIG, useValue: config },
                {
                    provide: ShareButtons,
                    useFactory: ShareButtonsFactory,
                    deps: [CONFIG]
                }
            ]
        };
    };
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
    return ShareButtonsModule;
}());
export { ShareButtonsModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2J1dHRvbnMvIiwic291cmNlcyI6WyJsaWIvc2hhcmUtYnV0dG9ucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsWUFBWSxFQUFzQixNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7QUFFbEUsTUFBTSw4QkFBOEIsTUFBMEI7SUFDNUQsTUFBTSxDQUFDLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQ2pDOzs7Ozs7OztJQWtCUSwwQkFBTzs7OztJQUFkLFVBQWUsTUFBMkI7UUFDeEMsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUU7Z0JBQ1QsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUM7Z0JBQ25DO29CQUNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixVQUFVLEVBQUUsbUJBQW1CO29CQUMvQixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7aUJBQ2Y7YUFDRjtTQUNGLENBQUM7S0FDSDs7Z0JBNUJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1oscUJBQXFCO3dCQUNyQixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsaUJBQWlCO3dCQUNqQixxQkFBcUI7cUJBQ3RCO2lCQUNGOzs2QkE1QkQ7O1NBNkJhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbnMsIFNoYXJlQnV0dG9uc0NvbmZpZywgQ09ORklHIH0gZnJvbSAnQG5neC1zaGFyZS9jb3JlJztcclxuaW1wb3J0IHsgU2hhcmVCdXR0b25Nb2R1bGUgfSBmcm9tICdAbmd4LXNoYXJlL2J1dHRvbic7XHJcblxyXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbnNDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlLWJ1dHRvbnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXhwYW5kQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9leHBhbmQtYnV0dG9uLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2hhcmVCdXR0b25zRmFjdG9yeShjb25maWc6IFNoYXJlQnV0dG9uc0NvbmZpZykge1xyXG4gIHJldHVybiBuZXcgU2hhcmVCdXR0b25zKGNvbmZpZyk7XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBTaGFyZUJ1dHRvbnNDb21wb25lbnQsXHJcbiAgICBFeHBhbmRCdXR0b25Db21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBTaGFyZUJ1dHRvbk1vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgU2hhcmVCdXR0b25Nb2R1bGUsXHJcbiAgICBTaGFyZUJ1dHRvbnNDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZUJ1dHRvbnNNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IFNoYXJlQnV0dG9uc0NvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFNoYXJlQnV0dG9uc01vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge3Byb3ZpZGU6IENPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ30sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogU2hhcmVCdXR0b25zLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogU2hhcmVCdXR0b25zRmFjdG9yeSxcclxuICAgICAgICAgIGRlcHM6IFtDT05GSUddXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=