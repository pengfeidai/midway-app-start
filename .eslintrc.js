/**
 * @file ESLint配置文件
 * @author fly
 * @date 2022.05.30
 */

module.exports = {
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:json/recommended',
  ],
  plugins: [
    'node',
    'prettier',
    'header',
  ],
  rules: {
    'prettier/prettier': 'error',
    'block-scoped-var': 'error',
    'eqeqeq': ['error', 'always', { null: 'ignore' }],
    'no-var': 'error',
    'prefer-const': 'error',
    'eol-last': 'error',
    'prefer-arrow-callback': 'error',
    'no-constant-condition': 'off',
    'no-process-exit': 'off',
    'no-trailing-spaces': 'error',
    'quotes': ['warn', 'single', { avoidEscape: true }],
    'header/header': [
      2,
      'block',
      [
        '*',
        {'pattern': ' * @file \\.*', 'template': ' * @file 文件描述'},
        {'pattern': ' * @author \\.*', 'template': ' * @author 作者'},
        {'pattern': ' * @date \\.*', 'template': ' * @date 时间'},
        ' '
      ],
      2
    ]
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-warning-comments': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        'node/no-missing-import': 'off',
        'node/no-empty-function': 'off',
        'node/no-unsupported-features/es-syntax': 'off',
        'node/no-missing-require': 'off',
        'node/no-unpublished-import': 'warn',
        'node/shebang': 'off',
        'no-dupe-class-members': 'off',
        'require-atomic-updates': 'off',
        // 方便临时允许未用的变量（取消注释）
        // 'no-unused-vars':0
      },
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
    },
  ],
  ignorePatterns: [],
  env: {
    jest: true,
  },
};
