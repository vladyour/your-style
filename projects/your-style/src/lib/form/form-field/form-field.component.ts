import {Component, ElementRef, Input, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {StyleBase} from '../../core/style-base';

@Component({
  selector: 'your-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormFieldComponent extends StyleBase implements OnInit {

  @Input()
  label: any;

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
  }

  ngOnInit(): void {
  }

  getTagPrefix(): string {
    return 'your-form-field';
  }

}
