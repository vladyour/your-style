import {Component, ElementRef, Input, EventEmitter, Output, Renderer2, ViewEncapsulation} from '@angular/core';
import {expandableAreaAnimation} from '../../animations/expandable-area.animations';
import {StyleBase} from '../../core/style-base';

@Component({
  selector: 'your-expandable-area',
  templateUrl: './expandable-area.component.html',
  styleUrls: ['./expandable-area.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    expandableAreaAnimation()
  ]
})
export class ExpandableAreaComponent extends StyleBase {

  @Input()
  minHeight: string = '0';

  @Input()
  maxHeight: string = '*';

  get params() {
    return {minHeight: this.minHeight, maxHeight: this.maxHeight};
  }

  get animationState() {
    return this.expanded ? 'expanded' : 'collapsed';
  }

  @Output()
  expandedChange = new EventEmitter();

  private _expanded: boolean = true;
  @Input()
  get expanded() {
    return this._expanded;
  }
  set expanded(value: boolean) {
    this._expanded = value;
    this.expandedChange.emit(this._expanded);
  }

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
  }

  getTagPrefix(): string {
    return 'your-expandable-area';
  }
}
