import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectDemonstrationComponent } from './select-demonstration/select-demonstration.component';
import {FormsModule} from "@angular/forms";
import { BadgeDemonstrationComponent } from './badge-demonstration/badge-demonstration.component';
import {FormModule} from "../../projects/your-style/src/lib/form/form.module";
import {LayoutModule} from "../../projects/your-style/src/lib/layout/layout.module";
import { ButtonDemonstrationComponent } from './button-demonstration/button-demonstration.component';
import {ButtonModule} from "../../projects/your-style/src/lib/button/button.module";
import { CalendarDemonstrationComponent } from './calendar-demonstration/calendar-demonstration.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectDemonstrationComponent,
    BadgeDemonstrationComponent,
    ButtonDemonstrationComponent,
    CalendarDemonstrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormModule,
    LayoutModule,
    FormsModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
