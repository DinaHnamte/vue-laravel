import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import './axios'
import router from './router/router'
import { createPinia } from 'pinia'

const pinia = createPinia();
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
