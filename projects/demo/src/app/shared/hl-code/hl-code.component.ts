import { ChangeDetectionStrategy, Component, Input, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { delay, finalize, map, take } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';
import { NgScrollbar } from 'ngx-scrollbar';

@Component({
  selector: 'hl-code',
  templateUrl: './hl-code.component.html',
  styleUrls: ['./hl-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HlCodeComponent implements AfterViewInit {

  state$ = new BehaviorSubject({
    copied: false
  });
  @Input() code: string;
  @Input() height: number;

  @ViewChild('codeEL', {read: ElementRef}) codeEl: ElementRef;
  @ViewChild(NgScrollbar) scrollbars: NgScrollbar;

  constructor(private cd: ChangeDetectorRef, private platform: Platform, @Inject(DOCUMENT) private document: any) {
  }

  ngAfterViewInit() {
    this.updateHeight();
  }

  updateHeight() {
    if (!this.height && this.codeEl) {
      this.updateState({height: this.codeEl.nativeElement.offsetHeight + 'px'});
    } else {
      this.updateState({height: this.height + 'px'});
    }
  }

  private updateState(state) {
    this.state$.next({...this.state$.value, ...state});
    this.cd.detectChanges();
  }

  copy() {
    of(this.code).pipe(
      map((text: string) => {

        // Create a hidden TextArea element
        const textArea: HTMLTextAreaElement = <HTMLTextAreaElement>this.document.createElement('textarea');
        textArea.value = text;
        this.document.body.appendChild(textArea);

        // highlight TextArea to copy the text
        if (this.platform.IOS) {
          const range = this.document.createRange();
          range.selectNodeContents(textArea);
          const selection = this.document.defaultView.getSelection();
          selection.removeAllRanges();
          selection.addRange(range);
          textArea.readOnly = true;
          textArea.setSelectionRange(0, 999999);
        } else {
          textArea.select();
        }
        this.document.execCommand('copy');
        this.document.body.removeChild(textArea);
        this.updateState({copied: true});
      }),
      take(1),
      delay(3500),
      finalize(() => this.updateState({copied: false}))
    ).subscribe();
  }
}
