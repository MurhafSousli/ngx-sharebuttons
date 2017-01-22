/* tslint:disable:max-line-length */

import { HttpModule, Http, Jsonp, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { ShareButtonsService } from './share-buttons.service';
import { ShareProvider, ShareArgs } from '../helpers';
import { WindowService } from './window.service';
import { TestHelpers } from '../test-helpers';

function mockJsonResponse(mockBackend: MockBackend, data: any) {

    mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(data)
        })));
    });
}

function mockTextResponse(mockBackend: MockBackend, data: any) {

    mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(new Response(new ResponseOptions({
            body: data
        })));
    });
}

function mockErrorResponse(mockBackend: MockBackend, err?: Error) {

    mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockError(err);
    });
}


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

    describe('share()', () => {
        it('should call share() when the button is clicked and emit "popUpClosed" event',
            inject([ShareButtonsService], (sbService: ShareButtonsService) => {

                // set mandatory inputs
                component.button = sBtn;

                // optional inputs
                component.url = sArgs.url;
                component.title = sArgs.title;
                component.description = sArgs.description;
                component.image = sArgs.image;
                component.tags = sArgs.tags;

                let emittedProvider: ShareProvider;
                component.popUpClosed.subscribe((provider: ShareProvider) => {
                    emittedProvider = provider;
                });

                fixture.detectChanges(); // trigger data binding

                const shareUrl = sbService.share(sBtn.provider, sArgs, component.popUpClosed);
                const shareSpy = spyOn(sbService, 'share').and.callThrough(); // spy on ShareButtonsService.share()

                shareButton.triggerEventHandler('click', null); // simulate click on button

                expect(shareSpy).toHaveBeenCalledWith(sBtn.provider, sArgs);
                expect(emittedProvider).toEqual(sBtn.provider);

                expect(windowService.nativeWindow.open.calls.count()).toBe(1);
                expect(windowService.nativeWindow.open.calls.mostRecent().args).toEqual([shareUrl, 'newwindow', sbService.windowAttr()]);
                expect(windowService.nativeWindow.setInterval.calls.count()).toBe(1);
                expect(windowService.nativeWindow.clearInterval.calls.count()).toBe(1); // make sure timeout handler has been cleared
            }));
    });

    // describe('shareFactory()', () => {
    //     const args = new ShareArgs('http://www.mysite.com', 'my title', 'my description', 'https://my/image.png', 'tag1,tag2');
    //
    //     it('should return an share url for FACEBOOK provider',
    //         inject([ShareButtonsService], (service: ShareButtonsService) => {
    //
    //             let shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=http://www.mysite.com&title=my title&description=my description&picture=https://my/image.png';
    //             expect(service.shareFactory(ShareProvider.FACEBOOK, args)).toEqual(shareUrl);
    //         }));
    //
    //     it('should return an share url for TWITTER provider',
    //         inject([ShareButtonsService], (service: ShareButtonsService) => {
    //
    //             let shareUrl = 'https://twitter.com/intent/tweet?url=http://www.mysite.com&text=my description&hashtags=tag1,tag2';
    //             expect(service.shareFactory(ShareProvider.TWITTER, args)).toEqual(shareUrl);
    //         }));
    //
    //     it('should return an share url for REDDIT provider',
    //         inject([ShareButtonsService], (service: ShareButtonsService) => {
    //
    //             let shareUrl = 'http://www.reddit.com/submit?url=http://www.mysite.com&title=my title';
    //             expect(service.shareFactory(ShareProvider.REDDIT, args)).toEqual(shareUrl);
    //         }));
    //
    //     it('should return an share url for STUMBLEUPON provider',
    //         inject([ShareButtonsService], (service: ShareButtonsService) => {
    //
    //             let shareUrl = 'http://www.stumbleupon.com/submit?url=http://www.mysite.com';
    //             expect(service.shareFactory(ShareProvider.STUMBLEUPON, args)).toEqual(shareUrl);
    //         }));
    //
    //     it('should return an share url for LINKEDIN provider',
    //         inject([ShareButtonsService], (service: ShareButtonsService) => {
    //
    //             let shareUrl = 'http://www.linkedin.com/shareArticle?url=http://www.mysite.com&title=my title&summary=my description';
    //             expect(service.shareFactory(ShareProvider.LINKEDIN, args)).toEqual(shareUrl);
    //         }));
    //
    //
    //     it('should return an share url for GOOGLEPLUS provider',
    //         inject([ShareButtonsService], (service: ShareButtonsService) => {
    //
    //             let shareUrl = 'https://plus.google.com/share?url=http://www.mysite.com';
    //             expect(service.shareFactory(ShareProvider.GOOGLEPLUS, args)).toEqual(shareUrl);
    //         }));
    //
    //     it('should return an share url for TUMBLR provider',
    //         inject([ShareButtonsService], (service: ShareButtonsService) => {
    //
    //             let shareUrl = 'http://tumblr.com/widgets/share/tool?canonicalUrl=http://www.mysite.com&caption=my description&tags=tag1,tag2';
    //             expect(service.shareFactory(ShareProvider.TUMBLR, args)).toEqual(shareUrl);
    //         }));
    //
    //
    //     it('should return an share url for PINTEREST provider',
    //         inject([ShareButtonsService], (service: ShareButtonsService) => {
    //
    //             let shareUrl = 'https://in.pinterest.com/pin/create/button/?url=http://www.mysite.com&description=my description&media=https://my/image.png';
    //             expect(service.shareFactory(ShareProvider.PINTEREST, args)).toEqual(shareUrl);
    //         }));
    //
    //     it('should try to deduct "image" and "description" from meta and return share url for PINTEREST provider',
    //         inject([ShareButtonsService], (service: ShareButtonsService) => {
    //
    //             let pinArgs = new ShareArgs('http://www.mysite.com', 'my title');
    //             let shareUrl = 'https://in.pinterest.com/pin/create/button/?url=http://www.mysite.com';
    //             expect(service.shareFactory(ShareProvider.PINTEREST, pinArgs)).toEqual(shareUrl);
    //         }));
    //
    // });


    describe('count()', () => {
        const args = new ShareArgs('http://www.mysite.com', 'my title', 'my description', 'https://my/image.png', 'tag1,tag2');

        it('should return an empty Observable<number> for FACEBOOK provider in case of communication error',
            inject([ShareButtonsService, MockBackend], (service: ShareButtonsService, mockBackend: MockBackend) => {

                mockErrorResponse(mockBackend);

                service.count(ShareProvider.FACEBOOK, args.url).subscribe((count: number) => {
                    expect(count).toEqual(0);
                });
            }));

        it('should return a Observable<number> for FACEBOOK provider',
            inject([ShareButtonsService, MockBackend], (service: ShareButtonsService, mockBackend: MockBackend) => {

                mockJsonResponse(mockBackend, { share: { share_count: ShareProvider.FACEBOOK } }); // using enum index as count

                service.count(ShareProvider.FACEBOOK, args.url).subscribe((count: number) => {
                    expect(count).toEqual(ShareProvider.FACEBOOK);
                });
            }));

        it('should return an empty Observable<number> for LINKEDIN provider in case of communication error',
            inject([ShareButtonsService, MockBackend], (service: ShareButtonsService, mockBackend: MockBackend) => {

                mockErrorResponse(mockBackend);

                service.count(ShareProvider.LINKEDIN, args.url).subscribe((count: number) => {
                    expect(count).toEqual(0);
                });
            }));

        it('should return a Observable<number> for LINKEDIN provider',
            inject([ShareButtonsService, MockBackend], (service: ShareButtonsService, mockBackend: MockBackend) => {

                mockJsonResponse(mockBackend, { count: ShareProvider.LINKEDIN }); // using enum index as count

                service.count(ShareProvider.LINKEDIN, args.url).subscribe((count: number) => {
                    expect(count).toEqual(ShareProvider.LINKEDIN);
                });
            }));

        it('should return an empty Observable<number> for REDDIT provider in case of communication error',
            inject([ShareButtonsService, MockBackend], (service: ShareButtonsService, mockBackend: MockBackend) => {

                mockErrorResponse(mockBackend);

                service.count(ShareProvider.REDDIT, args.url).subscribe((count: number) => {
                    expect(count).toEqual(0);
                });
            }));

        it('should return a Observable<number> for REDDIT provider',
            inject([ShareButtonsService, MockBackend], (service: ShareButtonsService, mockBackend: MockBackend) => {

                mockJsonResponse(mockBackend, { data: { children: [{ data: { score: ShareProvider.REDDIT } }] } }); // using enum index as count

                service.count(ShareProvider.REDDIT, args.url).subscribe((count: number) => {
                    expect(count).toEqual(ShareProvider.REDDIT);
                });
            }));


        it('should return an empty Observable<number> for TUMBLR provider in case of communication error',
            inject([ShareButtonsService, MockBackend], (service: ShareButtonsService, mockBackend: MockBackend) => {

                mockErrorResponse(mockBackend);

                service.count(ShareProvider.TUMBLR, args.url).subscribe((count: number) => {
                    expect(count).toEqual(0);
                });
            }));

        it('should return a Observable<number> for TUMBLR provider',
            inject([ShareButtonsService, MockBackend], (service: ShareButtonsService, mockBackend: MockBackend) => {

                mockJsonResponse(mockBackend, { response: { note_count: ShareProvider.TUMBLR } }); // using enum index as count

                service.count(ShareProvider.TUMBLR, args.url).subscribe((count: number) => {
                    expect(count).toEqual(ShareProvider.TUMBLR);
                });
            }));

        it('should return an empty Observable<number> for GOOGLEPLUS provider in case of communication error',
            inject([ShareButtonsService, MockBackend], (service: ShareButtonsService, mockBackend: MockBackend) => {

                mockErrorResponse(mockBackend);

                service.count(ShareProvider.GOOGLEPLUS, args.url).subscribe((count: number) => {
                    expect(count).toEqual(0);
                });
            }));

        it('should return a Observable<number> for GOOGLEPLUS provider',
            inject([ShareButtonsService, MockBackend], (service: ShareButtonsService, mockBackend: MockBackend) => {

                mockJsonResponse(mockBackend, [{ result: { metadata: { globalCounts: { count: ShareProvider.GOOGLEPLUS } } } }]); // using enum index as count

                service.count(ShareProvider.GOOGLEPLUS, args.url).subscribe((count: number) => {
                    expect(count).toEqual(ShareProvider.GOOGLEPLUS);
                });
            }));


        it('should return an empty Observable<number> for PINTEREST provider in case of communication error',
            inject([ShareButtonsService, MockBackend], (service: ShareButtonsService, mockBackend: MockBackend) => {

                mockErrorResponse(mockBackend);

                service.count(ShareProvider.PINTEREST, args.url).subscribe((count: number) => {
                    expect(count).toEqual(0);
                });
            }));

        it('should return a Observable<number> for PINTEREST provider',
            inject([ShareButtonsService, MockBackend], (service: ShareButtonsService, mockBackend: MockBackend) => {

                mockTextResponse(mockBackend, `receiveCount({"count":${ShareProvider.PINTEREST}})`); // using enum index as count

                service.count(ShareProvider.PINTEREST, args.url).subscribe((count: number) => {
                    expect(count).toEqual(ShareProvider.PINTEREST);
                });
            }));


    });
});
