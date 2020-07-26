import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FlexBoxDirective } from './flex-box/flex-box.directive';
import { FlexBoxBasisDirective } from './flex-box/flex-box-basis.directive';
import { TabComponent } from './tab-group/tab/tab.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { PopupAreaDirective } from './popup-area/popup-area.directive';
import { PopupAreaTriggerDirective } from "./popup-area/popup-area-trigger.directive";
import { ConfirmationAreaComponent } from './confirmation-area/confirmation-area.component';
import { ButtonModule } from "../button/button.module";



@NgModule({
  declarations: [
    CardComponent,
    FlexBoxDirective,
    FlexBoxBasisDirective,
    TabComponent,
    TabGroupComponent,
    PopupAreaTriggerDirective,
    PopupAreaDirective,
    ConfirmationAreaComponent,
  ],
  exports: [
    CardComponent,
    FlexBoxDirective,
    FlexBoxBasisDirective,
    TabGroupComponent,
    TabComponent,
    PopupAreaTriggerDirective,
    PopupAreaDirective,
    ConfirmationAreaComponent
  ],
    imports: [
        CommonModule,
        ButtonModule
    ]
})
export class LayoutModule { }
