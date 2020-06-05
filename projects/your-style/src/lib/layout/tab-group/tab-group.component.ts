import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import {TabComponent} from "./tab/tab.component";

@Component({
  selector: 'your-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements AfterContentInit {

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  labels: string[];
  currentLabel: string;

  constructor() { }

  ngAfterContentInit(): void {
    this.initTabs();
    this.tabs.changes.subscribe(change => {
      this.initTabs();
    });
  }

  initTabs() {
    this.labels = [];
    this.tabs.forEach((tab, index) => {
      if (index == 0) {
        tab.showTab();
        this.currentLabel = tab.label;
      } else {
        tab.hideTab();
      }
      this.labels.push(tab.label);
    });
  }

  displayTab(label: string) {
    this.tabs.forEach(tab => {
      if (tab.label == label) {
        tab.showTab();
        this.currentLabel = label;
      } else {
        tab.hideTab();
      }
    })
  }
}
