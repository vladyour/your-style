import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ysd-expandable-area-demonstration',
  templateUrl: './expandable-area-demonstration.component.html',
  styleUrls: ['./expandable-area-demonstration.component.scss']
})
export class ExpandableAreaDemonstrationComponent implements OnInit {

  expanded = false;

  constructor() { }

  ngOnInit(): void {
  }

}
