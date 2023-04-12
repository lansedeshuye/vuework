<template>
  <div id="app">
    <input v-model="message">
    <input :value="message" @input="handleChange">

    {{ message }} {{ message + message }}
    <div v-bind:id="message"></div>
    <!-- <ul> -->
    <!-- <li v-for="item in items">
                <span v-if="!item.del">{{item.title}}</span>
                <span v-else style="text-decoration: line-through">{{item.title}}</span>
                <button v-show="!item.del">删除</button>
            </li> -->
    <!-- <todo-item v-for="item in items" :title="item.title" :del="item.del"></todo-item> -->
    <!-- </ul> -->
    <todo-items>
      <!-- <template v-slot> -->
      <todo-item @delete="mydeleteClick" v-for="item in items" :key="item.title" :title="item.title" :del="item.del">
        <template v-slot:pre-icon="{ random }">
          <span class="red">前置图标 {{ random }}</span>
        </template>
        <template v-slot:suf-icon>
          <span>后置图标</span>
        </template>


        <!-- <span slot="pre-icon">前置图标</span>
                <span slot="suf-icon">后置图标</span> -->

      </todo-item>

      <!-- </template> -->
    </todo-items>
  </div>
</template>


<script>
/**
 * 1. 把data methods 搞过来
 * 2. 新建vue文件
 * 3. App.vue注册两个组件
 * import TodoItem from './components/TodoItem.vue'
import TodoItems from './components/TodoItems.vue'

4.如果使用是全局的组件，
没关系，在main.js 中全局注册进来

5. 组件样式， 添加 ： scoped
6. 第9章，vue的双向绑定，使用model



 */

import TodoItem from './components/TodoItem.vue'
// import TodoItems from './components/TodoItems.vue'

export default {
  name: 'App',
  components: {
    TodoItem,
    // TodoItems
  },
  data() {
    return {
      message: 'hello world',
      items: [{
        title: '课程1',
        del: false
      }, {
        title: '课程2',
        del: true
      }]
    }
  },
  methods: {
    mydeleteClick(val) {
      console.info('mydelete', val)
    },
    handleChange(m) {
      this.message = m.target.value
    }
  }

}
</script>

<style scoped>
.red {
  color: red;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
