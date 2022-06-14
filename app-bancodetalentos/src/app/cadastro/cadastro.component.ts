import { Component } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { ConsultaService } from '../consulta.service';
//import { ActivatedRoute } from '@angular/router';

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
    //private route: ActivatedRoute,
    private serviceCadastro: CadastroService,
    private serviceConsulta: ConsultaService
  ) {
    this.serviceConsulta
      .getAll()
      .subscribe((response) => (this.areas = response));
  }

  //ngOnInit(): void {
  //  this.emails = this.route.snapshot.paramMap.get('email');
  //}

  getEmail(email: string) {
    this.serviceCadastro.getEmail(email).subscribe((response) => {
      console.log(response), (this.talento = response);
    });
  }

  createTalent(data: any) {
    this.serviceCadastro.getEmail(data.email).subscribe((response) => {
      this.talento = JSON.stringify(response);
      let dados = JSON.parse(this.talento);
      if (dados.email == data.email) {
        return (this.msgerr = 'Email já cadastrado!');
      }
      if (dados.email != data.email || data.email == null) {
        this.serviceCadastro.create(data).subscribe((response) => {
          console.log(response);
          setInterval(() => {
            window.location.href = 'login';
          }, 1000);
        });
      }
      return (this.msg = 'Talento cadastrado com sucesso!');
    });
    console.log(this.talento);
    /*if (this.getEmail(data.email) == data.email) {
      this.msgerr = 'Email já cadastrado!';
    } else {
      this.serviceCadastro.create(data).subscribe((response) => {
        console.log(response);
        setInterval(() => {
          window.location.href = 'login';
        }, 1000);
        this.msg = 'Talento cadastrado com sucesso!';
      });
    }*/
  }

  /*createTalent(data: any) {
    this.serviceCadastro.create(data).subscribe((response) => {
      console.log(response);
      setInterval(() => {
        window.location.href = 'login';
      }, 1000);
    });
    this.msg = 'Talento cadastrado com sucesso!';
  }*/
}
