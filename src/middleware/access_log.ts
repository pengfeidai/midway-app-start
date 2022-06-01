/**
 * @file 项目的访问日志中间件文件
 * @author 戴鹏飞
 * @date 2022.05.30
 */

import { IMiddleware } from '@midwayjs/core';
import { Middleware } from '@midwayjs/decorator';
import { NextFunction, Context } from '@midwayjs/koa';

@Middleware()
export class AccessLogMiddleware implements IMiddleware<Context, NextFunction> {
  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      const requestBody =
        ctx.request.method === 'GET'
          ? ctx.request.query
          : ctx.request.body || {};
      // 输出请求日志
      ctx.logger.info('requestQuery %j', requestBody);
      await next();
      const { body } = ctx;
      ctx.logger.info('responseBody %j', body);
    };
  }

  ignore(ctx: Context): boolean {
    const regExp = /\/swagger-u.*/u;
    return regExp.test(ctx.path);
  }

  static getName(): string {
    return 'accessLog';
  }
}
