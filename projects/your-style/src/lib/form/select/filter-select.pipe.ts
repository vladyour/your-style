import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSelect'
})
export class FilterSelectPipe implements PipeTransform {

  transform(options: any[], search: string, filterFunction: (search: string, option: any) => boolean): any {
    return !search ? (options || []) : (options || []) && options.filter(option => filterFunction(search, option));
  }
}
