import { TestBed } from '@angular/core/testing';
import { ShareService } from 'ngx-sharebuttons';

/**
 * _getMetaTagContent
 * Verify that it retrieves the correct meta tag content using Meta.getTag.
 * Test cases for both property and name attributes.
 * Test when the meta tag is not found, ensuring it returns null.
 */
describe('Meta tags', () => {
  let service: ShareService;

  beforeEach(() => {
    service = TestBed.inject(ShareService);
  });

  it('should return the content of the meta tag using property attribute', () => {
    spyOn(service['meta'], 'getTag').and.callFake((selector: string) => {
      if (selector === 'property="og:title"') {
        return { getAttribute: () => 'Title Content' } as unknown as HTMLMetaElement;
      }
      return null;
    });

    const result = service._getMetaTagContent('og:title');
    expect(result).toBe('Title Content');
  });

  it('should return null if the meta tag is not found', () => {
    spyOn(service['meta'], 'getTag').and.returnValue(null);

    const result = service._getMetaTagContent('og:title');
    expect(result).toBeNull();
  });
});
