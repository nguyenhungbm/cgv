import 'vue-select/dist/vue-select.css';
import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import i18n from '@/plugins/i18n/i18n'
import vSelect from 'vue-select'
import './index.css'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

let app = createApp(App)
app.component('v-select', vSelect)
app.use(VueToast,{
  position: 'top'
});
app.use(i18n)
app.use(router)
app.mount('#app')