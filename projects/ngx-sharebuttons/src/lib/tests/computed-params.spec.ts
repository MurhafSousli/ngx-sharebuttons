import { TestBed } from '@angular/core/testing';
import { ShareService } from 'ngx-sharebuttons';

/**
 * _getMetaTagContent
 * Verify that it retrieves the correct meta tag content using Meta.getTag.
 * Test cases for both property and name attributes.
 * Test when the meta tag is not found, ensuring it returns null.
 */
describe('Computed Params', () => {
  let service: ShareService;

  beforeEach(() => {
    service = TestBed.inject(ShareService);
  });

  /**
   * getComputedParams
   * Validate parameter computation when a custom url is provided.
   * Ensure fallback meta tags and defaults are used when values are missing.
   */
  it('should compute params with a provided URL', () => {
    service = TestBed.inject(ShareService);
    spyOn(service as any, '_getMetaTagContent').and.returnValue(null);

    const params = service._getComputedParams({
      url: 'https://example.com',
      title: 'Custom Title',
      description: 'Custom Description',
      redirectUrl: 'https://current-page.com',
    });

    expect(params).toEqual({
      url: 'https://example.com',
      title: 'Custom Title',
      description: 'Custom Description',
      redirectUrl: 'https://current-page.com',
      appId: null,
      image: undefined,
      tags: undefined,
      via: undefined,
    });
  });

  it('should compute params with undefined URL', () => {
    service = TestBed.inject(ShareService);
    spyOn(service as any, '_getMetaTagContent').and.returnValue(null);

    // Mock the document object and redefine location.href and fallback
    const mockDocument = {
      location: { href: 'https://current-page.com' },
    };
    Object.defineProperty(service, 'document', {
      value: mockDocument,
    });


    const params = service._getComputedParams({ url: null });

    expect(params).toEqual({
      url: 'https://current-page.com',
      title: null,
      description: null,
      redirectUrl: 'https://current-page.com',
      appId: null,
      image: null,
      tags: undefined,
      via: undefined,
    });
  });
});
