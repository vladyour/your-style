import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeDemonstrationComponent } from './badge-demonstration.component';

describe('BadgeDemonstrationComponent', () => {
  let component: BadgeDemonstrationComponent;
  let fixture: ComponentFixture<BadgeDemonstrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeDemonstrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeDemonstrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
