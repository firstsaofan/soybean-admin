export function adapterOfFetchUserList(data: ApiUserManagement.User[] | null): UserManagement.User[] {
  if (!data) return [];

  return data.map((item, index) => {
    const user: UserManagement.User = {
      index: index + 1,
      key: item.userId,
      ...item
    };

    return user;
  });
}
/**
 * 角色
 * @param data
 * @returns
 */
export function adapterOfFetchRoleList(data: ApiUserManagement.Role[] | null): UserManagement.Role[] {
  if (!data) return [];

  return data.map((item, index) => {
    const role: UserManagement.Role = {
      index: index + 1,
      key: item.roleId,
      ...item
    };

    return role;
  });
}

/**
 * 菜单
 * @param data
 * @returns
 */
export function adapterOfFetchMenuList(data: ApiUserManagement.Menu[] | null): UserManagement.Menu[] {
  if (!data) return [];

  return data.map((item, index) => {
    const role: UserManagement.Menu = {
      index: index + 1,
      key: item.menuId,
      ...item
    };

    return role;
  });
}
