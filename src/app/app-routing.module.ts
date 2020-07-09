import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SelectDemonstrationComponent} from "./select-demonstration/select-demonstration.component";
import {BadgeDemonstrationComponent} from "./badge-demonstration/badge-demonstration.component";
import {ButtonDemonstrationComponent} from "./button-demonstration/button-demonstration.component";


const routes: Routes = [
  {
    path: 'select',
    component: SelectDemonstrationComponent
  },
  {
    path: 'badge',
    component: BadgeDemonstrationComponent
  },
  {
    path: 'button',
    component: ButtonDemonstrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
