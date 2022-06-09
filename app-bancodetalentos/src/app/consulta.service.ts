import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http: HttpClient) { }

  getAll() {
    let url = 'http://localhost:8081/areas';
    return this.http.get(url);
  }

  getOne(idarea: number) {
    return this.http.get(`http://localhost:8081/areas/${idarea}`)
  }
}
