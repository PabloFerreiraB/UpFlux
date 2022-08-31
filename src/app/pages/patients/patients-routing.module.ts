import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPatientComponent } from './detail-patient/detail-patient.component';
import { PatientsComponent } from './patients.component';

const routes: Routes = [
  {
    path: '',
    component: PatientsComponent,
  },
  {
    path: 'details/:id',
    component: DetailPatientComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule {}
