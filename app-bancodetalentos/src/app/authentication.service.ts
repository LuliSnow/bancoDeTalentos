import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post('https://app-banco-talentos.herokuapp.com/talentos/login', {
      email: email,
      password: password
    })
  }
}
