import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterAgendamentoDialogComponent } from './alter-agendamento-dialog.component';

describe('AlterAgendamentoDialogComponent', () => {
  let component: AlterAgendamentoDialogComponent;
  let fixture: ComponentFixture<AlterAgendamentoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlterAgendamentoDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterAgendamentoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
