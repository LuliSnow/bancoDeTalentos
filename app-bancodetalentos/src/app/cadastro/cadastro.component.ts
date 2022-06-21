import { Component } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  msg = '';
  areas: any;
  talento: any;
  msgerr = '';

  constructor(
    private serviceCadastro: CadastroService,
    private serviceConsulta: ConsultaService
  ) {
    this.serviceConsulta
      .getAll()
      .subscribe((response) => (this.areas = response));
  }

  createTalent(data: any) {
    this.serviceCadastro.create(data).subscribe((response) => {
      let data = JSON.stringify(response);
      let dados = JSON.parse(data);
      if (dados.message == 'Email já existe!') {
        return (this.msgerr = 'Email já cadastrado!');
      } else {
        setInterval(() => {
          window.location.href = '';
        }, 1000);
      }
      this.msgerr = '';
      return (this.msg = 'Talento cadastrado com sucesso!');
    });
  }
}
