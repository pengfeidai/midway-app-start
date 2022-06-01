/**
 * @file 用户服务类文件
 * @author fly
 * @date 2022.05.31
 */

import { Provide, Inject } from '@midwayjs/decorator';
import { UserModel } from '../model/user';
import { AddUserDTO } from '../dto/user';
import { User } from '../entity/user';

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
}
