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

  protected entity;

  /**
   * 创建数据
   * @param params
   * @returns
   */
  async saveNew(params) {
    const res = await this.entity.create(params);
    return res;
  }

  /**
   * 通过id获取信息
   * @param id
   * @returns
   */
  async getOneById(id: string) {
    const res = await this.entity.findById(id).exec();
    return res;
  }

  /**
   * 获取列表
   * @param where
   * @returns
   */
  async getList(where = {}) {
    const res = await this.entity.find({ where });
    return res;
  }

  async getListAndCount(where = {}) {
    const [list, count] = await this.entity.findAndCount({ where });
    return [list, count];
  }

  /**
   * 获取详情
   * @param where
   * @returns
   */
  async getDetail(where = {}) {
    const res = await this.entity.findOne({ where });
    return res;
  }
}
