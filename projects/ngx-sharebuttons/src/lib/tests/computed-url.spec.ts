/**
 * _getComputedUrl
 * Verify that getValidUrl is called with the appropriate fallback values (url, meta tags, or document.location.href).
 */

import { TestBed } from '@angular/core/testing';
import { ShareService } from 'ngx-sharebuttons';

describe('Computed URL', () => {
  let service: ShareService;

  beforeEach(() => {
    service = TestBed.inject(ShareService);
  });

  it('should return a valid URL using the provided url', () => {
    service = TestBed.inject(ShareService);
    spyOn(service, '_getMetaTagContent').and.returnValue(null);
    const result = service._getComputedUrl('https://example.com');
    expect(result).toBe('https://example.com');
  });

  it('should return a valid URL using a meta tag if url is not provided', () => {
    service = TestBed.inject(ShareService);
    spyOn(service as any, '_getMetaTagContent').and.callFake((key) => {
      if (key === 'og:url') return 'https://meta-url.com';
      return null;
    });

    const result = service._getComputedUrl('');
    expect(result).toBe('https://meta-url.com');
  });

  it('should return the document location href if no url or meta tag is provided', () => {
    // Mock the document object and redefine location.href
    const mockDocument = {
      location: { href: 'https://current-page.com' },
    };
    Object.defineProperty(service, 'document', {
      value: mockDocument,
    });

    const result = service._getComputedUrl('');
    expect(result).toBe('https://current-page.com');
  });
});
