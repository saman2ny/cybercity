import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Configuration } from 'src/app/models/configurations/configuration';
import { FabricService } from '../fabric/fabric.service';

const SERVICE_NAME = 'solution-resources';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationsService {

  constructor(private fabricService: FabricService) {
  }

  getConfigurations(blueprintId: string): Observable<Configuration[]> {
    return this.fabricService.invokeOperation<any>(SERVICE_NAME, 'get_configurations', {blueprintId});
  }

  createConfiguration(configuration: Configuration): Observable<Configuration> {
    return this.fabricService.invokeOperation<any>(SERVICE_NAME, 'post_configurations', configuration);
  }

  publishConfiguration(configurationId: string, instanceId: string): Observable<Configuration> {
    return this.fabricService.invokeOperation<any>(SERVICE_NAME, 'post_configurations_id_generate', {id: configurationId, instanceId});
  }

  applyConfiguration(configurationId: string, instanceId: string): Observable<Configuration> {
    return this.fabricService.invokeOperation<any>(SERVICE_NAME, 'post_configurations_id_apply', {id: configurationId, instanceId});
  }
}
