/**
 * _getShareButtonInstance
 * Test the merging of props with default SHARE_BUTTONS.
 * Ensure an error is thrown for a nonexistent button.
 */

import { TestBed } from '@angular/core/testing';
import { IShareButton, SHARE_BUTTONS, ShareService } from 'ngx-sharebuttons';

describe('Share button instance', () => {
  let service: ShareService;

  // Test 1: Should return the default button instance when no props are provided
  it('[getShareButtonInstance]: should return the default button instance when no props are provided', () => {
    service = TestBed.inject(ShareService);
    const result = service._getShareButtonInstance('facebook', null); // Use `as any` to access the private method
    expect(result).toEqual(SHARE_BUTTONS.facebook);
  });

  // Test 2: Should merge props with the default options
  it('should return the merged button instance', () => {
    service = TestBed.inject(ShareService);
    const props: IShareButton = { color: '#123456' };
    const button = service._getShareButtonInstance('facebook', props);

    expect(button).toEqual({
      ...SHARE_BUTTONS['facebook'],
      ...props,
    });
  });

  // Test 3: Should throw an error if the button does not exist
  it('should throw an error if the button does not exist', () => {
    service = TestBed.inject(ShareService);
    expect(() => service._getShareButtonInstance('nonexistent', null)).toThrowError(
      "[ShareButtons]: The share button 'undefined' does not exist!"
    );
  });
});
