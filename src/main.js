import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/main.scss'

/* add fontawesome core */
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPen, faTrash, faCircleXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
library.add(faPen, faTrash, faCircleXmark, faPaperPlane)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')