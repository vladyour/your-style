import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[yourDropDownMenu]'
})
export class DropDownMenuDirective implements OnInit {

  private height = '250px';
  element;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.element = this.el.nativeElement;
    this.renderer.addClass(this.el.nativeElement, 'your_drop_down_content');
  }

  @HostListener('document:click', ['$event'])
  onClick($event) {
    if (!this.element.parentElement.contains($event.target)) {
      this.closeDropDown();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeDropDown();
    this.element.blur();
    this.element.parentElement.blur();
  }

  openDropDown() {
    this.renderer.setStyle(this.element, 'max-height', this.height);
  }

  closeDropDown() {
    this.renderer.setStyle(this.element, 'max-height', 0);
  }
}
