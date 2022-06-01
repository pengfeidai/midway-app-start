/**
 * @file commitlint配置文件
 * @author fly
 * @date 2022.05.30
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 自定义提交消息规则
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',

      // Git提交的信息，开头可引用以下这些类型
      [
        // 功能方面的代码提交
        'feat',

        // Bug方面的代码提交
        'fix',

        // 性能方面的代码提交
        'perf',

        // 针对代码样式的提交（不是CSS样式）
        'style',

        // 文档
        'docs',

        // 测试
        'test',

        // 重构
        'refactor',

        // 编译打包方面的代码提交
        'build',

        // 持续集成方面的代码提交
        'ci',

        // 持续部署方面的代码提交
        'cd',

        // 数据库方面的代码提交
        'db',

        // 其他修改，比如构建流程，依赖管理
        'chore',

        // 回滚
        'revert',

        // 工作流
        'workflow',

        // 定义类型
        'types',

        // 配置
        'config',

        // 依赖管理
        'dependency',
      ],
    ],
  },
};
