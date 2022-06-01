/**
 * @file Redis的封装类文件
 * @author fly
 * @date 2022.05.30
 */

import { Provide, Inject } from '@midwayjs/decorator';
import { RedisService } from '@midwayjs/redis';

@Provide()
export default class Redis {
  @Inject()
  redisService: RedisService;

  /**
   * 设置redis值
   * @param key
   * @param value
   * @param expireTime 过期时间
   */
  async setValue(
    key: string,
    value: string,
    expireTime?: number
  ): Promise<'OK'> {
    if (!expireTime) {
      return this.redisService.set(key, value);
    }
    return this.redisService.set(key, value, 'EX', expireTime);
  }

  /**
   * 根据key从redis获取值
   * @param key
   * @returns
   */
  async getValue(key: string): Promise<string> {
    return this.redisService.get(key);
  }

  /**
   * 根据Key删除值
   * @param key
   * @returns
   */
  async delValue(key: string): Promise<number> {
    return this.redisService.del(key);
  }
}
