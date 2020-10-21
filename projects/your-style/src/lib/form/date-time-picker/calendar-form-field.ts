import { ElementRef, Renderer2, Directive } from "@angular/core";
import {ControlValueAccessor} from "@angular/forms";
import {DropdownFormField} from "../input/dropdown-form-field";

@Directive()
export abstract class CalendarFormField extends DropdownFormField implements ControlValueAccessor {

  abstract hideMenuOnSelect;

  constructor(protected element: ElementRef, protected renderer: Renderer2) {
    super(element.nativeElement, renderer);
  }

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

  abstract writeValue(obj: any);

  onChangeValue: (_: any) => any;
  registerOnChange = (fn: any): void => {
    this.onChangeValue = fn;
  }

  registerOnTouched(fn: any): void {}
}
