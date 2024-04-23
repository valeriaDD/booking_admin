import { createApp } from 'vue'
import ElementPlus from "element-plus";
import App from './App.vue'
import router from './router'
import store from '@/store/index.js'
import "./assets/styles/element-theme.scss";
import "./assets/styles/common/index.scss";
import "./assets/styles/views/index.scss";
import "./assets/styles/components/index.scss";

const app = createApp(App)

app.use(router)
app.use(store);
app.use(ElementPlus);

app.mount('#app')
