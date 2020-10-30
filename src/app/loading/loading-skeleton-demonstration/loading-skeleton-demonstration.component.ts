import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ysd-loading-skeleton-demonstration',
  templateUrl: './loading-skeleton-demonstration.component.html',
  styleUrls: ['./loading-skeleton-demonstration.component.scss']
})
export class LoadingSkeletonDemonstrationComponent implements OnInit {

  loadingIndicator: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleLoading() {
    this.loadingIndicator = !this.loadingIndicator;
  }

}
