import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommChildComponent } from './comm-child.component';

describe('CommChildComponent', () => {
  let component: CommChildComponent;
  let fixture: ComponentFixture<CommChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
