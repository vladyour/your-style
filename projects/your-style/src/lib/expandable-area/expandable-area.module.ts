import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableAreaComponent } from './expandable-area/expandable-area.component';
import {ButtonModule} from '../button/button.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [ExpandableAreaComponent],
  imports: [
    CommonModule,
    ButtonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    ExpandableAreaComponent
  ]
})
export class ExpandableAreaModule { }
