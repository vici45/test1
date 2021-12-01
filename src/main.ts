import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from './utils/request'
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import storage from '@/utils/storage'

const app = createApp(App)
app.config.globalProperties.$request = request
app.config.globalProperties.$storage = storage
app.use(store).use(router).use(elementPlus).mount('#app')
