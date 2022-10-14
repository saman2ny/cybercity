import { Injectable } from '@angular/core';
import { Observable, Subject, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError, tap } from 'rxjs/operators';
import { ConfigurationService } from 'src/app/services/api/configuration.service';
import { untilComponentDestroyed, OnDestroyMixin } from '@w11k/ngx-componentdestroyed';
import { SessionManagementService } from '../util/session-management.service';

declare const kony: any;

const defaultHeaders = {
  'Content-Type': 'application/json',
  // TODO: Used by engine. To be removed when Engine starts reading it from JWT token
  'X-Temenos-TenantId': 'tenant1',
};

@Injectable({
  providedIn: 'root'
})
export class FabricService extends OnDestroyMixin {

  private client: any;
  private identityService: any;
  private tenant;

  constructor(private configurationService: ConfigurationService, private sessionsService: SessionManagementService) {
    super();
    this.tenant = window.location.pathname.split('/')[1].split('?')[0];
    defaultHeaders['X-Temenos-TenantId'] = this.tenant;
  }

  initialize(useDefaultClient?: boolean): Observable<any> {
    let result;
    if (useDefaultClient) {
      this.client = kony.sdk.getDefaultInstance();
      result = of(true);
    } else {
      result = new Subject();
      this.client = new kony.sdk();
      this.configurationService.getConfiguration()
      .pipe(untilComponentDestroyed(this))
      .subscribe((configuration) => {
        this.client.init(configuration.appKey, configuration.appSecret, configuration.serviceUrl,
          ...this.subjectToFunctions(result));
      });
    }
    return result;
  }

  login(): Observable<any> {
    // Remove query params since they break single page login
    const successUrl = `${window.location.origin}${window.location.pathname}`;
    const options = {
      loginOptions: {
        noPopup: true,
        channel: 'plainJS',
        customQueryParamsForOAuth: { success_url: successUrl }
      }
    } as any;
    const result = new Subject();
    // TODO: noPopup is not working. Why?
    this.getIdentityService().login(options, ...this.subjectToFunctions(result));
    return result;
  }

  /**
   * This functionality is quire confusing.
   * If there is URL query parameter called code this function should be called first.
   * It will instantiate kony sdk, so after it completes this.client should be set to kony.sdk.getDefaultInstance() instead of new kony.sdk().
   * Also in this case normal login should be skipped.
   */
  performNoPopUpLogin(): Observable<any> {
    const result = new Subject();
    kony.sdk.performNoPopUpLogin(...this.subjectToFunctions(result));
    return result;
  }

  logout(): Observable<any> {
    const result = new Subject();
    this.getIdentityService().logout(...this.subjectToFunctions(result));
    return result;
  }

  invokeOperation<R>(serviceName: string, operationName: string, params?, headers?): Observable<R> {
    const result = new Subject<R>();
    this.client.getIntegrationService(serviceName)
      .invokeOperation(operationName, {...defaultHeaders, ...headers}, params, ...this.subjectToFunctions(result));
    return result.pipe(map(response => {
      if ((response as any).Records) {
        return (response as any).Records;
      }
      return response;
    }), tap(() => {
        if (this.sessionsService.sessionExpirationEpoch !== this.getClient().claimTokenExpiry / 1000) {
          this.sessionsService.sessionExpirationEpoch = this.getClient().claimTokenExpiry / 1000;
        }
      })

      , catchError((error) => {
      // "errcode":17005,"errmsg":"Not authorized"
      // -55, Session Invalid
      // 104, Session/Token got invalidated in the backend.Please login.
      if (error && (
        [17005, -55, 104].includes((error as any).errcode)
        || [17005, -55, 104].includes((error as any).opstatus)
        || [17005, -55, 104].includes((error as any).code)
      )) {
        window.location.reload();
        return of(error);
      }
      return throwError(error);
    }));
  }

  getClient(): any {
    // TODO: Use getter in case that reconnect/reinit is needed in the future, which can be added here
    return this.client;
  }

  private getIdentityService(): any {
    if (!this.identityService) {
      this.identityService = this.getClient().getIdentityService(this.tenant);
    }
    return this.identityService;
  }

  private subjectToFunctions(subject: Subject<any>): any {
    return [(success) => {
      subject.next(success);
      subject.complete();
    }, (error) => {
      subject.error(error);
    }];
  }
}

