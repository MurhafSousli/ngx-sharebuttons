/* tslint:disable:no-unused-variable */
import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement, ElementRef, Renderer } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ShareButtonsModule } from '../../share-buttons.module';
import { ShareButtonComponent } from './share-button.component';
import { ShareButtonsService } from '../../service/share-buttons.service';
import { WindowService } from './../../service/window.service';
import { ShareButton, ShareArgs, ShareProvider, Helper } from '../../helpers';
import { TestHelpers } from '../../test-helpers';


const createTestComponent = (html: string, detectChanges?: boolean) =>
  TestHelpers.createGenericTestComponent(html, detectChanges, TestComponent) as ComponentFixture<TestComponent>;

const sArgs = new ShareArgs('http://www.mysite.com', 'my title', 'my description', 'https://my/image.png', 'tag1,tag2');
const sBtn = new ShareButton(ShareProvider.LINKEDIN, '<i class="fa fa-linkedin"></i>', 'linkedin');


describe('ShareButtonComponent (as a stand-alone component)', () => {
  let component: ShareButtonComponent;
  let fixture: ComponentFixture<ShareButtonComponent>;
  let shareButton: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, JsonpModule],
      declarations: [ShareButtonComponent],
      providers: [ShareButtonsService, Renderer,
        { provide: WindowService, useClass: TestHelpers.MockWindowService },
        { provide: ElementRef, useClass: TestHelpers.MockElementRef }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareButtonComponent);
    component = fixture.componentInstance;
    shareButton = fixture.debugElement.children[0];

  });


  it('should throw error if mandatory @Input("button") is not set', () => {
    expect(fixture.detectChanges).toThrowError();
  });

  it('should successfully create instance if mandatory inputs are set', () => {
    // set mandatory inputs
    component.button = sBtn;

    fixture.detectChanges(); // trigger data binding

    expect(component).toBeTruthy();
    expect(shareButton).toBeTruthy();
  });

  it('should bind to given inputs', () => {

    // set mandatory inputs
    component.button = sBtn;

    // optional inputs
    component.url = sArgs.url;
    component.title = sArgs.title;
    component.description = sArgs.description;
    component.image = sArgs.image;
    component.tags = sArgs.tags;

    fixture.detectChanges(); // trigger data binding

    expect(shareButton.nativeElement.innerHTML).toEqual(sBtn.template);
    expect(shareButton.nativeElement.className).toEqual(sBtn.classes);

  });

  it('should use "window.location.href" when no url is provided', () => {
    // set mandatory inputs
    component.button = sBtn;

    // optional inputs
    component.url = undefined; // no url
    fixture.detectChanges(); // trigger data binding

    expect(component.url).toEqual(encodeURIComponent(TestHelpers.windowUrl));

  });

  it('should use "window.location.href" when provided url is invalid', () => {
    // set mandatory inputs
    component.button = sBtn;

    // optional inputs
    component.url = 'invalid://www.mysite.com';
    fixture.detectChanges(); // trigger data binding

    expect(component.url).toEqual(encodeURIComponent(TestHelpers.windowUrl));

  });

  it('should call share() when the button is clicked and emit "popUpClosed" event',
    inject([WindowService, ShareButtonsService], (windowService: WindowService, sbService: ShareButtonsService) => {

      // set mandatory inputs
      component.button = sBtn;

      // optional inputs
      component.url = sArgs.url;
      component.title = sArgs.title;
      component.description = sArgs.description;
      component.image = sArgs.image;
      component.tags = sArgs.tags;

      let emittedProvider: ShareProvider;
      component.popUpClosed.subscribe((provider: ShareProvider) => {
        emittedProvider = provider;
      });

      fixture.detectChanges(); // trigger data binding

      const shareUrl = Helper.shareFactory(sBtn.provider, sArgs);
      const shareSpy = spyOn(sbService, 'share').and.callThrough(); // spy on ShareButtonsService.share()


      shareButton.triggerEventHandler('click', null); // simulate click on button

      expect(shareSpy).toHaveBeenCalledWith(sBtn.provider, sArgs, component.popUpClosed);
      expect(emittedProvider).toEqual(sBtn.provider);

      expect(windowService.nativeWindow.open.calls.count()).toBe(1);
      expect(windowService.nativeWindow.open.calls.mostRecent().args).toEqual([shareUrl, 'newwindow', sbService.windowAttr()]);
      expect(windowService.nativeWindow.setInterval.calls.count()).toBe(1);
      expect(windowService.nativeWindow.clearInterval.calls.count()).toBe(1); // make sure timeout handler has been cleared
    }));


  it('should render the share count and emit "countOuter" event if @Input("count") is true and shareCount > 0',
    inject([ShareButtonsService], (sbService: ShareButtonsService) => {

      // set mandatory inputs
      component.button = sBtn;

      // optional inputs
      component.url = sArgs.url;
      component.title = sArgs.title;
      component.description = sArgs.description;
      component.image = sArgs.image;
      component.tags = sArgs.tags;

      component.count = true;

      let emittedTotalCount: number;
      component.countOuter.subscribe((count: number) => {
        emittedTotalCount = count;
      });

      const shareCount = 1999;
      const countSpy = spyOn(sbService, 'count').and.callFake(// spy on ShareButtonsService.count()

        (provider: ShareProvider, url: String) => Observable.of(shareCount)
      );

      fixture.detectChanges(); // trigger data binding

      expect(countSpy).toHaveBeenCalledWith(sBtn.provider, sArgs.url);
      expect(emittedTotalCount).toEqual(shareCount);

      const spanCount = fixture.debugElement.query(By.css('span')).nativeElement;
      expect(spanCount.className).toEqual('sb-button-count');
      expect(spanCount.textContent).toEqual('2K'); // count formatted with NFormatterPipe

    }));


  it('should not render the share count, not emit "countOuter" event if @Input("count") is true but shareCount <= 0',
    inject([ShareButtonsService], (sbService: ShareButtonsService) => {

      // set mandatory inputs
      component.button = sBtn;

      // optional inputs
      component.url = sArgs.url;
      component.title = sArgs.title;
      component.description = sArgs.description;
      component.image = sArgs.image;
      component.tags = sArgs.tags;

      component.count = true;

      let emittedTotalCount: number;
      component.countOuter.subscribe((count: number) => {
        emittedTotalCount = count;
      });

      const shareCount = 0;
      const countSpy = spyOn(sbService, 'count').and.callFake(// spy on ShareButtonsService.count()

        (provider: ShareProvider, url: String) => Observable.of(shareCount)
      );

      fixture.detectChanges(); // trigger data binding

      expect(countSpy).toHaveBeenCalledWith(sBtn.provider, sArgs.url);
      expect(emittedTotalCount).toBeUndefined();
      expect(fixture.debugElement.query(By.css('span'))).toBeNull();
    }));

});

describe('ShareButtonComponent (as used by hosting component)', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareButtonsModule],
      declarations: [TestComponent]
    }).compileComponents();
  }));

  it('should throw error if mandatory @Input("button") is not set', () => {
    const fixture = createTestComponent(`
      <share-button></share-button>
    `);
    expect(fixture.detectChanges).toThrowError();
  });

  /**  TODO: find why this still fails
    it('should bind to parameters provided by hosting component', () => {
      const fixture = createTestComponent(`
         <share-button [button]="sBtn" 
           [url]="sArgs.url" 
           [title]="sArgs.title" 
           [description]="sArgs.description" 
           [image]="sArgs.image" 
           [tags]="sArgs.tags">
         </share-button>
       `, true);
  
      const sbButton = fixture.debugElement.query(By.css('share-button'));
  
      expect(sbButton).toBeTruthy();
    });
  */
});


@Component({ selector: 'test-cmp', template: '' })
class TestComponent {

  sArgs = new ShareArgs('http://www.mysite.com', 'my title', 'my description', 'https://my/image.png', 'tag1,tag2');
  sBtn = new ShareButton(ShareProvider.LINKEDIN, '<i class="fa fa-linkedin"></i>', 'linkedin');
}
