import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SelectDemonstrationComponent} from './select-demonstration/select-demonstration.component';
import {BadgeDemonstrationComponent} from './badge-demonstration/badge-demonstration.component';
import {ButtonDemonstrationComponent} from './button-demonstration/button-demonstration.component';
import {CalendarDemonstrationComponent} from './calendar-demonstration/calendar-demonstration.component';
import {LoginDemonstrationComponent} from './login-demonstration/login-demonstration.component';
import {LoadingSkeletonDemonstrationComponent} from './loading/loading-skeleton-demonstration/loading-skeleton-demonstration.component';
import {LoadingBarDemonstrationComponent} from './loading/loading-bar-demonstration/loading-bar-demonstration.component';
import {PagesDemonstrationComponent} from './pagination/pages-demonstration/pages-demonstration.component';
import {ExpandableAreaDemonstrationComponent} from './expandable-area-demonstration/expandable-area-demonstration.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'expandable-area',
    pathMatch: 'full'
  },
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
  },
  {
    path: 'calendar',
    component: CalendarDemonstrationComponent
  },
  {
    path: 'login',
    component: LoginDemonstrationComponent
  },
  {
    path: 'loading',
    children: [
      {
        path: '',
        redirectTo: 'skeleton',
        pathMatch: 'full'
      },
      {
        path: 'skeleton',
        component: LoadingSkeletonDemonstrationComponent
      },
      {
        path: 'bar',
        component: LoadingBarDemonstrationComponent
      }
    ]
  },
  {
    path: 'pagination',
    children: [
      {
        path: '',
        redirectTo: 'pages',
        pathMatch: 'full'
      },
      {
        path: 'pages',
        component: PagesDemonstrationComponent
      }
    ]
  },
  {
    path: 'expandable-area',
    component: ExpandableAreaDemonstrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
