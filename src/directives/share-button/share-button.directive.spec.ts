/* tslint:disable:no-unused-variable, max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, EventEmitter } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { ShareButtonsModule } from '../../share-buttons.module';
import { ShareButtonDirective } from './share-button.directive';
import { ShareButtonsService } from '../../services/share-buttons.service';
import { WindowService } from '../../services/window.service';
import { ShareButton, ShareArgs, ShareProvider, Helper } from '../../helpers/index';
import { TestHelpers } from '../../test-helpers';

const createTestComponent = (html: string, detectChanges?: boolean) =>
    TestHelpers.createGenericTestComponent(html, detectChanges, TestComponent) as ComponentFixture<TestComponent>;

const sArgs = new ShareArgs('http://www.mysite.com', 'my title', 'my description', 'https://my/image.png', 'tag1,tag2');
const sBtn = new ShareButton(ShareProvider.LINKEDIN, '<i class="fa fa-linkedin"></i>', 'linkedin');

describe('ShareButtonDirective', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ShareButtonsModule.forRoot(), HttpModule, JsonpModule],
            declarations: [TestComponent],
            providers: [
                { provide: WindowService, useClass: TestHelpers.MockWindowService }
            ]
        });
    });

    it('should throw error if mandatory @Input("shareButton") is not set', () => {
        expect(() =>
            createTestComponent(`<button shareButton></button>`, true)
        ).toThrowError();
    });

    it('should not instantiate directive when @Input("shareButton") is set to invalid ShareProvider enum string value', () => {
        expect(() =>
            createTestComponent(`<button [shareButton]="'invalid'"></button>`, true)
        ).toThrowError();
    });

    it('should not instantiate directive when @Input("shareButton") is set to invalid ShareProvider enum numeric value', () => {
        expect(() =>
            createTestComponent(`<button [shareButton]="999"></button>`, true)
        ).toThrowError();
    });

    it('should instantiate directive when @Input("shareButton") is set to valid ShareProvider enum string value (lowercase)', () => {
        const fixture = createTestComponent(`
         <button [shareButton]="'linkedin'">
         </button>
       `, true /* detectChanges */);

        const sbButton = fixture.debugElement.query(By.directive(ShareButtonDirective));

        expect(sbButton).toBeTruthy();
    });

    it('should instantiate directive when @Input("shareButton") is set to valid ShareProvider enum string value (uppercase)', () => {
        const fixture = createTestComponent(`
         <button [shareButton] ="'linkedin'">
         </button>
       `, true /* detectChanges */);

        const sbButton = fixture.debugElement.query(By.directive(ShareButtonDirective));

        expect(sbButton).toBeTruthy();
    });


    it('should instantiate directive when @Input("shareButton") set to valid ShareProvider enum value', () => {
        const fixture = createTestComponent(`
         <button [shareButton] ="sBtn.provider">
         </button>
       `, true /* detectChanges */);

        const sbButton = fixture.debugElement.query(By.directive(ShareButtonDirective));

        expect(sbButton).toBeTruthy();
    });

    it('should call share() when the button is clicked and emit "sbPopUpClosed" event', () => {

        const fixture = createTestComponent(`
         <button [shareButton] ="sBtn.provider"
           [sbUrl]="sArgs.url"
           [sbTitle]="sArgs.title"
           [sbDescription]="sArgs.description"
           [sbImage]="sArgs.image"
           [sbTags]="sArgs.tags"
           (sbPopUpClosed) = "popUpCallback($event)">
         </button>
       `);

        const sbService = TestBed.get(ShareButtonsService);
        const shareSpy = spyOn(sbService, 'share').and.callThrough(); // spy on ShareButtonsService.share()
        const windowService = TestBed.get(WindowService);

        const testComponent = fixture.componentInstance;
        const shareButton = fixture.debugElement.query(By.directive(ShareButtonDirective));
        const args = new ShareArgs(encodeURIComponent(sArgs.url), sArgs.title, sArgs.description, sArgs.image, sArgs.tags);
        const shareUrl = Helper.shareFactory(sBtn.provider, args);

        fixture.detectChanges(); // trigger data binding

        shareButton.triggerEventHandler('click', null); // simulate click on button

        expect(shareSpy).toHaveBeenCalledTimes(1);
        expect(shareSpy.calls.first().args).toContain(sBtn.provider, args);

        expect(windowService.nativeWindow.open).toHaveBeenCalledTimes(1);
        expect(windowService.nativeWindow.open).toHaveBeenCalledWith(shareUrl, 'newwindow', sbService.windowAttr());
        expect(windowService.nativeWindow.setInterval).toHaveBeenCalledTimes(1);
        expect(windowService.nativeWindow.clearInterval).toHaveBeenCalledTimes(1); // make sure timeout handler has been cleared

        expect(testComponent.popUpCallback).toHaveBeenCalledWith(testComponent.sBtn.provider);
    });


    it('should render the share count and emit "sbCount" event if @Input("sbShowCount") is true and shareCount > 0', () => {

        const fixture = createTestComponent(`
         <button [shareButton]="sBtn.provider"
           [sbUrl]="sArgs.url"
           [sbTitle]="sArgs.title"
           [sbDescription]="sArgs.description"
           [sbImage]="sArgs.image"
           [sbTags]="sArgs.tags"
           [sbShowCount]="true"
           (sbCount)="countCallback($event)">
         </button>
       `);

        const sbService = TestBed.get(ShareButtonsService);

        const testComponent = fixture.componentInstance;
        const shareCount = 1999;

        const countSpy = spyOn(sbService, 'count').and.callFake(// spy on ShareButtonsService.count()
            (provider: ShareProvider, url: String, emitter: EventEmitter<number>) => {
                emitter.emit(shareCount);
            }
        );

        fixture.detectChanges(); // trigger data binding

        expect(countSpy).toHaveBeenCalledTimes(1);
        expect(countSpy.calls.first().args).toContain(sBtn.provider, encodeURIComponent(sArgs.url));
        expect(testComponent.countCallback).toHaveBeenCalledWith(shareCount);
    });
});

@Component({ selector: 'test-cmp', template: '' })
class TestComponent {

    sArgs = new ShareArgs('http://www.mysite.com', 'my title', 'my description', 'https://my/image.png', 'tag1,tag2');
    sBtn = new ShareButton(ShareProvider.LINKEDIN, '<i class="fa fa-linkedin"></i>', 'linkedin');

    countCallback = jasmine.createSpy('countCallback').and.callFake((count: number) => { });
    popUpCallback = jasmine.createSpy('popUpCallback').and.callFake((provider: ShareProvider) => { });
}
