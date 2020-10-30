import {HostListener, Renderer2, ViewChild, Directive, OnInit} from '@angular/core';
import {PopupAreaDirective} from '../../layout/popup-area/popup-area.directive';
import {AbstractInput} from './abstract-input';

@Directive()
export abstract class DropdownFormField extends AbstractInput {

  @ViewChild(PopupAreaDirective)
  popupArea: PopupAreaDirective;

  protected constructor(protected el, protected renderer: Renderer2) {
    super(el, renderer);
  }

  ngOnInit() {
    this.renderer.setAttribute(this.el, 'tabindex', '0');
    super.ngOnInit();
  }

  @HostListener('click')
  @HostListener('keydown.enter')
  onPopupTriggerClick() {
      this.openPopupArea();
  }

  @HostListener('document:click', ['$event'])
  onPopupTriggerClickOut($event) {
    if (!this.el.contains($event.target)) {
      this.closePopupArea();
    }
  }

  @HostListener('document:keydown.escape')
  @HostListener('document:keydown.tab')
  onPopupTriggerEscape() {
    this.closePopupArea();
  }

  protected openPopupArea = () => {
    if (!!this.popupArea) {
      this.popupArea.open();
    }
  }
  protected closePopupArea = () => {
    if (!!this.popupArea) {
      this.popupArea.close();
    }
  }
}
