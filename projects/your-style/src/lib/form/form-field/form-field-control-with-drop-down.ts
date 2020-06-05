import {ElementRef, Renderer2, ViewChild} from "@angular/core";
import {ControlValueAccessor} from "@angular/forms";
import {DropDownMenuDirective} from "../../layout/drop-down-menu/drop-down-menu.directive";

export abstract class FormFieldControlWithDropDown implements ControlValueAccessor {

  abstract hideMenuOnSelect;

  @ViewChild(DropDownMenuDirective)
  dropDownMenu: DropDownMenuDirective;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private _value;
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;

    if (this.hideMenuOnSelect && !!this.dropDownMenu) {
      this.dropDownMenu.closeDropDown();
    }

    this.updateFilled();
  }

  updateFilled() {
    if (!!this.value && (!(this.value instanceof Array) || !!this.value.length)) {
      this.renderer.addClass(this.el.nativeElement.parentElement, 'filled');
    } else {
      this.renderer.removeClass(this.el.nativeElement.parentElement, 'filled');
    }
  }

  abstract writeValue(obj: any);

  onChangeValue: (_: any) => any;
  registerOnChange = (fn: any): void => {
    this.onChangeValue = fn;
  }

  registerOnTouched(fn: any): void {}
}
