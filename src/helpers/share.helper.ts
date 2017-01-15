import {Observable} from 'rxjs/Observable';

declare let global: any; // To make AoT compiler (ngc) happy

export module Helper {

    export const validateUrl = (url: string, window: Window) => {
        /** If URL is specified then validate it, otherwise use window URL */
        if (url) {
            let r = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

            if (r.test(url)) {
                return url;
            } else {
                console.warn('ShareButtons: Invalid URL, switching to window.location.href');
            }
        }
        /** fix window on Universal */
        return (window) ? encodeURIComponent(window.location.href) :
            (typeof global !== 'undefined') ? (<any>global).url : '';
    };

    export const nFormatter = (num, digits) => {
        let si = [
            {value: 1E18, symbol: 'E'},
            {value: 1E15, symbol: 'P'},
            {value: 1E12, symbol: 'T'},
            {value: 1E9, symbol: 'G'},
            {value: 1E6, symbol: 'M'},
            {value: 1E3, symbol: 'K'}
        ], rx = /\.0+$|(\.[0-9]*[1-9])0+$/, i;
        for (i = 0; i < si.length; i++) {
            if (num >= si[i].value) {
                return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
            }
        }
        return num.toFixed(digits).replace(rx, '$1');
    };

    /** Prepare gPlus count request body   */
    export const gplusCountBody = (url) => {
        return [{
            method: 'pos.plusones.get',
            id: 'p',
            params: {
                nolog: true,
                id: url,
                source: 'widget',
                userId: '@viewer',
                groupId: '@self'
            },
            jsonrpc: '2.0',
            key: 'p',
            apiVersion: 'v1'
        }];
    };

    export const handleError = (err) => {
        console.warn(`[ShareService]: ${err}`);
        return Observable.empty();
    };
}
