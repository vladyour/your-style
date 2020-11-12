import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter',
  pure: false
})
export class TableFilterPipe implements PipeTransform {

  transform(data: any[], filter: string[]): any {
    return data.filter(row => this.filter(row, filter));
  }

  filter = (row: any, filter: any) => {
    const keys = Object.keys(filter);
    return keys.every(key => {
      const filterValue = filter[key];
      if (!filterValue) {
        return true;
      }

      const cellValue = row[key];
      if (!cellValue) {
        return false;
      }

      const splitFilterValue = filterValue.trim().split(' ');
      return splitFilterValue.some(v => cellValue.toString().includes(v));
    });
  }
}
