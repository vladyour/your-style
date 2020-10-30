import {Component, ElementRef, forwardRef, Input, Renderer2} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {AbstractSelect} from '../abstract-select';

@Component({
  selector: 'your-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
  }]
})
export class SelectComponent extends AbstractSelect<any> {

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
  }

  @Input()
  closeOnSelect = true;

  getSelectedOptions(): any[] {
    return this.options.filter(this.optionIsSelected);
  }

  hasValue(): boolean {
    return this.value != null && (typeof this.value != 'string' || !!this.value.length);
  }

  optionIsSelected = (option): boolean => {
    if (!this.hasValue()) {
      return false;
    }

    const bindValueOfOption = this.getBindValue(option);
    const keyOfOption = this.getKeyOfBindValue(bindValueOfOption);

    const keyOfValue = this.getKeyOfBindValue(this.value);
    return keyOfValue == keyOfOption;
  }

  updateValueWithValue(value) {
    this.value = value;
  }
}
