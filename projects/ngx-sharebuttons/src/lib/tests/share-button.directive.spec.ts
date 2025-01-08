import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ShareButtonDirective } from '../share-button.directive';

@Component({
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ShareButtonDirective, TestShareButtonComponent]
    });

    fixture = TestBed.createComponent(TestShareButtonComponent);
    component = fixture.componentInstance;

    const directiveDebugElement: DebugElement = fixture.debugElement.query(By.directive(ShareButtonDirective));
    directiveInstance = directiveDebugElement.injector.get(ShareButtonDirective);
    directiveElement = directiveDebugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create a share button', () => {
    expect(directiveInstance).toBeDefined();
    expect(directiveInstance.text()).toBe(directiveInstance.uiState().text);
    expect(directiveInstance.icon()).toBe(directiveInstance.uiState().icon);
    expect(directiveInstance.disabled()).toBe(directiveInstance.uiState().disabled);
    expect(directiveElement.style.getPropertyValue('--button-color')).toEqual(directiveInstance.shareButtonInstance().color);
    expect(directiveElement.getAttribute('aria-label')).toBe(directiveInstance.shareButtonInstance().ariaLabel);
    expect(directiveElement.hasAttribute('disabled')).toBeFalse();
  });

  it('should toggle the disabled attribute when uiState().disabled is changed', () => {
    directiveInstance.uiState.set({
      disabled: true
    });
    fixture.detectChanges();
    expect(directiveElement.hasAttribute('disabled')).toBeTrue();
  });

  it('should throw an error if share button is not registered', () => {
    const button: string = 'fake-button';
    component.shareButton = button;
    expect(() => fixture.detectChanges()).toThrowError(`[ShareButtons]: The share button '${ button }' does not exist!`);
  });

  it('should open share window on click', () => {
    const shareSpy: jasmine.Spy = spyOn(directiveInstance, 'share').and.callThrough();
    const openInstanceSpy: jasmine.Spy = spyOn(directiveInstance['shareService'], 'openInstance');
    const openedOutputSpy: jasmine.Spy = spyOn(directiveInstance.opened, 'emit');
    directiveElement.dispatchEvent(new Event('click'));

    expect(shareSpy).toHaveBeenCalled();
    expect(openInstanceSpy).toHaveBeenCalledWith({
      params: {
        url: directiveInstance.url(),
        title: directiveInstance.title(),
        description: directiveInstance.description(),
        image: directiveInstance.image(),
        tags: directiveInstance.tags(),
        redirectUrl: directiveInstance.redirectUrl()
      },
      target: directiveInstance['options'].sharerTarget,
      debug: directiveInstance['options'].debug,
      method: directiveInstance['options'].sharerMethod,
      uiState: directiveInstance.uiState,
    }, directiveInstance.shareButtonInstance());
    expect(openedOutputSpy).toHaveBeenCalledOnceWith(directiveInstance.shareButton());
  });
});
