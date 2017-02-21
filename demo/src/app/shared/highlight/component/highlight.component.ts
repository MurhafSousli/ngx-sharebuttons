import {Component, AfterViewInit, Input, ViewChild, ElementRef, ChangeDetectionStrategy} from '@angular/core';
import 'highlight.js/lib';
declare const hljs: any;

@Component({
  selector: 'highlight',
  template: `<pre><code [class]="lang" #code>{{codeString}}</code></pre>`,
  styleUrls: ['highlight.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HighlightComponent implements AfterViewInit {

  codeString;
  @Input() lang: string = '';

  @Input()
  set code(value) {
    this.codeString = value;
  }

  @ViewChild('code') el: ElementRef;

  constructor() {
    hljs.configure({
      tabReplace: '    ',
      classPrefix: '',
      languages: [
        'html',
        'javascript',
        'css'
      ]
    })
  }

  ngAfterViewInit() {
    hljs.highlightBlock(this.el.nativeElement);
  }

}
