import { TestBed } from '@angular/core/testing';
import { ShareService } from 'ngx-sharebuttons';
import { mockShareButton } from './common.spec';

describe('Sharing using Window and Anchor methods', () => {
  let service: ShareService;

  const urlParam: string = 'https://example.com';
  const expectedUrl: string = `${ mockShareButton.share.desktop }?url=${ urlParam }`;
  const mockButton = {
    ...mockShareButton,
    params: { url: 'url' }
  };

  beforeEach(() => {
    service = TestBed.inject(ShareService);
  });

  it('[Anchor Method]: should create and click a link element', () => {
    const anchorElement: HTMLAnchorElement = document.createElement('a');
    spyOn(anchorElement, 'click').and.stub();
    spyOn(anchorElement, 'remove').and.stub();

    spyOn(service['document'], 'createElement').and.returnValue(anchorElement);

    service.open({
      name: 'mock-button',
      props: mockButton,
      target: '_self',
      params: {
        url: urlParam
      },
      method: 'anchor'
    });

    expect(service['document'].createElement).toHaveBeenCalledWith('a');
    expect(anchorElement.href).toBe(expectedUrl);
    expect(anchorElement.getAttribute('target')).toBe('_self');
    expect(anchorElement.getAttribute('rel')).toBe('noopener noreferrer');
    expect(anchorElement.click).toHaveBeenCalled();
    expect(anchorElement.remove).toHaveBeenCalled();
  });

  it('[Window Method]: should use window.open to share the link', () => {
    const windowOpenSpy: jasmine.Spy = spyOn(window, 'open').and.stub();

    service.open({
      name: 'mock-button',
      props: mockButton,
      params: {
        url: urlParam
      },
      method: 'window'
    });

    expect(window.opener).toBeFalsy();
    expect(windowOpenSpy).toHaveBeenCalledWith(expectedUrl, '_blank', `width=800, height=500`);
  });
});


// it('[Window Method]: should use window.open to share the link', () => {
//
//   const windowOpenSpy: jasmine.Spy = spyOn(window, 'open');
//
//   const url: string = 'https://example.com';
//   const expectedUrl: string = 'https://example.com?param1=xyz&param2=abc';
//
//   service.openViaWindow({
//     url,
//     params: {
//       param1: 'xyz',
//       param2: 'abc'
//     }
//   }, null, true);
//
//   expect(window.opener).toBeFalsy();
//   expect(windowOpenSpy).toHaveBeenCalledWith(expectedUrl, '_blank', `width=800, height=500`);
// });
//   it('should open share window in a new tab using Anchor method', () => {
//     const service = TestBed.inject(ShareService);
//
//     const createElementSpy: jasmine.Spy = spyOn(document, 'createElement').and.callThrough();
//     const anchorElement: HTMLAnchorElement = document.createElement('a');
//     createElementSpy.and.returnValue(anchorElement);
//     const clickSpy: jasmine.Spy = spyOn(anchorElement, 'click');
//     const removeSpy: jasmine.Spy = spyOn(anchorElement, 'remove');
//
//     const url: string = 'https://example.com';
//     const expectedUrl: string = 'https://example.com/?param1=xyz&param2=abc';
//
//     service.openViaAnchor({
//       url,
//       params: {
//         param1: 'xyz',
//         param2: 'abc'
//       }
//     }, true);
//
//     expect(anchorElement.href).toBe(expectedUrl);
//     expect(anchorElement.getAttribute('target')).toBe('_blank');
//     expect(anchorElement.getAttribute('rel')).toBe('noopener noreferrer');
//     expect(clickSpy).toHaveBeenCalled();
//     expect(removeSpy).toHaveBeenCalled();
//   });
// });
