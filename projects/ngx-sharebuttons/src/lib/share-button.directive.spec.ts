import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ShareButtonDirective } from './share-button.directive';
import { IShareButton, SharerMethods } from './share.models';
import { SHARE_BUTTONS } from './share.defaults';
import { ShareService } from 'ngx-sharebuttons';

@Component({
  standalone: true,
  imports: [ShareButtonDirective],
  template: `
    <button [shareButton]="shareButton">Share Button</button>
  `
})
class TestShareButtonComponent {
  shareButton: string = 'facebook';
}

describe('Share Button Directive', () => {
  let directiveInstance: ShareButtonDirective;
  let component: TestShareButtonComponent;
  let directiveElement: HTMLButtonElement;
  let fixture: ComponentFixture<TestShareButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareButtonDirective, TestShareButtonComponent]
    });

    fixture = TestBed.createComponent(TestShareButtonComponent);
    component = fixture.componentInstance;

    const directiveDebugElement: DebugElement = fixture.debugElement.query(By.directive(ShareButtonDirective));
    directiveInstance = directiveDebugElement.injector.get(ShareButtonDirective);
    directiveElement = directiveDebugElement.nativeElement;
    fixture.detectChanges();
  });

  // it('should create a initialize share button directive', () => {
  //   expect(directiveInstance).toBeDefined();
  //   expect(directiveInstance.computedUrl()).toBe(window.location.href);
  // });

  it('should create a share button (LOOP OVER ALL SHARE BUTTONS)', () => {
    Object.values(SHARE_BUTTONS).forEach((shareButton: IShareButton) => {
      component.shareButton = shareButton.type;
      fixture.detectChanges();
      expect(directiveElement.style.getPropertyValue('--button-color')).toEqual(directiveInstance.shareButtonInstance().color);
      expect(directiveElement.getAttribute('aria-label')).toBe(directiveInstance.shareButtonInstance().ariaLabel);
    });
  });

  it('should open share window on click', () => {
    spyOn(directiveInstance, 'share');
    directiveElement.dispatchEvent(new Event('click'));
    expect(directiveInstance.share).toHaveBeenCalled();
  });
  //
  // it('test non-social media buttons to run their functions', () => {
  //   Object.values(shareService.prop)
  //     .filter((b: IShareButton) => !b.share)
  //     .forEach((shareButton: IShareButton) => {
  //       directiveInstance.shareButtonName = shareButton.type as any;
  //       directiveInstance.ngOnChanges({
  //         shareButtonName: new SimpleChange(null, shareButton.type, false)
  //       });
  //       spyOn(directiveInstance.shareButton, 'func');
  //       directiveElement.dispatchEvent(new Event('click'));
  //       expect(directiveInstance.shareButton.func).toHaveBeenCalledOnceWith({
  //         params: (directiveInstance as any).getParamsFromInputs(),
  //         data: directiveInstance.shareButton.data,
  //         clipboard: (directiveInstance as any)._clipboard,
  //         updater: (directiveInstance as any)._updater
  //       });
  //     });
  // });
  //
  // it('[WEB] test sharer URL', () => {
  //   const params: ShareParams = directiveInstance.computedParams();
  //
  //   const sharerLink: string = directiveInstance.shareButtonInstance().share.desktop;
  //   if (sharerLink) {
  //     const finalUrl: string = sharerLink + (directiveInstance as any)._serializeParams(params);
  //     (directiveInstance as any).open(params);
  //     expect((directiveInstance as any)._finalUrl).toEqual(finalUrl);
  //   }
  // });


  it('Should open share window in a new tab when sharer method is Anchor', () => {
    (directiveInstance as any).options.sharerMethod = SharerMethods.Anchor;
    const service: ShareService = TestBed.inject(ShareService);

    const openAnchor: jasmine.Spy = spyOn(service, 'openViaAnchor');

    directiveElement.dispatchEvent(new Event('click'));

    expect(openAnchor).toHaveBeenCalledWith({
      url: (directiveInstance as any)._finalUrl,
      target: undefined
    });
  });

  it('Should open share window in a new window when sharer method is Window', () => {
    (directiveInstance as any).options.sharerMethod = SharerMethods.Window;
    const service: ShareService = TestBed.inject(ShareService);

    const openWindow: jasmine.Spy = spyOn(service, 'openViaWindow');

    directiveElement.dispatchEvent(new Event('click'));

    expect(openWindow).toHaveBeenCalledWith({
      url: (directiveInstance as any)._finalUrl,
      target: undefined
    }, {
      windowObj: undefined,
      openFunc: undefined,
      width: 800,
      height: 500
    });
  });


  // it('[WEB] test sharer URL', () => {
  //   Object.values(SHARE_BUTTONS)
  //     .filter((b: IShareButton) => !!b.share)
  //     .forEach((shareButton: IShareButton) => {
  //       component.shareButton = shareButton.type;
  //       fixture.detectChanges();
  //       const params: ShareParams = directiveInstance.computedParams();
  //
  //       const sharerLink: string = directiveInstance.shareButtonInstance().share.desktop;
  //       if (sharerLink) {
  //         const finalUrl: string = sharerLink + (directiveInstance as any)._serializeParams(params);
  //         (directiveInstance as any).open(params);
  //         expect((directiveInstance as any)._finalUrl).toEqual(finalUrl);
  //       }
  //     });
  // });
  //
  // it('[ANDROID] test sharer URL', () => {
  //   // Force platform to fake Android device
  //   (directiveInstance as any)._platform.ANDROID = true;
  //   Object.values(shareService.prop)
  //     .filter((b: IShareButton) => !!b.share)
  //     .forEach((shareButton: IShareButton) => {
  //       directiveInstance.shareButtonName = shareButton.type as any;
  //       const params: ShareParams = (directiveInstance as any).getParamsFromInputs();
  //       const sharerLink = shareButton.share.android || shareButton.share.desktop;
  //       const finalUrl = sharerLink + (directiveInstance as any)._serializeParams(params);
  //       (directiveInstance as any).open(params).subscribe();
  //       expect((directiveInstance as any)._finalUrl).toEqual(finalUrl);
  //     });
  // });
  //
  // it('[IOS] test sharer URL', () => {
  //   // Force platform to fake Android device
  //   (directiveInstance as any)._platform.IOS = true;
  //   Object.values(shareService.prop)
  //     .filter((b: IShareButton) => !!b.share)
  //     .forEach((shareButton: IShareButton) => {
  //       directiveInstance.shareButtonName = shareButton.type as any;
  //       const params: ShareParams = (directiveInstance as any).getParamsFromInputs();
  //       const sharerLink = shareButton.share.ios || shareButton.share.desktop;
  //       const finalUrl = sharerLink + (directiveInstance as any)._serializeParams(params);
  //       (directiveInstance as any).open(params).subscribe();
  //       expect((directiveInstance as any)._finalUrl).toEqual(finalUrl);
  //     });
  // });
});
