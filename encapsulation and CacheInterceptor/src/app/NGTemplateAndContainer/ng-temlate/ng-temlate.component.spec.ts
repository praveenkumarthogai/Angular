import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemlateComponent } from './ng-temlate.component';

describe('NgTemlateComponent', () => {
  let component: NgTemlateComponent;
  let fixture: ComponentFixture<NgTemlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTemlateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTemlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
