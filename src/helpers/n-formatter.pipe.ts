import { Pipe, PipeTransform } from '@angular/core';
import { Helper } from './index';

@Pipe({
    name: 'nFormatter'
})
export class NFormatterPipe implements PipeTransform {

    transform(num: any, digits?: any): any {

        if (typeof num !== 'number') {
            throw new Error('A number is expected for nFormatter');
        }

        return Helper.nFormatter(num, digits);
    }

}
