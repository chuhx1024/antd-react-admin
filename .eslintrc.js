module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    // 使用的扩展库
    extends: ['standard', 'standard-react'],

    // 解析器用于解析代码
    parser: 'babel-eslint',

    // 解析器配置
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },

    globals: {
        Babel: true,
        React: true,
    },

    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,
        camelcase: [0, { properties: 'never' }],
        indent: [2, 4], // js 4个空格缩进
        eqeqeq: 0, // 允许使用 == !=
        'comma-dangle': [2, 'always-multiline'], // 对象 数据 分行显示的 结尾必须加 ','
        'no-unused-vars': 0,
    },
}
