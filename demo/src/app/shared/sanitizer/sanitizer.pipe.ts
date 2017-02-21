import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'sanitizeHtml'
})
export class SanitizerPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
