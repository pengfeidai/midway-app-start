/**
 * @file 项目的系统错误文件
 * @author fly
 * @date 2022.05.30
 */

export default class SysError extends Error {
  status: number;
  errors: any[] | undefined;
  details?: unknown;

  /**
   * 全局自定义错误结构
   * 可以接受多条错误信息，用于业务抛错
   * @param message 错误信息
   * @param status 状态码。不填写默认500，错误一般为 4xx, 5xx
   * @param errors 错误数组(jio 表单错误多条)
   */
  constructor(message: string, status?: number, errors?: any[]) {
    super(message + ` &>${status || ''}`);
    this.status = typeof status === 'number' ? status : 400;
    this.errors = errors;
  }
}
