import {HostListener, OnInit, Renderer2} from "@angular/core";

export abstract class AbstractInput implements OnInit {

  parent;

  protected constructor(protected el, protected renderer: Renderer2) {}

  ngOnInit(): void {
    this.parent = this.el.parentElement;
    this.renderer.addClass(this.el, 'form_field_content');
  }

  @HostListener('focus')
  onFocus() {
    this.renderer.addClass(this.parent, 'focused');
  }

  @HostListener('blur')
  onBlur() {
    this.checkValueAndFixClass();
    this.renderer.removeClass(this.parent, 'focused');
  }

  @HostListener('input')
  @HostListener('ngModelChange')
  checkValueAndFixClass() {
    if (this.hasValue()) {
      this.renderer.addClass(this.parent, 'filled');
    } else {
      this.renderer.removeClass(this.parent, 'filled');
    }
  }

  abstract hasValue(): boolean;
}
