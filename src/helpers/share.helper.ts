import { ShareArgs, ShareProvider } from './share-buttons.class';
import { ShareLinks } from './share-links.functions';

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

    export const shareFactory = (type: string, args: ShareArgs): string => {
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

}
