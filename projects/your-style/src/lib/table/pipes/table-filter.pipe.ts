import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter',
  pure: false
})
export class TableFilterPipe implements PipeTransform {

  transform(data: [], filters: string[]): any {
    return data.filter(row => this.filter(row, filters));
  }

  filter = (row: any, filter: any) => {
    let keys = Object.keys(filter);
    return keys.every(key => row[key].toString().toLowerCase().includes(filter[key].toLowerCase()));
  };

}
