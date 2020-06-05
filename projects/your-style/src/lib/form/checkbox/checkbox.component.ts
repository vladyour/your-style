import {Component, forwardRef, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'your-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
  }]
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {

  checked: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click')
  onClick() {
    this.checked = !this.checked;
    this.onChange(this.checked);
  }

  onChange;
  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {}

  writeValue(obj: any): void {
    this.checked = obj;
  }

}
