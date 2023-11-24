import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchageformComponent } from './exchageform.component';

describe('ExchageformComponent', () => {
  let component: ExchageformComponent;
  let fixture: ComponentFixture<ExchageformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchageformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExchageformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
