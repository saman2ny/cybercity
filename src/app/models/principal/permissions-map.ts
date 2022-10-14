import { Permission } from 'src/app/models/principal/permission';
import { Authority } from 'src/app/models/principal/authority';

/**
 * Map with permission and array with roles which has the permission to execute given operation.
 */
export const PERMISSIONS_MAP = {
  [Permission.CREATE_SANDBOX]: [Authority.SOLUTION_DEVELOPER, Authority.BSG],
  [Permission.VIEW_ENTERPRISE]: [Authority.SOLUTION_DEVELOPER, Authority.OPERATIONS_MANAGER],
};
