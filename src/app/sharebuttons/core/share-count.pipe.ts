import { Pipe, PipeTransform } from '@angular/core';
import { shareCountFormatter } from './utils';

@Pipe({
  name: 'shareCount'
})
export class ShareCountPipe implements PipeTransform {
  transform(num: number, digits?: number) {
    return shareCountFormatter(num, digits);
  }
}
