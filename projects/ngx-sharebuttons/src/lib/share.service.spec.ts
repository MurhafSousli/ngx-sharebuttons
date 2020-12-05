import { ShareService } from './share.service';
import { TestBed } from '@angular/core/testing';
import { mergeDeep } from './utils';
import { IShareButton, ShareButtonsConfig, SharerMethod } from './share.models';
import { SHARE_BUTTONS } from './share.defaults';

const DEFAULT_CONFIG: ShareButtonsConfig = {
  sharerMethod: SharerMethod.Anchor,
  sharerTarget: '_blank',
  windowObj: window,
  windowFuncName: 'open',
  prop: SHARE_BUTTONS,
  theme: 'default',
  include: [],
  exclude: [],
  size: 0,
  autoSetMeta: true,
  windowWidth: 800,
  windowHeight: 500,
  moreButtonIcon: 'ellipsis-h',
  lessButtonIcon: 'minus'
};

describe('Share Service', () => {
  let service: ShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [ShareService]});
    service = TestBed.inject(ShareService);
  });

  it('should have default config', () => {
    expect(service.config).toEqual(DEFAULT_CONFIG);
  });

  it('should return a config from config$ stream', (done: DoneFn) => {
    service.config$.subscribe((config: ShareButtonsConfig) => {
      expect(config).toEqual(DEFAULT_CONFIG);
      done();
    });
  });

  it('should return a window size from config', () => {
    expect(service.windowSize).toBe(`width=${ service.config.windowWidth }, height=${ service.config.windowHeight }`);
  });

  it('should return a prop from config', () => {
    expect(service.prop).toEqual(service.config.prop);
  });

  it('should set the config', () => {
    const newConfig = mergeDeep(service.config, {
      size: 0,
      autoSetMeta: true,
      windowWidth: 800,
      windowHeight: 500,
    });
    expect(service.config).toEqual(newConfig);
  });

  it('should add a new button', () => {
    const testButton: IShareButton = {
      type: 'facebook',
      text: 'Facebook',
      ariaLabel: 'Share on Facebook',
      icon: ['fab', 'facebook-f'],
      color: '#4267B2',
      share: {
        desktop: 'https://www.facebook.com/sharer/sharer.php?'
      },
      params: {
        url: 'u'
      }
    };
    service.addButton('testButton', testButton);
    expect(service.prop['testButton']).toEqual(testButton);
  });
});
