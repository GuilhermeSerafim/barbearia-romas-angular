import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGaleriaAdmComponent } from './card-galeria-adm.component';

describe('CardGaleriaAdmComponent', () => {
  let component: CardGaleriaAdmComponent;
  let fixture: ComponentFixture<CardGaleriaAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardGaleriaAdmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGaleriaAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
