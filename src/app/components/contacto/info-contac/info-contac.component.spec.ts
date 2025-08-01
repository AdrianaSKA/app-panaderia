import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoContacComponent } from './info-contac.component';

describe('InfoContacComponent', () => {
  let component: InfoContacComponent;
  let fixture: ComponentFixture<InfoContacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoContacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoContacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
