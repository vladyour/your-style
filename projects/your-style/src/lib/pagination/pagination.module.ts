import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';



@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule
  ],
  exports: [PagesComponent]
})
export class PaginationModule { }
