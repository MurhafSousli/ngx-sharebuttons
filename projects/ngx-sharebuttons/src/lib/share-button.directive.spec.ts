import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { Component, SimpleChange } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ShareDirective } from './share-button.directive';
import { IShareButton, ShareButtonsConfig, SharerMethod } from './share.models';
import { ShareService } from './share.service';
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

const shareServiceStub: Partial<ShareService> = {
  config: DEFAULT_CONFIG,
  get prop() {
    return DEFAULT_CONFIG.prop;
  }
};

@Component({
  template: `
    <button shareButton="facebook">Share Button</button>`
})
class TestShareButtonComponent {
}

describe('Share Button Directive', () => {
  let shareService: ShareService;
  let directiveInstance: ShareDirective;
  let component: TestShareButtonComponent;
  let directiveElement: HTMLButtonElement;
  let fixture: ComponentFixture<TestShareButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareDirective, TestShareButtonComponent],
      providers: [{ provide: ShareService, useValue: shareServiceStub }]
    });

    fixture = TestBed.createComponent(TestShareButtonComponent);
    shareService = fixture.debugElement.injector.get(ShareService);
    component = fixture.componentInstance;
    const directiveDebugElement = fixture.debugElement.query(By.directive(ShareDirective));
    directiveInstance = directiveDebugElement.injector.get(ShareDirective);
    directiveElement = directiveDebugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create a initialize share button directive', () => {
    expect(directiveInstance).toBeDefined();
    expect(directiveInstance.autoSetMeta).toBe(shareService.config.autoSetMeta);
    expect(directiveInstance.url).toBe(shareService.config.url || window.location.href);
    expect(directiveInstance.title).toBe(shareService.config.title);
    expect(directiveInstance.description).toBe(shareService.config.description);
    expect(directiveInstance.image).toBe(shareService.config.image);
    expect(directiveInstance.tags).toBe(shareService.config.tags);
  });

  it('should create a facebook share button', () => {
    Object.values(shareService.prop).forEach((shareButton: IShareButton) => {
      directiveInstance.shareButtonName = shareButton.type;
      // Run on changes
      directiveInstance.ngOnChanges({
        shareButtonName: new SimpleChange(null, shareButton.type, false)
      });
      // Check for new values after button has changed
      expect(directiveElement.classList.contains(`sb-${ shareButton.type }`)).toBeTruthy();
      expect(directiveElement.style.getPropertyValue('--button-color')).toEqual(directiveInstance.shareButton.color);
      expect(directiveElement.getAttribute('aria-label')).toBe(directiveInstance.shareButton.ariaLabel);
    });
  });

  it('should open share window on click', fakeAsync(() => {
    spyOn(directiveInstance, 'share');
    directiveElement.click();
    fixture.whenStable().then(() => {
      expect(directiveInstance.share).toHaveBeenCalled();

      directiveInstance.opened.subscribe((value) => {
        expect(value).toBe('facebook');
      });
    });
  }));
});
