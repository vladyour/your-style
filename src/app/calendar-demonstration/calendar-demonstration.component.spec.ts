import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDemonstrationComponent } from './calendar-demonstration.component';

describe('CalendarDemonstrationComponent', () => {
  let component: CalendarDemonstrationComponent;
  let fixture: ComponentFixture<CalendarDemonstrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarDemonstrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDemonstrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
