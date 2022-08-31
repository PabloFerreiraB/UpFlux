import { Component, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { filter, switchMap, tap } from 'rxjs/operators';

import { Patient } from 'src/app/models/patient.interface';
import { ListDataDirective } from 'src/app/shared/list-data/directives/list-data/list-data.directive';

import { FormModalComponent } from './form-modal/form-modal.component';
import { PatientService } from 'src/app/services/patient/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent {
  @ViewChild(ListDataDirective, { static: true })
  listDataDirective!: ListDataDirective<Patient>;

  constructor(
    private dialog: MatDialog,
    private patientService: PatientService
  ) {}

  openFormModal(patient?: Patient | undefined): void {
    const dialogRef = this.dialog.open(FormModalComponent, {
      width: '900px',
      data: patient,
    });
    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap((patientToSave: Patient) => {
          return patient
            ? this.patientService.update(patient.id, patientToSave)
            : this.patientService.create(patientToSave);
        }),
        tap(() => this.listDataDirective.update())
      )
      .subscribe(() => console.log('Pagamento salvo!'));
  }

  openDeleteModal(patient: Patient): void {
    // const dialogRef = this.dialog.open(PaymentDeleteModalComponent, {
    //   data: patient,
    //   width: '450px',
    // });
    // dialogRef
    //   .afterClosed()
    //   .pipe(
    //     filter(Boolean),
    //     switchMap((paymentToDelete: Patient) =>
    //       this.paymentApiService.delete(paymentToDelete.id)
    //     ),
    //     tap(() => this.listDataDirective.update())
    //   )
    //   .subscribe(() => this.messageService.open('Pagamento excluído!'));
  }
}
