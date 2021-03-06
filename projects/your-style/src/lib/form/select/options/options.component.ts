import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PopupAreaComponent} from '../../../layout/popup-area/popup-area/popup-area.component';

@Component({
  selector: 'your-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {

  constructor(private popupArea: PopupAreaComponent) { }

  @Input()
  options: any[] = [];

  @Input()
  selectedOptions: any[] = [];

  @Input()
  disabledOptions: any[] = [];

  searchValue: string;

  @Input()
  labelValue: ((option) => string) | string;

  @Output()
  onSelect: EventEmitter<any> = new EventEmitter();

  @Input()
  closeOnSelect = true;

  @Input()
  searchEnabled: boolean = false;

  @Input()
  filterFunction: (searchInput: string, option: any) => boolean = (searchInput, option) => {
    const labelValue = this.getLabelValue(option).toLowerCase();
    const splitSearch = searchInput.split(' ').filter(search => !!search);
    return !splitSearch.length || splitSearch.some(search => labelValue.includes(search.toLowerCase()));
  }

  getLabelValue = (option) => {
    let label;
    if (typeof this.labelValue == 'string' && !!this.labelValue) { label = option[this.labelValue]; }
    if (typeof this.labelValue == 'function') { label = this.labelValue(option); }
    return label || option;
  }

  onOptionSelect($event, option) {
    if (this.optionIsSelected(option) || this.optionIsDisabled(option)) { return; }

    this.onSelect.emit(option);
    $event.stopPropagation();

    if (this.closeOnSelect) {
      this.popupArea.close();
    }
  }

  optionIsSelected(option: any): boolean {
    return this.selectedOptions && this.selectedOptions.includes(option);
  }

  optionIsDisabled(option: any): boolean {
    return this.disabledOptions && this.disabledOptions.includes(option);
  }

}
