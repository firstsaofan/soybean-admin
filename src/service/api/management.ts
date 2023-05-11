import { adapter } from '@/utils';
import { request } from '../request';
import { adapterOfFetchUserList } from './management.adapter';

/** 获取用户列表 */
export const fetchUserList = async () => {
  // const data = await mockRequest.post<ApiUserManagement.User[] | null>('/getAllUserList');
  const data = await request.get<ApiUserManagement.User[] | null>('/api/v1/User/GetAllUserList');
  return adapter(adapterOfFetchUserList, data);
};
