import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommParentComponent } from './comm-parent.component';

describe('CommParentComponent', () => {
  let component: CommParentComponent;
  let fixture: ComponentFixture<CommParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
