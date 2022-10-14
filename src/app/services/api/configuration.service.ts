import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration } from 'src/app/models/configuration';

@Injectable({ providedIn: 'root' })
export class ConfigurationService {
  constructor(private http: HttpClient) {}

  getConfiguration(): Observable<Configuration> {
    return this.http.get<Configuration>(`/assets/config/config.json?cb=${new Date().getTime()}`);
  }
}
