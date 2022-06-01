/**
 * @file 项目的默认过滤器文件
 * @author MidwayTeam
 * @date 2022.05.31
 */

import { Catch } from '@midwayjs/decorator';

@Catch()
export class DefaultErrorFilter {
  async catch(err: Error) {
    // 所有的未分类错误会到这里
    return {
      success: false,
      data: null,
      message: err.message,
    };
  }
}
