import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableSort',
  pure: false
})
export class TableSortPipe implements PipeTransform {

  transform(value: any[], orders: any): any {
    const result = value.sort((a, b) => this.sort(a, b, orders));
    return result;
  }

  sort(a, b, orders): number {
    const keys = Object.keys(orders);
    for (const key of keys) {
      const order = orders[key];
      if (a[key] > b[key]) { return order * 1; }
      if (a[key] < b[key]) { return order * -1; }
    }

    return 0;
  }

}
