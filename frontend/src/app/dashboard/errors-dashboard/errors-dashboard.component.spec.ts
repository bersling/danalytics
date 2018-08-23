import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsDashboardComponent } from './errors-dashboard.component';

describe('ErrorsDashboardComponent', () => {
  let component: ErrorsDashboardComponent;
  let fixture: ComponentFixture<ErrorsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
