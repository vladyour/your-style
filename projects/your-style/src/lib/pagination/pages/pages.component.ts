import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2} from '@angular/core';
import {StyleBase} from '../../core/style-base';

@Component({
  selector: 'your-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent extends StyleBase implements OnInit {

  @Input()
  private bias: number = 1;

  private _currentPage: number = 0;
  get currentPage(): number {
    return this._currentPage + this.bias;
  }
  @Input()
  set currentPage(value: number) {
    this._currentPage = value;
    this.updateState();
  }

  @Output()
  currentPageChange = new EventEmitter<number>();

  private _totalPages: number = 0;
  get totalPages(): number {
    if (!!this._totalPages && this._totalPages > 0) {
      return this._totalPages;
    } else {
      return 0;
    }
  }
  @Input()
  set totalPages(value: number) {
    this._totalPages = value;
    this.updateState();
  }

  private _loading: boolean = false;
  get loading(): boolean {
    return this._loading;
  }
  @Input()
  set loading(value: boolean) {
    this._loading = value;
  }

  prevIsDisabled: boolean = false;
  nextIsDisabled: boolean = false;

  firstPages: number[];
  middlePages: number[];
  lastPages: number[];
  hasFirstEllipsis: boolean;
  hasLastEllipsis: boolean;


  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
  }

  ngOnInit(): void {
    this.updateState();
  }

  prevPage() {
    if (this.currentPage != 1) {
      this.changePage(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage != this.totalPages) {
      this.changePage(this.currentPage + 1);
    }
  }

  changePage(page: number) {
    const pageWithBias = page;
    if (pageWithBias == this.currentPage) {
      return;
    }

    this.currentPageChange.emit(pageWithBias - this.bias);
  }

  updateState() {
    this.firstPages = this.getFirstPages();
    this.middlePages = this.getMiddlePages();
    this.lastPages = this.getLastPages();

    this.hasFirstEllipsis = !!this.firstPages.length && (!!this.middlePages.length || !!this.lastPages.length);
    this.hasLastEllipsis = !!this.middlePages.length && !!this.lastPages.length;

    this.prevIsDisabled = this.currentPage == 1 || this.totalPages <= 0;
    this.nextIsDisabled = this.currentPage == this.totalPages || this.totalPages <= 0;
  }

  getFirstPages(): number[] {
    if (this.totalPages <= 5) {
      return [...Array(this.totalPages).fill(0).map((_, i) => i + 1)];
    } else if (this.currentPage < 4) {
      return [...Array(4).fill(0).map((_, i) => i + 1)];
    } else {
      return [1];
    }
  }

  getMiddlePages(): number[] {
    if (this.currentPage - 2 > 1 && this.currentPage + 2 < this.totalPages) {
      return [this.currentPage - 1, this.currentPage, this.currentPage + 1];
    } else {
      return [];
    }
  }

  getLastPages(): number[] {
    if (this.totalPages <= 5) {
      return [];
    } else if (this.totalPages - this.currentPage < 3) {
      return [...Array(4).fill(0).map((_, i) => this.totalPages - 3 + i)];
    } else {
      return [this.totalPages];
    }
  }

  getTagPrefix(): string {
    return 'your-pages';
  }
}
