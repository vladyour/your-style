import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableSort',
  pure: false
})
export class TableSortPipe implements PipeTransform {

  transform(value: any[], orders: any): any {
    let result = value.sort((a, b) => this.sort(a, b, orders));
    return result;
  }

  sort(a, b, orders): number {
    let keys = Object.keys(orders);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let order = orders[key];
      if (a[key] > b[key]) return order * 1;
      if (a[key] < b[key]) return order * -1;
    }

    return 0;
  }

}
