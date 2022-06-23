import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    let url = 'https://app-banco-talentos.herokuapp.com/talentos/login';
    return this.http.post(url, {
      email: email,
      password: password,
    });
  }
}
