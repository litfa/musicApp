//配置.eslintrc.js
module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      globalReturn: true,
      impliedStrict: false,
      experimentalObjectRestSpread: true, //启用对对象的扩展
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true,
    jquery: true,
  },
  globals: {
    'uni': 'readonly'
  },
  // required to lint files
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'prefer-const': 2,
    quotes: [2, 'single'], // 单引号
    'semi': ['error', 'never'], // 不强制使用分号
    'no-control-regex': 2, // 禁止在正则表达式中使用控制字符 ：new RegExp("\x1f")
    // 'linebreak-style': [0, 'error', 'windows'], // 强制使用一致的换行风格
    'array-bracket-spacing': [2, 'never'], // 指定数组的元素之间要以空格隔开(,后面)
    'brace-style': [2, '1tbs', { allowSingleLine: true }], // if while function 后面的{必须与if在同一行，java风格。
    'no-irregular-whitespace': 0, // 不规则的空白不允许
    'no-trailing-spaces': 1, // 一行结束后面有空格就发出警告
    // 'eol-last': 0, // 文件以单一的换行符结束
    'no-unused-vars': 0, // 不能有声明后未被使用的变量或参数
    'no-underscore-dangle': 0, // 标识符不能以_开头或结尾
    'no-alert': 2, // 禁止使用alert confirm prompt
    'no-lone-blocks': 0, // 禁止不必要的嵌套块
    'no-class-assign': 2, // 禁止给类赋值
    'no-floating-decimal': 2, // 禁止数字字面量中使用前导和末尾小数点
    'no-loop-func': 1, // 禁止在循环中出现 function 声明和表达式
    'no-cond-assign': 2, // 禁止在条件表达式中使用赋值语句
    'no-delete-var': 2, // 不能对var声明的变量使用delete操作符
    'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复
    'no-duplicate-case': 2, // switch中的case标签不能重复
    'no-dupe-args': 2, // 函数参数不能重复
    'no-empty': 2, // 块语句中的内容不能为空
    'no-func-assign': 2, // 禁止重复的函数声明
    'no-invalid-this': 0, // 禁止无效的this，只能用在构造器，类，对象字面量
    'no-redeclare': 2, // 禁止重复声明变量
    'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
    'no-this-before-super': 0, // 在调用super()之前不能使用this或super
    'no-undef': 1, // 不能有未定义的变量
    'no-use-before-define': 2, // 未定义前不能使用
    camelcase: 0, // 强制驼峰法命名
    'no-extra-boolean-cast': 0, // 禁止不必要的bool转换
    'no-unreachable': 1, // 不能有无法执行的代码
    // 'comma-dangle': 2, // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号
    'comma-spacing': [2, { before: false, after: true }], // 控制逗号前后的空格
    'no-mixed-spaces-and-tabs': 0, // 禁止混用tab和空格
    'prefer-arrow-callback': 0, // 比较喜欢箭头回调
    // //
    // // ES6.相关 //
    // //
    'arrow-body-style': 2, // 要求箭头函数体使用大括号
    // 'arrow-parens': ['error', 'as-needed'], // 要求箭头函数的参数可以省略圆括号时必须省略，配合prettier
    'arrow-spacing': [2, { before: true, after: true }],
    'constructor-super': 0, // 强制在子类构造函数中用super()调用父类构造函数，TypeScrip的编译器也会提示
    'no-const-assign': 2, // 禁止修改 const 声明的变量
    'no-dupe-class-members': 2, // 禁止类成员中出现重复的名称
    'no-var': 0, // 要求使用 let 或 const 而不是 var
    'object-shorthand': 0, // 要求或禁止对象字面量中方法和属性使用简写语法
    'prefer-template': 0, // 要求使用模板字面量而非字符串连接
    // 'prettier/prettier': 'error',
    'vue/multi-word-component-names': 0
  },
}
