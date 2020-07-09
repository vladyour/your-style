import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDemonstrationComponent } from './button-demonstration.component';

describe('ButtonDemonstrationComponent', () => {
  let component: ButtonDemonstrationComponent;
  let fixture: ComponentFixture<ButtonDemonstrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonDemonstrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDemonstrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
