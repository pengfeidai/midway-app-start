/**
 * @file 用户角色服务类文件
 * @author fly
 * @date 2022.06.01
 */

import { Provide, Inject } from '@midwayjs/decorator';
import { UserRoleModel } from '../model/user_role';
// import { User } from '../entity/user';
import SysError from '../common/sys_error';
import { ERROR_MSG } from '../common/error_msg';

@Provide()
export class UserRoleService {
  @Inject()
  userRoleModel: UserRoleModel;

  /**
   * 获取用户角色实体类
   * @param userId
   * @returns
   */
  async getUserRoleList(userId: number) {
    const userInfo = await this.userRoleModel.getDetail({ id: userId });
    if (!userInfo) {
      throw new SysError(ERROR_MSG.USER_NOT_EXIST);
    }
    const data = await this.userRoleModel.getUserRoleList(userId);
    return data;
  }
}
