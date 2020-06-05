import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'your-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input()
  label: string;

  constructor(private el: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {}

  showTab() {
    this.render.addClass(this.el.nativeElement, 'active');
  }

  hideTab() {
    this.render.removeClass(this.el.nativeElement, 'active');
  }
}
