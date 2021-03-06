import { InformacoesComponent } from './informacoes/informacoes.component';
import { AuthPerfilService } from './auth-perfil.service';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

const routes: Routes = [
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'consulta',
    component: ConsultaComponent,
  },
  {
    path: 'home',
    component: PaginaPrincipalComponent,
  },
  {
    path: '',
    component: PaginaPrincipalComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'perfil/:idtalento',
    component: PerfilComponent,
    canActivate: [AuthPerfilService],
  },
  {
    path: 'informacoes/:idtalento',
    component: InformacoesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
