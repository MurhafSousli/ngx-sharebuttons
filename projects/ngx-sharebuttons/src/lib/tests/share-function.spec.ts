import { TestBed } from '@angular/core/testing';
import { IShareButton, SHARE_BUTTONS, ShareService } from 'ngx-sharebuttons';

describe('Share Service', () => {

  it('should openInstance to execute share button function', () => {
    const service: ShareService = TestBed.inject(ShareService);
    const button: IShareButton = SHARE_BUTTONS['print'];
    const buttonFuncSpy: jasmine.Spy = spyOn(button, 'func');
    const options = {
      params: {},
    } as any;

    service.openInstance(options, button);
    expect(buttonFuncSpy).toHaveBeenCalled();
  });
});

