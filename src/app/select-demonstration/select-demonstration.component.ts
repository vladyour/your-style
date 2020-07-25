import { Component, OnInit } from '@angular/core';
import { Mountain } from '../models/mountain';

@Component({
  selector: 'ysd-select-demonstration',
  templateUrl: './select-demonstration.component.html',
  styleUrls: ['./select-demonstration.component.scss']
})
export class SelectDemonstrationComponent implements OnInit {

  mountains: any[];

  plainOptions: string[];
  selectedPlainMountain: string;

  selectedIdNameMountain: number;

  selectedMountain: Mountain;

  multipleMountains: Mountain[];

  constructor() { }

  ngOnInit(): void {
    this.initMountains();
    this.initPlainOptions();
    this.initMultipleMountains();
  }

  private initPlainOptions() {
    this.plainOptions = this.mountains.map(m => m.name);
  }

  private initMountains() {
    this.mountains = [
      new Mountain(1, 'Mount Everest', 8848, 'Himalayas', 'Nepal/China'),
      new Mountain(2, 'K2', 8611, 'Karakoram', 'Pakistan'),
      new Mountain(3, 'Cerro El Muerto', 6488, 'Andes', 'Argentina/Chile'),
      new Mountain(4, 'Aconcagua', 6962, 'Andes', 'Argentina'),
      new Mountain(5, 'Denali', 6144, 'Alaska', 'United States'),
    ];

    this.selectedPlainMountain = this.mountains[0].name;
  }

  private initMultipleMountains() {
    this.multipleMountains = [
      new Mountain(1, 'Mount Everest', 8848, 'Himalayas', 'Nepal/China'),
      new Mountain(4, 'Aconcagua', 6962, 'Andes', 'Argentina'),
      new Mountain(5, 'Denali', 6144, 'Alaska', 'United States'),
      new Mountain(6, 'Medeo', 3127, 'Medeo', 'Kazakhstan'),
    ];
  }
}
