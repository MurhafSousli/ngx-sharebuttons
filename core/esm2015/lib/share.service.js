/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CONFIG } from './share.tokens';
import { shareButtonsProp } from './share.prop';
import { mergeDeep } from './utils';
export class ShareButtons {
    /**
     * @param {?} config
     */
    constructor(config) {
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
    /**
     * @return {?}
     */
    get prop() {
        return this.config.prop;
    }
    /**
     * @return {?}
     */
    get twitterAccount() {
        return this.config.options.twitterAccount;
    }
    /**
     * @return {?}
     */
    get theme() {
        return this.config.options.theme;
    }
    /**
     * @return {?}
     */
    get windowSize() {
        return `width=${this.config.options.windowWidth}, height=${this.config.options.windowHeight}`;
    }
    /**
     * @return {?}
     */
    get url() {
        return this.config.options.url;
    }
    /**
     * @return {?}
     */
    get title() {
        return this.config.options.title;
    }
    /**
     * @return {?}
     */
    get description() {
        return this.config.options.description;
    }
    /**
     * @return {?}
     */
    get image() {
        return this.config.options.image;
    }
    /**
     * @return {?}
     */
    get tags() {
        return this.config.options.tags;
    }
    /**
     * @return {?}
     */
    get autoSetMeta() {
        return this.config.options.autoSetMeta;
    }
    /**
     * @return {?}
     */
    get gaTracking() {
        return this.config.options.gaTracking;
    }
    /**
     * @return {?}
     */
    get size() {
        return this.config.options.size;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setConfig(config) {
        this.config = mergeDeep(this.config, config);
        this.config$.next(this.config);
    }
    /**
     * @param {?} name
     * @param {?} data
     * @return {?}
     */
    addButton(name, data) {
        const /** @type {?} */ config = {
            prop: Object.assign({}, shareButtonsProp, { [name]: data })
        };
        this.setConfig(config);
    }
}
ShareButtons.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ShareButtons.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [CONFIG,] }] }
];
function ShareButtons_tsickle_Closure_declarations() {
    /** @type {?} */
    ShareButtons.prototype.config;
    /** @type {?} */
    ShareButtons.prototype.config$;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUdwQyxNQUFNOzs7O0lBeUJKLFlBQTRCLE1BQTBCO3NCQXZCekI7WUFDM0IsSUFBSSxFQUFFLGdCQUFnQjtZQUN0QixPQUFPLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2dCQUNYLE9BQU8sRUFBRSxFQUFFO2dCQUNYLElBQUksRUFBRSxDQUFDO2dCQUNQLEdBQUcsRUFBRSxTQUFTO2dCQUNkLEtBQUssRUFBRSxTQUFTO2dCQUNoQixXQUFXLEVBQUUsU0FBUztnQkFDdEIsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLElBQUksRUFBRSxTQUFTO2dCQUNmLGNBQWMsRUFBRSxTQUFTO2dCQUN6QixXQUFXLEVBQUUsSUFBSTtnQkFDakIsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCLFdBQVcsRUFBRSxHQUFHO2dCQUNoQixZQUFZLEVBQUUsR0FBRztnQkFDakIsY0FBYyxFQUFFLFlBQVk7Z0JBQzVCLGNBQWMsRUFBRSxPQUFPO2FBQ3hCO1NBQ0Y7dUJBQ1MsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUd4QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4QjtLQUNGOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ3pCOzs7O0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7S0FDM0M7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0tBQ2xDOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osTUFBTSxDQUFDLFNBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxZQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQy9GOzs7O0lBRUQsSUFBSSxHQUFHO1FBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztLQUNoQzs7OztJQUVELElBQUksS0FBSztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7S0FDbEM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0tBQ3hDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztLQUNsQzs7OztJQUVELElBQUksSUFBSTtRQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7S0FDakM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0tBQ3hDOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztLQUN2Qzs7OztJQUVELElBQUksSUFBSTtRQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7S0FDakM7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQTBCO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2hDOzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBWSxFQUFFLElBQWtCO1FBQ3hDLHVCQUFNLE1BQU0sR0FBRztZQUNiLElBQUksb0JBQU0sZ0JBQWdCLEVBQUssRUFBQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBQyxDQUFDO1NBQy9DLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3hCOzs7WUExRkYsVUFBVTs7Ozs0Q0EwQkksTUFBTSxTQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IElTaGFyZUJ1dHRvbiwgU2hhcmVCdXR0b25zQ29uZmlnIH0gZnJvbSAnLi9zaGFyZS5tb2RlbHMnO1xyXG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL3NoYXJlLnRva2Vucyc7XHJcbmltcG9ydCB7IHNoYXJlQnV0dG9uc1Byb3AgfSBmcm9tICcuL3NoYXJlLnByb3AnO1xyXG5pbXBvcnQgeyBtZXJnZURlZXAgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNoYXJlQnV0dG9ucyB7XHJcblxyXG4gIGNvbmZpZzogU2hhcmVCdXR0b25zQ29uZmlnID0ge1xyXG4gICAgcHJvcDogc2hhcmVCdXR0b25zUHJvcCxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgdGhlbWU6ICdkZWZhdWx0JyxcclxuICAgICAgaW5jbHVkZTogW10sXHJcbiAgICAgIGV4Y2x1ZGU6IFtdLFxyXG4gICAgICBzaXplOiAwLFxyXG4gICAgICB1cmw6IHVuZGVmaW5lZCxcclxuICAgICAgdGl0bGU6IHVuZGVmaW5lZCxcclxuICAgICAgZGVzY3JpcHRpb246IHVuZGVmaW5lZCxcclxuICAgICAgaW1hZ2U6IHVuZGVmaW5lZCxcclxuICAgICAgdGFnczogdW5kZWZpbmVkLFxyXG4gICAgICB0d2l0dGVyQWNjb3VudDogdW5kZWZpbmVkLFxyXG4gICAgICBhdXRvU2V0TWV0YTogdHJ1ZSxcclxuICAgICAgZ2FUcmFja2luZzogZmFsc2UsXHJcbiAgICAgIHdpbmRvd1dpZHRoOiA4MDAsXHJcbiAgICAgIHdpbmRvd0hlaWdodDogNTAwLFxyXG4gICAgICBtb3JlQnV0dG9uSWNvbjogJ2VsbGlwc2lzLWgnLFxyXG4gICAgICBsZXNzQnV0dG9uSWNvbjogJ21pbnVzJ1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5jb25maWcpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENPTkZJRykgY29uZmlnOiBTaGFyZUJ1dHRvbnNDb25maWcpIHtcclxuICAgIGlmIChjb25maWcpIHtcclxuICAgICAgdGhpcy5zZXRDb25maWcoY29uZmlnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBwcm9wKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnByb3A7XHJcbiAgfVxyXG5cclxuICBnZXQgdHdpdHRlckFjY291bnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcub3B0aW9ucy50d2l0dGVyQWNjb3VudDtcclxuICB9XHJcblxyXG4gIGdldCB0aGVtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5vcHRpb25zLnRoZW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHdpbmRvd1NpemUoKSB7XHJcbiAgICByZXR1cm4gYHdpZHRoPSR7dGhpcy5jb25maWcub3B0aW9ucy53aW5kb3dXaWR0aH0sIGhlaWdodD0ke3RoaXMuY29uZmlnLm9wdGlvbnMud2luZG93SGVpZ2h0fWA7XHJcbiAgfVxyXG5cclxuICBnZXQgdXJsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLm9wdGlvbnMudXJsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRpdGxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLm9wdGlvbnMudGl0bGU7XHJcbiAgfVxyXG5cclxuICBnZXQgZGVzY3JpcHRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcub3B0aW9ucy5kZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIGdldCBpbWFnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5vcHRpb25zLmltYWdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRhZ3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcub3B0aW9ucy50YWdzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGF1dG9TZXRNZXRhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLm9wdGlvbnMuYXV0b1NldE1ldGE7XHJcbiAgfVxyXG5cclxuICBnZXQgZ2FUcmFja2luZygpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5vcHRpb25zLmdhVHJhY2tpbmc7XHJcbiAgfVxyXG5cclxuICBnZXQgc2l6ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5vcHRpb25zLnNpemU7XHJcbiAgfVxyXG5cclxuICBzZXRDb25maWcoY29uZmlnOiBTaGFyZUJ1dHRvbnNDb25maWcpIHtcclxuICAgIHRoaXMuY29uZmlnID0gbWVyZ2VEZWVwKHRoaXMuY29uZmlnLCBjb25maWcpO1xyXG4gICAgdGhpcy5jb25maWckLm5leHQodGhpcy5jb25maWcpO1xyXG4gIH1cclxuXHJcbiAgYWRkQnV0dG9uKG5hbWU6IHN0cmluZywgZGF0YTogSVNoYXJlQnV0dG9uKSB7XHJcbiAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgIHByb3A6IHsuLi5zaGFyZUJ1dHRvbnNQcm9wLCAuLi57W25hbWVdOiBkYXRhfX1cclxuICAgIH07XHJcbiAgICB0aGlzLnNldENvbmZpZyhjb25maWcpO1xyXG4gIH1cclxufVxyXG4iXX0=