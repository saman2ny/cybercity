export interface ItemsGroup {
  count: number;
  items: DynTableData[];
  requestId?: string;
}
export enum StatusType {
  EDIT = 'Edit',
  VIEW = 'View',
  ADD = 'Add'
}

export interface DynTable {
  columns: Array<DynTableColumn>;
  data: Array<DynTableData>;
}

interface DynTableColumn {
  columnDef: string;
}

interface DynTableData {
  id: string | number;
  name: string;
  createdAt: string | number;
  avatar: string | number;
  phone: string | number;
  email: string;
}
