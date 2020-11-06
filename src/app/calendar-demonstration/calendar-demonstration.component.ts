import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'ysd-calendar-demonstration',
  templateUrl: './calendar-demonstration.component.html',
  styleUrls: ['./calendar-demonstration.component.scss']
})
export class CalendarDemonstrationComponent implements OnInit {

  date = new Date();
  calendarForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.calendarForm = this.fb.group({
      date: this.fb.control(null)
    });

    this.calendarForm.valueChanges.subscribe(form => console.log(form));
  }

}
