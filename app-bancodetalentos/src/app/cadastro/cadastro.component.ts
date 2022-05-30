import { Component } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  msg = ''
  areas: any

  /*obj =
    {
      nome: String,
      sobrenome: String,
      fone: String,
      email: String,
      password: String,
      profissao: String,
      cidade: String,
      estado: String,
      perfil: String,
      area: [{
        id: Number,
        area: String
      }]
    }*/

  constructor(private serviceCadastro: CadastroService, private serviceConsulta: ConsultaService) {
    this.serviceConsulta.getAll().subscribe(response => this.areas = response)
   }

  createTalent(data: any) {
    //data.perfil = "TALENTO"
    /*this.obj.nome = data.nome;
    this.obj.sobrenome = data.sobrenome;
    this.obj.fone = data.fone;
    this.obj.email = data.email;
    this.obj.password = data.password;
    this.obj.profissao = data.profissao;
    this.obj.cidade = data.cidade;
    this.obj.estado = data.estado;
    this.obj.perfil = data.perfil;
    this.obj.area[0].id = data.area.id;
    this.obj.area[0].area = data.area.area;*/
    this.serviceCadastro.create(data).subscribe(response => setInterval(() => {window.location.href = 'login'}, 1000));
    this.msg = 'Talento cadastrado com sucesso!';
  }
}
