import { createApp } from 'vue'

import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'

import App from './App.vue'
import router from './router'
import store from './store'


const app = createApp(App)

new WaveUI(app, {
    // Some Wave UI options.
  })

app.use(router).use(store).mount('#app')