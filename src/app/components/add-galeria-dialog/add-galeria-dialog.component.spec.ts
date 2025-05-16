import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGaleriaDialogComponent } from './add-galeria-dialog.component';

describe('AddGaleriaDialogComponent', () => {
  let component: AddGaleriaDialogComponent;
  let fixture: ComponentFixture<AddGaleriaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddGaleriaDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGaleriaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
