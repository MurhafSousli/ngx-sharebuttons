/* tslint:disable:max-line-length */

import { EventEmitter } from '@angular/core';
import { HttpModule, Http, Jsonp, BaseRequestOptions } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';

import { ShareButtonsService } from './share-buttons.service';
import { ShareProvider, ShareArgs, Helper } from '../helpers/index';
import { WindowService } from './window.service';
import { TestHelpers } from '../test-helpers';


describe('Service: ShareButtons, Angular Tests', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [ShareButtonsService,
                { provide: WindowService, useClass: TestHelpers.MockWindowService },
                {// mock Http Service
                    provide: Http,
                    useFactory: (mockBackend, options) => {
                        return new Http(mockBackend, options);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
                {// mock Jsonp Service
                    provide: Jsonp,
                    useFactory: (mockBackend, options) => {
                        return new Jsonp(mockBackend, options);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
                MockBackend,
                BaseRequestOptions
            ]
        });
    });

    it('should inject the service instance...', inject([ShareButtonsService], (service: ShareButtonsService) => {
        expect(service).toBeTruthy();
    }));

    describe('windowAttr()', () => {

        it('should return window with default size',
            inject([ShareButtonsService], (service: ShareButtonsService) => {

                expect(service.windowAttr()).toEqual('width=500, height=400');
            }));
    });

    describe('validateUrl()', () => {

        it('should return given url (encoded) if valid',
            inject([ShareButtonsService], (service: ShareButtonsService) => {

                const validUrl = 'https://mysite.com#my-anchor';
                expect(service.validateUrl(validUrl)).toEqual(encodeURIComponent(validUrl));
            }));

        it('should return encoded "window.location.href" if given url is not valid',
            inject([ShareButtonsService], (service: ShareButtonsService) => {

                const validUrl = 'invalid://mysite.com';
                expect(service.validateUrl(validUrl)).toEqual(encodeURIComponent(TestHelpers.windowUrl));
            }));

        it('should return encoded "window.location.url" if provided url is undefined',
            inject([ShareButtonsService], (service: ShareButtonsService) => {

                let undefinedUrl;
                expect(service.validateUrl(undefinedUrl)).toEqual(encodeURIComponent(TestHelpers.windowUrl));
            }));
    });



    describe('share()', () => {

        it('should call share() when the button is clicked and emit "popUpClosed" event',
            inject([ShareButtonsService, WindowService], (sbService: ShareButtonsService, windowService: WindowService) => {

                const provider = ShareProvider.LINKEDIN;
                const args = new ShareArgs('http://www.mysite.com', 'my title', 'my description', 'https://my/image.png', 'tag1,tag2');
                const shareUrl = Helper.shareFactory(provider, args);

                let emittedProvider: ShareProvider;

                let popUpClosed = new EventEmitter<ShareProvider>();
                popUpClosed.subscribe((p: ShareProvider) => {
                    emittedProvider = p;
                });

                sbService.share(provider, args, popUpClosed);

                expect(emittedProvider).toEqual(provider);

                expect(windowService.nativeWindow.open.calls.count()).toBe(1);
                expect(windowService.nativeWindow.open.calls.mostRecent().args).toEqual([shareUrl, 'newwindow', sbService.windowAttr()]);
                expect(windowService.nativeWindow.setInterval.calls.count()).toBe(1);
                expect(windowService.nativeWindow.clearInterval.calls.count()).toBe(1); // make sure timeout handler has been cleared
            }));
    });


    describe('count()', () => {
        const zeroCount = new EventEmitter<number>();
        zeroCount.subscribe((count: number) => {
            expect(count).toEqual(0);
        });
        const args = new ShareArgs('http://www.mysite.com', 'my title', 'my description', 'https://my/image.png', 'tag1,tag2');

        it('should emit a count of 0 for FACEBOOK provider in case of communication error',
            inject([ShareButtonsService, MockBackend], (service: ShareButtonsService, mockBackend: MockBackend) => {

                TestHelpers.mockErrorResponse(mockBackend);

                service.count(ShareProvider.FACEBOOK, args.url, zeroCount);
            }));

        it('should emit the appropriate for FACEBOOK provider',
            inject([ShareButtonsService, MockBackend], (service: ShareButtonsService, mockBackend: MockBackend) => {

                TestHelpers.mockJsonResponse(mockBackend, { share: { share_count: ShareProvider.FACEBOOK } }); // using enum index as count

                const count = new EventEmitter<number>();
                count.subscribe((c: number) => {
                    expect(c).toEqual(ShareProvider.FACEBOOK);// using enum index as count
                });
                service.count(ShareProvider.FACEBOOK, args.url, count);
            }));

        it('should emit a count of 0 for LINKEDIN provider in case of communication error',
            inject([ShareButtonsService, MockBackend], (service: ShareButtonsService, mockBackend: MockBackend) => {

                TestHelpers.mockErrorResponse(mockBackend);

                service.count(ShareProvider.LINKEDIN, args.url, zeroCount);
            }));

        it('should emit the appropriate for LINKEDIN provider',
            inject([ShareButtonsService, MockBackend], (service: ShareButtonsService, mockBackend: MockBackend) => {

                TestHelpers.mockJsonResponse(mockBackend, { count: ShareProvider.LINKEDIN }); // using enum index as count

                const count = new EventEmitter<number>();
                count.subscribe((c: number) => {
                    expect(c).toEqual(ShareProvider.LINKEDIN);// using enum index as count
                });
                service.count(ShareProvider.LINKEDIN, args.url, count);
            }));

        it('should emit a count of 0 for REDDIT provider in case of communication error',
            inject([ShareButtonsService, MockBackend], (service: ShareButtonsService, mockBackend: MockBackend) => {

                TestHelpers.mockErrorResponse(mockBackend);

                service.count(ShareProvider.REDDIT, args.url, zeroCount);
            }));

        it('should emit the appropriate for REDDIT provider',
            inject([ShareButtonsService, MockBackend], (service: ShareButtonsService, mockBackend: MockBackend) => {

                TestHelpers.mockJsonResponse(mockBackend, { data: { children: [{ data: { score: ShareProvider.REDDIT } }] } }); // using enum index as count

                const count = new EventEmitter<number>();
                count.subscribe((c: number) => {
                    expect(c).toEqual(ShareProvider.REDDIT);// using enum index as count
                });
                service.count(ShareProvider.REDDIT, args.url, count);
            }));


        it('should emit a count of 0 for TUMBLR provider in case of communication error',
            inject([ShareButtonsService, MockBackend], (service: ShareButtonsService, mockBackend: MockBackend) => {

                TestHelpers.mockErrorResponse(mockBackend);

                service.count(ShareProvider.TUMBLR, args.url, zeroCount);
            }));

        it('should emit the appropriate for TUMBLR provider',
            inject([ShareButtonsService, MockBackend], (service: ShareButtonsService, mockBackend: MockBackend) => {

                TestHelpers.mockJsonResponse(mockBackend, { response: { note_count: ShareProvider.TUMBLR } }); // using enum index as count

                const count = new EventEmitter<number>();
                count.subscribe((c: number) => {
                    expect(c).toEqual(ShareProvider.TUMBLR);// using enum index as count
                });

                service.count(ShareProvider.TUMBLR, args.url, count);
            }));

        it('should emit a count of 0 for GOOGLEPLUS provider in case of communication error',
            inject([ShareButtonsService, MockBackend], (service: ShareButtonsService, mockBackend: MockBackend) => {

                TestHelpers.mockErrorResponse(mockBackend);

                service.count(ShareProvider.GOOGLEPLUS, args.url, zeroCount);
            }));

        it('should emit the appropriate for GOOGLEPLUS provider',
            inject([ShareButtonsService, MockBackend], (service: ShareButtonsService, mockBackend: MockBackend) => {

                TestHelpers.mockJsonResponse(mockBackend, [{ result: { metadata: { globalCounts: { count: ShareProvider.GOOGLEPLUS } } } }]); // using enum index as count

                const count = new EventEmitter<number>();
                count.subscribe((c: number) => {
                    expect(c).toEqual(ShareProvider.GOOGLEPLUS);// using enum index as count
                });

                service.count(ShareProvider.GOOGLEPLUS, args.url, count)
            }));


        it('should emit a count of 0 for PINTEREST provider in case of communication error',
            inject([ShareButtonsService, MockBackend], (service: ShareButtonsService, mockBackend: MockBackend) => {

                TestHelpers.mockErrorResponse(mockBackend);

                service.count(ShareProvider.PINTEREST, args.url, zeroCount);
            }));

        it('should emit the appropriate for PINTEREST provider',
            inject([ShareButtonsService, MockBackend], (service: ShareButtonsService, mockBackend: MockBackend) => {

                TestHelpers.mockTextResponse(mockBackend, `receiveCount({"count":${ShareProvider.PINTEREST}})`); // using enum index as count

                const count = new EventEmitter<number>();
                count.subscribe((c: number) => {
                    expect(c).toEqual(ShareProvider.PINTEREST);// using enum index as count
                });

                service.count(ShareProvider.PINTEREST, args.url, count);
            }));


    });
});
