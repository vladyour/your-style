import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SelectDemonstrationComponent} from "./select-demonstration/select-demonstration.component";
import {BadgeDemonstrationComponent} from "./badge-demonstration/badge-demonstration.component";


const routes: Routes = [
  {
    path: 'select',
    component: SelectDemonstrationComponent
  },
  {
    path: 'badge',
    component: BadgeDemonstrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
