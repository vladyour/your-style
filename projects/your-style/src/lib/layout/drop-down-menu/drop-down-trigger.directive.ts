import {
  ContentChild,
  Directive,
  ElementRef,
  HostListener, Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import {DropDownMenuDirective} from "./drop-down-menu.directive";

@Directive({
  selector: '[yourDropDownTrigger]'
})
export class DropDownTriggerDirective implements OnInit {

  @ContentChild(DropDownMenuDirective)
  dropDownMenu: DropDownMenuDirective;

  @Input()
  yourDropDownTrigger: 'click' | 'hover' | null = 'click';

  opened: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setAttribute(this.el.nativeElement, 'tabindex', '0');
    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
  }

  @HostListener('focus')
  onFocus() {
    this.openDropDown();
  }

  @HostListener('click', ['$event'])
  onClick($event) {
    if (!this.dropDownMenu.element.contains($event.target)) {
      this.openDropDown();
    }
  }

  @HostListener('mouseover')
  onHoverIn() {
    if (this.yourDropDownTrigger == 'hover') {
      this.openDropDown();
    }
  }

  @HostListener('mouseleave')
  onHoverOut() {
    if (this.yourDropDownTrigger == 'hover') {
      this.closeDropDown();
    }
  }

  openDropDown() {
    this.opened = true;
    this.dropDownMenu.openDropDown();
  }

  closeDropDown() {
    this.opened = false;
    this.dropDownMenu.closeDropDown();
  }
}
