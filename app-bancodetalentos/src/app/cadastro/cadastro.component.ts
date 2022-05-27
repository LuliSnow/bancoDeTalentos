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

  constructor(private serviceCadastro: CadastroService, private serviceConsulta: ConsultaService) {
    this.serviceConsulta.getAll().subscribe(response => this.areas = response)
   }

  createTalent(data: any) {
    //data.perfil = "TALENTO"
    this.serviceCadastro.create(data).subscribe(response => setInterval(() => {window.location.href = 'login'}, 1000));
    this.msg = 'Talento cadastrado com sucesso!';
  }
}
