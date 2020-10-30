import {Component, ElementRef, Input, OnChanges, OnInit, Renderer2} from '@angular/core';
import {LoadingActivator} from '../loading-activator';

@Component({
  selector: 'your-loading-bar',
  templateUrl: './loading-bar.component.html'
})
export class LoadingBarComponent extends LoadingActivator implements OnInit, OnChanges {

  private parentEl;

  @Input()
  barHeight: string = '3px';

  @Input()
  color: string;

  constructor(elRef: ElementRef, protected renderer: Renderer2) {
    super(elRef.nativeElement, renderer);
  }

  ngOnInit(): void {
    this.parentEl = this.element.parentElement;
    this.renderer.setStyle(this.element, 'height', this.barHeight);
    this.renderer.addClass(this.parentEl, 'loading-bar-holder');
    this.renderer.addClass(this.element, `loading-bar-${this.color}`);
  }


}
