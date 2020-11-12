import {ContentChild, Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {PopupAreaComponent} from './popup-area/popup-area.component';

@Directive({
  selector: '[yourPopupAreaTrigger]'
})
export class PopupAreaTriggerDirective implements OnInit {

  @Input('yourPopupAreaTrigger')
  triggerType: 'click' | 'hover' = 'click';

  @Input()
  popupDelay: number = 5;

  @ContentChild(PopupAreaComponent)
  popupArea: PopupAreaComponent;

  private openTimeout;
  private closeTimeout;

  el;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.el = element.nativeElement;
  }

  ngOnInit() {
    this.el = this.element.nativeElement;
    this.renderer.addClass(this.el, 'popup-area-trigger');
    if (this.triggerType == 'click') {
      this.renderer.addClass(this.el, 'clickable-area');
    }
  }

  @HostListener('click')
  onClick() {
    if (this.triggerType == 'click') {
      this.openPopupArea();
    }
  }

  @HostListener('document:click', ['$event'])
  onClose($event) {
    if (this.triggerType == 'click' && !this.el.contains($event.target)) {
      this.closePopupArea();
    }
  }

  @HostListener('document:keydown.escape')
  onPopupTriggerEscape() {
    this.closePopupArea();
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.triggerType == 'hover') {
      if (!!this.closeTimeout) {
        clearTimeout(this.closeTimeout);
      }
      this.openTimeout = setTimeout(this.openPopupArea, this.popupDelay);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.triggerType == 'hover') {
      if (!!this.openTimeout) {
        clearTimeout(this.openTimeout);
      }
      this.closeTimeout = setTimeout(this.closePopupArea, 150);
    }
  }

  private openPopupArea = () => {
    if (!!this.popupArea) {
      this.popupArea.open();
    } else {
      console.warn('This clicked/hovered element is trigger for a your-popup-area which is not provided.');
    }
  }
  private closePopupArea = () => {
    if (!!this.popupArea) {
      this.popupArea.close();
    }
  }
}
