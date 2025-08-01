import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosSusComponent } from './beneficios-sus.component';

describe('BeneficiosSusComponent', () => {
  let component: BeneficiosSusComponent;
  let fixture: ComponentFixture<BeneficiosSusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiosSusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeneficiosSusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
