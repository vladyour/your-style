import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectDemonstrationComponent } from './select-demonstration/select-demonstration.component';
import {FormsModule} from '@angular/forms';
import { BadgeDemonstrationComponent } from './badge-demonstration/badge-demonstration.component';
import { ButtonDemonstrationComponent } from './button-demonstration/button-demonstration.component';
import { CalendarDemonstrationComponent } from './calendar-demonstration/calendar-demonstration.component';
import { NavbarDemonstrationComponent } from './navbar-demonstration/navbar-demonstration.component';
import { LoginDemonstrationComponent } from './login-demonstration/login-demonstration.component';
import { LoadingSkeletonDemonstrationComponent } from './loading/loading-skeleton-demonstration/loading-skeleton-demonstration.component';
import { LoadingBarDemonstrationComponent } from './loading/loading-bar-demonstration/loading-bar-demonstration.component';
import {ButtonModule, FormModule, LayoutModule, LoadingModule} from 'your-style';

@NgModule({
  declarations: [
    AppComponent,
    SelectDemonstrationComponent,
    BadgeDemonstrationComponent,
    ButtonDemonstrationComponent,
    CalendarDemonstrationComponent,
    NavbarDemonstrationComponent,
    LoginDemonstrationComponent,
    LoadingSkeletonDemonstrationComponent,
    LoadingBarDemonstrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormModule,
    LayoutModule,
    FormsModule,
    ButtonModule,
    LoadingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
