/* import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PaginaPrincipalComponent } from './pagina-principal.component';

describe('PaginaPrincipalComponent', () => {
  let component: PaginaPrincipalComponent;
  let fixture: ComponentFixture<PaginaPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PaginaPrincipalComponent]
    });
    fixture = TestBed.createComponent(PaginaPrincipalComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PaginaPrincipalComponent } from './pagina-principal.component';
//import { ConsultaComponent } from '../consulta/consulta.component';
//import { Router, Routes } from '@angular/router';

//const routes: Routes = [{ path: 'consulta', component: ConsultaComponent }];

describe('PaginaPrincipalComponent', () => {
  let component: PaginaPrincipalComponent;
  let fixture: ComponentFixture<PaginaPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      //injector = getTestBed();
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PaginaPrincipalComponent],
      //router = injector.get(Router);
    });
    fixture = TestBed.createComponent(PaginaPrincipalComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  // it('Ao clicar em "Confira os Talentos" deve redirecionar para a rota de consulta', () => {
  //   spyOn(router, 'consulta');
  // })
});
