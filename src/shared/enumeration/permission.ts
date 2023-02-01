export enum Permission {
  ROLE_ADMIN = 'ROLE_ADMIN',
}

export const permissionsArray: Permission[] = [Permission.ROLE_ADMIN];

export const mapPermissions: { [key in Permission]: string } = {
  [Permission.ROLE_ADMIN]: 'QUẢN TRỊ VIÊN',
};
