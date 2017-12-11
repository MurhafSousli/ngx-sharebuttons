import { Injectable } from '@angular/core';

declare const global: any;
declare const window: any;

@Injectable()
export class UniversalSupportService {

    get nativeWindow() {
        try {
            return window;
        } catch (e) {
          return global;
        }
    }
}
