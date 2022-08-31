import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModalComponent } from './form-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'src/app/shared/components/button/button.module';

@NgModule({
  declarations: [FormModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ButtonModule,
  ],
  exports: [FormModalComponent],
})
export class FormModalModule {}
