import './assets/styles/main.css'

/* import font awesome icon component */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { createApp } from 'vue'
import App from './App.vue'

library.add(fas)

createApp(App).component('fa', FontAwesomeIcon).mount('#app')
