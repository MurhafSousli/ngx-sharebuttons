import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'kebabCase'
})
export class KebabCasePipe implements PipeTransform {
  transform(value: string): string {
    return toKebabCase(value);
  }
}

function toKebabCase(str: string): string {
  return str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');
}
