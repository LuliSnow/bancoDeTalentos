import { Component } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { AuthenticationService } from '../authentication.service';
import { DecodeTokenService } from '../decode-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private auth: AuthenticationService, private decodeToken: DecodeTokenService, private serviceCadastro: CadastroService) { }

  usuarios: any = {}

  usuarioConectado = {};

  fazerLogin(form: any) {
    if(this.getUser()) {
      this.auth.login(form.email, form.password).subscribe((token) => {
        this.usuarios = token;
        localStorage.setItem('token', JSON.stringify(this.usuarios));
      });
    }
    this.decodeUser();
    window.location.href = 'home';
  }

  getUser() {
    this.serviceCadastro.getAll().subscribe((user) => {
      this.usuarios = user;
    });
    return this.usuarios;
  }

  decodeUser(){
    let token = JSON.stringify(this.decodeToken.decodeTokenJWT())
    let ob = JSON.parse(token)
    return ob.email
  }

  //-------- Função olho --------
  visible: boolean = true;
  changetype: boolean = true;

  viewPassword() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
  //-------------------------------
}
