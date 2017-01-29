/* tslint:disable:no-unused-variable */
import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement, ElementRef, Renderer } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';


import { ShareButtonsModule } from './../../share-buttons.module';
import { ShareButtonsComponent } from './share-buttons.component';
import { ShareButtonComponent } from './../share-button/share-button.component';
import { NFormatterPipe } from './../../helpers/n-formatter.pipe';
import { ShareButtonsService } from './../../service/share-buttons.service';
import { WindowService } from './../../service/window.service';
import { ShareButton, ShareArgs } from './../../helpers/share-buttons.class';
import { ShareProvider } from './../../helpers/share-provider.enum';

import { TestHelpers } from '../../test-helpers';



const sArgs = new ShareArgs('http://www.mysite.com', 'my title', 'my description', 'https://my/image.png', 'tag1,tag2');

describe('ShareButtonsComponent (as a stand-alone component)', () => {
    let component: ShareButtonsComponent;
    let fixture: ComponentFixture<ShareButtonsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule, JsonpModule],
            declarations: [ShareButtonsComponent, ShareButtonComponent, NFormatterPipe],
            providers: [ShareButtonsService, Renderer,
                { provide: WindowService, useClass: TestHelpers.MockWindowService },
                { provide: ElementRef, useClass: TestHelpers.MockElementRef }]
        })
            .compileComponents();
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
        expect(sbButtons.children.length).toEqual(8); // currently 8 share buttons

        expect(sbButtons.query(By.css('.facebook'))).toBeTruthy();
        expect(sbButtons.query(By.css('.twitter'))).toBeTruthy();
        expect(sbButtons.query(By.css('.reddit'))).toBeTruthy();
        expect(sbButtons.query(By.css('.stumbleupon'))).toBeTruthy();
        expect(sbButtons.query(By.css('.linkedin'))).toBeTruthy();
        expect(sbButtons.query(By.css('.googleplus'))).toBeTruthy();
        expect(sbButtons.query(By.css('.pinterest'))).toBeTruthy();
        expect(sbButtons.query(By.css('.tumblr'))).toBeTruthy();
    });

    it('should render "shareTitle" when provided', () => {

        component.shareTitle = 'My share buttons';

        fixture.detectChanges(); // trigger data binding

        const sbTitle = fixture.debugElement.query(By.css('.sb-title'));
        expect(sbTitle).toBeTruthy();

        expect(sbTitle.nativeElement.innerText).toEqual(component.shareTitle);
    });

    it('should render "count" when @Input("totalCount") is true and "tCount" > 0', () => {

        component.totalCount = true;
        component.tCount = 1988;

        fixture.detectChanges(); // trigger data binding

        let sbCount = fixture.debugElement.query(By.css('.sb-count'));
        expect(sbCount).toBeTruthy();
        expect(sbCount.nativeElement.innerText).toEqual('2K'); // test NFormatterPipe as well!

    });


    it('should NOT render "count" when @Input("totalCount") is true and "tCount" = 0', () => {

        component.totalCount = true;
        component.tCount = 0;

        fixture.detectChanges(); // trigger data binding

        let sbCount = fixture.debugElement.query(By.css('.sb-count'));
        expect(sbCount).toBeFalsy();
    });

    it('should NOT render "count" when @Input("totalCount") is false and "tCount" >', () => {

        component.totalCount = false;
        component.tCount = 1988;

        fixture.detectChanges(); // trigger data binding

        let sbCount = fixture.debugElement.query(By.css('.sb-count'));
        expect(sbCount).toBeFalsy();
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
        expect(fbButton.nativeElement.className).toEqual('facebook');
        expect(fbButton.nativeElement.innerHTML).toEqual('<i class="fa fa-facebook"></i>');
        // make sure that @Input of inner share-button have been properly bound 
        const fbShareButtonComp = fbButton.context as ShareButtonComponent;
        expect(fbShareButtonComp.url).toEqual(encodeURIComponent(component.url));
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
        expect(twButton.nativeElement.className).toEqual('twitter');
        expect(twButton.nativeElement.innerHTML).toEqual('<i class="fa fa-twitter"></i>');
        // make sure that @Input of inner share-button have been properly bound 
        const twShareButtonComp = twButton.context as ShareButtonComponent;
        expect(twShareButtonComp.url).toEqual(encodeURIComponent(component.url));
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
        expect(rdButton.nativeElement.className).toEqual('reddit');
        expect(rdButton.nativeElement.innerHTML).toEqual('<i class="fa fa-reddit-alien"></i>');
        // make sure that @Input of inner share-button have been properly bound 
        const rdShareButtonComp = rdButton.context as ShareButtonComponent;
        expect(rdShareButtonComp.url).toEqual(encodeURIComponent(component.url));
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
        expect(stButton.nativeElement.className).toEqual('stumbleupon');
        expect(stButton.nativeElement.innerHTML).toEqual('<i class="fa fa-stumbleupon"></i>');
        // make sure that @Input of inner share-button have been properly bound 
        const stShareButtonComp = stButton.context as ShareButtonComponent;
        expect(stShareButtonComp.url).toEqual(encodeURIComponent(component.url));
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
        expect(lnButton.nativeElement.className).toEqual('linkedin');
        expect(lnButton.nativeElement.innerHTML).toEqual('<i class="fa fa-linkedin"></i>');
        // make sure that @Input of inner share-button have been properly bound 
        const lnShareButtonComp = lnButton.context as ShareButtonComponent;
        expect(lnShareButtonComp.url).toEqual(encodeURIComponent(component.url));
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
        expect(gplusButton.nativeElement.className).toEqual('googleplus');
        expect(gplusButton.nativeElement.innerHTML).toEqual('<i class="fa fa-google-plus"></i>');
        // make sure that @Input of inner share-button have been properly bound 
        const gplusShareButtonComp = gplusButton.context as ShareButtonComponent;
        expect(gplusShareButtonComp.url).toEqual(encodeURIComponent(component.url));
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
        expect(tbButton.nativeElement.className).toEqual('tumblr');
        expect(tbButton.nativeElement.innerHTML).toEqual('<i class="fa fa-tumblr"></i>');
        // make sure that @Input of inner share-button have been properly bound 
        const tbShareButtonComp = tbButton.context as ShareButtonComponent;
        expect(tbShareButtonComp.url).toEqual(encodeURIComponent(component.url));
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
        expect(ptButton.nativeElement.className).toEqual('pinterest');
        expect(ptButton.nativeElement.innerHTML).toEqual('<i class="fa fa-pinterest-p"></i>');
        // make sure that @Input of inner share-button have been properly bound 
        const ptShareButtonComp = ptButton.context as ShareButtonComponent;
        expect(ptShareButtonComp.url).toEqual(encodeURIComponent(component.url));
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


});


