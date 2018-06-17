/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
import { shareCountFormatter } from './utils';
export class ShareCountPipe {
    /**
     * @param {?} num
     * @param {?=} digits
     * @return {?}
     */
    transform(num, digits) {
        return shareCountFormatter(num, digits);
    }
}
ShareCountPipe.decorators = [
    { type: Pipe, args: [{
                name: 'shareCount'
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtY291bnQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZS1jb3VudC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFLOUMsTUFBTTs7Ozs7O0lBQ0osU0FBUyxDQUFDLEdBQVcsRUFBRSxNQUFlO1FBQ3BDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDekM7OztZQU5GLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsWUFBWTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgc2hhcmVDb3VudEZvcm1hdHRlciB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdzaGFyZUNvdW50J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVDb3VudFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0obnVtOiBudW1iZXIsIGRpZ2l0cz86IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHNoYXJlQ291bnRGb3JtYXR0ZXIobnVtLCBkaWdpdHMpO1xyXG4gIH1cclxufVxyXG4iXX0=