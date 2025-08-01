import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroProduComponent } from './hero-produ.component';

describe('HeroProduComponent', () => {
  let component: HeroProduComponent;
  let fixture: ComponentFixture<HeroProduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroProduComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroProduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
