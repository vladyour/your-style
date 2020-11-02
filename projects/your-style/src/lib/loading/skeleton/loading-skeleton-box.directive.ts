import {
  AfterContentChecked,
  AfterContentInit, AfterViewInit,
  ContentChildren,
  Directive, ElementRef,
  Input, OnChanges,
  QueryList, Renderer2, SimpleChanges,
  TemplateRef, ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {LoadingSkeletonDirective} from './loading-skeleton.directive';
import {LoadingActivator} from '../loading-activator';

@Directive({
  selector: '[yourLoadingSkeletonBox]'
})
export class LoadingSkeletonBoxDirective extends LoadingActivator implements AfterContentInit, OnChanges {

  @ContentChildren(LoadingSkeletonDirective, {descendants: true})
  skeletons: QueryList<LoadingSkeletonDirective>;

  @Input('yourLoadingSkeletonBox')
  tumbler: boolean = false;

  @Input()
  visualEffect: 'opacity' | 'none';

  constructor(el: ElementRef, protected renderer: Renderer2) {
    super(el.nativeElement, renderer);
  }

  ngAfterContentInit() {
    const skeletonNumber = this.skeletons?.length || 500;
    const beat = 500 / skeletonNumber;
    this.skeletons.forEach((skeleton, index) => {
      skeleton.calculateDelayAndSet((index + 1), beat);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
    if (!changes.visualEffect || changes.visualEffect.currentValue == 'opacity') {
      this.renderer.addClass(this.element, 'opacity');
    } else {
      this.renderer.removeClass(this.element, 'opacity');
    }
  }
}
