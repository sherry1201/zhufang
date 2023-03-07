import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {request} from "./network/request.js"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(store)
.use(ElementPlus)
.use(router)
.mount('#app')