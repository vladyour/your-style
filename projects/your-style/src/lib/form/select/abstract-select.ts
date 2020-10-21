import {ControlValueAccessor} from "@angular/forms";
import { ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, Directive } from "@angular/core";
import {DropdownFormField} from "../input/dropdown-form-field";

@Directive()
export abstract class AbstractSelect<T> extends DropdownFormField implements ControlValueAccessor, OnInit, OnChanges {

  protected constructor(protected element: ElementRef, protected renderer: Renderer2) {
    super(element.nativeElement, renderer);
  }

  ngOnChanges(changes: SimpleChanges) {}

  formFieldElement;

  ngOnInit() {
    this.formFieldElement = this.el.parentElement;
    super.ngOnInit();
  }

  private _value: T;
  get value() {
    return this._value;
  }
  set value(newValue) {
    this._value = newValue;
    this.onValueUpdate();
  }

  @Input()
  options: any[];

  @Input()
  filterFunction: (searchInput: string, option: any) => boolean = (searchInput, option) => {
    let labelValue = this.getLabelValue(option).toLowerCase();
    let splitSearch = searchInput.split(' ').filter(search => !!search);
    return !splitSearch.length || splitSearch.some(search => labelValue.includes(search.toLowerCase()));
  };

  @Input()
  disabledOptions: any[];

  onChange;
  registerOnChange(fn: any): void { this.onChange = fn }

  writeValue(obj: any): void {
    this._value = obj;
    this.updateStyle();
  }

  selectOption(option) {
    let bindValue = this.getBindValue(option);
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

  @Input()
  bindValue;

  protected getBindValue(option: any): any {
    if (typeof this.bindValue == 'string' && this.bindValue) return option[this.bindValue];
    if (typeof this.bindValue == 'function') return this.bindValue(option);
    return option;
  }

  getOptionByBindValue(value) {
    let key = this.getKeyOfBindValue(value);
    return this.options.find(option => {
      let bindValue = this.getBindValue(option);
      let keyOfBindValue = this.getKeyOfBindValue(bindValue);
      return key == keyOfBindValue;
    }) || value;
  }

  @Input()
  keyOfValue;

  protected getKeyOfBindValue = (bindValue) => {
    if (typeof this.keyOfValue == 'string' && !!this.keyOfValue) return bindValue[this.keyOfValue];
    if (typeof this.keyOfValue == 'function') return this.keyOfValue(bindValue);
    return bindValue;
  }

  @Input()
  labelValue;

  getLabelValue = (option) => {
    let label;
    if (typeof this.labelValue == 'string' && !!this.labelValue) label = option[this.labelValue];
    if (typeof this.labelValue == 'function') label = this.labelValue(option);
    return label || option;
  }

  registerOnTouched(fn: any): void {}
}

