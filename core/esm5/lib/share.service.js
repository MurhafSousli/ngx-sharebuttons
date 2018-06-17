/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CONFIG } from './share.tokens';
import { shareButtonsProp } from './share.prop';
import { mergeDeep } from './utils';
var ShareButtons = /** @class */ (function () {
    function ShareButtons(config) {
        this.config = {
            prop: shareButtonsProp,
            options: {
                theme: 'default',
                include: [],
                exclude: [],
                size: 0,
                url: undefined,
                title: undefined,
                description: undefined,
                image: undefined,
                tags: undefined,
                twitterAccount: undefined,
                autoSetMeta: true,
                gaTracking: false,
                windowWidth: 800,
                windowHeight: 500,
                moreButtonIcon: 'ellipsis-h',
                lessButtonIcon: 'minus'
            }
        };
        this.config$ = new BehaviorSubject(this.config);
        if (config) {
            this.setConfig(config);
        }
    }
    Object.defineProperty(ShareButtons.prototype, "prop", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.prop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "twitterAccount", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.options.twitterAccount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "theme", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.options.theme;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "windowSize", {
        get: /**
         * @return {?}
         */
        function () {
            return "width=" + this.config.options.windowWidth + ", height=" + this.config.options.windowHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "url", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.options.url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "title", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.options.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "description", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.options.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "image", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.options.image;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "tags", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.options.tags;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "autoSetMeta", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.options.autoSetMeta;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "gaTracking", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.options.gaTracking;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "size", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.options.size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} config
     * @return {?}
     */
    ShareButtons.prototype.setConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = mergeDeep(this.config, config);
        this.config$.next(this.config);
    };
    /**
     * @param {?} name
     * @param {?} data
     * @return {?}
     */
    ShareButtons.prototype.addButton = /**
     * @param {?} name
     * @param {?} data
     * @return {?}
     */
    function (name, data) {
        var /** @type {?} */ config = {
            prop: tslib_1.__assign({}, shareButtonsProp, (_a = {}, _a[name] = data, _a))
        };
        this.setConfig(config);
        var _a;
    };
    ShareButtons.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ShareButtons.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [CONFIG,] }] }
    ]; };
    return ShareButtons;
}());
export { ShareButtons };
function ShareButtons_tsickle_Closure_declarations() {
    /** @type {?} */
    ShareButtons.prototype.config;
    /** @type {?} */
    ShareButtons.prototype.config$;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2hELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxTQUFTLENBQUM7O0lBNEJsQyxzQkFBNEIsTUFBMEI7c0JBdkJ6QjtZQUMzQixJQUFJLEVBQUUsZ0JBQWdCO1lBQ3RCLE9BQU8sRUFBRTtnQkFDUCxLQUFLLEVBQUUsU0FBUztnQkFDaEIsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsR0FBRyxFQUFFLFNBQVM7Z0JBQ2QsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFdBQVcsRUFBRSxTQUFTO2dCQUN0QixLQUFLLEVBQUUsU0FBUztnQkFDaEIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixVQUFVLEVBQUUsS0FBSztnQkFDakIsV0FBVyxFQUFFLEdBQUc7Z0JBQ2hCLFlBQVksRUFBRSxHQUFHO2dCQUNqQixjQUFjLEVBQUUsWUFBWTtnQkFDNUIsY0FBYyxFQUFFLE9BQU87YUFDeEI7U0FDRjt1QkFDUyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBR3hDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hCO0tBQ0Y7SUFFRCxzQkFBSSw4QkFBSTs7OztRQUFSO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ3pCOzs7T0FBQTtJQUVELHNCQUFJLHdDQUFjOzs7O1FBQWxCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztTQUMzQzs7O09BQUE7SUFFRCxzQkFBSSwrQkFBSzs7OztRQUFUO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztTQUNsQzs7O09BQUE7SUFFRCxzQkFBSSxvQ0FBVTs7OztRQUFkO1lBQ0UsTUFBTSxDQUFDLFdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxpQkFBWSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFjLENBQUM7U0FDL0Y7OztPQUFBO0lBRUQsc0JBQUksNkJBQUc7Ozs7UUFBUDtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7U0FDaEM7OztPQUFBO0lBRUQsc0JBQUksK0JBQUs7Ozs7UUFBVDtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7U0FDbEM7OztPQUFBO0lBRUQsc0JBQUkscUNBQVc7Ozs7UUFBZjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7U0FDeEM7OztPQUFBO0lBRUQsc0JBQUksK0JBQUs7Ozs7UUFBVDtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7U0FDbEM7OztPQUFBO0lBRUQsc0JBQUksOEJBQUk7Ozs7UUFBUjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7U0FDakM7OztPQUFBO0lBRUQsc0JBQUkscUNBQVc7Ozs7UUFBZjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7U0FDeEM7OztPQUFBO0lBRUQsc0JBQUksb0NBQVU7Ozs7UUFBZDtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7U0FDdkM7OztPQUFBO0lBRUQsc0JBQUksOEJBQUk7Ozs7UUFBUjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7U0FDakM7OztPQUFBOzs7OztJQUVELGdDQUFTOzs7O0lBQVQsVUFBVSxNQUEwQjtRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNoQzs7Ozs7O0lBRUQsZ0NBQVM7Ozs7O0lBQVQsVUFBVSxJQUFZLEVBQUUsSUFBa0I7UUFDeEMscUJBQU0sTUFBTSxHQUFHO1lBQ2IsSUFBSSx1QkFBTSxnQkFBZ0IsWUFBTSxHQUFDLElBQUksSUFBRyxJQUFJLE1BQUU7U0FDL0MsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7O0tBQ3hCOztnQkExRkYsVUFBVTs7OztnREEwQkksTUFBTSxTQUFDLE1BQU07O3VCQWpDNUI7O1NBUWEsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSVNoYXJlQnV0dG9uLCBTaGFyZUJ1dHRvbnNDb25maWcgfSBmcm9tICcuL3NoYXJlLm1vZGVscyc7XHJcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4vc2hhcmUudG9rZW5zJztcclxuaW1wb3J0IHsgc2hhcmVCdXR0b25zUHJvcCB9IGZyb20gJy4vc2hhcmUucHJvcCc7XHJcbmltcG9ydCB7IG1lcmdlRGVlcCB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2hhcmVCdXR0b25zIHtcclxuXHJcbiAgY29uZmlnOiBTaGFyZUJ1dHRvbnNDb25maWcgPSB7XHJcbiAgICBwcm9wOiBzaGFyZUJ1dHRvbnNQcm9wLFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICB0aGVtZTogJ2RlZmF1bHQnLFxyXG4gICAgICBpbmNsdWRlOiBbXSxcclxuICAgICAgZXhjbHVkZTogW10sXHJcbiAgICAgIHNpemU6IDAsXHJcbiAgICAgIHVybDogdW5kZWZpbmVkLFxyXG4gICAgICB0aXRsZTogdW5kZWZpbmVkLFxyXG4gICAgICBkZXNjcmlwdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgICBpbWFnZTogdW5kZWZpbmVkLFxyXG4gICAgICB0YWdzOiB1bmRlZmluZWQsXHJcbiAgICAgIHR3aXR0ZXJBY2NvdW50OiB1bmRlZmluZWQsXHJcbiAgICAgIGF1dG9TZXRNZXRhOiB0cnVlLFxyXG4gICAgICBnYVRyYWNraW5nOiBmYWxzZSxcclxuICAgICAgd2luZG93V2lkdGg6IDgwMCxcclxuICAgICAgd2luZG93SGVpZ2h0OiA1MDAsXHJcbiAgICAgIG1vcmVCdXR0b25JY29uOiAnZWxsaXBzaXMtaCcsXHJcbiAgICAgIGxlc3NCdXR0b25JY29uOiAnbWludXMnXHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25maWckID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLmNvbmZpZyk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ09ORklHKSBjb25maWc6IFNoYXJlQnV0dG9uc0NvbmZpZykge1xyXG4gICAgaWYgKGNvbmZpZykge1xyXG4gICAgICB0aGlzLnNldENvbmZpZyhjb25maWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHByb3AoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcucHJvcDtcclxuICB9XHJcblxyXG4gIGdldCB0d2l0dGVyQWNjb3VudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5vcHRpb25zLnR3aXR0ZXJBY2NvdW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRoZW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLm9wdGlvbnMudGhlbWU7XHJcbiAgfVxyXG5cclxuICBnZXQgd2luZG93U2l6ZSgpIHtcclxuICAgIHJldHVybiBgd2lkdGg9JHt0aGlzLmNvbmZpZy5vcHRpb25zLndpbmRvd1dpZHRofSwgaGVpZ2h0PSR7dGhpcy5jb25maWcub3B0aW9ucy53aW5kb3dIZWlnaHR9YDtcclxuICB9XHJcblxyXG4gIGdldCB1cmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcub3B0aW9ucy51cmw7XHJcbiAgfVxyXG5cclxuICBnZXQgdGl0bGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcub3B0aW9ucy50aXRsZTtcclxuICB9XHJcblxyXG4gIGdldCBkZXNjcmlwdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5vcHRpb25zLmRlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGltYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLm9wdGlvbnMuaW1hZ2U7XHJcbiAgfVxyXG5cclxuICBnZXQgdGFncygpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5vcHRpb25zLnRhZ3M7XHJcbiAgfVxyXG5cclxuICBnZXQgYXV0b1NldE1ldGEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcub3B0aW9ucy5hdXRvU2V0TWV0YTtcclxuICB9XHJcblxyXG4gIGdldCBnYVRyYWNraW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLm9wdGlvbnMuZ2FUcmFja2luZztcclxuICB9XHJcblxyXG4gIGdldCBzaXplKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLm9wdGlvbnMuc2l6ZTtcclxuICB9XHJcblxyXG4gIHNldENvbmZpZyhjb25maWc6IFNoYXJlQnV0dG9uc0NvbmZpZykge1xyXG4gICAgdGhpcy5jb25maWcgPSBtZXJnZURlZXAodGhpcy5jb25maWcsIGNvbmZpZyk7XHJcbiAgICB0aGlzLmNvbmZpZyQubmV4dCh0aGlzLmNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBhZGRCdXR0b24obmFtZTogc3RyaW5nLCBkYXRhOiBJU2hhcmVCdXR0b24pIHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgcHJvcDogey4uLnNoYXJlQnV0dG9uc1Byb3AsIC4uLntbbmFtZV06IGRhdGF9fVxyXG4gICAgfTtcclxuICAgIHRoaXMuc2V0Q29uZmlnKGNvbmZpZyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==