import { Injectable } from '@angular/core';
export var WindowService = (function () {
    function WindowService() {
    }
    Object.defineProperty(WindowService.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    WindowService.ctorParameters = [];
    return WindowService;
}());
function _window() {
    // return the global native browser window object
    return window || undefined;
}
//# sourceMappingURL=window.service.js.map