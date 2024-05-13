import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse, RegisterRequest } from './auth.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  register(user: RegisterRequest) {
    return this.httpClient.post('http://localhost:8080/api/auth/signup', {
      ...user,
    });
  }

  login(email: string, password: string) {
    return this.httpClient
      .post<LoginResponse>('http://localhost:8080/api/auth/login', {
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
