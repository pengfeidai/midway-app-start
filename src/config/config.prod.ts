/**
 * @file 项目的线上正式环境配置文件
 * @author fly
 * @date 2022.05.31
 */

import { MidwayConfig } from '@midwayjs/core';

export default {
  // orm连接配置
  orm: {
    host: '',
    port: 3306,
    username: '',
    password: '',
    database: '',
  },
  // redis连接
  redis: {
    client: {
      port: 6379,
      host: '',
      password: '',
      db: 0,
    },
  },
} as MidwayConfig;
