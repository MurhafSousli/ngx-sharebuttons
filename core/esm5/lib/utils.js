/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
/**
 * Simple object check.
 * @param {?} item
 * @return {?}
 */
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
/**
 * Deep merge two objects.
 * @param {?} target
 * @param {...?} sources
 * @return {?}
 */
export function mergeDeep(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (!sources.length) {
        return target;
    }
    var /** @type {?} */ source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (var /** @type {?} */ key in source) {
            if (isObject(source[key])) {
                if (!target[key]) {
                    Object.assign(target, (_a = {}, _a[key] = {}, _a));
                }
                mergeDeep(target[key], source[key]);
            }
            else {
                Object.assign(target, (_b = {}, _b[key] = source[key], _b));
            }
        }
    }
    return mergeDeep.apply(void 0, tslib_1.__spread([target], sources));
    var _a, _b;
}
/**
 * Returns a readable number from share count
 * @param {?} num
 * @param {?} digits
 * @return {?}
 */
export function shareCountFormatter(num, digits) {
    var /** @type {?} */ si = [
        { value: 1E9, symbol: 'B' },
        { value: 1E6, symbol: 'M' },
        { value: 1E3, symbol: 'K' }
    ], /** @type {?} */ rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    for (var /** @type {?} */ i = 0; i < si.length; i++) {
        if (num >= si[i].value) {
            return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
        }
    }
    return num.toFixed(digits).replace(rx, '$1');
}
/**
 * Copy text to clipboard
 * @param {?} url
 * @param {?} browser
 * @return {?}
 */
export function copyToClipboard(url, browser) {
    return of(url).pipe(tap(function (text) {
        // Create a hidden textarea element
        var /** @type {?} */ textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        // highlight textarea to copy the text
        if (browser === 'ios') {
            var /** @type {?} */ range = document.createRange();
            range.selectNodeContents(textArea);
            var /** @type {?} */ selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            textArea.readOnly = true;
            textArea.setSelectionRange(0, 999999);
        }
        else {
            textArea.select();
        }
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }));
}
/**
 * Get meta tag content
 * @param {?} key
 * @return {?}
 */
export function getMetaContent(key) {
    var /** @type {?} */ metaTag = document.querySelector("meta[property=\"" + key + "\"]");
    return metaTag ? metaTag.getAttribute('content') : undefined;
}
/**
 * Detect operating system 'ios', 'android', or 'desktop'
 * @return {?}
 */
export function getOS() {
    var /** @type {?} */ userAgent = navigator.userAgent || navigator.vendor || (/** @type {?} */ (window)).opera;
    if (/android/i.test(userAgent)) {
        return 'android';
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !(/** @type {?} */ (window)).MSStream) {
        return 'ios';
    }
    return 'desktop';
}
/**
 * Returns a valid URL or falls back to current URL
 * @param {?} url
 * @param {?} fallbackUrl
 * @return {?}
 */
export function getValidUrl(url, fallbackUrl) {
    if (url) {
        var /** @type {?} */ r = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if (r.test(url)) {
            return url;
        }
        console.warn("[ShareButtons]: Sharing link '" + url + "' is invalid!");
    }
    return fallbackUrl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBR3JDLGtCQUFrQixJQUFJO0lBQ3BCLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Q0FDbkU7Ozs7Ozs7QUFHRCxNQUFNLG9CQUFvQixNQUFNO0lBQUUsaUJBQVU7U0FBVixVQUFVLEVBQVYscUJBQVUsRUFBVixJQUFVO1FBQVYsZ0NBQVU7O0lBQzFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNmO0lBQ0QscUJBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUUvQixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxHQUFHLENBQUMsQ0FBQyxxQkFBTSxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN6QixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxZQUFHLEdBQUMsR0FBRyxJQUFHLEVBQUUsTUFBRSxDQUFDO2lCQUNwQztnQkFD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QUFDLENBQUM7SUFDM0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0NBQzlEOzs7OztBQUdELE1BQU07SUFDSixxQkFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsTUFBTSxJQUFJLG1CQUFNLE1BQU0sRUFBQyxDQUFDLEtBQUssQ0FBQztJQUVqRixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsU0FBUyxDQUFDO0tBQ2xCO0lBRUQsRUFBRSxDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQU0sTUFBTSxFQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNsRSxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7SUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDO0NBQ2xCOzs7Ozs7O0FBSUQsTUFBTSxzQkFBc0IsR0FBVyxFQUFFLFdBQW1CO0lBRTFELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDUixxQkFBTSxDQUFDLEdBQUcsK0VBQStFLENBQUM7UUFDMUYsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDLEdBQUcsQ0FBQztTQUNaO1FBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxtQ0FBaUMsR0FBRyxrQkFBZSxDQUFDLENBQUM7S0FDbkU7SUFDRCxNQUFNLENBQUMsV0FBVyxDQUFDO0NBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuLyoqIFNpbXBsZSBvYmplY3QgY2hlY2suKi9cclxuZnVuY3Rpb24gaXNPYmplY3QoaXRlbSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkpO1xyXG59XHJcblxyXG4vKiogRGVlcCBtZXJnZSB0d28gb2JqZWN0cy4qL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcykge1xyXG4gIGlmICghc291cmNlcy5sZW5ndGgpIHtcclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgfVxyXG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcclxuXHJcbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XHJcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcclxuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XHJcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1trZXldOiB7fX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1trZXldOiBzb3VyY2Vba2V5XX0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcyk7XHJcbn1cclxuXHJcbi8qKiBSZXR1cm5zIGEgcmVhZGFibGUgbnVtYmVyIGZyb20gc2hhcmUgY291bnQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNoYXJlQ291bnRGb3JtYXR0ZXIobnVtOiBudW1iZXIsIGRpZ2l0czogbnVtYmVyKTogc3RyaW5nIHtcclxuXHJcbiAgY29uc3Qgc2kgPSBbXHJcbiAgICB7dmFsdWU6IDFFOSwgc3ltYm9sOiAnQid9LFxyXG4gICAge3ZhbHVlOiAxRTYsIHN5bWJvbDogJ00nfSxcclxuICAgIHt2YWx1ZTogMUUzLCBzeW1ib2w6ICdLJ31cclxuICBdLCByeCA9IC9cXC4wKyR8KFxcLlswLTldKlsxLTldKTArJC87XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2kubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChudW0gPj0gc2lbaV0udmFsdWUpIHtcclxuICAgICAgcmV0dXJuIChudW0gLyBzaVtpXS52YWx1ZSkudG9GaXhlZChkaWdpdHMpLnJlcGxhY2UocngsICckMScpICsgc2lbaV0uc3ltYm9sO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbnVtLnRvRml4ZWQoZGlnaXRzKS5yZXBsYWNlKHJ4LCAnJDEnKTtcclxufVxyXG5cclxuLyoqIENvcHkgdGV4dCB0byBjbGlwYm9hcmQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlUb0NsaXBib2FyZCh1cmw6IHN0cmluZywgYnJvd3Nlcjogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICByZXR1cm4gb2YodXJsKS5waXBlKFxyXG4gICAgdGFwKCh0ZXh0OiBzdHJpbmcpID0+IHtcclxuXHJcbiAgICAgIC8vIENyZWF0ZSBhIGhpZGRlbiB0ZXh0YXJlYSBlbGVtZW50XHJcbiAgICAgIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgdGV4dEFyZWEudmFsdWUgPSB0ZXh0O1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRBcmVhKTtcclxuXHJcbiAgICAgIC8vIGhpZ2hsaWdodCB0ZXh0YXJlYSB0byBjb3B5IHRoZSB0ZXh0XHJcbiAgICAgIGlmIChicm93c2VyID09PSAnaW9zJykge1xyXG4gICAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGV4dEFyZWEpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuICAgICAgICB0ZXh0QXJlYS5yZWFkT25seSA9IHRydWU7XHJcbiAgICAgICAgdGV4dEFyZWEuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgOTk5OTk5KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0ZXh0QXJlYS5zZWxlY3QoKTtcclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRleHRBcmVhKTtcclxuICAgIH0pXHJcbiAgKTtcclxufVxyXG5cclxuLyoqIEdldCBtZXRhIHRhZyBjb250ZW50ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXRhQ29udGVudChrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgY29uc3QgbWV0YVRhZzogRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYG1ldGFbcHJvcGVydHk9XCIke2tleX1cIl1gKTtcclxuICByZXR1cm4gbWV0YVRhZyA/IG1ldGFUYWcuZ2V0QXR0cmlidXRlKCdjb250ZW50JykgOiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKiBEZXRlY3Qgb3BlcmF0aW5nIHN5c3RlbSAnaW9zJywgJ2FuZHJvaWQnLCBvciAnZGVza3RvcCcgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9TKCk6IHN0cmluZyB7XHJcbiAgY29uc3QgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yIHx8ICg8YW55PndpbmRvdykub3BlcmE7XHJcblxyXG4gIGlmICgvYW5kcm9pZC9pLnRlc3QodXNlckFnZW50KSkge1xyXG4gICAgcmV0dXJuICdhbmRyb2lkJztcclxuICB9XHJcblxyXG4gIGlmICgvaVBhZHxpUGhvbmV8aVBvZC8udGVzdCh1c2VyQWdlbnQpICYmICEoPGFueT53aW5kb3cpLk1TU3RyZWFtKSB7XHJcbiAgICByZXR1cm4gJ2lvcyc7XHJcbiAgfVxyXG4gIHJldHVybiAnZGVza3RvcCc7XHJcbn1cclxuXHJcblxyXG4vKiogUmV0dXJucyBhIHZhbGlkIFVSTCBvciBmYWxscyBiYWNrIHRvIGN1cnJlbnQgVVJMICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWxpZFVybCh1cmw6IHN0cmluZywgZmFsbGJhY2tVcmw6IHN0cmluZyk6IHN0cmluZyB7XHJcblxyXG4gIGlmICh1cmwpIHtcclxuICAgIGNvbnN0IHIgPSAvKGh0dHB8aHR0cHMpOlxcL1xcLyhcXHcrOnswLDF9XFx3KkApPyhcXFMrKSg6WzAtOV0rKT8oXFwvfFxcLyhbXFx3IyE6Lj8rPSYlQCFcXC1cXC9dKSk/LztcclxuICAgIGlmIChyLnRlc3QodXJsKSkge1xyXG4gICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS53YXJuKGBbU2hhcmVCdXR0b25zXTogU2hhcmluZyBsaW5rICcke3VybH0nIGlzIGludmFsaWQhYCk7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxsYmFja1VybDtcclxufVxyXG4iXX0=