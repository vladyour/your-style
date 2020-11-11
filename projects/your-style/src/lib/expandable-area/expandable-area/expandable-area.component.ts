import {Component, ElementRef, Input, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
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

  expanded: boolean = true;

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
  }

  getTagPrefix(): string {
    return 'your-expandable-area';
  }
}
