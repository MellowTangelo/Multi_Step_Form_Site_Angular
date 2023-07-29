import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGuideComponent } from './form-guide.component';

describe('FormGuideComponent', () => {
  let component: FormGuideComponent;
  let fixture: ComponentFixture<FormGuideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormGuideComponent]
    });
    fixture = TestBed.createComponent(FormGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
