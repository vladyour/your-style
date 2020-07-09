import {ContentChild, Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {PopupAreaDirective} from "./popup-area.directive";

@Directive({
  selector: '[yourPopupAreaTrigger]'
})
export class PopupAreaTriggerDirective implements OnInit {

  @Input()
  yourPopupAreaTrigger: 'click' | 'hover' = 'click';

  @Input()
  popupDelay: number = 5;

  @ContentChild(PopupAreaDirective)
  popupArea: PopupAreaDirective;

  private openTimeout;
  private closeTimeout;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'popup-area-trigger');
    if (this.yourPopupAreaTrigger == 'click') {
      this.renderer.addClass(this.el.nativeElement, 'clickable-area');
    }
  }

  @HostListener('click')
  onClick() {
    if (this.yourPopupAreaTrigger == 'click') {
      this.openPopupArea();
    }
  }

  @HostListener('document:click', ['$event'])
  onClose($event) {
    if (this.yourPopupAreaTrigger == 'click' && !this.el.nativeElement.contains($event.target)) {
      this.closePopupArea();
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.yourPopupAreaTrigger == 'hover') {
      if (!!this.closeTimeout) {
        clearTimeout(this.closeTimeout);
      }

      this.openTimeout = setTimeout(() => {
        this.openPopupArea();
      }, this.popupDelay);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.yourPopupAreaTrigger == 'hover') {
      if (!!this.openTimeout) {
        clearTimeout(this.openTimeout);
      }

      this.closeTimeout = setTimeout(() => {
        this.closePopupArea();
      }, 150);
    }
  }

  private openPopupArea() {
    this.validate();
    this.popupArea.open();
  }

  private closePopupArea() {
    this.validate();
    this.popupArea.close();
  }

  private validate() {
    if (!this.popupArea) {
      throw 'There is no any element with attribute \'[popupArea]\'.'
    }
  }

}
