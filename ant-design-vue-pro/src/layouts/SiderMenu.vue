<template>
  <div style="width: 256px">
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <template v-for="item in list">
        <!-- <template> -->
        <a-menu-item v-if="!item.children" :key="item.key">
          <!-- <template #icon> <PieChartOutlined />11 </template> -->
          {{ item.meta.title }}
        </a-menu-item>
        <!-- </template> -->
        <!-- <template v-else> -->
        <sub-menu v-else :key="item.key + 1" :menu-info="item" />
        <!-- </template> -->
      </template>
    </a-menu>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, MailOutlined } from '@ant-design/icons-vue';
// import SubMenu from "./SubMenu.vue";

// you can rewrite it to a single file component, if not, you should config vue alias to vue/dist/vue.esm-bundler.js
const SubMenu = {
  name: 'SubMenu',
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  template: `
      <a-sub-menu :key="menuInfo.key">
        <template #icon><MailOutlined /></template>
        <template #title>{{ menuInfo.meta.title }}</template>
        <template v-for="item in menuInfo.children" :key="item.key">
          <template v-if="!item.children">
            <a-menu-item :key="item.key">
              <template #icon>
                <PieChartOutlined />
              </template>
              {{ item.meta.title }}
            </a-menu-item>
          </template>
          <template v-else>
            <sub-menu :menu-info="item" :key="item.key" />
          </template>
        </template>
      </a-sub-menu>
    `,
  components: {
    PieChartOutlined,
    MailOutlined,
  },
};
const list = [{
  key: '1',
  meta: { title: 'Option 11' },
  path: '/abc',
}, {
  key: '2',
  meta: { title: 'Option 112' },
  path: '/abc',
  children: [{
    key: '2.1',
    meta: { title: 'Option 113' },
    path: '/abc',
    children: [{
      key: '2.1.1',
      meta: { title: 'Option 114' },
      path: '/abc',
    }],
  }],
}];
export default defineComponent({
  components: {
    'sub-menu': SubMenu,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
  },
  setup () {
    const collapsed = ref(false);
    const toggleCollapsed = () => {
      collapsed.value = !collapsed.value;
    };
    return {
      list,
      collapsed,
      toggleCollapsed,
      selectedKeys: ref(['1']),
      openKeys: ref(['2']),
    };
  },
  data () {
    const menuData = this.getMenuData(this.$router.options.routes);
    return {
      menuData,
    };
  },
  methods: {
    getMenuData (routes = []) {
      const menuData = [];
      console.info(routes);
      routes.forEach(item => {
        if (item.name && !item.hideInMenu) {
          const newItem = { ...item };
          delete newItem.children;
          if (item.children && !item.hideChildrenInMenu) {
            newItem.children = this.getMenuData(item.children);
          }
          menuData.push(newItem);
        } else if (!item.hideInMenu && !item.hideChildrenInMenu && item.children) {
          menuData.push(...this.getMenuData(item.children));
        }
      });
      console.info("111111111");
      console.info(menuData);
      console.info("22222");
      return menuData;
    }
  }
});
</script>