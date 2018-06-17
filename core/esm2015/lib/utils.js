/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
export function mergeDeep(target, ...sources) {
    if (!sources.length) {
        return target;
    }
    const /** @type {?} */ source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (const /** @type {?} */ key in source) {
            if (isObject(source[key])) {
                if (!target[key]) {
                    Object.assign(target, { [key]: {} });
                }
                mergeDeep(target[key], source[key]);
            }
            else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    return mergeDeep(target, ...sources);
}
/**
 * Returns a readable number from share count
 * @param {?} num
 * @param {?} digits
 * @return {?}
 */
export function shareCountFormatter(num, digits) {
    const /** @type {?} */ si = [
        { value: 1E9, symbol: 'B' },
        { value: 1E6, symbol: 'M' },
        { value: 1E3, symbol: 'K' }
    ], /** @type {?} */ rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    for (let /** @type {?} */ i = 0; i < si.length; i++) {
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
    return of(url).pipe(tap((text) => {
        // Create a hidden textarea element
        const /** @type {?} */ textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        // highlight textarea to copy the text
        if (browser === 'ios') {
            const /** @type {?} */ range = document.createRange();
            range.selectNodeContents(textArea);
            const /** @type {?} */ selection = window.getSelection();
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
    const /** @type {?} */ metaTag = document.querySelector(`meta[property="${key}"]`);
    return metaTag ? metaTag.getAttribute('content') : undefined;
}
/**
 * Detect operating system 'ios', 'android', or 'desktop'
 * @return {?}
 */
export function getOS() {
    const /** @type {?} */ userAgent = navigator.userAgent || navigator.vendor || (/** @type {?} */ (window)).opera;
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
        const /** @type {?} */ r = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if (r.test(url)) {
            return url;
        }
        console.warn(`[ShareButtons]: Sharing link '${url}' is invalid!`);
    }
    return fallbackUrl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFHckMsa0JBQWtCLElBQUk7SUFDcEIsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztDQUNuRTs7Ozs7OztBQUdELE1BQU0sb0JBQW9CLE1BQU0sRUFBRSxHQUFHLE9BQU87SUFDMUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2Y7SUFDRCx1QkFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRS9CLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLEdBQUcsQ0FBQyxDQUFDLHVCQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7aUJBQ3BDO2dCQUNELFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FB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QUcsSUFBSSxDQUFDLENBQUM7SUFDM0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0NBQzlEOzs7OztBQUdELE1BQU07SUFDSix1QkFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsTUFBTSxJQUFJLG1CQUFNLE1BQU0sRUFBQyxDQUFDLEtBQUssQ0FBQztJQUVqRixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsU0FBUyxDQUFDO0tBQ2xCO0lBRUQsRUFBRSxDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQU0sTUFBTSxFQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNsRSxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7SUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDO0NBQ2xCOzs7Ozs7O0FBSUQsTUFBTSxzQkFBc0IsR0FBVyxFQUFFLFdBQW1CO0lBRTFELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDUix1QkFBTSxDQUFDLEdBQUcsK0VBQStFLENBQUM7UUFDMUYsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDLEdBQUcsQ0FBQztTQUNaO1FBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxlQUFlLENBQUMsQ0FBQztLQUNuRTtJQUNELE1BQU0sQ0FBQyxXQUFXLENBQUM7Q0FDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG4vKiogU2ltcGxlIG9iamVjdCBjaGVjay4qL1xyXG5mdW5jdGlvbiBpc09iamVjdChpdGVtKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSk7XHJcbn1cclxuXHJcbi8qKiBEZWVwIG1lcmdlIHR3byBvYmplY3RzLiovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XHJcbiAgaWYgKCFzb3VyY2VzLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIHRhcmdldDtcclxuICB9XHJcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpO1xyXG5cclxuICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcclxuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xyXG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcclxuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7W2tleV06IHt9fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7W2tleV06IHNvdXJjZVtrZXldfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKTtcclxufVxyXG5cclxuLyoqIFJldHVybnMgYSByZWFkYWJsZSBudW1iZXIgZnJvbSBzaGFyZSBjb3VudCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2hhcmVDb3VudEZvcm1hdHRlcihudW06IG51bWJlciwgZGlnaXRzOiBudW1iZXIpOiBzdHJpbmcge1xyXG5cclxuICBjb25zdCBzaSA9IFtcclxuICAgIHt2YWx1ZTogMUU5LCBzeW1ib2w6ICdCJ30sXHJcbiAgICB7dmFsdWU6IDFFNiwgc3ltYm9sOiAnTSd9LFxyXG4gICAge3ZhbHVlOiAxRTMsIHN5bWJvbDogJ0snfVxyXG4gIF0sIHJ4ID0gL1xcLjArJHwoXFwuWzAtOV0qWzEtOV0pMCskLztcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKG51bSA+PSBzaVtpXS52YWx1ZSkge1xyXG4gICAgICByZXR1cm4gKG51bSAvIHNpW2ldLnZhbHVlKS50b0ZpeGVkKGRpZ2l0cykucmVwbGFjZShyeCwgJyQxJykgKyBzaVtpXS5zeW1ib2w7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBudW0udG9GaXhlZChkaWdpdHMpLnJlcGxhY2UocngsICckMScpO1xyXG59XHJcblxyXG4vKiogQ29weSB0ZXh0IHRvIGNsaXBib2FyZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29weVRvQ2xpcGJvYXJkKHVybDogc3RyaW5nLCBicm93c2VyOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gIHJldHVybiBvZih1cmwpLnBpcGUoXHJcbiAgICB0YXAoKHRleHQ6IHN0cmluZykgPT4ge1xyXG5cclxuICAgICAgLy8gQ3JlYXRlIGEgaGlkZGVuIHRleHRhcmVhIGVsZW1lbnRcclxuICAgICAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICB0ZXh0QXJlYS52YWx1ZSA9IHRleHQ7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dEFyZWEpO1xyXG5cclxuICAgICAgLy8gaGlnaGxpZ2h0IHRleHRhcmVhIHRvIGNvcHkgdGhlIHRleHRcclxuICAgICAgaWYgKGJyb3dzZXIgPT09ICdpb3MnKSB7XHJcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyh0ZXh0QXJlYSk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICAgIHRleHRBcmVhLnJlYWRPbmx5ID0gdHJ1ZTtcclxuICAgICAgICB0ZXh0QXJlYS5zZXRTZWxlY3Rpb25SYW5nZSgwLCA5OTk5OTkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRleHRBcmVhLnNlbGVjdCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGV4dEFyZWEpO1xyXG4gICAgfSlcclxuICApO1xyXG59XHJcblxyXG4vKiogR2V0IG1ldGEgdGFnIGNvbnRlbnQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1ldGFDb250ZW50KGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICBjb25zdCBtZXRhVGFnOiBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbWV0YVtwcm9wZXJ0eT1cIiR7a2V5fVwiXWApO1xyXG4gIHJldHVybiBtZXRhVGFnID8gbWV0YVRhZy5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSA6IHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqIERldGVjdCBvcGVyYXRpbmcgc3lzdGVtICdpb3MnLCAnYW5kcm9pZCcsIG9yICdkZXNrdG9wJyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T1MoKTogc3RyaW5nIHtcclxuICBjb25zdCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgKDxhbnk+d2luZG93KS5vcGVyYTtcclxuXHJcbiAgaWYgKC9hbmRyb2lkL2kudGVzdCh1c2VyQWdlbnQpKSB7XHJcbiAgICByZXR1cm4gJ2FuZHJvaWQnO1xyXG4gIH1cclxuXHJcbiAgaWYgKC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KHVzZXJBZ2VudCkgJiYgISg8YW55PndpbmRvdykuTVNTdHJlYW0pIHtcclxuICAgIHJldHVybiAnaW9zJztcclxuICB9XHJcbiAgcmV0dXJuICdkZXNrdG9wJztcclxufVxyXG5cclxuXHJcbi8qKiBSZXR1cm5zIGEgdmFsaWQgVVJMIG9yIGZhbGxzIGJhY2sgdG8gY3VycmVudCBVUkwgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbGlkVXJsKHVybDogc3RyaW5nLCBmYWxsYmFja1VybDogc3RyaW5nKTogc3RyaW5nIHtcclxuXHJcbiAgaWYgKHVybCkge1xyXG4gICAgY29uc3QgciA9IC8oaHR0cHxodHRwcyk6XFwvXFwvKFxcdys6ezAsMX1cXHcqQCk/KFxcUyspKDpbMC05XSspPyhcXC98XFwvKFtcXHcjITouPys9JiVAIVxcLVxcL10pKT8vO1xyXG4gICAgaWYgKHIudGVzdCh1cmwpKSB7XHJcbiAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLndhcm4oYFtTaGFyZUJ1dHRvbnNdOiBTaGFyaW5nIGxpbmsgJyR7dXJsfScgaXMgaW52YWxpZCFgKTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbGxiYWNrVXJsO1xyXG59XHJcbiJdfQ==