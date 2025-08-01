import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroContacComponent } from './hero-contac.component';

describe('HeroContacComponent', () => {
  let component: HeroContacComponent;
  let fixture: ComponentFixture<HeroContacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroContacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroContacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
