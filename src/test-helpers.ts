import { ElementRef } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';


export module TestHelpers {

    export const windowUrl = 'http://localhost/index.html'; // fake  url

    /**
     * Utility method to create test components with any html
     */
    export const createGenericTestComponent =
        <T>(html: string, detectChanges: boolean, type: { new (...sArgs: any[]): T }): ComponentFixture<T> => {
            TestBed.overrideComponent(type, { set: { template: html } });
            const fixture = TestBed.createComponent(type);
            if (detectChanges) {
                fixture.detectChanges();
            }
            return fixture as ComponentFixture<T>;
        };

    /**
     * Mock ElementRef for injection in tests
     */
    export class MockElementRef extends ElementRef { }

    /**
     * Mock WindowService  for injection in tests
     */
    export class MockWindowService {

        mockNativeWindow = {
            location: { href: windowUrl },
            open: jasmine.createSpy('open').and.callFake((url?: string, target?: string, features?: string, replace?: boolean): any => {
                return {
                    closed: true // window is closed
                };
            }),
            setInterval: jasmine.createSpy('setInterval').and.callFake((handler: (...args: any[]) => void, timeout: number) => {
                handler();
                return 1; // fake handle
            }),
            clearInterval: jasmine.createSpy('clearInterval').and.callFake((handle: number): void => { })
        };

        get nativeWindow() {
            return this.mockNativeWindow;
        }

    }
}
