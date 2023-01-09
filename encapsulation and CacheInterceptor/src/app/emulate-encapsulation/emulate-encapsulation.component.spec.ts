import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulateEncapsulationComponent } from './emulate-encapsulation.component';

describe('EmulateEncapsulationComponent', () => {
  let component: EmulateEncapsulationComponent;
  let fixture: ComponentFixture<EmulateEncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmulateEncapsulationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmulateEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
