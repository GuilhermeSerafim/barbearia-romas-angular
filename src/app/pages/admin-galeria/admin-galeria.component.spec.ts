import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGaleriaComponent } from './admin-galeria.component';

describe('AdminGaleriaComponent', () => {
  let component: AdminGaleriaComponent;
  let fixture: ComponentFixture<AdminGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGaleriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
