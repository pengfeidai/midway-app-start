/**
 * @file 用户模型文件
 * @author fly
 * @date 2022.06.01
 */

import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { User } from '../entity/user';
import { Repository } from 'typeorm';
import { BaseModel } from '../core/base_model';

@Provide()
export class UserModel extends BaseModel {
  @InjectEntityModel(User)
  repo: Repository<User>;
}
