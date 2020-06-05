import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FlexBoxDirective } from './flex-box/flex-box.directive';
import { FlexBoxBasisDirective } from './flex-box/flex-box-basis.directive';
import { DropDownMenuDirective } from './drop-down-menu/drop-down-menu.directive';
import { DropDownTriggerDirective } from './drop-down-menu/drop-down-trigger.directive';
import { TabComponent } from './tab-group/tab/tab.component';
import { TabGroupComponent } from './tab-group/tab-group.component';



@NgModule({
  declarations: [CardComponent, FlexBoxDirective, FlexBoxBasisDirective, DropDownMenuDirective, DropDownTriggerDirective, TabComponent, TabGroupComponent],
  exports: [
    CardComponent,
    FlexBoxDirective,
    FlexBoxBasisDirective,
    DropDownMenuDirective,
    DropDownTriggerDirective,
    TabGroupComponent,
    TabComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
