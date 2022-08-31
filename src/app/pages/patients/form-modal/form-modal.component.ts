import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Patient } from 'src/app/models/patient.interface';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
})
export class FormModalComponent implements OnInit {
  form!: FormGroup;

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
        backgroundColor: '#0099dc',
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
      text: 'salvar',
    },
  ];

  constructor(
    public dialogRef: MatDialogRef<FormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public patient: Patient,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.updateForm();
  }

  onAction(index: number): void {
    if (index === 0) return this.dialogRef.close();

    const dataForm = this.form.getRawValue() as Patient;
    if (this.form.valid) this.dialogRef.close(dataForm);
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
        ],
      ],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  private updateForm(): void {
    if (this.patient) {
      this.form.patchValue(this.patient);
    }
  }
}
