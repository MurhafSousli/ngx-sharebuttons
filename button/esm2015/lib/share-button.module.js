/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule, ShareButtons, CONFIG } from '@ngx-share/core';
import { ShareButtonComponent } from './share-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
/**
 * @param {?} config
 * @return {?}
 */
export function ShareButtonsFactory(config) {
    return new ShareButtons(config);
}
export class ShareButtonModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: ShareButtonModule,
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
ShareButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ShareButtonComponent
                ],
                imports: [
                    ShareModule,
                    FontAwesomeModule,
                    CommonModule
                ],
                exports: [
                    ShareModule,
                    FontAwesomeModule,
                    ShareButtonComponent
                ]
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvYnV0dG9uLyIsInNvdXJjZXMiOlsibGliL3NoYXJlLWJ1dHRvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBc0IsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFeEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7O0FBRXJFLE1BQU0sOEJBQThCLE1BQTBCO0lBQzVELE1BQU0sQ0FBQyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUNqQztBQWlCRCxNQUFNOzs7OztJQUNKLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBMkI7UUFDeEMsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUU7Z0JBQ1QsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUM7Z0JBQ25DO29CQUNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixVQUFVLEVBQUUsbUJBQW1CO29CQUMvQixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7aUJBQ2Y7YUFDRjtTQUNGLENBQUM7S0FDSDs7O1lBNUJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osb0JBQW9CO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsV0FBVztvQkFDWCxpQkFBaUI7b0JBQ2pCLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFdBQVc7b0JBQ1gsaUJBQWlCO29CQUNqQixvQkFBb0I7aUJBQ3JCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBTaGFyZU1vZHVsZSwgU2hhcmVCdXR0b25zLCBTaGFyZUJ1dHRvbnNDb25maWcsIENPTkZJRyB9IGZyb20gJ0BuZ3gtc2hhcmUvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vc2hhcmUtYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNoYXJlQnV0dG9uc0ZhY3RvcnkoY29uZmlnOiBTaGFyZUJ1dHRvbnNDb25maWcpIHtcclxuICByZXR1cm4gbmV3IFNoYXJlQnV0dG9ucyhjb25maWcpO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgU2hhcmVCdXR0b25Db21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIFNoYXJlTW9kdWxlLFxyXG4gICAgRm9udEF3ZXNvbWVNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFNoYXJlTW9kdWxlLFxyXG4gICAgRm9udEF3ZXNvbWVNb2R1bGUsXHJcbiAgICBTaGFyZUJ1dHRvbkNvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlQnV0dG9uTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBTaGFyZUJ1dHRvbnNDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBTaGFyZUJ1dHRvbk1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge3Byb3ZpZGU6IENPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ30sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogU2hhcmVCdXR0b25zLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogU2hhcmVCdXR0b25zRmFjdG9yeSxcclxuICAgICAgICAgIGRlcHM6IFtDT05GSUddXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=