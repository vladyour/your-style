import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ysd-button-demonstration',
  templateUrl: './button-demonstration.component.html',
  styleUrls: ['./button-demonstration.component.scss']
})
export class ButtonDemonstrationComponent implements OnInit {

  options: any[];

  constructor() { }

  ngOnInit(): void {
    this.options = [
      'First',
      'Second',
      'Third'
    ];
  }

  onSubmit() {
    console.log('SUBMIT');
  }

  onDecline() {
    console.log('DECLINE');
  }

  onSelect(option: any) {
    console.log(option);
  }
}
