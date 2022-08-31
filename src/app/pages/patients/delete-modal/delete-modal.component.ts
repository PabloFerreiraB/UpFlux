import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Patient } from 'src/app/models/patient.interface';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public patient: Patient
  ) {}

  delete(): void {
    this.dialogRef.close(this.patient);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
