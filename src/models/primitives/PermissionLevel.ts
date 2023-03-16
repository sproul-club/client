enum PermissionLevel {
  READ = 'read',
  WRITE = 'write',
  ADMIN = 'admin',
}

export const allPermissionLevels = Object.keys(PermissionLevel).filter(
  (item) => {
    return isNaN(Number(item));
  }
);

// Write assumes Read permissions
// Admin assumes Read and Write Permissions

export default PermissionLevel;
