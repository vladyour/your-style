import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'your-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {

  private _data: any[];
  get data(): any[] {
    return this._data;
  }
  @Input()
  set data(value: any[]) {
    this._data = value;
  }

  private _displayedColumns = [];
  get displayedColumns(): any[] {
    return this._displayedColumns;
  }
  @Input()
  set displayedColumns(value: any[]) {
    this._displayedColumns = value;
  }

  private _columnNames: string[] = [];
  get columnNames(): string[] {
    return this._columnNames;
  }
  @Input()
  set columnNames(value: string[]) {
    this._columnNames = value;
  }

  private _noNumeration: boolean = false;
  get noNumeration(): boolean {
    return this._noNumeration;
  }
  @Input()
  set noNumeration(value: boolean) {
    this._noNumeration = value;
  }

  private _filterEnabled: boolean = true;
  get filterEnabled(): boolean {
    return this._filterEnabled;
  }
  @Input()
  set filterEnabled(value: boolean) {
    this._filterEnabled = value;
  }

  filter: any = {};
  sort: any = {};

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.setFilter(this.route.snapshot.queryParams);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!!changes.data && !!changes.data.currentValue) {
      if ((!changes.displayColumns || !changes.displayColumns.currentValue) && !this.displayedColumns.length) {
        this.displayedColumns = Object.keys(changes.data.currentValue[0] || []);
      }
      if ((!changes.columnNames || !changes.columnNames.currentValue) && !this.columnNames.length) {
        this.columnNames = this.displayedColumns;
      }
    }
  }

  setFilter = (filter) => {
    const keys = Object.keys(filter) || [];
    keys.forEach(key => this.filter[key] = filter[key]);
  }

  onFilterChange = () => {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: this.filter,
        queryParamsHandling: 'merge'
      });
  }

  changeSort(key: string) {
    const oldSort = this.sort;
    const oldKeys = Object.keys(oldSort);

    this.sort = {};

    if (oldSort[key]) {
      this.sort[key] = -1 * oldSort[key];
    } else {
      this.sort[key] = 1;
    }

    oldKeys.forEach(oldKey => {
      if (!this.sort[oldKey]) {
        this.sort[oldKey] = oldSort[oldKey];
      }
    });
  }

}
