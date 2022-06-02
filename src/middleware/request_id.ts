/**
 * @file 日志链路中间件
 * @author fly
 * @date 2022-06-02
 */

import { Middleware } from '@midwayjs/decorator';
import { IMiddleware } from '@midwayjs/core';
import * as shortid from 'shortid';

import { Context, NextFunction } from '@midwayjs/koa';

@Middleware()
export class RequestIdMiddleware implements IMiddleware<Context, NextFunction> {
  resolve() {
    return requestIdMiddleware;
  }
}

async function requestIdMiddleware(
  ctx: Context,
  next: NextFunction
): Promise<void> {
  const traceId = shortid.generate();
  ctx.reqId = traceId;

  ctx.set('trace-id', traceId);

  await next();
}
