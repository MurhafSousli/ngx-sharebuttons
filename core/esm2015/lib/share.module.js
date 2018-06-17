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
export class ShareModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1zaGFyZS9jb3JlLyIsInNvdXJjZXMiOlsibGliL3NoYXJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRXhDLE1BQU0sOEJBQThCLE1BQTBCO0lBQzVELE1BQU0sQ0FBQyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUNqQztBQVlELE1BQU07Ozs7O0lBQ0osTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUEyQjtRQUN4QyxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUU7Z0JBQ1QsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUM7Z0JBQ25DO29CQUNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixVQUFVLEVBQUUsbUJBQW1CO29CQUMvQixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7aUJBQ2Y7YUFDRjtTQUNGLENBQUM7S0FDSDs7O1lBdkJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osb0JBQW9CO29CQUNwQixjQUFjO2lCQUNmO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxvQkFBb0I7b0JBQ3BCLGNBQWM7aUJBQ2Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbnMgfSBmcm9tICcuL3NoYXJlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJy4vc2hhcmUtYnV0dG9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFNoYXJlQ291bnRQaXBlIH0gZnJvbSAnLi9zaGFyZS1jb3VudC5waXBlJztcclxuaW1wb3J0IHsgU2hhcmVCdXR0b25zQ29uZmlnIH0gZnJvbSAnLi9zaGFyZS5tb2RlbHMnO1xyXG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL3NoYXJlLnRva2Vucyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2hhcmVCdXR0b25zRmFjdG9yeShjb25maWc6IFNoYXJlQnV0dG9uc0NvbmZpZykge1xyXG4gIHJldHVybiBuZXcgU2hhcmVCdXR0b25zKGNvbmZpZyk7XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBTaGFyZUJ1dHRvbkRpcmVjdGl2ZSxcclxuICAgIFNoYXJlQ291bnRQaXBlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBTaGFyZUJ1dHRvbkRpcmVjdGl2ZSxcclxuICAgIFNoYXJlQ291bnRQaXBlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IFNoYXJlQnV0dG9uc0NvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFNoYXJlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7cHJvdmlkZTogQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBTaGFyZUJ1dHRvbnMsXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBTaGFyZUJ1dHRvbnNGYWN0b3J5LFxyXG4gICAgICAgICAgZGVwczogW0NPTkZJR11cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==