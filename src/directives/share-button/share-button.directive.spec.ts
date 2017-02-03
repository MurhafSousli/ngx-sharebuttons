/* tslint:disable:no-unused-variable, max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ShareButtonsModule } from '../../share-buttons.module';
import { ShareButtonDirective } from './share-button.directive';
import { ShareButtonsService } from '../../service/share-buttons.service';
import { WindowService } from './../../service/window.service';
import { ShareButton, ShareArgs, ShareProvider, Helper } from '../../helpers';
import { TestHelpers } from '../../test-helpers';

const createTestComponent = (html: string, detectChanges?: boolean) =>
    TestHelpers.createGenericTestComponent(html, detectChanges, TestComponent) as ComponentFixture<TestComponent>;

const sArgs = new ShareArgs('http://www.mysite.com', 'my title', 'my description', 'https://my/image.png', 'tag1,tag2');
const sBtn = new ShareButton(ShareProvider.LINKEDIN, '<i class="fa fa-linkedin"></i>', 'linkedin');

describe('ShareButtonDirective', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ShareButtonsModule, HttpModule, JsonpModule],
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

    it('should call share() when the button is clicked and emit "popUpClosed" event', () => {

        const fixture = createTestComponent(`
         <button [shareButton] ="sBtn.provider" 
           [url]="sArgs.url" 
           [title]="sArgs.title" 
           [description]="sArgs.description" 
           [image]="sArgs.image" 
           [tags]="sArgs.tags"
           [count]="true"
           (popUpClosed) = "popUpCallback($event)">
         </button>
       `);

        const sbService = TestBed.get(ShareButtonsService);
        const windowService = TestBed.get(WindowService);

        const testComponent = fixture.componentInstance;
        const shareButton = fixture.debugElement.query(By.directive(ShareButtonDirective));
        const args = new ShareArgs(encodeURIComponent(sArgs.url), sArgs.title, sArgs.description, sArgs.image, sArgs.tags);
        const shareUrl = Helper.shareFactory(sBtn.provider, args);

        fixture.detectChanges(); // trigger data binding

        shareButton.triggerEventHandler('click', null); // simulate click on button

        expect(windowService.nativeWindow.open.calls.count()).toBe(1);
        expect(windowService.nativeWindow.open.calls.mostRecent().args).toEqual([shareUrl, 'newwindow', sbService.windowAttr()]);
        expect(windowService.nativeWindow.setInterval.calls.count()).toBe(1);
        expect(windowService.nativeWindow.clearInterval.calls.count()).toBe(1); // make sure timeout handler has been cleared

        expect(testComponent.popUpCallback).toHaveBeenCalledWith(testComponent.sBtn.provider);
    });


    it('should render the share count and emit "countOuter" event if @Input("count") is true and shareCount > 0', () => {

        const fixture = createTestComponent(`
         <button [shareButton]="sBtn.provider" 
           [url]="sArgs.url" 
           [title]="sArgs.title" 
           [description]="sArgs.description" 
           [image]="sArgs.image" 
           [tags]="sArgs.tags"
           [count]="true"
           (countOuter) = "countCallback($event)">
         </button>
       `);

        const sbService = TestBed.get(ShareButtonsService);

        const testComponent = fixture.componentInstance;
        const shareCount = 1999;
        const countSpy = spyOn(sbService, 'count').and.callFake(// spy on ShareButtonsService.count()
            (provider: ShareProvider, url: String) => Observable.of(shareCount)
        );

        fixture.detectChanges(); // trigger data binding

        expect(countSpy).toHaveBeenCalledWith(sBtn.provider, encodeURIComponent(sArgs.url));
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
