/**
 * @file 项目的配置文件
 * @author fly
 * @date 2022.05.31
 */

import { Configuration, App, Inject } from '@midwayjs/decorator';
import { IMidwayContainer } from '@midwayjs/core';

import * as typegoose from '@midwayjs/typegoose';
import * as koa from '@midwayjs/koa';
import * as task from '@midwayjs/task';
import * as validate from '@midwayjs/validate';
import * as swagger from '@midwayjs/swagger';
// import * as jaeger from '@mw-components/jaeger';
// import * as koid from '@mw-components/koid';
import * as redis from '@midwayjs/redis';
import * as info from '@midwayjs/info';
import * as jwt from '@midwayjs/jwt';
import { join } from 'path';
import { ILogger } from '@midwayjs/logger';
import * as dayjs from 'dayjs';
import * as lodash from 'lodash';

import { NotFoundFilter } from './filter/notfound.filter';
import { AccessLogMiddleware } from './middleware/access_log';
import { FormatMiddleware } from './middleware/format_response';

@Configuration({
  imports: [
    koa,
    validate,
    typegoose,
    redis,
    jwt,
    task,
    // jaeger,
    // koid,
    {
      component: swagger,
      enabledEnvironment: ['local'],
    },
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle {
  @App()
  app: koa.Application;

  @Inject()
  logger: ILogger;

  async onReady(applicationContext: IMidwayContainer): Promise<void> {
    // 加载中间件
    this.app.useMiddleware([AccessLogMiddleware, FormatMiddleware]);
    // 加载过滤器
    this.app.useFilter([NotFoundFilter]);

    applicationContext.registerObject('dayjs', dayjs);
    applicationContext.registerObject('lodash', lodash);
  }
}
