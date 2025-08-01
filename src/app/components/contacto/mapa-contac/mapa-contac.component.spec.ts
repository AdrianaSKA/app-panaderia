import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaContacComponent } from './mapa-contac.component';

describe('MapaContacComponent', () => {
  let component: MapaContacComponent;
  let fixture: ComponentFixture<MapaContacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapaContacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapaContacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
