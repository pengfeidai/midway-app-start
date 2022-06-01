/**
 * @file 用户模型文件
 * @author fly
 * @date 2022.06.01
 */

import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from '../entity/user';
import { BaseModel } from '../core/base_model';

@Provide()
export class UserModel extends BaseModel {
  @InjectEntityModel(User)
  protected entity: ReturnModelType<typeof User>;
}
