import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDirective } from './input/input.directive';
import { LabelComponent } from './label/label.component';
import { SelectComponent } from './select/single-select/select.component';
import {FormsModule} from "@angular/forms";
import { FilterSelectPipe } from './select/filter-select.pipe';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
import { FormFieldComponent } from './form-field/form-field.component';
import {LayoutModule} from "../layout/layout.module";
import {CalendarComponent} from "./date-time-picker/calendar/calendar.component";
import { CheckboxComponent } from './checkbox/checkbox.component';
import { OptionsComponent } from './select/options/options.component';
import { MultipleSelectComponent } from './select/multiple-select/multiple-select.component';
import {PopupAreaDirective} from "../layout/popup-area/popup-area.directive";


@NgModule({
  declarations: [
    InputDirective,
    LabelComponent,
    SelectComponent,
    FilterSelectPipe,
    DateTimePickerComponent,
    CalendarComponent,
    FormFieldComponent,
    CheckboxComponent,
    OptionsComponent,
    MultipleSelectComponent,
  ],
  exports: [
    InputDirective,
    LabelComponent,
    SelectComponent,
    MultipleSelectComponent,
    DateTimePickerComponent,
    FormFieldComponent,
    CheckboxComponent,
    OptionsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
  ],
  providers: [
    PopupAreaDirective
  ]
})
export class FormModule { }
