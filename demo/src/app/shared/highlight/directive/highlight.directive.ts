import {Directive, ElementRef, AfterViewInit, Renderer} from '@angular/core';
import 'highlight.js/lib';
declare const hljs: any;

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements AfterViewInit{

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  ngAfterViewInit() {
    this.renderer.setElementStyle(this.el.nativeElement, 'display', 'inline');
    hljs.highlightBlock(this.el.nativeElement);
  }

}
