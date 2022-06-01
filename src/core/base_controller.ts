/**
 * @file 路由层基础类文件
 * @author fly
 * @date 2022.05.31
 */

import { App, Inject } from '@midwayjs/decorator';
import { Context, Application } from '@midwayjs/koa';

export abstract class BaseController {
  @App()
  protected app: Application;

  @Inject()
  protected ctx: Context;

  protected success(data?): any {
    this.ctx.status = 200;
    return data;
  }
}
