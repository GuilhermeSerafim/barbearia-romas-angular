import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterGaleriaDialogComponent } from './alter-galeria-dialog.component';

describe('AlterGaleriaDialogComponent', () => {
  let component: AlterGaleriaDialogComponent;
  let fixture: ComponentFixture<AlterGaleriaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlterGaleriaDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterGaleriaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
