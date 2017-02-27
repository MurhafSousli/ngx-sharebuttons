/* tslint:disable:no-unused-variable */
import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement, EventEmitter } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { ShareButtonsModule } from '../../share-buttons.module';
import { ShareButtonsComponent } from './share-buttons.component';
import { ShareButtonComponent } from '../share-button/share-button.component';
import { ShareButtonDirective } from './../../directives/share-button/share-button.directive';
import { NFormatterPipe } from '../../helpers/n-formatter.pipe';
import { ShareButtonsService } from '../../services/share-buttons.service';
import { WindowService } from '../../services/window.service';
import { ShareButton, ShareArgs, ShareProvider, Helper } from '../../helpers/index';

import { TestHelpers } from '../../test-helpers';

const createTestComponent = (html: string, detectChanges?: boolean) =>
    TestHelpers.createGenericTestComponent(html, detectChanges, TestComponent) as ComponentFixture<TestComponent>;
const getShareButtonsComponent = (fixture: ComponentFixture<TestComponent>): ShareButtonsComponent =>
    fixture.debugElement.query(By.css('share-buttons')).componentInstance as ShareButtonsComponent;


describe('ShareButtonsComponent (as a stand-alone component)', () => {
    const sArgs = new ShareArgs('http://www.mysite.com', 'my title', 'my description', 'https://my/image.png', 'tag1,tag2');
    let component: ShareButtonsComponent;
    let fixture: ComponentFixture<ShareButtonsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule, JsonpModule],
            declarations: [ShareButtonsComponent, ShareButtonComponent, ShareButtonDirective, NFormatterPipe],
            providers: [ShareButtonsService,
                { provide: WindowService, useClass: TestHelpers.MockWindowService }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShareButtonsComponent);
        component = fixture.componentInstance;
    });

    it('should render all share buttons by default', () => {

        // optional inputs
        component.url = sArgs.url;
        component.title = sArgs.title;
        component.description = sArgs.description;
        component.image = sArgs.image;
        component.tags = sArgs.tags;

        fixture.detectChanges(); // trigger data binding

        const sbButtons = fixture.debugElement.query(By.css('.sb-buttons'));

        expect(sbButtons).toBeTruthy();
        expect(sbButtons.children.length).toEqual(9); // currently 8 share buttons

        expect(sbButtons.query(By.css('.facebook'))).toBeTruthy();
        expect(sbButtons.query(By.css('.twitter'))).toBeTruthy();
        expect(sbButtons.query(By.css('.reddit'))).toBeTruthy();
        expect(sbButtons.query(By.css('.stumbleupon'))).toBeTruthy();
        expect(sbButtons.query(By.css('.linkedin'))).toBeTruthy();
        expect(sbButtons.query(By.css('.googleplus'))).toBeTruthy();
        expect(sbButtons.query(By.css('.pinterest'))).toBeTruthy();
        expect(sbButtons.query(By.css('.tumblr'))).toBeTruthy();
        expect(sbButtons.query(By.css('.whatsapp'))).toBeTruthy();
    });

    it('should render FACEBOOK button using default template and classes', () => {

        // optional inputs
        component.url = sArgs.url;
        component.title = sArgs.title;
        component.description = sArgs.description;
        component.image = sArgs.image;
        component.tags = sArgs.tags;

        fixture.detectChanges(); // trigger data binding

        const sbButtons = fixture.debugElement.query(By.css('.sb-buttons'));

        expect(sbButtons).toBeTruthy();

        // facebook button
        const fbButton = sbButtons.query(By.css('.facebook'));
        expect(fbButton).toBeTruthy();
        expect(fbButton.nativeElement.className).toEqual('sb-button facebook');

        const fbTemplate = fbButton.query(By.css('.sb-template'));
        expect(fbTemplate.nativeElement.innerHTML).toEqual('<i class="fa fa-facebook"></i>');
        // make sure that @Input of inner share-button have been properly bound
        const fbShareButtonComp = fbButton.componentInstance as ShareButtonComponent;
        expect(fbShareButtonComp.url).toEqual(component.url);
        expect(fbShareButtonComp.title).toEqual(component.title);
        expect(fbShareButtonComp.description).toEqual(component.description);
        expect(fbShareButtonComp.image).toEqual(component.image);
        expect(fbShareButtonComp.tags).toEqual(component.tags);

    });

    it('should NOT render FACEBOOK button when @Input("facebook") is false', () => {

        component.facebook = false;

        fixture.detectChanges(); // trigger data binding

        const fbButton = fixture.debugElement.query(By.css('.facebook'));

        expect(fbButton).toBeFalsy();

    });

    it('should render TWITTER button using default template and classes', () => {

        // optional inputs
        component.url = sArgs.url;
        component.title = sArgs.title;
        component.description = sArgs.description;
        component.image = sArgs.image;
        component.tags = sArgs.tags;

        fixture.detectChanges(); // trigger data binding

        const sbButtons = fixture.debugElement.query(By.css('.sb-buttons'));

        expect(sbButtons).toBeTruthy();

        // twitter button
        const twButton = sbButtons.query(By.css('.twitter'));
        expect(twButton).toBeTruthy();
        expect(twButton.nativeElement.className).toEqual('sb-button twitter');

        const twTemplate = twButton.query(By.css('.sb-template'));
        expect(twTemplate.nativeElement.innerHTML).toEqual('<i class="fa fa-twitter"></i>');
        // make sure that @Input of inner share-button have been properly bound
        const twShareButtonComp = twButton.componentInstance as ShareButtonComponent;
        expect(twShareButtonComp.url).toEqual(component.url);
        expect(twShareButtonComp.title).toEqual(component.title);
        expect(twShareButtonComp.description).toEqual(component.description);
        expect(twShareButtonComp.image).toEqual(component.image);
        expect(twShareButtonComp.tags).toEqual(component.tags);
    });

    it('should NOT render TWITTER button when @Input("twitter") is false', () => {

        component.twitter = false;

        fixture.detectChanges(); // trigger data binding

        const twButton = fixture.debugElement.query(By.css('.twitter'));

        expect(twButton).toBeFalsy();

    });

    it('should render REDDIT button using default template and classes', () => {

        // optional inputs
        component.url = sArgs.url;
        component.title = sArgs.title;
        component.description = sArgs.description;
        component.image = sArgs.image;
        component.tags = sArgs.tags;

        fixture.detectChanges(); // trigger data binding

        const sbButtons = fixture.debugElement.query(By.css('.sb-buttons'));

        expect(sbButtons).toBeTruthy();

        // reddit button
        const rdButton = sbButtons.query(By.css('.reddit'));
        expect(rdButton).toBeTruthy();
        expect(rdButton.nativeElement.className).toEqual('sb-button reddit');

        const rdTemplate = rdButton.query(By.css('.sb-template'));
        expect(rdTemplate.nativeElement.innerHTML).toEqual('<i class="fa fa-reddit-alien"></i>');
        // make sure that @Input of inner share-button have been properly bound
        const rdShareButtonComp = rdButton.componentInstance as ShareButtonComponent;
        expect(rdShareButtonComp.url).toEqual(component.url);
        expect(rdShareButtonComp.title).toEqual(component.title);
        expect(rdShareButtonComp.description).toEqual(component.description);
        expect(rdShareButtonComp.image).toEqual(component.image);
        expect(rdShareButtonComp.tags).toEqual(component.tags);
    });


    it('should NOT render REDDIT button when @Input("reddit") is false', () => {

        component.reddit = false;

        fixture.detectChanges(); // trigger data binding

        const rdButton = fixture.debugElement.query(By.css('.reddit'));

        expect(rdButton).toBeFalsy();

    });

    it('should render STUMBLEUPON button using default template and classes', () => {

        // optional inputs
        component.url = sArgs.url;
        component.title = sArgs.title;
        component.description = sArgs.description;
        component.image = sArgs.image;
        component.tags = sArgs.tags;

        fixture.detectChanges(); // trigger data binding

        const sbButtons = fixture.debugElement.query(By.css('.sb-buttons'));

        expect(sbButtons).toBeTruthy();

        // stumbleupon button
        const stButton = sbButtons.query(By.css('.stumbleupon'));
        expect(stButton).toBeTruthy();
        expect(stButton.nativeElement.className).toEqual('sb-button stumbleupon');

        const stTemplate = stButton.query(By.css('.sb-template'));
        expect(stTemplate.nativeElement.innerHTML).toEqual('<i class="fa fa-stumbleupon"></i>');
        // make sure that @Input of inner share-button have been properly bound
        const stShareButtonComp = stButton.componentInstance as ShareButtonComponent;
        expect(stShareButtonComp.url).toEqual(component.url);
        expect(stShareButtonComp.title).toEqual(component.title);
        expect(stShareButtonComp.description).toEqual(component.description);
        expect(stShareButtonComp.image).toEqual(component.image);
        expect(stShareButtonComp.tags).toEqual(component.tags);

    });

    it('should NOT render STUMBLEUPON button when @Input("stumbleUpOn") is false', () => {

        component.stumbleUpOn = false;

        fixture.detectChanges(); // trigger data binding

        const stButton = fixture.debugElement.query(By.css('.stumbleupon'));

        expect(stButton).toBeFalsy();

    });

    it('should render LINKEDIN button using default template and classes', () => {

        // optional inputs
        component.url = sArgs.url;
        component.title = sArgs.title;
        component.description = sArgs.description;
        component.image = sArgs.image;
        component.tags = sArgs.tags;

        fixture.detectChanges(); // trigger data binding

        const sbButtons = fixture.debugElement.query(By.css('.sb-buttons'));

        expect(sbButtons).toBeTruthy();

        // linkedin button
        const lnButton = sbButtons.query(By.css('.linkedin'));
        expect(lnButton).toBeTruthy();
        expect(lnButton.nativeElement.className).toEqual('sb-button linkedin');

        const lnTemplate = lnButton.query(By.css('.sb-template'));
        expect(lnTemplate.nativeElement.innerHTML).toEqual('<i class="fa fa-linkedin"></i>');
        // make sure that @Input of inner share-button have been properly bound
        const lnShareButtonComp = lnButton.componentInstance as ShareButtonComponent;
        expect(lnShareButtonComp.url).toEqual(component.url);
        expect(lnShareButtonComp.title).toEqual(component.title);
        expect(lnShareButtonComp.description).toEqual(component.description);
        expect(lnShareButtonComp.image).toEqual(component.image);
        expect(lnShareButtonComp.tags).toEqual(component.tags);
    });

    it('should NOT render LINKEDIN button when @Input("linkedIn") is false', () => {

        component.linkedIn = false;

        fixture.detectChanges(); // trigger data binding

        const lnButton = fixture.debugElement.query(By.css('.linkedin'));

        expect(lnButton).toBeFalsy();

    });


    it('should render GOOGLEPLUS button using default template and classes', () => {

        // optional inputs
        component.url = sArgs.url;
        component.title = sArgs.title;
        component.description = sArgs.description;
        component.image = sArgs.image;
        component.tags = sArgs.tags;

        fixture.detectChanges(); // trigger data binding

        const sbButtons = fixture.debugElement.query(By.css('.sb-buttons'));

        expect(sbButtons).toBeTruthy();

        // googleplus button
        const gplusButton = sbButtons.query(By.css('.googleplus'));
        expect(gplusButton).toBeTruthy();
        expect(gplusButton.nativeElement.className).toEqual('sb-button googleplus');

        const gplusTemplate = gplusButton.query(By.css('.sb-template'));
        expect(gplusTemplate.nativeElement.innerHTML).toEqual('<i class="fa fa-google-plus"></i>');
        // make sure that @Input of inner share-button have been properly bound
        const gplusShareButtonComp = gplusButton.componentInstance as ShareButtonComponent;
        expect(gplusShareButtonComp.url).toEqual(component.url);
        expect(gplusShareButtonComp.title).toEqual(component.title);
        expect(gplusShareButtonComp.description).toEqual(component.description);
        expect(gplusShareButtonComp.image).toEqual(component.image);
        expect(gplusShareButtonComp.tags).toEqual(component.tags);

    });

    it('should NOT render GOOGLEPLUS button when @Input("google") is false', () => {

        component.google = false;

        fixture.detectChanges(); // trigger data binding

        const gPlusButton = fixture.debugElement.query(By.css('.googleplus'));

        expect(gPlusButton).toBeFalsy();

    });

    it('should render TUMBLR button using default template and classes', () => {

        // optional inputs
        component.url = sArgs.url;
        component.title = sArgs.title;
        component.description = sArgs.description;
        component.image = sArgs.image;
        component.tags = sArgs.tags;

        fixture.detectChanges(); // trigger data binding

        const sbButtons = fixture.debugElement.query(By.css('.sb-buttons'));

        expect(sbButtons).toBeTruthy();

        // tumblr button
        const tbButton = sbButtons.query(By.css('.tumblr'));
        expect(tbButton).toBeTruthy();
        expect(tbButton.nativeElement.className).toEqual('sb-button tumblr');

        const tbTemplate = tbButton.query(By.css('.sb-template'));
        expect(tbTemplate.nativeElement.innerHTML).toEqual('<i class="fa fa-tumblr"></i>');
        // make sure that @Input of inner share-button have been properly bound
        const tbShareButtonComp = tbButton.componentInstance as ShareButtonComponent;
        expect(tbShareButtonComp.url).toEqual(component.url);
        expect(tbShareButtonComp.title).toEqual(component.title);
        expect(tbShareButtonComp.description).toEqual(component.description);
        expect(tbShareButtonComp.image).toEqual(component.image);
        expect(tbShareButtonComp.tags).toEqual(component.tags);


    });

    it('should NOT render TUMBLR button when @Input("tumblr") is false', () => {

        component.tumblr = false;

        fixture.detectChanges(); // trigger data binding

        const ptButton = fixture.debugElement.query(By.css('.tumblr'));

        expect(ptButton).toBeFalsy();

    });

    it('should render PINTEREST button using default template and classes', () => {

        // optional inputs
        component.url = sArgs.url;
        component.title = sArgs.title;
        component.description = sArgs.description;
        component.image = sArgs.image;
        component.tags = sArgs.tags;

        fixture.detectChanges(); // trigger data binding

        const sbButtons = fixture.debugElement.query(By.css('.sb-buttons'));

        expect(sbButtons).toBeTruthy();


        // pinterest button
        const ptButton = sbButtons.query(By.css('.pinterest'));
        expect(ptButton).toBeTruthy();
        expect(ptButton.nativeElement.className).toEqual('sb-button pinterest');

        const ptTemplate = ptButton.query(By.css('.sb-template'));
        expect(ptTemplate.nativeElement.innerHTML).toEqual('<i class="fa fa-pinterest-p"></i>');
        // make sure that @Input of inner share-button have been properly bound
        const ptShareButtonComp = ptButton.componentInstance as ShareButtonComponent;
        expect(ptShareButtonComp.url).toEqual(component.url);
        expect(ptShareButtonComp.title).toEqual(component.title);
        expect(ptShareButtonComp.description).toEqual(component.description);
        expect(ptShareButtonComp.image).toEqual(component.image);
        expect(ptShareButtonComp.tags).toEqual(component.tags);
    });

    it('should NOT render PINTEREST button when @Input("pinterest") is false', () => {

        component.pinterest = false;

        fixture.detectChanges(); // trigger data binding

        const ptButton = fixture.debugElement.query(By.css('.pinterest'));

        expect(ptButton).toBeFalsy();

    });

    it('should render WHATSAPP button using default template and classes', () => {

        // optional inputs
        component.url = sArgs.url;
        component.title = sArgs.title;
        component.description = sArgs.description;
        component.image = sArgs.image;
        component.tags = sArgs.tags;

        fixture.detectChanges(); // trigger data binding

        const sbButtons = fixture.debugElement.query(By.css('.sb-buttons'));

        expect(sbButtons).toBeTruthy();

        // whatsapp button
        const waButton = sbButtons.query(By.css('.whatsapp'));
        expect(waButton).toBeTruthy();
        expect(waButton.nativeElement.className).toEqual('sb-button whatsapp');

        const waTemplate = waButton.query(By.css('.sb-template'));
        expect(waTemplate.nativeElement.innerHTML).toEqual('<i class="fa fa-whatsapp"></i>');
        // make sure that @Input of inner share-button have been properly bound
        const waShareButtonComp = waButton.componentInstance as ShareButtonComponent;
        expect(waShareButtonComp.url).toEqual(component.url);
        expect(waShareButtonComp.title).toEqual(component.title);
        expect(waShareButtonComp.description).toEqual(component.description);
        expect(waShareButtonComp.image).toEqual(component.image);
        expect(waShareButtonComp.tags).toEqual(component.tags);
    });

    it('should NOT render WHATSAPP button when @Input("whatsapp") is false', () => {

        component.whatsApp = false;

        fixture.detectChanges(); // trigger data binding

        const waButton = fixture.debugElement.query(By.css('.whatsapp'));

        expect(waButton).toBeFalsy();

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


    it('should call "popUpClosed" with the provider referring to the button that was clicked', () => {

        const fixture = createTestComponent(`
         <share-buttons
           [url]="sArgs.url"
           [title]="sArgs.title"
           [description]="sArgs.description"
           [image]="sArgs.image"
           [tags]="sArgs.tags"
           (popUpClosed) = "popUpCallback($event)">
         </share-buttons>
       `);

        const sbService = TestBed.get(ShareButtonsService);
        const shareSpy = spyOn(sbService, 'share').and.callThrough(); // spy on ShareButtonsService.share()
        const windowService = TestBed.get(WindowService);

        const testComponent = fixture.componentInstance;
        const sbButtonDebugElements = fixture.debugElement.queryAll(By.css('share-button'));

        fixture.detectChanges(); // trigger data binding

        // simulate click on each button
        for (let de of sbButtonDebugElements) {

            const sbButtonComponent = de.componentInstance as ShareButtonComponent;
            const button = de.query(By.css('button'));
            const shareUrl = Helper.shareFactory(sbButtonComponent.button.provider, testComponent.sArgs);

            // simulate click on the  button to share
            button.triggerEventHandler('click', null);

            expect(windowService.nativeWindow.open).toHaveBeenCalledTimes(1);
            expect(windowService.nativeWindow.open).toHaveBeenCalledWith(shareUrl, 'newwindow', sbService.windowAttr());
            expect(windowService.nativeWindow.setInterval).toHaveBeenCalledTimes(1);
            expect(windowService.nativeWindow.clearInterval).toHaveBeenCalledTimes(1); // make sure timeout handler has been cleared


            //make sure that the 'popUpCallback' has been called with button that was clicked on
            expect(testComponent.popUpCallback).toHaveBeenCalledWith(sbButtonComponent.button.provider);
        }
    });


});


@Component({ selector: 'test-cmp', template: '' })
class TestComponent {

    sArgs = new ShareArgs('http://www.mysite.com', 'my title', 'my description', 'https://my/image.png', 'tag1,tag2');

    countCallback = jasmine.createSpy('countCallback').and.callFake((count: number) => { });
    popUpCallback = jasmine.createSpy('popUpCallback').and.callFake((provider: ShareProvider) => { });
}
