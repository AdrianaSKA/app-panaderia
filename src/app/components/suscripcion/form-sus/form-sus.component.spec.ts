import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSusComponent } from './form-sus.component';

describe('FormSusComponent', () => {
  let component: FormSusComponent;
  let fixture: ComponentFixture<FormSusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormSusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
