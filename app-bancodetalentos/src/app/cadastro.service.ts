import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  create(data: any) {
    //let url = 'https://app-banco-talentos.herokuapp.com/talentos';
    let url = 'http://localhost:8080/talentos';
    return this.http.post(url, data);
  }

  getAll() {
    //let url = 'https://app-banco-talentos.herokuapp.com/talentos';
    let url = 'http://localhost:8080/talentos'
    return this.http.get(url);
  }

  getOne(idtalento: number) {
    //return this.http.get(`https://app-banco-talentos.herokuapp.com/talentos/${idtalento}`)
    return this.http.get(`http://localhost:8080/talentos/${idtalento}`);
  }

  alterar(dados: any) {
    //let url = `https://app-banco-talentos.herokuapp.com/talentos/${dados.id}`
    let url = 'http://localhost:8080/talentos'
    return this.http.put(url, dados)
  }

  apagar(idtalento: number) {
    //eturn this.http.delete(`https://app-banco-talentos.herokuapp.com/talentos/${idtalento}`)
    return this.http.delete(`http://localhost:8080/talentos/${idtalento}`)
  }
}
