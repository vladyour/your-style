import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSkeletonDirective } from './skeleton/loading-skeleton.directive';
import { LoadingSkeletonBoxDirective } from './skeleton/loading-skeleton-box.directive';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';



@NgModule({
  declarations: [
    LoadingSkeletonDirective,
    LoadingSkeletonBoxDirective,
    LoadingBarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingSkeletonDirective,
    LoadingSkeletonBoxDirective,
    LoadingBarComponent
  ]
})
export class LoadingModule { }
