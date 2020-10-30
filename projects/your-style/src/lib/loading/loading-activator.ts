import {Directive, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive()
export abstract class LoadingActivator implements OnChanges {

  @Input()
  tumbler: boolean = false;

  protected constructor(protected element, protected renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges) {
    if (!!changes.tumbler && changes.tumbler.currentValue) {
      this.activate();
    } else {
      this.deactivate();
    }
  }

  private activate() {
    this.renderer.addClass(this.element, 'loading');
  }

  deactivate() {
    this.renderer.removeClass(this.element, 'loading');
  }
}
