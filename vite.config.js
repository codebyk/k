/*
 * @Date: 2022-01-07 17:40:01
 * @Author: zhuo hongkai
 * @LastEditors: zhuo hongkai
 * @LastEditTime: 2022-03-28 11:03:28
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less'
    }
  }
})
