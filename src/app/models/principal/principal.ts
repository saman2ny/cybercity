import { Authority } from './authority';

export class Principal {
  name?: string;
  provider?: string;
  attributes?: any;
  authorities?: Authority[];
}
