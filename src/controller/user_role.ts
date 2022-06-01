/**
 * @file 用户角色路由控制器文件
 * @author fly
 * @date 2020.06.01
 */

import { Inject, Controller, Get, Query } from '@midwayjs/decorator';

import { Context } from '@midwayjs/koa';
import { UserRoleService } from '../service/user_role';

@Controller('/api/user/role')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userRoleService: UserRoleService;

  @Get('/list', { summary: '获取用户角色列表' })
  async getUserRoleList(@Query('userId') userId) {
    // const { userId } = query;
    const user = await this.userRoleService.getUserRoleList(userId);
    return user;
  }
}
