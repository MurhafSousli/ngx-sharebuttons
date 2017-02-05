/* tslint:disable:max-line-length */

import { ShareProvider, ShareArgs, Helper } from '.';



describe('Module: Helper, Isolate Tests', () => {

    describe('gplusCountBody()', () => {
        it('should return a "gplusCountBody" JSON object for given url', () => {
            const url = 'http://www.mysite.com';

            expect(Helper.gplusCountBody(url)).toEqual(
                [{
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
                }]
            );
        });
    });

    describe('shareFactory()', () => {
        const args = new ShareArgs('http://www.mysite.com', 'my title', 'my description', 'https://my/image.png', 'tag1,tag2');

        it('should return an share url for FACEBOOK provider', () => {

            let shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=http://www.mysite.com&title=my title&description=my description&picture=https://my/image.png';
            expect(Helper.shareFactory(ShareProvider.FACEBOOK, args)).toEqual(shareUrl);
        });

        it('should return an share url for TWITTER provider', () => {

            let shareUrl = 'https://twitter.com/intent/tweet?url=http://www.mysite.com&text=my description&hashtags=tag1,tag2';
            expect(Helper.shareFactory(ShareProvider.TWITTER, args)).toEqual(shareUrl);
        });

        it('should return an share url for REDDIT provider', () => {

            let shareUrl = 'http://www.reddit.com/submit?url=http://www.mysite.com&title=my title';
            expect(Helper.shareFactory(ShareProvider.REDDIT, args)).toEqual(shareUrl);
        });

        it('should return an share url for STUMBLEUPON provider', () => {

            let shareUrl = 'http://www.stumbleupon.com/submit?url=http://www.mysite.com';
            expect(Helper.shareFactory(ShareProvider.STUMBLEUPON, args)).toEqual(shareUrl);
        });

        it('should return an share url for LINKEDIN provider', () => {

            let shareUrl = 'http://www.linkedin.com/shareArticle?url=http://www.mysite.com&title=my title&summary=my description';
            expect(Helper.shareFactory(ShareProvider.LINKEDIN, args)).toEqual(shareUrl);
        });


        it('should return an share url for GOOGLEPLUS provider', () => {

            let shareUrl = 'https://plus.google.com/share?url=http://www.mysite.com';
            expect(Helper.shareFactory(ShareProvider.GOOGLEPLUS, args)).toEqual(shareUrl);
        });

        it('should return an share url for TUMBLR provider', () => {

            let shareUrl = 'http://tumblr.com/widgets/share/tool?canonicalUrl=http://www.mysite.com&caption=my description&tags=tag1,tag2';
            expect(Helper.shareFactory(ShareProvider.TUMBLR, args)).toEqual(shareUrl);
        });

        it('should return an share url for PINTEREST provider', () => {

            let shareUrl = 'https://in.pinterest.com/pin/create/button/?url=http://www.mysite.com&description=my description&media=https://my/image.png';
            expect(Helper.shareFactory(ShareProvider.PINTEREST, args)).toEqual(shareUrl);
        });

        it('should try to deduct "image" and "description" from meta and return share url for PINTEREST provider', () => {

            let pinArgs = new ShareArgs('http://www.mysite.com', 'my title');
            let shareUrl = 'https://in.pinterest.com/pin/create/button/?url=http://www.mysite.com';
            expect(Helper.shareFactory(ShareProvider.PINTEREST, pinArgs)).toEqual(shareUrl);
        });

    });

});
