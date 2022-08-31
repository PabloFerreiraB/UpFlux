import { Component, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { filter, switchMap, tap } from 'rxjs/operators';

import { Patient } from 'src/app/models/patient.interface';
import { ListDataDirective } from 'src/app/shared/list-data/directives/list-data/list-data.directive';

import { FormModalComponent } from './form-modal/form-modal.component';
import { PatientService } from 'src/app/services/patient/patient.service';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/storage/services/local-storage.service';

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
    private patientService: PatientService,
    private router: Router,
    private storage: LocalStorageService
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
      .subscribe(() => console.log('Paciente salvo!'));
  }

  openDeleteModal(patient: Patient): void {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      data: patient,
      width: '450px',
    });
    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap((patientToSave: Patient) =>
          this.patientService.delete(patientToSave.id)
        ),
        tap(() => this.listDataDirective.update())
      )
      .subscribe(() => console.log('Paciente excluído!'));
  }

  onDetail(patient: Patient): void {
    this.storage.setData('data-patient', patient);
    this.router.navigateByUrl(`home/patients/details/${patient.id}`);
  }
}
