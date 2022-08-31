import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LoginForm } from 'src/app/models/login-form';
import { User } from 'src/app/models/user';
import { UserService } from '../user/user.service';
import { AuthUserStore } from 'src/app/store/auth-user/auth-user.store';
import { Storage } from 'src/app/core/storage/storage';
import { AUTH_USER_KEY } from 'src/app/models/auth-user-key';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private userService: UserService,
    private authUserStore: AuthUserStore,
    private storage: Storage
  ) {}

  auth(userData: LoginForm): Observable<User> {
    return this.userService.getUser(userData).pipe(
      map((user) => {
        if (user) {
          return user;
        }
        throw 'Usuário ou senha inválidos.';
      }),
      tap((user) => this.authUserStore.setUser(user)),
      tap((user) => this._saveUserToStorage(user))
    );
  }

  logout(): void {}

  setUserFromStorage(): void {}

  private _saveUserToStorage(user: User): void {
    this.storage.setData(AUTH_USER_KEY, user);
  }
}
