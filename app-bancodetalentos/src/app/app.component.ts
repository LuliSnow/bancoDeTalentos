import { Component } from '@angular/core';
import { DecodeTokenService } from './decode-token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-bancodetalentos';

  userLogado: any = {}

    constructor(private decodeToken: DecodeTokenService) {
      this.usuarioConectado()
    }

  usuarioConectado() {
    let token: (string | null) = localStorage.getItem('token')
    if (token != null) {
      token = this.decodeToken.decodeTokenJWT()
      //let decode = JSON.parse(token)
      this.userLogado = token
    }
  }

  logOut() {
    localStorage.removeItem('token')
    window.location.href = 'login'
  }
}


