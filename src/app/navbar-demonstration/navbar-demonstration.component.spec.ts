import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDemonstrationComponent } from './navbar-demonstration.component';

describe('NavbarDemonstrationComponent', () => {
  let component: NavbarDemonstrationComponent;
  let fixture: ComponentFixture<NavbarDemonstrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarDemonstrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDemonstrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
