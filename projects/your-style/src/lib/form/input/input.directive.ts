import {AfterContentInit, Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[yourInput]'
})
export class InputDirective implements OnInit, AfterContentInit {

  parent;
  hasValue: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.parent = this.el.nativeElement.parentElement;
  }

  ngAfterContentInit(): void {
    this.checkValueAndFixClass();
  }

  @HostListener('focus')
  onFocus() {
    this.renderer.addClass(this.parent, 'focused');
  }

  @HostListener('blur')
  onBlur() {
    this.renderer.removeClass(this.parent, 'focused');
    this.checkValueAndFixClass();
  }

  @HostListener('input')
  @HostListener('ngModelChange')
  checkValueAndFixClass() {
    this.hasValue = !!this.el.nativeElement.value;
    if (this.hasValue) {
      this.renderer.addClass(this.parent, 'filled');
    } else {
      this.renderer.removeClass(this.parent, 'filled');
    }
  }

}
