/**
 * @file 业务层基础类
 * @author fly
 * @date 2022.05.31
 */

import { App, Inject } from '@midwayjs/decorator';
import { Context, Application } from '@midwayjs/koa';

export abstract class BaseService {
  @App()
  protected app: Application;

  @Inject()
  protected ctx: Context;
}
