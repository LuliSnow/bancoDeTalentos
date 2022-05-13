import { Component } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private auth: AuthenticationService, private serviceCadastro: CadastroService) { }

  usuarios: any = {}

  fazerLogin(form: any) {
    if(this.getUser()) {
      this.auth.login(form.email, form.password).subscribe((token) => {
        this.usuarios = token;
        localStorage.setItem('token', JSON.stringify(this.usuarios));
        window.location.href = 'home';
      });
    }
  }

  getUser() {
    this.serviceCadastro.getAll().subscribe((user) => {
      this.usuarios = user;
    });
    return this.usuarios;
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
