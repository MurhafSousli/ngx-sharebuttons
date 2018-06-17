/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
import { shareCountFormatter } from './utils';
var ShareCountPipe = /** @class */ (function () {
    function ShareCountPipe() {
    }
    /**
     * @param {?} num
     * @param {?=} digits
     * @return {?}
     */
    ShareCountPipe.prototype.transform = /**
     * @param {?} num
     * @param {?=} digits
     * @return {?}
     */
    function (num, digits) {
        return shareCountFormatter(num, digits);
    };
    ShareCountPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'shareCount'
                },] },
    ];
    return ShareCountPipe;
}());
export { ShareCountPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtY291bnQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZS1jb3VudC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxTQUFTLENBQUM7Ozs7Ozs7OztJQU01QyxrQ0FBUzs7Ozs7SUFBVCxVQUFVLEdBQVcsRUFBRSxNQUFlO1FBQ3BDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDekM7O2dCQU5GLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsWUFBWTtpQkFDbkI7O3lCQUxEOztTQU1hLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHNoYXJlQ291bnRGb3JtYXR0ZXIgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnc2hhcmVDb3VudCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlQ291bnRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKG51bTogbnVtYmVyLCBkaWdpdHM/OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBzaGFyZUNvdW50Rm9ybWF0dGVyKG51bSwgZGlnaXRzKTtcclxuICB9XHJcbn1cclxuIl19