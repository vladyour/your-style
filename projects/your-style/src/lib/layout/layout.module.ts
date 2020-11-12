import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FlexBoxDirective } from './flex-box/flex-box.directive';
import { FlexBoxBasisDirective } from './flex-box/flex-box-basis.directive';
import { TabComponent } from './tab-group/tab/tab.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { PopupAreaTriggerDirective } from './popup-area/popup-area-trigger.directive';
import { ConfirmationAreaComponent } from './confirmation-area/confirmation-area.component';
import { ButtonModule } from '../button/button.module';
import { NavbarComponent } from './navbar/navbar.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PopupAreaComponent } from './popup-area/popup-area/popup-area.component';



@NgModule({
  declarations: [
    CardComponent,
    FlexBoxDirective,
    FlexBoxBasisDirective,
    TabComponent,
    TabGroupComponent,
    PopupAreaTriggerDirective,
    PopupAreaComponent,
    ConfirmationAreaComponent,
    NavbarComponent,
  ],
  exports: [
    CardComponent,
    FlexBoxDirective,
    FlexBoxBasisDirective,
    TabGroupComponent,
    TabComponent,
    PopupAreaTriggerDirective,
    PopupAreaComponent,
    ConfirmationAreaComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class LayoutModule { }
