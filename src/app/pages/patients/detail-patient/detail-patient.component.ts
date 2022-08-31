import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/core/storage/services/local-storage.service';
import { Patient } from 'src/app/models/patient.interface';

@Component({
  selector: 'app-detail-patient',
  templateUrl: './detail-patient.component.html',
  styleUrls: ['./detail-patient.component.scss'],
})
export class DetailPatientComponent implements OnInit {
  patient!: Patient;

  constructor(
    private activatedRoute: ActivatedRoute,
    private storage: LocalStorageService
  ) {}

  ngOnInit(): void {
    const idPatient = this.activatedRoute.snapshot.params['id'];
    if (idPatient) this.patient = this.storage.getData('data-patient');
  }
}
