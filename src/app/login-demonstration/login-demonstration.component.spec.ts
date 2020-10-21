import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDemonstrationComponent } from './login-demonstration.component';

describe('LoginDemonstrationComponent', () => {
  let component: LoginDemonstrationComponent;
  let fixture: ComponentFixture<LoginDemonstrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDemonstrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDemonstrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
