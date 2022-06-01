/**
 * @file 用户实体类
 * @author fly
 * @date 2022.06.01
 */

import { prop } from '@typegoose/typegoose';
import { EntityModel } from '@midwayjs/typegoose';
@EntityModel()
export class User {
  @prop()
  public userName?: string;

  @prop()
  public phoneNumber?: string;

  @prop({ type: () => [Number] })
  public roleId?: number[];
}
