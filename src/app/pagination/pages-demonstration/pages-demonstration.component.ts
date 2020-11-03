import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ysd-pages-demonstration',
  templateUrl: './pages-demonstration.component.html',
  styleUrls: ['./pages-demonstration.component.scss']
})
export class PagesDemonstrationComponent implements OnInit {

  currentPage = 9;
  totalPages = 12;
  loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changePage(page: number) {
    this.currentPage = page;
  }

}
