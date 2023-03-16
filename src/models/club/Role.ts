import PermissionLevel from '../primitives/PermissionLevel';
import Club from './Club';

interface Role {
  id: string;
  club: Club['id'];
  name: string;
  permission: PermissionLevel;
}

export default Role;
