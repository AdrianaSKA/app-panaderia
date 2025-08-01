import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSusComponent } from './hero-sus.component';

describe('HeroSusComponent', () => {
  let component: HeroSusComponent;
  let fixture: ComponentFixture<HeroSusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroSusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
