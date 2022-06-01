/**
 * @file 项目的请求响应数据格式化中间件文件
 * @author 戴鹏飞
 * @date 2022.05.30
 */

import { IMiddleware } from '@midwayjs/core';
import { Middleware, App } from '@midwayjs/decorator';
import { NextFunction, Context, Application } from '@midwayjs/koa';
import SysError from '../common/sys_error';

@Middleware()
export class FormatMiddleware implements IMiddleware<Context, NextFunction> {
  @App()
  app: Application;

  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      try {
        const data = await next();
        return {
          code: 0,
          msg: 'success',
          data,
        };
      } catch (err) {
        // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
        ctx.app.emit('error', err, ctx);
        const sysErr = err as SysError;
        const [message, messageStatus] = sysErr.message.split(' &>');
        let status = sysErr.status || parseInt(messageStatus) || 500;
        if (
          sysErr.name === 'ValidationError' ||
          message === 'ValidationError'
        ) {
          status = 422;
        }

        ctx._internalError = sysErr;

        // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
        const error =
          status === 500 && this.app.getEnv() === 'prod'
            ? 'Internal Server Error'
            : message;

        // 从 error 对象上读出各个属性，设置到响应中
        ctx.body = {
          code: status,
          data: null,
          msg: error,
        };
        ctx.status = status;
      }
    };
  }

  static getName(): string {
    return 'format';
  }
}
