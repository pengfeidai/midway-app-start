/**
 * @file 用户角色服务类文件
 * @author fly
 * @date 2022.06.01
 */

import { Provide, Inject } from '@midwayjs/decorator';
// import SysError from '../common/sys_error';
// import { ERROR_MSG } from '../common/error_msg';

@Provide()
export class UserRoleService {
  @Inject()

  /**
   * 获取用户角色实体类
   * @param userId
   * @returns
   */
  async getUserRoleList(userId: number) {
    return userId;
  }
}
