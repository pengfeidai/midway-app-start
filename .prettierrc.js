/**
 * @file Prettier配置文件
 * @author fly
 * @date 2022.05.30
 */

 module.exports = {
  // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  "arrowParens": "avoid",

  // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  "bracketSpacing": true,

  // ?
  "embeddedLanguageFormatting": "auto",

  // ?
  "htmlWhitespaceSensitivity": "css",

  // ?
  "insertPragma": false,

  // 超过最大值换行
  "printWidth": 80,

  // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  "proseWrap": "preserve",

  // 句尾添加分号
  "semi": true,

  // 使用单引号代替双引号
  "singleQuote": true,

  // 缩进字节数
  "tabWidth": 2,

  // 缩进不使用tab，使用空格
  "useTabs": false,

  // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
  "trailingComma": "es5",

  // 在jsx中使用单引号代替双引号
  "jsxSingleQuote": true,

  // 结尾是 \n \r \n\r auto，配置参数有lf、crlf、cr和auto
  "endOfLine": "lf",
}
