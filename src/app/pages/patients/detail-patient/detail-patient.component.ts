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

  buttonConfig = {
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
      width: '230px',
    },
    text: '< Voltar para listagem',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private storage: LocalStorageService
  ) {}

  ngOnInit(): void {
    const idPatient = this.activatedRoute.snapshot.params['id'];
    if (idPatient) this.patient = this.storage.getData('data-patient');
  }
}
