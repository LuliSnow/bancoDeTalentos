import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
  ActivatedRoute,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DecodeTokenService } from './decode-token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthPerfilService implements CanActivate {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private decodeToken: DecodeTokenService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    if (!this.userLogado()) {
      this.router.navigate(['/login']);
    }
    return true;
  }

  userLogado(): any {
    let token = this.decodeToken.decodeTokenJWT();
    return token != '';
  }
}
