import {Directive, HostListener, Renderer2, ViewChild} from '@angular/core';
import {AbstractInput} from './abstract-input';
import {PopupAreaComponent} from '../../layout/popup-area/popup-area/popup-area.component';

@Directive()
export abstract class DropdownFormField extends AbstractInput {

  @ViewChild(PopupAreaComponent)
  popupArea: PopupAreaComponent;

  private opened: boolean = false;

  protected constructor(protected el, protected renderer: Renderer2) {
    super(el, renderer);
  }

  protected onTouched: () => any;

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
      this.opened = true;
    }
  }
  protected closePopupArea = () => {
    if (!!this.popupArea) {
      this.popupArea.close();

      if (this.opened) {
        this.onTouched();
        this.opened = false;
      }
    }
  }
}
