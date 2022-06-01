/**
 * @file 用户服务类文件
 * @author fly
 * @date 2022.05.31
 */

import { Provide, Inject } from '@midwayjs/decorator';
import { UserModel } from '../model/user';
import { AddUserDTO } from '../dto/user';
import { User } from '../entity/user';
import SysError from '../common/sys_error';
import { ERROR_MSG } from '../common/error_msg';

@Provide()
export class UserService {
  @Inject()
  userModel: UserModel;
  /**
   * 创建用户
   * @param params
   */
  async addUser(params: AddUserDTO): Promise<User> {
    const data = await this.userModel.saveNew(params);
    return data;
  }

  /**
   * 获取用户列表
   */
  async getUserList() {
    const data = await this.userModel.getList();
    return data;
  }

  /**
   * 获取用户信息
   * @param userId
   * @returns
   */
  async getUserInfo(userId: number): Promise<User> {
    const data = await this.userModel.getDetail({ id: userId });
    return data || {};
  }
  /**
   * 删除用户
   * @param userId
   * @returns
   */
  async removeUser(userId: number): Promise<User> {
    const userInfo = await this.userModel.getDetail({ id: userId });
    if (!userInfo) {
      throw new SysError(ERROR_MSG.USER_NOT_EXIST);
    }
    const data = await this.userModel.softRemove({ id: userId });
    return data;
  }
}
