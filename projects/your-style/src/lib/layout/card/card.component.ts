import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {StyleBase} from '../../core/style-base';

@Component({
  selector: 'your-card',
  templateUrl: './card.component.html',
  styleUrls: ['card.component.scss']
})
export class CardComponent extends StyleBase implements OnInit {

  @Input()
  display: 'block' | 'flex' = 'block';

  @Input()
  inline: boolean = true;

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
  }

  ngOnInit(): void {
    let display = '';

    if (this.inline) {
      display += 'inline-';
    }

    display += this.display;

    this.renderer.addClass(this.el.nativeElement, display);
  }

  getTagPrefix(): string {
    return 'your-card';
  }

}
