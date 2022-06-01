/**
 * @file 用户模块单元测试文件
 * @author fly
 * @date 2022.06.01
 */

import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';

describe('test/controller/user.test.ts', () => {
  it('should POST /api/get_user', async () => {
    // create app
    const app = await createApp<Framework>();

    // make request
    const result = await createHttpRequest(app)
      .get('/api/get_user')
      .query({ uid: 123 });

    // use expect by jest
    expect(result.status).toBe(200);
    expect(result.body.message).toBe('OK');

    // close app
    await close(app);
  });
});
