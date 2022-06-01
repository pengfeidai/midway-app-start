/**
 * @file 项目的404过滤器文件
 * @author fly
 * @date 2022.05.31
 */

import { Catch } from '@midwayjs/decorator';
import { httpError, MidwayHttpError } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';

@Catch(httpError.NotFoundError)
export class NotFoundFilter {
  async catch(err: MidwayHttpError, ctx: Context) {
    // 404 错误会到这里
    // ctx.redirect('/404.html');
    ctx.throw(404, `path '${ctx.path}' not found`);
  }
}
