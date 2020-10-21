import { ElementRef, Input, OnChanges, Renderer2, SimpleChange, SimpleChanges, Directive } from "@angular/core";

@Directive()
export abstract class StyleBase implements OnChanges {

  @Input()
  color: string = 'default';

  @Input()
  size: string;

  protected constructor(protected el: ElementRef, protected renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!!changes.color) {
      this.handleChange('color', changes.color);
    }

    if (!!changes.size) {
      this.handleChange('size', changes.size);
    }
  }

  handleChange(propertyName: string, change: SimpleChange) {
    if (!change.isFirstChange()) {
      this.removeClass(propertyName, change.previousValue);
    }
    this.addClass(propertyName, change.currentValue);
  }

  addClass(classPrefix: string, className: string) {
    this.renderer.addClass(this.el.nativeElement, `${this.getTagPrefix()}-${classPrefix}-${className}`);
  }

  removeClass(classPrefix: string, className: string) {
    this.renderer.removeClass(this.el.nativeElement, `${this.getTagPrefix()}-${classPrefix}-${className}`);
  }

  abstract getTagPrefix(): string;

}
