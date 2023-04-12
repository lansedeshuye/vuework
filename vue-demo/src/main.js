import Vue from 'vue'
import App from './App.vue'

//全局注册进来
import TodoItems from './components/TodoItems.vue'

Vue.component('todo-items', TodoItems)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
