import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Principal } from '../../models/principal/principal';
import { Authority } from '../../models/principal/authority';
import { tap } from 'rxjs/operators';
import { FabricService } from 'src/app/services/fabric/fabric.service';
import { Permission } from 'src/app/models/principal/permission';
import { PERMISSIONS_MAP } from 'src/app/models/principal/permissions-map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _principal: Principal;

  get principal(): Principal {
    return this._principal;
  }

  set principal(value: Principal) {
    this._principal = value;
  }

  constructor(private fabricService: FabricService) {

  }

  logout(): void {
    this.fabricService.logout()
    .subscribe(() => {
      // Redirect to home (dashboard) page after logout
      window.location.href = `${window.location.origin}/${this.principal.provider}`;
    });
  }

  login(): any {
    return this.fabricService.login();
  }

  loadPrincipal(): Observable<Principal> {
    return this.fabricService.invokeOperation<Principal>('application-resources', 'get_userinfo')
      .pipe(tap(principal => {
        this.principal = principal;
      })
    );
  }

  hasPermission(permission: Permission): boolean {
    const authoritiesForPermission = PERMISSIONS_MAP[permission];
    return this.principal.authorities.some(authority => authoritiesForPermission.includes(authority));
  }

  hasAuthority(givenAuthority: Authority): boolean {
    return this.principal.authorities.includes(givenAuthority);
  }
}
