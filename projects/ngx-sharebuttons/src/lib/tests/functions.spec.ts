import { Provider } from '@angular/core';
import {
  defaultOptions,
  facebookParams,
  whatsappParams,
  SHARE_BUTTONS,
  SHARE_BUTTONS_PROP,
  SHARE_BUTTONS_CONFIG,
  ShareService,
  SharerMethods,
  ShareButtonsConfig,
  ShareButtonFuncArgs,
  withConfig,
  customShareButton,
  provideShareButtonsOptions
} from 'ngx-sharebuttons';
import { copyToClipboard, getValidUrl, printPage } from '../utils';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

describe('Utilities functions', () => {
  it('Override global share buttons options', () => {
    const config: ShareButtonsConfig = {
      sharerMethod: SharerMethods.Window,
      theme: 'custom-theme'
    };

    const fbConfig = {
      color: 'purple'
    };

    const provider: Provider = provideShareButtonsOptions(
      withConfig(config),
      customShareButton('facebook', fbConfig)
    );

    expect(provider[0]).toEqual({
      provide: SHARE_BUTTONS_CONFIG,
      useValue: { ...defaultOptions, ...config },
    });

    expect(provider[1]).toEqual({
      provide: SHARE_BUTTONS_PROP,
      useValue: {
        ...SHARE_BUTTONS, ...{ facebook: { ...facebookParams, ...fbConfig } }
      },
    });
  });

  it('should return the URL if it is valid', () => {
    const validUrl = 'https://example.com';
    const result = getValidUrl(validUrl);

    expect(result).toBe(validUrl);
  });

  it('should log a warning and return null for an invalid URL', () => {
    const invalidUrl = 'invalid-url';
    spyOn(console, 'warn');

    const result = getValidUrl(invalidUrl);

    expect(result).toBeNull();
    expect(console.warn).toHaveBeenCalledWith(
      `[ShareButtons]: Sharing link '${ invalidUrl }' is invalid!`
    );
  });

  it('should call window.print()', () => {
    spyOn(window, 'print'); // Spy on the `print` method
    printPage();
    expect(window.print).toHaveBeenCalled();
  });

  it('should copy the URL to clipboard and update UI state', fakeAsync(() => {
    // Mock the clipboard and uiState services
    const clipboardMock: { copy: jasmine.Spy } = jasmine.createSpyObj('clipboard', ['copy']);
    const uiStateMock: { set: jasmine.Spy } = jasmine.createSpyObj('uiState', ['set']);
    const mockArgs: ShareButtonFuncArgs<{
      successIcon: string;
      successText: string;
      icon: string;
      text: string;
      delay: number
    }> = {
      params: { url: 'https://example.com' },
      data: {
        successIcon: 'check',
        successText: 'Copied!',
        icon: 'copy',
        text: 'Copy Link',
        delay: 2000,
      },
      clipboard: clipboardMock as any,
      uiState: uiStateMock as any,
    };

    copyToClipboard(mockArgs);

    // Assert that clipboard.copy was called with the correct URL
    expect(clipboardMock.copy).toHaveBeenCalledWith('https://example.com');

    // Assert that uiState.set was called to disable the button
    expect(uiStateMock.set).toHaveBeenCalledWith({
      icon: 'check',
      text: 'Copied!',
      disabled: true,
    });

    // Fast-forward the timer
    tick(2000);

    // Assert that uiState.set was called to reset the button state
    expect(uiStateMock.set).toHaveBeenCalledWith({
      icon: 'copy',
      text: 'Copy Link',
      disabled: false,
    });
  }));

  it('[linkInDescription]: should return the description with the link in the output text when a share button is a messaging platform or email', () => {
    const service: ShareService = TestBed.inject(ShareService);

    const computedParams: Record<string, string> = service._getComputedUrlParams(whatsappParams, {
      url: 'https://example.com',
      description: '123 test',
    });
    expect(computedParams['text']).toBe('123 test\r\nhttps://example.com');
  });

  it('[linkInDescription]: should return the link in the output text when a share button is a messaging platform or email', () => {
    const service: ShareService = TestBed.inject(ShareService);

    const computedParams: Record<string, string> = service._getComputedUrlParams(whatsappParams, {
      url: 'https://example.com'
    });
    expect(computedParams['text']).toBe('https://example.com');
  });
});
