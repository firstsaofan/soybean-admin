import { adapter } from '@/utils';
import { request } from '../request';
import { adapterOfFetchUserList, adapterOfFetchRoleList, adapterOfFetchMenuList } from './management.adapter';

/** 获取用户列表 */
export const fetchUserList = async () => {
  // const data = await mockRequest.post<ApiUserManagement.User[] | null>('/getAllUserList');
  const data = await request.get<ApiUserManagement.User[] | null>('/api/v1/User/GetAllUserList');
  return adapter(adapterOfFetchUserList, data);
};

/** 获取角色列表 */
export const fetchRoleList = async () => {
  // const data = await mockRequest.post<ApiUserManagement.User[] | null>('/getAllUserList');
  const data = await request.get<ApiUserManagement.Role[] | null>('/api/v1/Role/GetAllRoleList');
  return adapter(adapterOfFetchRoleList, data);
};

/** 获取菜单列表 */
export const fetchMenuList = async () => {
  // const data = await mockRequest.post<ApiUserManagement.User[] | null>('/getAllUserList');
  const data = await request.get<ApiUserManagement.Menu[] | null>('/api/v1/Menu/GetAllMenuList');
  return adapter(adapterOfFetchMenuList, data);
};
