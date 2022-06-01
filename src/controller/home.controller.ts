/**
 * @file Midway框架初始化生成的项目首页控制器文件
 * @author MidwayTeam
 * @date 2022.05.31
 */

import { Controller, Get } from '@midwayjs/decorator';

@Controller('/')
export class HomeController {
  @Get('/')
  async home(): Promise<string> {
    return 'Hello Midwayjs!';
  }
}
