import { ElementRef, Renderer2, Directive } from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';
import {DropdownFormField} from '../input/dropdown-form-field';

@Directive()
export abstract class CalendarFormField extends DropdownFormField implements ControlValueAccessor {

  private _value;
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;

    if (this.hideMenuOnSelect && !!this.popupArea) {
      this.closePopupArea();
    }

    this.checkValueAndFixClass();
  }

  abstract hideMenuOnSelect;

  onChangeValue: (_: any) => any;

  protected constructor(protected element: ElementRef, protected renderer: Renderer2) {
    super(element.nativeElement, renderer);
  }

  abstract writeValue(obj: any);
  registerOnChange = (fn: any): void => {
    this.onChangeValue = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
