import { createApp } from 'vue'
import WebLearnApplication from './Application.vue'
import router from  './router';


createApp(WebLearnApplication)
    .use(router)
    .mount('#app')
