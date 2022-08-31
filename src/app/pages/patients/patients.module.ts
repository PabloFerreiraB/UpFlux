import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';

import { TableModule } from 'src/app/shared/components/table/table.module';
import { FilterTableModule } from 'src/app/shared/components/filter-table/filter-table.module';
import { FormModalModule } from './form-modal/form-modal.module';
import { ListDataModule } from 'src/app/shared/list-data/list-data.module';

import { PatientService } from 'src/app/services/patient/patient.service';
import { DeleteModalModule } from './delete-modal/delete-modal.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';

@NgModule({
  declarations: [PatientsComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    TableModule,
    FilterTableModule,
    FormModalModule,
    DeleteModalModule,
    ButtonModule,
    ListDataModule.forRoot(PatientService),
  ],
})
export class PatientsModule {}
