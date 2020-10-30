import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';
import {StyleBase} from '../core/style-base';

@Directive({
  selector: '[yourButton]'
})
export class ButtonDirective extends StyleBase {

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
  }

  getTagPrefix = () => 'your-btn';

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.blur();
  }
}
