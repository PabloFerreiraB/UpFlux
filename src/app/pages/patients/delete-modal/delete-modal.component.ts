import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Patient } from 'src/app/models/patient.interface';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent {
  buttonConfig = [
    {
      styles: {
        cursor: 'pointer',
        position: 'relative',
        backgroundColor: '#F5F5F5',
        color: '#333333',
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '16px',
        borderRadius: '4px',
        border: 'none',
        padding: '10px 15px',
        marginTop: '4px',
        width: '150px',
      },
      text: 'cancelar',
    },
    {
      styles: {
        cursor: 'pointer',
        position: 'relative',
        backgroundColor: '#007dfe',
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '16px',
        borderRadius: '4px',
        border: 'none',
        padding: '10px 15px',
        marginTop: '4px',
        width: '150px',
      },
      text: 'confirmar',
    },
  ];

  constructor(
    public dialogRef: MatDialogRef<DeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public patient: Patient
  ) {}

  onAction(index: number): void {
    if (index === 0) return this.dialogRef.close();

    this.dialogRef.close(this.patient);
  }
}
