import {ControlValueAccessor} from '@angular/forms';
import { ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, Directive } from '@angular/core';
import {DropdownFormField} from '../input/dropdown-form-field';

@Directive()
export abstract class AbstractSelect<T> extends DropdownFormField implements ControlValueAccessor, OnInit, OnChanges {
  get value() {
    return this._value;
  }
  set value(newValue) {
    this._value = newValue;
    this.onValueUpdate();
  }

  protected constructor(protected element: ElementRef, protected renderer: Renderer2) {
    super(element.nativeElement, renderer);
  }

  formFieldElement;

  private _value: T;

  @Input()
  options: any[];

  @Input()
  disabledOptions: any[];

  onChange;

  @Input()
  bindValue;

  @Input()
  keyOfValue;

  @Input()
  labelValue;

  @Input()
  filterFunction: (searchInput: string, option: any) => boolean = (searchInput, option) => {
    const labelValue = this.getLabelValue(option).toLowerCase();
    const splitSearch = searchInput.split(' ').filter(search => !!search);
    return !splitSearch.length || splitSearch.some(search => labelValue.includes(search.toLowerCase()));
  }

  ngOnChanges(changes: SimpleChanges) {}

  ngOnInit() {
    this.formFieldElement = this.el.parentElement;
    super.ngOnInit();
  }
  registerOnChange(fn: any): void { this.onChange = fn; }

  writeValue(obj: any): void {
    this._value = obj;
    this.updateStyle();
  }

  selectOption(option) {
    const bindValue = this.getBindValue(option);
    this.updateValueWithValue(bindValue);
    this.onValueUpdate();
  }

  abstract getSelectedOptions(): any[];

  abstract optionIsSelected(option): boolean;

  abstract updateValueWithValue(value);

  clearValue($event: Event) {
    this.value = null;
    $event.stopPropagation();
  }

  onValueUpdate = () => {
    this.onChange(this.value);
  }

  private updateStyle() {
    if (this.hasValue()) {
      this.renderer.addClass(this.formFieldElement, 'filled');
    } else {
      this.renderer.removeClass(this.formFieldElement, 'filled');
    }
  }

  abstract hasValue(): boolean;

  protected getBindValue(option: any): any {
    if (typeof this.bindValue == 'string' && this.bindValue) { return option[this.bindValue]; }
    if (typeof this.bindValue == 'function') { return this.bindValue(option); }
    return option;
  }

  getOptionByBindValue(value) {
    const key = this.getKeyOfBindValue(value);
    return this.options.find(option => {
      const bindValue = this.getBindValue(option);
      const keyOfBindValue = this.getKeyOfBindValue(bindValue);
      return key == keyOfBindValue;
    }) || value;
  }

  protected getKeyOfBindValue = (bindValue) => {
    if (typeof this.keyOfValue == 'string' && !!this.keyOfValue) { return bindValue[this.keyOfValue]; }
    if (typeof this.keyOfValue == 'function') { return this.keyOfValue(bindValue); }
    return bindValue;
  }

  getLabelValue = (option) => {
    let label;
    if (typeof this.labelValue == 'string' && !!this.labelValue) { label = option[this.labelValue]; }
    if (typeof this.labelValue == 'function') { label = this.labelValue(option); }
    return label || option;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}

