import {Component, ContentChildren, ElementRef, Input, OnInit, QueryList, Renderer2} from '@angular/core';
import {expandableAreaAnimation} from '../animations/expandable-area.animations';
import {StyleBase} from '../core/style-base';

@Component({
  selector: 'your-expandable-panel',
  templateUrl: './expandable-panel.component.html',
  styleUrls: ['./expandable-panel.component.scss'],
  animations: [
    expandableAreaAnimation()
  ]
})
export class ExpandablePanelComponent extends StyleBase implements OnInit {

  private _state: boolean = false;
  get state(): boolean {
    return this._state;
  }
  @Input()
  set state(value: boolean) {
    this._state = value;
  }

  get animationState() {
    return this.state ? 'expanded' : 'collapsed';
  }

  private _closeDescendantsOnClose = true;
  get closeDescendantsOnClose(): boolean {
    return this._closeDescendantsOnClose;
  }
  @Input()
  set closeDescendantsOnClose(value: boolean) {
    this._closeDescendantsOnClose = value;
  }

  private _expandable: boolean = true;
  get expandable(): boolean {
    return this._expandable;
  }
  @Input()
  set expandable(value: boolean) {
    this._expandable = value;
  }

  @ContentChildren(ExpandablePanelComponent, {descendants: true})
  innerPanels: QueryList<ExpandablePanelComponent>;

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
  }

  ngOnInit(): void {}

  toggle() {
    if (!this.expandable) {
      return;
    }

    if (this.state) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.state = true;
  }

  close() {
    this.state = false;
    if (this.closeDescendantsOnClose) {
      this.innerPanels.forEach(panel => {
        panel.close();
      });
    }
  }

  getTagPrefix(): string {
    return 'your-expandable-panel';
  }
}
