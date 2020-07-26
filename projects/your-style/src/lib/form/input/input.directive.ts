import {AfterViewInit, Directive, ElementRef, Renderer2} from '@angular/core';
import {AbstractInput} from "./abstract-input";

@Directive({
  selector: '[yourInput]'
})
export class InputDirective extends AbstractInput implements AfterViewInit {

  constructor(private elementRef: ElementRef, protected renderer: Renderer2) {
    super(elementRef.nativeElement, renderer);
  }

  hasValue(): boolean {
    return this.el.value;
  }

  ngAfterViewInit() {
    this.checkValueAndFixClass();
  }
}
