import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAgendamentoDialogComponent } from './add-agendamento-dialog.component';

describe('AddAgendamentoDialogComponent', () => {
  let component: AddAgendamentoDialogComponent;
  let fixture: ComponentFixture<AddAgendamentoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAgendamentoDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAgendamentoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
