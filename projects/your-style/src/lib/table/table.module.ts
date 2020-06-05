import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableComponent} from "./table.component";
import {FormsModule} from "@angular/forms";
import {TableFilterPipe} from "./pipes/table-filter.pipe";



@NgModule({
  declarations: [
    TableComponent,
    TableFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
