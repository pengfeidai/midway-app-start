/**
 * @file model基础类
 * @author fly
 * @date 2022.06.01
 */

import { App, Inject } from '@midwayjs/decorator';
import { Context, Application } from '@midwayjs/koa';

export abstract class BaseModel {
  @App()
  protected app: Application;

  @Inject()
  protected ctx: Context;

  protected repo;

  /**
   * 创建数据
   * @param params
   * @returns
   */
  async saveNew(params) {
    const res = await this.repo.save(params);
    return res;
  }

  /**
   * 获取列表
   * @param where
   * @returns
   */
  async getList(where = {}) {
    const res = await this.repo.find({ where });
    return res;
  }

  async getListAndCount(where = {}) {
    const [list, count] = await this.repo.findAndCount({ where });
    return [list, count];
  }

  /**
   * 获取详情
   * @param where
   * @returns
   */
  async getDetail(where = {}) {
    const res = await this.repo.findOne({ where });
    return res;
  }

  /**
   * 软删除数据
   * @param where
   * @returns
   */
  async softRemove(where) {
    return this.repo.softRemove(where);
  }
}
