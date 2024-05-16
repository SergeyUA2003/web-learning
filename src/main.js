import {createApp} from 'vue'
import {createStore} from 'vuex'
import WebLearnApplication from './Application.vue'
import router from './router';


const store = createStore({
    state: {
        headers: {},
        authorizationUser: {},
    },
    mutations: {
        addHeader (state, {name, value}) {
            state.headers[name] = value
        },
        removeHeader (state, {name}) {
            state.headers[name] = null;
        },

        setAuthorizationUser (state, value) {
            state.authorizationUser = value;
        }
    },
    getters: {
        isAuthenticated (state) {
            const token = state.headers['Authorization'];
            return token !== null && token !== undefined;
        },

        getAuthorization (state) {
            return state.headers['Authorization'];
        },

        getAuthorizationUser (state) {
           return state.authorizationUser;
        }
    }

})

createApp(WebLearnApplication)
    .use(router)
    .use(store)
    .mount('#app')