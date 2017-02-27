/* tslint:disable:no-unused-variable */
import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement, EventEmitter } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ShareButtonsModule } from '../../share-buttons.module';
import { ShareButtonDirective } from './../../directives/share-button/share-button.directive';
import { ShareButtonComponent } from './share-button.component';
import { ShareButtonsService } from '../../services/share-buttons.service';
import { WindowService } from './../../services/window.service';
import { ShareButton, ShareArgs, ShareProvider, Helper, NFormatterPipe } from '../../helpers/index';
import { TestHelpers } from '../../test-helpers';


const createTestComponent = (html: string, detectChanges?: boolean) =>
  TestHelpers.createGenericTestComponent(html, detectChanges, TestComponent) as ComponentFixture<TestComponent>;

const getShareButtonComponent = (fixture: ComponentFixture<TestComponent>): ShareButtonComponent =>
  fixture.debugElement.query(By.css('share-button')).componentInstance as ShareButtonComponent;

const getShareButtonDebugElm = (fixture: ComponentFixture<TestComponent>): DebugElement =>
  fixture.debugElement.query(By.css('share-button'));

const sArgs = new ShareArgs('http://www.mysite.com', 'my title', 'my description', 'https://my/image.png', 'tag1,tag2');
const sBtn = new ShareButton(ShareProvider.LINKEDIN, '<i class="fa fa-linkedin"></i>', 'linkedin');


describe('ShareButtonComponent (as a stand-alone component)', () => {
  let component: ShareButtonComponent;
  let fixture: ComponentFixture<ShareButtonComponent>;
  let shareButton: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, JsonpModule],
      declarations: [ShareButtonComponent, ShareButtonDirective, NFormatterPipe],
      providers: [ShareButtonsService,
        { provide: WindowService, useClass: TestHelpers.MockWindowService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareButtonComponent);
    component = fixture.componentInstance;
    shareButton = fixture.debugElement.children[0];

  });


  it('should throw error if mandatory @Input("button") is not set', () => {
    expect(() =>
      fixture.detectChanges()
    ).toThrowError();
  });

  it('should successfully create instance if mandatory inputs are set', () => {
    // set mandatory inputs
    component.button = sBtn;

    fixture.detectChanges(); // trigger data binding

    expect(component).toBeTruthy();
    expect(shareButton).toBeTruthy();
  });



});

describe('ShareButtonComponent (as used by hosting component)', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ShareButtonsModule.forRoot(), HttpModule, JsonpModule],
      declarations: [TestComponent],
      providers: [
        { provide: WindowService, useClass: TestHelpers.MockWindowService }
      ]
    });
  });

  it('should throw error if mandatory @Input("button") is not set', () => {
    expect(() =>
      createTestComponent(`<share-button></share-button>`, true)
    ).toThrowError();
  });

  it('should bind to parameters provided by hosting component', () => {
    const fixture = createTestComponent(`
         <share-button [button]="sBtn"
           [url]="sArgs.url"
           [title]="sArgs.title"
           [description]="sArgs.description"
           [image]="sArgs.image"
           [tags]="sArgs.tags"
           [showCount]="true"
           (countOuter) = "countCallback($event)"
           (popUpClosed) = "popUpCallback($event)">
         </share-button>
       `, true /* detectChanges */);

    const component = fixture.componentInstance;
    const sbButton = fixture.debugElement.query(By.css('share-button'));

    expect(sbButton).toBeTruthy();
    const sbComponent = sbButton.componentInstance as ShareButtonComponent;

    const lnButton = sbButton.query(By.css('button'));
    expect(lnButton).toBeTruthy();
    expect(lnButton.nativeElement.className).toEqual('sb-show-count');


    const lnTemplate = sbButton.query(By.css('.sb-template'));
    expect(lnTemplate.nativeElement.innerHTML).toEqual(component.sBtn.template);

    const countSpan = sbButton.query(By.css('.sb-count'));
    if (sbComponent.shareCount) {
      expect(countSpan).toBeTruthy(); // 'count' is true, 'shareCount' = 0
    } else {
      expect(countSpan).toBeFalsy(); // 'count' is true, 'shareCount' = 0
    }

  });


  it('should call share() when the button is clicked and emit "popUpClosed" event', () => {

    const fixture = createTestComponent(`
         <share-button [button]="sBtn"
           [url]="sArgs.url"
           [title]="sArgs.title"
           [description]="sArgs.description"
           [image]="sArgs.image"
           [tags]="sArgs.tags"
           (popUpClosed) = "popUpCallback($event)">
         </share-button>
       `);

    const sbService = TestBed.get(ShareButtonsService);
    const shareSpy = spyOn(sbService, 'share').and.callThrough(); // spy on ShareButtonsService.share()
    const windowService = TestBed.get(WindowService);

    const testComponent = fixture.componentInstance;
    const sbComponent = getShareButtonComponent(fixture);
    const shareButton = getShareButtonDebugElm(fixture).query(By.css('button'));
    const args = new ShareArgs(encodeURIComponent(sArgs.url), sArgs.title, sArgs.description, sArgs.image, sArgs.tags);
    const shareUrl = Helper.shareFactory(sBtn.provider, args);

    let emittedProvider: ShareProvider;
    sbComponent.popUpClosed.subscribe((provider: ShareProvider) => {
      emittedProvider = provider;
    });

    fixture.detectChanges(); // trigger data binding

    shareButton.triggerEventHandler('click', null); // simulate click on button

    expect(shareSpy).toHaveBeenCalledTimes(1);
    expect(shareSpy.calls.first().args).toContain(sBtn.provider, args);
    expect(emittedProvider).toEqual(sBtn.provider);

    expect(windowService.nativeWindow.open).toHaveBeenCalledTimes(1);
    expect(windowService.nativeWindow.open).toHaveBeenCalledWith(shareUrl, 'newwindow', sbService.windowAttr());
    expect(windowService.nativeWindow.setInterval).toHaveBeenCalledTimes(1);
    expect(windowService.nativeWindow.clearInterval).toHaveBeenCalledTimes(1); // make sure timeout handler has been cleared

    expect(testComponent.popUpCallback).toHaveBeenCalledTimes(1);
    expect(testComponent.popUpCallback).toHaveBeenCalledWith(testComponent.sBtn.provider);
  });

  it('should render the share count and emit "countOuter" event if @Input("showCount") is true and shareCount > 0', () => {

    const fixture = createTestComponent(`
         <share-button [button]="sBtn"
           [url]="sArgs.url"
           [title]="sArgs.title"
           [description]="sArgs.description"
           [image]="sArgs.image"
           [tags]="sArgs.tags"
           [showCount]="true"
           (countOuter) = "countCallback($event)">
         </share-button>
       `);

    const sbService = TestBed.get(ShareButtonsService);
    const sbComponent = getShareButtonComponent(fixture);

    let emittedShareCount: number;
    sbComponent.count.subscribe((count: number) => {
      emittedShareCount = count;
    });

    const shareCount = 1999;
    const countSpy = spyOn(sbService, 'count').and.callFake(// spy on ShareButtonsService.count()
      (provider: ShareProvider, url: String, emitter: EventEmitter<number>) => {
        emitter.emit(shareCount);
      }
    );

    fixture.detectChanges(); // trigger data binding

    expect(countSpy).toHaveBeenCalledTimes(1);
    expect(countSpy.calls.first().args).toContain(sBtn.provider, encodeURIComponent(sArgs.url));
    expect(emittedShareCount).toEqual(shareCount);

    const countSpan = getShareButtonDebugElm(fixture).query(By.css('span')).nativeElement;
    expect(countSpan.className).toEqual('sb-count');
    expect(countSpan.textContent).toEqual('2K'); // count formatted with NFormatterPipe

  });


  it('should not render the share count, not emit "countOuter" event if @Input("showCount") is true but shareCount <= 0', () => {

    const fixture = createTestComponent(`
         <share-button [button]="sBtn"
           [url]="sArgs.url"
           [title]="sArgs.title"
           [description]="sArgs.description"
           [image]="sArgs.image"
           [tags]="sArgs.tags"
           [showCount]="true"
           (countOuter) = "countCallback($event)">
         </share-button>
       `);

    const sbService = TestBed.get(ShareButtonsService);
    const component = fixture.componentInstance;
    const sbComponent = getShareButtonComponent(fixture);

    let emittedShareCount: number;
    sbComponent.count.subscribe((count: number) => {
      emittedShareCount = count;
    });

    const shareCount = 0;
    const countSpy = spyOn(sbService, 'count').and.callFake(// spy on ShareButtonsService.count()
      (provider: ShareProvider, url: String, emitter: EventEmitter<number>) => {
        emitter.emit(shareCount);
      }
    );

    fixture.detectChanges(); // trigger data binding

    expect(countSpy).toHaveBeenCalledTimes(1);
    expect(countSpy.calls.first().args).toContain(sBtn.provider, encodeURIComponent(sArgs.url));
    expect(emittedShareCount).toEqual(shareCount);

    expect(getShareButtonDebugElm(fixture).query(By.css('span'))).toBeNull();
  });

});


@Component({ selector: 'test-cmp', template: '' })
class TestComponent {

  sArgs = new ShareArgs('http://www.mysite.com', 'my title', 'my description', 'https://my/image.png', 'tag1,tag2');
  sBtn = new ShareButton(ShareProvider.LINKEDIN, '<i class="fa fa-linkedin"></i>', 'linkedin');

  countCallback = jasmine.createSpy('countCallback').and.callFake((count: number) => { });
  popUpCallback = jasmine.createSpy('popUpCallback').and.callFake((provider: ShareProvider) => { });
}
