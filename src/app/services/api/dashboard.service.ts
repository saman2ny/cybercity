import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  UserDetailEncryption: any= {};
  UserStatus: any;

  constructor(private http: HttpClient) {
  }

  // getAllUserDetails(): Observable<ItemsGroup> {
  //   return this.http.get<any>(SERVICE_NAME);
  // }

}
