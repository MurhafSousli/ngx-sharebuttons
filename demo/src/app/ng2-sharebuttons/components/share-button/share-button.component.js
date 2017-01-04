import { Component, Input, Output, EventEmitter, Renderer, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { ShareArgs } from "../../helpers/share-buttons.class";
import { ShareButtonsService } from "../../service/share-buttons.service";
import { WindowService } from "../../service/window.service";
export var ShareButtonComponent = (function () {
    function ShareButtonComponent(sbService, renderer, elementRef, window) {
        this.sbService = sbService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        /** Show count, disabled by default */
        this.count = false;
        /** Output button count to calculate total share counts */
        this.countOuter = new EventEmitter();
        /** Output pop up closed*/
        this.popUpClosed = new EventEmitter();
        this.window = window.nativeWindow;
    }
    ShareButtonComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        /** If URL is not presented then set the current URL    */
        if (this.url) {
            /** If URL is presented check if it is a valid URL */
            var r = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            if (!r.test(this.url)) {
                console.warn('ShareButtons: Invalid URL, switching to window.location.href');
                /** Use encodeURIComponent to get the full URL including after the hash */
                this.url = this.window ?
                    encodeURIComponent(this.window.location.href)
                    : typeof global != 'undefined' ? global.url : '';
            }
        }
        else {
            /** This supposed to fix window when undefined on Universal */
            this.url = this.window ?
                encodeURIComponent(this.window.location.href) :
                typeof global != 'undefined' ? global.url : '';
        }
        /** Set button template */
        this.renderer.setElementProperty(this.btn.nativeElement, 'innerHTML', this.button.template);
        /** Set buttons classes */
        var classes = this.button.classes.match(/\S+/g) || [];
        classes.map(function (btnClass) { return _this.renderer.setElementClass(_this.btn.nativeElement, btnClass, true); });
        /** Add share count if enabled */
        if (this.count) {
            this.sbService.count(this.button.provider, this.url)
                .subscribe(function (shareCount) {
                if (shareCount) {
                    var counter = _this.renderer.createElement(_this.elementRef.nativeElement, 'span');
                    _this.renderer.setElementClass(counter, 'sb-button-count', true);
                    _this.renderer.setElementProperty(counter, 'textContent', _this.nFormatter(shareCount, 1));
                    _this.countOuter.emit(shareCount);
                }
            });
        }
    };
    /** Open share window */
    ShareButtonComponent.prototype.share = function () {
        var _this = this;
        var shareArgs = new ShareArgs(this.url, this.title, this.description, this.image, this.tags);
        var popUp = this.window.open(this.sbService.share(this.button.provider, shareArgs), 'newwindow', this.sbService.windowAttr());
        var pollTimer = this.window.setInterval(function () {
            if (popUp.closed !== false) {
                _this.window.clearInterval(pollTimer);
                _this.popUpClosed.emit(_this.button.provider);
            }
        }, 200);
    };
    ShareButtonComponent.prototype.nFormatter = function (num, digits) {
        var si = [
            { value: 1E18, symbol: "E" },
            { value: 1E15, symbol: "P" },
            { value: 1E12, symbol: "T" },
            { value: 1E9, symbol: "G" },
            { value: 1E6, symbol: "M" },
            { value: 1E3, symbol: "K" }
        ], rx = /\.0+$|(\.[0-9]*[1-9])0+$/, i;
        for (i = 0; i < si.length; i++) {
            if (num >= si[i].value) {
                return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
            }
        }
        return num.toFixed(digits).replace(rx, "$1");
    };
    ShareButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'share-button',
                    template: '<button  #btn (click)="share()"></button>',
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    ShareButtonComponent.ctorParameters = [
        { type: ShareButtonsService, },
        { type: Renderer, },
        { type: ElementRef, },
        { type: WindowService, },
    ];
    ShareButtonComponent.propDecorators = {
        'url': [{ type: Input },],
        'title': [{ type: Input },],
        'description': [{ type: Input },],
        'image': [{ type: Input },],
        'tags': [{ type: Input },],
        'button': [{ type: Input },],
        'count': [{ type: Input },],
        'countOuter': [{ type: Output },],
        'popUpClosed': [{ type: Output },],
        'btn': [{ type: ViewChild, args: ['btn',] },],
    };
    return ShareButtonComponent;
}());
//# sourceMappingURL=share-button.component.js.map