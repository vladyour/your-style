import {Component, ElementRef, forwardRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {FormFieldControlWithDropDown} from "../form-field/form-field-control-with-drop-down";

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
export class SelectComponent extends FormFieldControlWithDropDown implements ControlValueAccessor, OnChanges {

  _options: any[];
  get options() {
    return this._options || []
  }
  @Input()
  set options(options: any[]) {
    this._options = options;
  }

  @Input()
  multiple: boolean = false;

  private _hideMenuOnSelect: boolean;
  get hideMenuOnSelect() {
    return this._hideMenuOnSelect != null ? this._hideMenuOnSelect : !this.multiple
  }
  @Input()
  set hideMenuOnSelect(hideMenuOnSelect) {
    this._hideMenuOnSelect = hideMenuOnSelect;
  }

  @Input()
  bindValue: any;

  @Input()
  labelValue: any;

  @Input()
  comparisonValue: any;

  @Input()
  yourStyle: string;

  @Input()
  filterFunction: (searchInput: string, option: any) => boolean = (searchInput, option) => {
    let labelValue = this.getLabelValue(option).toLowerCase();
    let splitSearch = searchInput.split(' ').filter(search => !!search);
    return !splitSearch.length || splitSearch.some(search => labelValue.includes(search.toLowerCase()));
  };

  searchValue: string;

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer)
  }

  ngOnChanges(changes: SimpleChanges): void {}

  onOptionSelect(option: any) {
    let bindValue = this.getBindValue(option);
    if (this.multiple) {
      if (!!this.value && !this.value.includes(bindValue)) {
        this.value = this.value.concat(bindValue);
      } else if (!this.value) {
        this.value = [bindValue];
      }
    } else {
      this.value = bindValue;
    }
    this.onChangeValue(this.value);
  }

  deleteSelected($event, index) {
    this.value.splice(index, 1);
    this.value = this.value.concat()
    this.onChangeValue(this.value);
  }

  clearValue($event) {
    $event.stopPropagation();
    this.value = this.multiple ? [] : null;
    this.onChangeValue(this.value);
  }

  getBindValue(option: any): any {
    if (typeof this.bindValue == 'string' && this.bindValue) {
      return option[this.bindValue];
    }

    if (typeof this.bindValue == 'function') {
      return this.bindValue(option);
    }

    return option;
  }

  getLabelValue(option: any): string {
    if (typeof this.labelValue == 'string' && this.labelValue) {
      return option[this.labelValue];
    }

    if (typeof this.labelValue == 'function') {
      return this.labelValue(option);
    }

    return option;
  }

  getSelectedLabel(value: any) {
    if (!!value && !!this.options) {
      let selectedOption = this.options.find(option => {
        if (!!this.comparisonValue) {
          return this.getComparisonValue(option) == this.getComparisonValue(value);
        }
        return this.getBindValue(option) == value;
      });
      if (!selectedOption) {
        return;
      }
      return this.getLabelValue(selectedOption);
    }
  }

  getComparisonValue(option: any) {
    if (typeof this.comparisonValue == 'string' && this.comparisonValue) {
      return option[this.comparisonValue];
    }

    if (typeof this.comparisonValue == 'function') {
      return this.comparisonValue(option);
    }

    return option;
  }

  writeValue(obj: any): void {
    if (!!obj) {
      this.value = this.options.find(option => this.getBindValue(option) == obj);
    }
    this.value = obj;
  }

  getStyle = () => this.yourStyle ? `${this.yourStyle}-card` : '';

  valueHasOption(option: any) {
    if (!option || !this.value) return false;

    let bindValue = this.getBindValue(option);
    if (this.multiple) {
      if (!!this.comparisonValue) {
        return !!this.value && this.value.some(value => this.getComparisonValue(option) == this.getComparisonValue(value));
      } else {
        return !!this.value && this.value.includes(bindValue);
      }
    } else {
      if (!!this.comparisonValue) {
        return this.getComparisonValue(option) == this.getComparisonValue(this.value)
      } else {
        return this.value == bindValue;
      }
    }
  }
}
