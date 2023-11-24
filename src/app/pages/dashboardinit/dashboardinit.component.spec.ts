import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardinitComponent } from './dashboardinit.component';

describe('DashboardinitComponent', () => {
  let component: DashboardinitComponent;
  let fixture: ComponentFixture<DashboardinitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardinitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardinitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
