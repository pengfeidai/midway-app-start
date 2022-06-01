/**
 * @file 用户路由控制器文件
 * @author fly
 * @date 2020.05.30
 */

import {
  Inject,
  Controller,
  Get,
  Body,
  Del,
  Query,
  Post,
} from '@midwayjs/decorator';
import { Validate } from '@midwayjs/validate';

import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user';
import { AddUserDTO, RemoveUserDTO } from '../dto/user';

@Controller('/api/user')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Post('', { summary: '创建用户' })
  @Validate()
  async addUser(@Body() body: AddUserDTO) {
    const { userName, phoneNumber, roleId } = body;
    const user = await this.userService.addUser({
      userName,
      phoneNumber,
      roleId,
    });
    return user;
  }

  @Get('/list', { summary: '获取用户列表' })
  async getUserList() {
    const user = await this.userService.getUserList();
    return user;
  }

  @Get('/info', { summary: '获取用户信息' })
  async getUserInfo(@Query('userId') userId) {
    // TODO: 一般userId不会直接当参数传过来，会用jwt中解析，此处只做查询示例使用
    // const { userId } = query;
    const user = await this.userService.getUserInfo(userId);
    return user;
  }

  @Del('', { summary: '删除用户' })
  async removeUser(@Body() body: RemoveUserDTO) {
    const { userId } = body;
    const user = await this.userService.removeUser(userId);
    return user;
  }
}
