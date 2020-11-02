import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Directive({
  selector: '[yourLoadingSkeleton]'
})
export class LoadingSkeletonDirective implements OnInit {

  private _definedOrder: number;
  @Input('yourLoadingSkeleton')
  set definedOrder(value: number) {
    this._definedOrder = value;
  }

  private readonly element;

  private _useAutoSize: boolean = true;
  @Input()
  set useAutoSize(useDefaultSize: boolean) {
    this._useAutoSize = useDefaultSize;
  }

  private _baseSize: string = '1.2em';
  @Input()
  set baseSize(value: string) {
    this._baseSize = value;
  }

  private _widthPart: number = 10;
  @Input()
  set widthPart(value: number) {
    this._widthPart = value;
  }

  private _heightPart: number = 1;
  @Input()
  set heightPart(value: number) {
    this._heightPart = value;
  }

  private _useDefaultTheme: boolean = true;
  @Input()
  set useDefaultTheme(value: boolean) {
    this._useDefaultTheme = value;
  }

  constructor(el: ElementRef, private renderer: Renderer2) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    this.renderer.addClass(this.element, 'your-skeleton');
    this.toggleDefaultTheme();
    this.setDefaultSize();
  }

  calculateDelayAndSet(defaultOrder: number, beat: number) {
    this.renderer.setStyle(this.element, 'animation-delay', ((this._definedOrder || defaultOrder) * beat) + 'ms');
  }

  private toggleDefaultTheme() {
    if ((this._useDefaultTheme || true) == true) {
      this.renderer.addClass(this.element, 'default-theme');
    } else {
      this.renderer.removeClass(this.element, 'default-theme');
    }
  }

  private setDefaultSize() {
    if (this._useAutoSize) {
      this.renderer.setStyle(this.element, 'width', `calc(${this._widthPart} * ${this._baseSize})`);
      this.renderer.setStyle(this.element, 'height', `calc(${this._heightPart} * ${this._baseSize})`);
    }
  }

}
