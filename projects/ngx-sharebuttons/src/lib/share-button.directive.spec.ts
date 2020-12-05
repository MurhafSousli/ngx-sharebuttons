import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ShareDirective } from './share-button.directive';

@Component({
  template: `<button [shareButton]="buttonType"></button>`
})
class TestShareButtonComponent {
  buttonType = 'facebook';
}

describe('Share Button Directive', () => {
  let directiveInstance: ShareDirective;
  let component: TestShareButtonComponent;
  let directiveElement: DebugElement;
  let fixture: ComponentFixture<TestShareButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareDirective, TestShareButtonComponent]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestShareButtonComponent);
    component = fixture.componentInstance;
    directiveElement = fixture.debugElement.query(By.directive(ShareDirective));
    directiveInstance = directiveElement.injector.get(ShareDirective);
    fixture.detectChanges();
  });

  it('should create a share button directive', () => {
    expect(directiveInstance).not.toBeNull();
  });

  it('should add a facebook share button', () => {
    expect(directiveElement.nativeElement.classList.contains('sb-facebook')).toBeTruthy();
  });
});
