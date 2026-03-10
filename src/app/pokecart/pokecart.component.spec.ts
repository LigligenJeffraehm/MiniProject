import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokecartComponent } from './pokecart.component';

describe('PokecartComponent', () => {
  let component: PokecartComponent;
  let fixture: ComponentFixture<PokecartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokecartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokecartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
