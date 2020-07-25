import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[yourPopupArea]'
})
export class PopupAreaDirective implements OnInit {

  private top = 'top';
  private bottom = 'bottom';
  private left = 'left';
  private right = 'right';

  private _open = false;
  private set openPopup(open) {
    if (open) {
      if (!this._open) {
        this._open = true;
        this.calculatePrimaryPosition();

        this.updatePrimaryPosition();
        this.updateSecondaryPosition();
        this.renderer.removeClass(this.el, 'close');
        this.renderer.addClass(this.el, 'open');

      }
    } else {
      this._open = false;
      this.renderer.removeClass(this.el, 'open');
      this.renderer.addClass(this.el, 'close');
    }
  }

  @Input()
  position: 'top left' | 'top center' | 'top right' |
    'right top' | 'right center' | 'right bottom' |
    'bottom left' | 'bottom center' | 'bottom right' |
    'left top' | 'left center' | 'left bottom';

  get positions() {
    let p = {
      primary: null,
      secondary: null
    }

    if (!!this.autoPosition) {
      let split = this.autoPosition.split(' ');
      p.primary = split[0];
      p.secondary = split[1];
    }

    return p;
  }

  @Input()
  width: string = 'max-content';

  private el;
  private parentEl;

  private autoPosition;

  constructor(protected element: ElementRef, protected renderer: Renderer2) {}

  ngOnInit() {
    this.el = this.element.nativeElement;
    this.parentEl = this.el.parentElement;
    this.renderer.setStyle(this.el, 'width', this.width);
  }

  open() {
    this.openPopup = true;
  }

  calculatePrimaryPosition() {
    if (this.fitsDefault) this.autoPosition = this.position;
    else if (this.fitsUp) this.autoPosition = 'top center';
    else if (this.fitsBottom) this.autoPosition = 'bottom center';
    else if (this.fitsRight) this.autoPosition = 'right center';
    else if (this.fitsLeft) this.autoPosition = 'left center';
    else this.autoPosition = 'top center';
  }

  get fitsDefault() {
    let defaultPosition = this.position || 'top center';
    let primary = defaultPosition.split(' ')[0];
    if (primary == this.bottom) return this.fitsBottom;
    if (primary == this.right) return this.fitsRight;
    if (primary == this.left) return this.fitsLeft;
    return false;
  }

  get fitsUp() {
    let parentRect = this.parentEl.getBoundingClientRect();
    return this.el.offsetHeight <= parentRect.y ;
  }

  get fitsRight() {
    let parentRect = this.parentEl.getBoundingClientRect();
    let fullWidth = window.innerWidth;
    return this.el.offsetWidth <= fullWidth - (parentRect.x + parentRect.width);
  }

  get fitsBottom() {
    let parentRect = this.parentEl.getBoundingClientRect();
    let fullHeight = window.innerHeight;
    return this.el.offsetHeight <= fullHeight - (parentRect.y + parentRect.height);
  }

  get fitsLeft() {
    let parentRect = this.parentEl.getBoundingClientRect();
    return this.el.offsetWidth <= parentRect.x;
  }

  updatePrimaryPosition() {
    let {primary} = this.positions;
    this.renderer.removeClass(this.el, this.getOpposite(primary));
    this.renderer.addClass(this.el, primary);
    this.renderer.setStyle(this.el, this.getOpposite(primary), `100%`);
    this.renderer.removeStyle(this.el, primary);
  }

  updateSecondaryPosition() {
    let {primary, secondary} = this.positions;

    if (secondary == 'center') {
      if (primary == this.top || primary == this.bottom) {
        this.calculateCenterOffset('offsetWidth', this.left);
      }
      if (primary == this.left || primary == this.right) {
        this.calculateCenterOffset('offsetHeight', this.top);
      }
    } else {
      this.renderer.setStyle(this.el, secondary, `0`);
      this.renderer.removeStyle(this.el, this.getOpposite(secondary));
    }
  }

  private calculateCenterOffset(offsetProperty, styleProperty) {
    let property = this.el[offsetProperty];
    let parentProperty = this.parentEl[offsetProperty];
    let offset = parentProperty / 2 - property / 2;
    this.renderer.setStyle(this.el, styleProperty, `${offset}px`);
  }

  private getOpposite(position) {
    switch (position) {
      case this.top: return this.bottom;
      case this.right: return this.left;
      case this.bottom: return this.top;
      case this.left: return this.right;
    }
  }

  close() {
    this.openPopup = false;
  }
}
