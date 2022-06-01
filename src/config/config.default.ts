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
  },
  orm: {
    type: 'mysql',
    synchronize: false, // 是否同步实体到数据库
    logging: true, // 是否开启sql日志
    timezone: '+08:00',
    dateStrings: true, // 时间日期格式化
    supportBigNumbers: true, // 是否支持处理数据库中的大数字（BIGINT和DECIMAL列）
    bigNumberStrings: false,
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
