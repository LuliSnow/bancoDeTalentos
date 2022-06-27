import { CadastroService } from './../cadastro.service';
import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.css'],
})
export class InformacoesComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cadastroService: CadastroService,
    private serviceConsulta: ConsultaService
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
    this.cadastroService.getOne(idtalento).subscribe((x) => (this.talento = x));
  }
}
