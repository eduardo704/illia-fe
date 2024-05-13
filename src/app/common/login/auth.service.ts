import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { BaseHttpService } from '../services/base-http.service';
import { LoginResponse, RegisterRequest } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseHttpService {
  register(user: RegisterRequest) {
    return this.httpClient.post(this.backendApi + '/auth/signup', {
      ...user,
    });
  }

  login(email: string, password: string) {
    return this.httpClient
      .post<LoginResponse>(this.backendApi +'/auth/login', {
        email,
        password,
      })
      .pipe(
        tap((response) => {
          localStorage.setItem('token', response.token);
        })
      );
  }
}
