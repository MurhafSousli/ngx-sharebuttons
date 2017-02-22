import {Directive, ElementRef, AfterViewInit, Renderer} from '@angular/core';

import 'prismjs/prism';
declare const Prism: any;

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements AfterViewInit{

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  ngAfterViewInit() {
    this.renderer.setElementStyle(this.el.nativeElement, 'display', 'inline');
    this.renderer.setElementStyle(this.el.nativeElement, 'padding', '5px');
    Prism.highlightElement(this.el.nativeElement, true);

  }

}
