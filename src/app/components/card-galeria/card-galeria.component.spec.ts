import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGaleriaComponent } from './card-galeria.component';

describe('CardGaleriaComponent', () => {
  let component: CardGaleriaComponent;
  let fixture: ComponentFixture<CardGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardGaleriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
