import {Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChange, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[yourFlexBox]'
})
export class FlexBoxDirective implements OnInit, OnChanges {

  @Input()
  yourFlexBox: 'horizontal' | 'vertical' = 'horizontal';

  @Input()
  flexInline;

  @Input()
  wrap;

  @Input()
  vAlignment: 'start' | 'center' | 'end' | 'space-between' | 'space-around' = 'start';

  @Input()
  hAlignment: 'start' | 'center' | 'end' | 'space-between' | 'space-around' = 'start';

  @Input()
  fullHeight;

  @Input()
  fullWidth;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'your-flex-box')
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.yourFlexBox) {
      this.setNewClass(changes.yourFlexBox);
    }
    if (!!changes.hAlignment) {
      this.setNewClass(changes.hAlignment, 'h-');
    }
    if (!!changes.vAlignment) {
      this.setNewClass(changes.vAlignment, 'v-');
    }

    if (this.fullHeight != undefined) {
      this.renderer.addClass(this.el.nativeElement, 'full-height')
    }

    if (this.fullWidth != undefined) {
      this.renderer.addClass(this.el.nativeElement, 'full-width')
    }

    if (this.flexInline != undefined) {
      this.renderer.addClass(this.el.nativeElement, 'flex-inline')
    }

    if (this.wrap != undefined) {
      this.renderer.addClass(this.el.nativeElement, 'wrap')
    }
  }

  private setNewClass(change: SimpleChange, prefix = '') {
    if (!!change.previousValue) {
      this.renderer.removeClass(this.el.nativeElement, prefix + change.currentValue);
    }
    this.renderer.addClass(this.el.nativeElement, prefix + change.currentValue);
  }
}
