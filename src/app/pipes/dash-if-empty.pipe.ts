import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashIfEmpty',
  standalone: true
})
export class DashIfEmptyPipe implements PipeTransform {

  transform(value: any): string | any {
    const IS_EMPTY = value === undefined || value === null || value === "";
    if (IS_EMPTY) return '-';
    return value;
  }

}
