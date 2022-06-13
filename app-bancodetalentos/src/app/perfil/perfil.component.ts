import { CadastroService } from './../cadastro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultaService } from '../consulta.service';
import { DecodeTokenService } from '../decode-token.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cadastroService: CadastroService,
    private router: Router,
    private serviceConsulta: ConsultaService,
    private decodeToken: DecodeTokenService
  ) {
    this.serviceConsulta
      .getAll()
      .subscribe((response) => (this.areas = response));
  }

  talento: any = {};
  msg: string = '';
  areas: any;

  ngOnInit(): void {
    let routeParams = this.route.snapshot.paramMap;
    let idtalento: number = Number(routeParams.get('idtalento'));
    let token = JSON.stringify(this.decodeToken.decodeTokenJWT());
    let obj = JSON.parse(token);
    if (idtalento == obj.id) {
      this.cadastroService
        .getOne(idtalento)
        .subscribe((x) => (this.talento = x));
    } else {
      this.router.navigate(['/home']);
    }
  }

  visible: boolean = true;
  changetype: boolean = true;

  viewPassword() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  editar() {
    this.cadastroService.alterar(this.talento).subscribe((x) => {
      window.location.reload();
    });
  }

  excluir(id: any) {
    if (this.cadastroService.apagar(id).subscribe()) {
      localStorage.removeItem('token');
    }
    window.location.href = 'login';
  }
}
