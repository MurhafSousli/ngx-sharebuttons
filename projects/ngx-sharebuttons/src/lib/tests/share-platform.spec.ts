import { TestBed } from '@angular/core/testing';
import { Platform } from '@angular/cdk/platform';
import { ShareService } from 'ngx-sharebuttons';
import { mockShareButton } from './common.spec';

describe('Sharing on WEB, IOS and Android platforms', () => {
  it('should use the proper share link when platform is WEB', () => {
    const service: ShareService = TestBed.inject(ShareService);
    const openSpy: jasmine.Spy = spyOn(service, 'openViaWindow' as any);

    service.open({
      name: 'mock-button',
      props: mockShareButton,
      params: {},
      target: '_blank',
      method: 'window'
    });

    expect(openSpy).toHaveBeenCalledWith({
      params: {},
      target: '_blank',
      url: mockShareButton.share.desktop
    }, undefined, undefined);
  });

  it('should use the proper share link when platform is ANDROID', () => {
    const platformSpy = jasmine.createSpyObj('Platform', ['ANDROID']);
    platformSpy.ANDROID.and.returnValue(true);

    // Injecting mock Meta service into ShareService
    TestBed.configureTestingModule({
      providers: [{ provide: Platform, useValue: platformSpy }]
    });
    const service: ShareService = TestBed.inject(ShareService);
    const openSpy: jasmine.Spy = spyOn(service, 'openViaAnchor' as any);

    service.open({
      name: 'mock-button',
      props: mockShareButton,
      params: {},
      target: '_blank',
      method: 'anchor'
    });

    expect(openSpy).toHaveBeenCalledWith({
      params: {},
      target: '_blank',
      url: mockShareButton.share.android,
    }, undefined);
  });

  it('should use the proper share link when platform is IOS', () => {
    const platformSpy = jasmine.createSpyObj('Platform', ['IOS']);
    platformSpy.IOS.and.returnValue(true);

    // Injecting mock Meta service into ShareService
    TestBed.configureTestingModule({
      providers: [{ provide: Platform, useValue: platformSpy }]
    });
    const service: ShareService = TestBed.inject(ShareService);
    const openSpy: jasmine.Spy = spyOn(service, 'openViaAnchor' as any);

    service.open({
      name: 'mock-button',
      props: mockShareButton,
      params: {},
      target: '_blank',
      method: 'anchor'
    });

    expect(openSpy).toHaveBeenCalledWith({
      params: {},
      target: '_blank',
      url: mockShareButton.share.ios,
    }, undefined);
  });
})
