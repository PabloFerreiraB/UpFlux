import { ButtonModule } from './../../../shared/components/button/button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { DetailPatientComponent } from './detail-patient.component';

@NgModule({
  declarations: [DetailPatientComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ButtonModule,
  ],
  exports: [DetailPatientComponent],
})
export class DetailPatientModule {}
