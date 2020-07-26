import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ysd-calendar-demonstration',
  templateUrl: './calendar-demonstration.component.html',
  styleUrls: ['./calendar-demonstration.component.scss']
})
export class CalendarDemonstrationComponent implements OnInit {

  date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
