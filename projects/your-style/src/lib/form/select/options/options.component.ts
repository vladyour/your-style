import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PopupAreaDirective} from "../../../layout/popup-area/popup-area.directive";

@Component({
  selector: 'your-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {

  @Input()
  options: any[] = [];

  @Input()
  selectedOptions: any[] = [];

  @Input()
  disabledOptions: any[] = [];

  @Input()
  filterFunction: (searchInput: string, option: any) => boolean = (searchInput, option) => {
    let labelValue = this.labelValue(option).toLowerCase();
    let splitSearch = searchInput.split(' ').filter(search => !!search);
    return !splitSearch.length || splitSearch.some(search => labelValue.includes(search.toLowerCase()));
  };

  searchValue: string;

  @Input()
  labelValue: (option) => string;

  getLabelValue = (option) => {
    let label;
    if (typeof this.labelValue == 'string' && !!this.labelValue) label = option[this.labelValue];
    if (typeof this.labelValue == 'function') label = this.labelValue(option);
    return label || option;
  }

  @Output()
  onSelect: EventEmitter<any> = new EventEmitter();

  @Input()
  closeOnSelect = true;

  @Input()
  searchEnabled: boolean = false;

  constructor(private popupAreaDirective: PopupAreaDirective) { }

  onOptionSelect($event, option) {
    if (this.optionIsSelected(option) || this.optionIsDisabled(option)) return;

    this.onSelect.emit(option);
    $event.stopPropagation();

    if (this.closeOnSelect) {
      this.popupAreaDirective.close();
    }
  }

  optionIsSelected(option: any): boolean {
    return this.selectedOptions && this.selectedOptions.includes(option);
  }

  optionIsDisabled(option: any): boolean {
    return this.disabledOptions && this.disabledOptions.includes(option);
  }

}
