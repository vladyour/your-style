import {HostListener, OnChanges, OnInit, Renderer2, SimpleChanges} from "@angular/core";

export abstract class AbstractInput implements OnInit, OnChanges {

  parent;

  protected constructor(protected el, protected renderer: Renderer2) {}

  ngOnInit(): void {
    this.parent = this.el.parentElement;
    this.renderer.addClass(this.el, 'form_field_content');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  @HostListener('focus')
  onFocus() {
    this.renderer.addClass(this.parent, 'focused');
  }

  @HostListener('blur')
  onBlur() {
    // this.checkValueAndFixClass();
    this.renderer.removeClass(this.parent, 'focused');
  }

  // @HostListener('input')
  @HostListener('ngModelChange')
  checkValueAndFixClass() {
    console.log('ON MODEL CHANGE');
    if (this.hasValue()) {
      this.renderer.addClass(this.parent, 'filled');
    } else {
      this.renderer.removeClass(this.parent, 'filled');
    }
  }

  abstract hasValue(): boolean;
}
