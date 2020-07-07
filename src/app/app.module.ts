import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectDemonstrationComponent } from './select-demonstration/select-demonstration.component';
import {FormModule, LayoutModule} from "your-style";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SelectDemonstrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormModule,
    LayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
