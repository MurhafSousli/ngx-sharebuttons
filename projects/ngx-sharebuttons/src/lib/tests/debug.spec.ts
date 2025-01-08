import { ShareService } from 'ngx-sharebuttons';
import { TestBed } from '@angular/core/testing';
import { mockShareButton } from './common.spec';

describe('Debug option', () => {
  let service: ShareService;

  const urlParam: string = 'https://example.com';
  const expectedUrl: string = `${ mockShareButton.share.desktop }?url=${ urlParam }`;
  const mockButton = {
    ...mockShareButton,
    params: { url: 'url' }
  };

  beforeEach(() => {
    service = TestBed.inject(ShareService);
    spyOn(console, 'log').and.stub();
  });

  it('[Anchor Method]: should log the final sharer link in the console', () => {
    service.open({
      name: 'mock-button',
      props: mockButton,
      params: {
        url: urlParam
      },
      debug: true,
      method: 'anchor'
    });
    expect(console.log).toHaveBeenCalledWith('[SHARE BUTTONS]: open link via anchor', expectedUrl);
  });

  it('[Window Method]: should log the final sharer link in the console', () => {
    service.open({
      name: 'mock-button',
      props: mockButton,
      params: {
        url: urlParam
      },
      debug: true,
      method: 'window'
    });
    expect(console.log).toHaveBeenCalledWith('[SHARE BUTTONS]: open link via window', expectedUrl);
  });
});
