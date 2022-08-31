import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Patient } from 'src/app/models/patient.interface';
import { ListDataApi } from 'src/app/shared/list-data/interfaces';
import { Params } from 'src/app/shared/list-data/models/search-params';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PatientService implements ListDataApi<Patient> {
  private readonly baseURL = 'tasks';

  constructor(private http: HttpClient) {}

  list(params: Params): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${environment.urlApi}/${this.baseURL}`, {
      params,
    });
  }

  getCount(params: Params): Observable<number> {
    return this.http
      .get<Patient[]>(`${environment.urlApi}/${this.baseURL}`, {
        params,
      })
      .pipe(map((Patients) => Patients.length));
  }

  create(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(
      `${environment.urlApi}/${this.baseURL}`,
      patient
    );
  }

  update(id: number, patient: Partial<Patient>): Observable<Patient> {
    return this.http.patch<Patient>(
      `${environment.urlApi}/${this.baseURL}/${id}`,
      patient
    );
  }

  delete(id: number): Observable<Object> {
    return this.http.delete<Object>(
      `${environment.urlApi}/${this.baseURL}/${id}`
    );
  }
}
