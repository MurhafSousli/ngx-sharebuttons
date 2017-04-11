import { ShareArgs } from './share-buttons.class';
import { ShareProvider } from './share-provider.enum';
import { ShareLinks } from './share-links.functions';

/** Here is a collection of helper functions that can be used statically */
export module Helper {

    /** Prepare gPlus count request body   */
    export const gplusCountBody = (url) => {
        return [{
            method: 'pos.plusones.get',
            id: 'p',
            params: {
                nolog: true,
                id: decodeURIComponent(url),
                source: 'widget',
                userId: '@viewer',
                groupId: '@self'
            },
            jsonrpc: '2.0',
            key: 'p',
            apiVersion: 'v1'
        }];
    };

    /** Create share links */
    export const shareFactory = (type: ShareProvider, args: ShareArgs): string => {
        switch (type) {
            case ShareProvider.FACEBOOK:
                return ShareLinks.fbShare(args);
            case ShareProvider.TWITTER:
                return ShareLinks.twitterShare(args);
            case ShareProvider.LINKEDIN:
                return ShareLinks.linkedInShare(args);
            case ShareProvider.REDDIT:
                return ShareLinks.redditShare(args);
            case ShareProvider.TUMBLR:
                return ShareLinks.tumblrShare(args);
            case ShareProvider.STUMBLEUPON:
                return ShareLinks.stumbleShare(args);
            case ShareProvider.GOOGLEPLUS:
                return ShareLinks.gPlusShare(args);
            case ShareProvider.PINTEREST:
                return ShareLinks.pinShare(args);
            case ShareProvider.WHATSAPP:
                return ShareLinks.whatsappShare(args);
            default:
                return '';
        }
    };

    /** Change share counts to a readable number e.g 35.6k */
    export const nFormatter = (num: number, digits: number) => {

        let si = [
            { value: 1E18, symbol: 'E' },
            { value: 1E15, symbol: 'P' },
            { value: 1E12, symbol: 'T' },
            { value: 1E9, symbol: 'G' },
            { value: 1E6, symbol: 'M' },
            { value: 1E3, symbol: 'K' }
        ], rx = /\.0+$|(\.[0-9]*[1-9])0+$/, i;
        for (i = 0; i < si.length; i++) {
            if (num >= si[i].value) {
                return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
            }
        }
        return num.toFixed(digits).replace(rx, '$1');
    };

    export const getEnumValue = <T>(value: string | number, enumeration: T) => {
        let result: number;
        if (typeof value !== 'undefined') {
            if (typeof value === 'string' && enumeration[value.toUpperCase()] >= 0) {
                result = <number>enumeration[value.toUpperCase()];
            } else if (typeof value === 'number' && enumeration[`${value}`]) {
                result = <number>enumeration[enumeration[`${value}`]];
            }
        }

        return result;
    };

}
