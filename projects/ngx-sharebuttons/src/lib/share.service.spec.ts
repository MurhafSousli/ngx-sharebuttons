import { TestBed } from '@angular/core/testing';
import { ShareService } from './share.service';
import { Meta } from '@angular/platform-browser';

fdescribe('Share Service', () => {
  let service: ShareService;

  it('should return provided URL when URL is provided', () => {
    service = TestBed.inject(ShareService);
    const providedUrl: string = 'https://example.com';
    expect((service as any).getComputedUrl(providedUrl)).toEqual(providedUrl);
  });

  it('should return og:url meta tag content when tag exists', () => {
    const ogUrl: string = 'https://example.com/og';
    const metaServiceSpy = jasmine.createSpyObj('Meta', ['getTag']);
    const mockMetaTag: HTMLMetaElement = document.createElement('meta');
    mockMetaTag.setAttribute('property', 'og:url');
    mockMetaTag.setAttribute('content', ogUrl);
    metaServiceSpy.getTag.and.returnValue(mockMetaTag);

    TestBed.configureTestingModule({
      providers: [{ provide: Meta, useValue: metaServiceSpy }]
    });
    service = TestBed.inject(ShareService);

    expect((service as any).getComputedUrl('')).toEqual(ogUrl);
  });

  // fit('should return current URL when no URL provided and og:url meta tag does not exist', () => {
  //   const currentUrl: string = 'https://example.com/current';
  //
  //   const documentSpy = jasmine.createSpyObj('document', ['location']);
  //   documentSpy.location.and.returnValue({ href: currentUrl });
  //
  //   TestBed.configureTestingModule({
  //     providers: [
  //       ShareService,
  //       { provide: DOCUMENT, useValue: documentSpy } // Providing the locationSpy for Location
  //     ]
  //   });
  //
  //   service = TestBed.inject(ShareService);
  //
  //   expect((service as any).getComputedUrl('')).toEqual(currentUrl);
  // });

  it('should return meta tag content when tag exists with property attribute', () => {
    // Mocking Meta service
    const metaServiceSpy = jasmine.createSpyObj('Meta', ['getTag']);
    const mockMetaTag = document.createElement('meta');
    mockMetaTag.setAttribute('property', 'testProperty');
    mockMetaTag.setAttribute('content', 'testContent');
    metaServiceSpy.getTag.and.returnValue(mockMetaTag);

    // Injecting mock Meta service into ShareService
    TestBed.configureTestingModule({
      providers: [{ provide: Meta, useValue: metaServiceSpy }]
    });
    service = TestBed.inject(ShareService);

    // Testing the method
    expect((service as any).getMetaTagContent('testProperty')).toEqual('testContent');
  });

  it('should return meta tag content when tag exists with name attribute', () => {
    // Mocking Meta service
    const metaServiceSpy = jasmine.createSpyObj('Meta', ['getTag']);
    const mockMetaTag = document.createElement('meta');
    mockMetaTag.setAttribute('name', 'testName');
    mockMetaTag.setAttribute('content', 'testContent');
    metaServiceSpy.getTag.and.returnValue(mockMetaTag);

    // Injecting mock Meta service into ShareService
    TestBed.configureTestingModule({
      providers: [{ provide: Meta, useValue: metaServiceSpy }]
    });
    service = TestBed.inject(ShareService);

    // Testing the method
    expect((service as any).getMetaTagContent('testName')).toEqual('testContent');
  });

  it('should return null when meta tag does not exist', () => {
    // Mocking Meta service
    const metaServiceSpy = jasmine.createSpyObj('Meta', ['getTag']);
    metaServiceSpy.getTag.and.returnValue(null);

    // Injecting mock Meta service into ShareService
    TestBed.configureTestingModule({
      providers: [{ provide: Meta, useValue: metaServiceSpy }]
    });
    service = TestBed.inject(ShareService);

    // Testing the method
    expect((service as any).getMetaTagContent('nonExistentProperty')).toBeNull();
  });

  it('Should open share window in a new tab using Anchor method', () => {
    service = TestBed.inject(ShareService);

    const createElementSpy: jasmine.Spy = spyOn(document, 'createElement').and.callThrough();
    const anchorElement: HTMLAnchorElement = document.createElement('a');
    createElementSpy.and.returnValue(anchorElement);
    const clickSpy: jasmine.Spy = spyOn(anchorElement, 'click');
    const removeSpy: jasmine.Spy = spyOn(anchorElement, 'remove');

    const url: string = 'https://example.com';
    const expectedUrl: string = 'https://example.com/?param1=xyz&param2=abc';

    service.openViaAnchor({
      url,
      params: {
        param1: 'xyz',
        param2: 'abc'
      }
    });

    expect(anchorElement.href).toBe(expectedUrl);
    expect(anchorElement.getAttribute('target')).toBe('_blank');
    expect(anchorElement.getAttribute('rel')).toBe('noopener noreferrer');
    expect(clickSpy).toHaveBeenCalled();
    expect(removeSpy).toHaveBeenCalled();
  });

  it('Should open share window in a new window using Window method', () => {
    service = TestBed.inject(ShareService);

    const windowOpenSpy: jasmine.Spy = spyOn(window, 'open');

    const url: string = 'https://example.com';
    const expectedUrl: string = 'https://example.com?param1=xyz&param2=abc';

    service.openViaWindow({
      url,
      params: {
        param1: 'xyz',
        param2: 'abc'
      }
    });

    expect(window.opener).toBeFalsy();
    expect(windowOpenSpy).toHaveBeenCalledWith(expectedUrl, '_blank', `width=800, height=500`);
  });
});
