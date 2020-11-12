import {Component, ElementRef, HostBinding, Input, OnInit, Renderer2} from '@angular/core';
import {popupAreaAnimation} from '../../../animations/popup-area.animations';

@Component({
  selector: 'your-popup-area',
  templateUrl: './popup-area.component.html',
  styleUrls: ['./popup-area.component.scss'],
  animations: [
    popupAreaAnimation()
  ]
})
export class PopupAreaComponent implements OnInit {

  private _animationStateValue = 'invisible';
  set animationStateValue(value: string) {
    if (value == 'top' || value == 'bottom') {
      this.renderer.removeClass(this.el, 'v-center');
      this.renderer.addClass(this.el, 'h-center');
    } else if (value == 'left' || value == 'right') {
      this.renderer.removeClass(this.el, 'h-center');
      this.renderer.addClass(this.el, 'v-center');
    }
    this._animationStateValue = value;
  }
  @HostBinding('@popupAreaTrigger')
  get animationStateValue() {
    return this._animationStateValue;
  }

  @Input()
  position: 'top' | 'right' | 'bottom' | 'left' = 'top';

  @Input()
  private width: 'max-content' | '100%' | string = 'max-content';

  private readonly el;
  private parentEl;

  constructor(elRef: ElementRef, private renderer: Renderer2) {
    this.el = elRef.nativeElement;
  }

  ngOnInit() {
    this.renderer.setStyle(this.el, 'width', this.width);
    this.parentEl = this.el.parentElement;
  }

  open() {
    this.calculateAndSetPosition();
  }

  calculateAndSetPosition() {
    if (this.fitsDefault) { this.animationStateValue = this.position; }
    else if (this.fitsTop) { this.animationStateValue = 'top'; }
    else if (this.fitsBottom) { this.animationStateValue = 'bottom'; }
    else if (this.fitsRight) { this.animationStateValue = 'right'; }
    else if (this.fitsLeft) { this.animationStateValue = 'left'; }
    else { this.animationStateValue = 'top'; }
  }

  get fitsDefault() {
    if (this.position == 'bottom') { return this.fitsBottom; }
    if (this.position == 'right') { return this.fitsRight; }
    if (this.position == 'left') { return this.fitsLeft; }
    return false;
  }

  get fitsTop() {
    const parentRect = this.parentEl.getBoundingClientRect();
    return this.el.offsetHeight <= parentRect.y ;
  }

  get fitsRight() {
    const parentRect = this.parentEl.getBoundingClientRect();
    const fullWidth = window.innerWidth;
    return this.el.offsetWidth <= fullWidth - (parentRect.x + parentRect.width);
  }

  get fitsBottom() {
    const parentRect = this.parentEl.getBoundingClientRect();
    const fullHeight = window.innerHeight;
    return this.el.offsetHeight <= fullHeight - (parentRect.y + parentRect.height);
  }

  get fitsLeft() {
    const parentRect = this.parentEl.getBoundingClientRect();
    return this.el.offsetWidth <= parentRect.x;
  }

  close() {
    this.animationStateValue = 'invisible';
  }
}
