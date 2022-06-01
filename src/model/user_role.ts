/**
 * @file 用户角色模型文件
 * @author fly
 * @date 2022.06.01
 */

import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
// import { User } from '../entity/user';
import { UserRole } from '../entity/user_role';
// import { Role } from '../entity/role';
import { Repository } from 'typeorm';
import { BaseModel } from '../core/base_model';

@Provide()
export class UserRoleModel extends BaseModel {
  @InjectEntityModel(UserRole)
  repo: Repository<UserRole>;

  /**
   * 获取用户角色列表
   * @param userId
   */
  async getUserRoleList(userId: number) {
    const res = await this.repo
      .createQueryBuilder('ur')
      .innerJoinAndSelect('ur.user', 'user')
      .innerJoinAndSelect('ur.role', 'role')
      // .innerJoinAndSelect(User, 'u', 'ur.userId = u.id')
      // .innerJoinAndSelect(Role, 'r', 'ur.roleId = r.id')
      .where('ur.userId=:userId', { userId })
      .getMany();
    return res;
  }
}
