import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ItemsGroup } from 'src/app/models/user-table';

const SERVICE_NAME = 'https://61faa3b592093f0017ad9958.mockapi.io/api/v1/users/';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUserDetails(): Observable<ItemsGroup> {
    return this.http.get<ItemsGroup>(SERVICE_NAME);
  }

  getUserDetails(pageDetail: any): Observable<ItemsGroup> {
    return this.http.get<ItemsGroup>(SERVICE_NAME + `?page=${pageDetail.page}` + `&limit=${pageDetail.limit}`);
  }

  postUserDetails(userDetail: any): Observable<ItemsGroup> {
    return this.http.post<ItemsGroup>(SERVICE_NAME, userDetail);
  }

  updateUserDetailsId(userDetail: any): Observable<ItemsGroup> {
    return this.http.put<ItemsGroup>(SERVICE_NAME + `${userDetail.id}`, userDetail);
  }

  deleteUserDetailsId(userDetail: any): Observable<ItemsGroup> {
    return this.http.delete<ItemsGroup>(SERVICE_NAME + `${userDetail.id}`);
  }

}
