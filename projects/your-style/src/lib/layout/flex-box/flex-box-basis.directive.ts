import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[yourFlexBoxBasis]'
})
export class FlexBoxBasisDirective implements OnChanges {

  @Input()
  yourFlexBoxBasis: string;

  @Input()
  minWidth: string;

  @Input()
  maxWidth: string;

  @Input()
  grow: number = 1;

  @Input()
  shrink: number = 1;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.yourFlexBoxBasis) {
      this.renderer.setStyle(this.el.nativeElement, 'flex', `${this.grow} ${this.shrink} ${this.yourFlexBoxBasis}`);
    }

    if (!!changes.minWidth) {
      this.renderer.setStyle(this.el.nativeElement, 'min-width', this.minWidth);
    }

    if (!!changes.maxWidth) {
      this.renderer.setStyle(this.el.nativeElement, 'max-width', this.maxWidth);
    }
  }

}
