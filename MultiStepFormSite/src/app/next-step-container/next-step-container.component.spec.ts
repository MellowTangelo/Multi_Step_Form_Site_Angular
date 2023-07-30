import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextStepContainerComponent } from './next-step-container.component';

describe('NextStepContainerComponent', () => {
  let component: NextStepContainerComponent;
  let fixture: ComponentFixture<NextStepContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextStepContainerComponent]
    });
    fixture = TestBed.createComponent(NextStepContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
