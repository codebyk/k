/*
 * @Date: 2022-03-24 15:45:06
 * @Author: zhuo hongkai
 * @LastEditors: zhuo hongkai
 * @LastEditTime: 2022-03-24 16:12:29
 */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
  }
}
