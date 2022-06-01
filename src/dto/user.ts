/**
 * @file 用户模块数据模型文件
 * @author fly
 * @date 2022.06.01
 */

import { Rule, RuleType } from '@midwayjs/validate';
import { ApiProperty } from '@midwayjs/swagger';

// 后续自定义校验错误信息需要
// import { ERROR_MSG } from '../common/error_msg';
// import SysError from '../common/sys_error';
export class AddUserDTO {
  @ApiProperty({
    type: 'string',
    example: '小明',
    description: '用户名',
  })
  @Rule(RuleType.string().min(1).max(64).required())
  userName: string;

  @ApiProperty({
    type: 'string',
    example: '15112345678',
    description: '手机号',
  })
  @Rule(
    RuleType.string()
      .pattern(new RegExp(/^1[0-9]{10}$/))
      .required()
  )
  phoneNumber: string;

  @ApiProperty({
    type: 'integer',
    example: 1,
    description: '用户id',
  })
  @Rule(RuleType.number().min(1).required())
  roleId: number;
}

export class GetUserInfoDTO {
  @ApiProperty({
    type: 'integer',
    example: '1',
    description: '用户Id',
  })
  @Rule(RuleType.number().min(1).required())
  userId: number;
}

export class RemoveUserDTO {
  @ApiProperty({
    type: 'integer',
    example: '1',
    description: '用户Id',
  })
  @Rule(RuleType.number().min(1).required())
  userId: number;
}
