/**
 * @file 项目的默认配置文件
 * @author fly
 * @date 2022.05.31
 */

import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1653908660108_4685',
  koa: {
    port: 8001,
    contextLoggerFormat: info => {
      const ctx = info.ctx;
      return `${info.timestamp} ${info.LEVEL} ${info.pid} [${ctx.reqId}-/${
        ctx.ip
      }/-/${Date.now() - ctx.startTime}ms ${ctx.method} ${ctx.url}] ${
        info.message
      }`;
    },
  },

  mongoose: {
    client: {
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    },
  },

  // redis连接
  redis: {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: '',
      db: 0,
    },
  },
} as MidwayConfig;
