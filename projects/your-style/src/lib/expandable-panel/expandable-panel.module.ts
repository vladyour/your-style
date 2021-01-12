import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandablePanelComponent } from './expandable-panel.component';



@NgModule({
  declarations: [ExpandablePanelComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ExpandablePanelComponent
  ]
})
export class ExpandablePanelModule { }
