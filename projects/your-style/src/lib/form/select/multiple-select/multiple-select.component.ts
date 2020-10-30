import {Component, ElementRef, forwardRef, Input, OnInit, Renderer2} from '@angular/core';
import {AbstractSelect} from '../abstract-select';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'your-multiple-select',
  templateUrl: './multiple-select.component.html',
  styleUrls: ['./multiple-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MultipleSelectComponent),
    multi: true
  }]
})
export class MultipleSelectComponent extends AbstractSelect<any[]> implements OnInit {

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
  }

  @Input()
  closeOnSelect = false;

  getSelectedOptions = (): any[] => {
    if (!this.options) {
      return [];
    }
    return this.options.filter(this.optionIsSelected);
  }

  optionIsSelected = (option): boolean => {
    if (!this.hasValue()) {
      return false;
    }
    const bindValue = this.getBindValue(option);
    const keyOfBindValue = this.getKeyOfBindValue(bindValue);
    return this.value.some(v => this.getKeyOfBindValue(v) == keyOfBindValue);
  }

  hasValue(): boolean {
    return this.value != null && !!this.value.length;
  }

  updateValueWithValue(value) {
    if (!this.value) {
      this.value = [];
    }
    this.value.push(value);
  }

  deleteOption($event, index) {
    $event.stopPropagation();
    this.value.splice(index, 1);
    if (!this.value.length) {
      this.value = null;
    }
    this.onValueUpdate();
  }
}
