/*
 * @Date: 2022-01-07 17:40:01
 * @Author: zhuo hongkai
 * @LastEditors: zhuo hongkai
 * @LastEditTime: 2022-03-28 11:04:09
 */
import { createApp } from 'vue'
import App from './App.vue'
import './styles/app.css'

import router from './routers/index.ts'

const app = createApp(App).use(router).mount('#app')
console.log(app)
