import { Injectable } from '@angular/core';
import { HttpUrlEncodingCodec } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  UserDetailEncryption: any= {};
  UserStatus: any;

  constructor() {
  }

  setUserDetails(data: string): void {
    this.UserDetailEncryption = data;
  }

  getUserDetails(): string {
    return this.UserDetailEncryption;
  }

  setStatus(data: string): void {
    this.UserStatus = data;
  }

  getStatus(): string {
    return this.UserStatus;
  }

}
