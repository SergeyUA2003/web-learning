import { createApp } from 'vue'
import { createStore } from 'vuex'
import WebLearnApplication from './Application.vue'
import router from  './router';


const store = createStore({
    state: {
        headers: {}
    },
    mutations: {
        addHeader (state, {name, value}) {
            state.headers[name] = value
        },
        removeHeader (state, {name}) {
            state.headers[name] = null;
        }
    },
    getters: {
        isAuthenticated (state) {
            const token = state.headers['Authorization'];
            return token !== null && token !== undefined;
        },

        getAuthorization (state) {
            return state.headers['Authorization'];
        }
    }
})

createApp(WebLearnApplication)
    .use(router)
    .use(store)
    .mount('#app')