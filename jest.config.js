/**
 * @file Jest测试框架配置文件
 * @author fly
 * @date 2022.05.30
 */

 module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/test/fixtures'],
  coveragePathIgnorePatterns: ['<rootDir>/test/'],
  // 限定 test 目录下的测试用例文件，避免把配置文件 config.test.ts 误当作测试用例文件
  testMatch: ['**/test/**/*.test.ts'],
};
