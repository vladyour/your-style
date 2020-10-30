import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ysd-loading-bar-demonstration',
  templateUrl: './loading-bar-demonstration.component.html',
  styleUrls: ['./loading-bar-demonstration.component.scss']
})
export class LoadingBarDemonstrationComponent implements OnInit {
  loadingIndicator: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleLoading() {
    this.loadingIndicator = !this.loadingIndicator;
  }
}
