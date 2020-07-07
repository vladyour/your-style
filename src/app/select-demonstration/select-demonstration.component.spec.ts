import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDemonstrationComponent } from './select-demonstration.component';

describe('SelectDemonstrationComponent', () => {
  let component: SelectDemonstrationComponent;
  let fixture: ComponentFixture<SelectDemonstrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDemonstrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDemonstrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
