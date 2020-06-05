import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {StyleBase} from "../../core/style-base";

@Component({
  selector: 'your-card',
  templateUrl: './card.component.html'
})
export class CardComponent extends StyleBase implements OnInit {

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
  }

  ngOnInit(): void {
  }

  getTagPrefix(): string {
    return "your-card";
  }

}
