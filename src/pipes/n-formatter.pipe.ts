import { Pipe, PipeTransform } from '@angular/core';
import { Helper } from '../helpers/share.helper';

@Pipe({
  name: 'nFormatter'
})
export class NFormatterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (typeof value === 'number') {
      return Helper.nFormatter(value, args);
    }
    throw new Error('A number is expected for nFormatter');
  }

}
