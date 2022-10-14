import { PathToLiveConfiguration } from '../blueprints/path-to-live-configuration';
import { KeyValueMap } from '../key-value-map';

export class Configuration {
  id: string;
  tenantId: string;
  dateCreated: Date;
  dateUpdated: Date;
  deploymentHistory: PathToLiveConfiguration[];
  status: string;
  solutionId: string;
  devInstanceId: string;
  dateGenerated: Date;
  configurationResourceFileName: string;
  blueprintId: string;
  name: string;
  version: string;
  description: string;
  tags?: string[] | KeyValueMap<string, string>;
}
