import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'okr-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {

  @Input()
  data: [];

  @Input()
  displayedColumns = [];

  filter: any = {};
  sort: any = {};

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.setFilter(this.route.snapshot.queryParams);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!!changes.data && !!changes.data.currentValue) {
      this.displayedColumns = Object.keys(changes.data.currentValue[0] || []);
      this.data = changes.data.currentValue;
    }
  }

  setFilter = (filter) => {
    let keys = Object.keys(filter) || [];
    keys.forEach(key => this.filter[key] = filter[key]);
  };

  onFilterChange = () => {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: this.filter,
        queryParamsHandling: 'merge'
      });
  };

  changeSort(key: string) {
    let oldSort = this.sort;
    let oldKeys = Object.keys(oldSort);

    this.sort = {};

    if (oldSort[key]) {
      this.sort[key] = -1 * oldSort[key];
    } else {
      this.sort[key] = 1;
    }

    oldKeys.forEach(key => {
      if (!this.sort[key]) {
        this.sort[key] = oldSort[key];
      }
    });
  }

}
