import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonEncapsulationComponent } from './non-encapsulation.component';

describe('NonEncapsulationComponent', () => {
  let component: NonEncapsulationComponent;
  let fixture: ComponentFixture<NonEncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonEncapsulationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
