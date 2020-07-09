import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ysd-button-demonstration',
  templateUrl: './button-demonstration.component.html',
  styleUrls: ['./button-demonstration.component.scss']
})
export class ButtonDemonstrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("SUBMIT");
  }

  onDecline() {
    console.log("DECLINE");
  }
}
