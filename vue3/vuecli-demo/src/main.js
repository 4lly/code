import { createApp } from 'vue'
// import App from './views/01组件拆分与嵌套/App.vue'
// import App from './views/02父组件传递子组件/App.vue'
// import App from './views/03子组件传递父组件/App.vue'
// import App from './views/04_provide和inject的使用/App.vue'
// import App from './views/05_mitt全局事件总线/App.vue'
import App from './views/06_插槽/App.vue'

import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
