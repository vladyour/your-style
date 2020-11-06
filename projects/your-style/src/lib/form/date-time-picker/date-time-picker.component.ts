import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  Renderer2,
} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import * as moment_ from 'moment';
const moment = moment_;
import {CalendarFormField} from './calendar-form-field';

@Component({
  selector: 'your-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateTimePickerComponent),
    multi: true
  }]
})
export class DateTimePickerComponent extends CalendarFormField {

  @Input()
  placeholder: string;

  @Input()
  yourStyle: string;

  @Input()
  hideMenuOnSelect = true;

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
  }

  onDateSelect = (newDate) => {
    this.value = newDate;
    if (!!newDate) {
      const date = this.value.toDate();
      this.onChangeValue(date.setMinutes(date.getMinutes() - date.getTimezoneOffset()));
    } else {
      this.onChangeValue(null);
    }
  }

  writeValue(date: Date): void {
    if (!!date) {
      this.value = moment(date);
    } else {
      this.value = null;
    }
  }

  getValueLabel() {
    if (!!this.value) {
      return this.value.format('DD.MM.YYYY');
    }
  }

  clearValue($event: MouseEvent) {
    $event.stopPropagation();
    this.onDateSelect(null);
  }

  hasValue(): boolean {
    return !!this.value;
  }
}
