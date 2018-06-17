import { PipeTransform } from '@angular/core';
export declare class ShareCountPipe implements PipeTransform {
    transform(num: number, digits?: number): string;
}
