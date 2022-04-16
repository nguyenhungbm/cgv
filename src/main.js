import 'vue-select/dist/vue-select.css';
import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import i18n from '@/plugins/i18n/i18n'
import vSelect from 'vue-select'
import FlagIcon from 'vue-flag-icon';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

let app = createApp(App)
app.component('v-select', vSelect)
app.component('DatePicker', Datepicker)
app.use(FlagIcon);
app.use(i18n)
app.use(router)
app.mount('#app')