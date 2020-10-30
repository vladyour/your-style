import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import * as moment_ from 'moment';
const moment = moment_;

@Component({
  selector: 'your-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnChanges {

  @Output()
  onDateSelected = new EventEmitter();

  @Input()
  weekStartsWith: 0 | 1 = 1;

  @Input()
  locale = 'en';

  @Input()
  style;

  daysOfWeek;
  selectedMonthView;

  @Input()
  selectedDate;
  selectedMonth;
  selectedYear;

  constructor() {
    moment.updateLocale(this.locale, {
      week: {
        dow: this.weekStartsWith,
        doy: 1
      },
    });
  }

  ngOnInit(): void {
    this.initDaysOfWeek();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!!changes.selectedDate) {
      this.initInitialData();
      this.updateMonthView();
    }
  }

  initDaysOfWeek() {
    this.daysOfWeek = [];
    for (let i = 1; i <= 7; i++) {
      this.daysOfWeek.push(moment.weekdaysShort(i));
    }
  }

  initInitialData() {
    if (!this.selectedDate) {
      this.selectedDate = moment().startOf('day');
    } else {
      this.selectedDate = this.selectedDate.startOf('day');
    }
    this.selectedMonth = this.selectedDate;
  }

  updateSelectedMonth(delta: number) {
    this.selectedMonth.add(delta, 'M');
    this.updateMonthView();
  }

  updateMonthView() {
    this.selectedYear = moment(this.selectedMonth);

    const calendarViewStartDate = moment(this.selectedMonth).startOf('month').startOf('week');
    const calendarViewEndDate = moment(this.selectedMonth).endOf('month').endOf('week');

    this.selectedMonthView = [];
    let currentDate = calendarViewStartDate;
    while (currentDate.isSameOrBefore(calendarViewEndDate)) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        week.push(moment(currentDate));
        currentDate = currentDate.add(1, 'd');
      }
      this.selectedMonthView.push(week);
    }
  }

  selectDate($event, date) {
    this.onDateSelected.emit(date);
    $event.stopPropagation();
  }

  isDifferentMonth = (date: any) => date.month() != this.selectedMonth.month();
  isSelected = (date: any) => date.isSame(this.selectedDate);
  getDate = (date: any) => date.date();
  getSelectedMonthName = () => moment.months(this.selectedMonth.month());
  getSelectedYear = () => this.selectedYear.year();
}
