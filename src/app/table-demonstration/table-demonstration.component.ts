import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ysd-table-demonstration',
  templateUrl: './table-demonstration.component.html',
  styleUrls: ['./table-demonstration.component.scss']
})
export class TableDemonstrationComponent implements OnInit {

  data: any[];

  displayColumns: string[];

  columnNames: string[];

  constructor() { }

  ngOnInit(): void {
    this.data = [
      {firstName: 'Helen', secondName: 'Brown', age: 15},
      {firstName: 'Elizabeth', secondName: 'Harman', age: 18},
      {firstName: 'Victor', secondName: 'Gugo', age: 48},
      {firstName: 'Albert', secondName: 'Einstein', age: 54},
    ];

    this.displayColumns = ['firstName', 'secondName'];
    this.columnNames = ['First name', 'Second name'];
  }


}
