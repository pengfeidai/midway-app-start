# midway-app-start

基于 Midway 二次封装的开发框架，目录结构清晰，完成数据库 CRUD ， Restful 接口基础功能，应用服务基础功能。

## 功能点

- [x] 请求日志中间件，支持链路 traceId
- [x] 统一响应中间件
- [x] 请求参数验证
- [x] husky 钩子
- [x] commitlint 规范
- [x] swagger 接入
- [x] 封装 redis 工具类
- [x] 用户、角色关系 demo 代码
- [x] 基础类封装
- [x] TypeORM 完成 CRUD 以及关联查询

## Get Started

快速开始

### Local Dev

本地开发运行

```bash
$ npm i
$ npm run dev
$ open http://localhost:8001/
```

### Production Running

部署环境运行

```bash
$ npm start
```

### Build-in Commands

内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。

## Project Structure

项目代码结构

```js
midway-app-start
├── .husky // Git钩子目录
├── src
│   ├── common // constant 定义、errorMsg 等
│   │   ├── constant.ts
│   │   ├── error_msg.ts
│   │   ├── redis.ts
│   │   └── sys_error.ts
│   ├── config // 各环境配置
│   │   ├── config.default.ts
│   │   ├── config.prod.ts
│   │   └── config.unittest.ts
│   ├── configuration.ts // 配置加载
│   ├── controller // 路由控制层
│   │   ├── home.controller.ts
│   │   └── user.controller.ts
│   ├── dto // dto 层，主要做参数校验和后面 swagger 需要
│   │   └── user.dto.ts
│   ├── entity // 数据模型实例目录
│   │   └── user.ts
│   ├── filter // 过滤器目录
│   │   ├── default.filter.ts
│   │   └── notfound.filter.ts
│   ├── interface.ts // 统一接口定义
│   ├── middleware  // 中间件目录
│   │   ├── access_log.ts // 请求日志中间件
│   │   └── format_response.ts // 数据返回格式化中间件
│   ├── model // model 层，主要是对实体层的操作
│   │   └── user.ts
│   ├── service // 服务目录（把公共业务逻辑抽象成一个逻辑单元到这里）
│   │   ├── common
│   │   │   └── sms.ts
│   │   └── user.service.ts
│   └── utils // 工具目录，封装一些公用方法
│       └── utils.ts
├── test // 单元测试目录
│   └── controller
│       ├── api.test.ts
│       └── home.test.ts
├── Dockerfile // dockerfile文件，后面线上容器部署需要
├── README.md
├── bootstrap.js // Midway框架启动入口文件
├── commitlint.config.js // commitlint配置文件
├── jest.config.js // Jest测试框架配置文件
├── package.json // 项目配置文件
└── tsconfig.json // TypeScript配置文件
```

## Local Config File

本地开发配置示例文件

```ts
// src/config/config.local.ts

import { MidwayConfig } from '@midwayjs/core';

export default {
  orm: {
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'test',
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
  // 日志路径
  midwayLogger: {
    default: {
      dir: '/home/admin/logs', // 日志所在的根目录，服务器（linux）上日志根目录默认是 ${process.env.HOME}/logs/项目名
    },
    // 在开发环境下（local，unittest），文本和控制台日志等级统一为 info 。
    // 在服务器环境，为减少日志数量，日志等级统一为 warn.
    // 框架、组件层面的日志
    coreLogger: {
      level: 'warn', // 写入文本的日志等级
      consoleLevel: 'warn', // 控制台输出的日志等级
    },
    // 业务层面的日志
    appLogger: {
      level: 'warn',
      consoleLevel: 'warn',
    },
  },
} as MidwayConfig;
```

## Tech Stack & Version

项目使用的技术栈及版本，确保你的本地开发环境与项目技术栈版本一致

- 项目环境
  - Node.js > 14.0.0
    - 运行环境
    - [Node 官网](https://nodejs.org/zh-cn/)
- 项目框架
  - Koa 2.13.4
    - 作为 Web 服务器
    - [Koa 官网](https://koajs.com/)
  - Midway.js 3.0
    - 项目业务代码使用的框架，类似于 Nest.js 框架，借鉴了 Java 的 Spring 框架思想
    - 阿里淘宝部门出品，中文社区与文档，对国内开发者友好
    - [Midway 官网](https://midwayjs.org)
  - TypeORM
    - 用 TypeScript 实现的数据库关系对象映射库 ORM（Object Relational Mapping）
    - [TypeORM 官网](https://typeorm.io/)
    - [TypeORM 中文文档](https://typeorm.biunav.com/zh/)
- 数据库
  - MySQL 5.7
    - 开源的关系型数据库
    - [Mysql 官网]https://www.mysql.com/cn/
- 服务器
  - CentOS 8.2
    - RH 系列服务器端系统
    - [CentOS 官网](https://www.centos.org/)
  - Docker
    - 项目容器镜像的构建和运行
    - [Docker 官网](https://www.docker.com/)
- 代码规范
  - ESLint
    - 代码语法和质量的校验检测工具
    - [ESLint 官网](https://cn.eslint.org/)
  - Prettier
    - 代码风格统一格式化工具
    - [Prettier 官网](https://prettier.io/)
