import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDirective } from './input/input.directive';
import { LabelComponent } from './label/label.component';
import { SelectComponent } from './select/single-select/select.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilterSelectPipe } from './select/filter-select.pipe';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
import { FormFieldComponent } from './form-field/form-field.component';
import {LayoutModule} from '../layout/layout.module';
import {CalendarComponent} from './date-time-picker/calendar/calendar.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { OptionsComponent } from './select/options/options.component';
import { MultipleSelectComponent } from './select/multiple-select/multiple-select.component';
import { LoginComponent } from './login/login.component';
import {ButtonModule} from '../button/button.module';


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
    LoginComponent,
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
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    ReactiveFormsModule,
    ButtonModule,
  ]
})
export class FormModule { }
