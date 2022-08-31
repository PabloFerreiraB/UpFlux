import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly baseURL = 'account';

  constructor(private http: HttpClient) {}

  getUser(userData: Partial<User>): Observable<User> {
    return this.http
      .get<User[]>(`${environment.urlApi}/${this.baseURL}`, {
        params: { ...userData },
      })
      .pipe(map((users) => users[0]));
  }
}
